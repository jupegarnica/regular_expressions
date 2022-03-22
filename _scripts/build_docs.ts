import jsDocs from "../jsDocs_data.json" assert { type: "json" };
import { basename } from "https://deno.land/std@0.130.0/path/mod.ts";

// import * as all from "../mod.ts";

let allImported: Record<string, RegExp | string[]> = {};
const path = new URL("./", import.meta.url).pathname;

for await (const file of Deno.readDir(path + "../src")) {
  if (!file.isFile) continue;
  allImported = {
    ...allImported,
    ...(await import(path + "../src/" + file.name)),
  };
}

const allKeysImported = Object.keys(allImported);
export const allRegularExpressionsImported = allKeysImported.filter((key) =>
  allImported[key] instanceof RegExp
);

type Expression = {
  name: string;
  regex: RegExp;
  shouldMatch: string[];
  shouldNotMatch: string[];
  docs: string;
  location?: { filename: string; line: number; col: number };
};
const data: Expression[] = allRegularExpressionsImported.map((name) => {
  const variable = jsDocs.find((doc: { name: string }) => doc.name === name);
  const jsDoc = variable?.jsDoc;
  const docs = `${jsDoc?.doc || ""}`;
  const location = variable?.location;
  return {
    name,
    regex: allImported[name] as RegExp,
    shouldMatch: allImported[name + "_should_match"] as string[],
    shouldNotMatch: allImported[name + "_should_not_match"] as string[],
    docs,
    location,
  };
});

function generateMarkdown(data: Expression[]): string {
  let output = "";

  for (
    const { name, regex, shouldMatch, shouldNotMatch, docs, location } of data
  ) {
    const tableLength = Math.max(shouldMatch.length, shouldNotMatch.length);
    const table = [];
    for (let index = 0; index < tableLength; index++) {
      table.push([shouldMatch[index], shouldNotMatch[index]]);
    }


    const fileName = location && basename(location.filename);
    const linkToFile = `[${fileName}](./src/${fileName}#L${location?.line})`
    output += `## ${name}

**${docs}**

Copy or import from ${linkToFile}

\`\`\`js
const ${name} = ${regex.toString()}
\`\`\`

\`\`\`ts
import { ${name} } from "https://deno.land/x/regular-expressions/src/${fileName}";
\`\`\`

| Should match | Should not match  |
|---|---|
${table.map(([shouldMatch, shouldNotMatch]) => `| ${shouldMatch ? `\`${shouldMatch}\``: ''} | ${shouldNotMatch ? `\`${shouldNotMatch}\``: ''}  |`).join("\n")}

`;
  }
  return output;
}

const markdown = generateMarkdown(data);

await Deno.writeTextFile(path + "../docs.md", markdown);

console.log("Generated docs.md");
