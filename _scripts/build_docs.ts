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
    const fileName = location && basename(location.filename);
    const pathToFile = fileName
      ? `at: [${fileName}](./src/${fileName}:${location?.line})`
      : "";
    output += `## ${name}

${docs}

${pathToFile}

\`\`\`js
${regex.toString()}
\`\`\`

Should match:
 - ${shouldMatch.join("\n- ")}

Should not match:
 - ${shouldNotMatch.join("\n- ")}


`;
  }
  return output;
}

const markdown = generateMarkdown(data);

await Deno.writeTextFile(path + "../docs.md", markdown);

console.log("Generated docs.md");
