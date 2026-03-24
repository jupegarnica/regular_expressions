import jsDocsRaw from "../jsDocs_data.json" with { type: "json" };
import { basename } from "@std/path";

// deno doc v2 wraps nodes in { version, nodes }, v1 is a flat array
// deno-lint-ignore no-explicit-any
const jsDocs: any[] = Array.isArray(jsDocsRaw)
  ? jsDocsRaw
  : (jsDocsRaw as { nodes: unknown[] }).nodes ?? jsDocsRaw;

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

function escapeNonPrintable(str: string): string {
  return str.replace(
    // deno-lint-ignore no-control-regex
    /[\x00-\x1f\x7f]/g,
    (ch) => "\\x" + ch.charCodeAt(0).toString(16).padStart(2, "0"),
  );
}

function generateMarkdown(data: Expression[]): string {
  let output = `
# The Collection of Regular Expressions

A handmade collection of regular expressions for JavaScript.

Ready to be imported or copy pasted into your code.

Fully tested, benchmarked and documented.

Mainly assisted by github copilot and tweaked by [me](https://garn.dev).

# Contents
`;
  const fileNames: { [x: string]: true } = {};

  for (
    const { name, regex, shouldMatch, shouldNotMatch, docs, location } of data
  ) {
    // create shouldMatch table data
    const tableLength = Math.max(shouldMatch.length, shouldNotMatch.length);
    const table = [];
    for (let index = 0; index < tableLength; index++) {
      table.push([shouldMatch[index], shouldNotMatch[index]]);
    }

    const fileName = location && basename(location.filename);
    const linkToFile = `[${fileName}](./src/${fileName}#L${location?.line})`;

    // create filename header
    let h2filename = "";
    if (fileName && !fileNames[fileName]) {
      h2filename = `# ${fileName.replace(/(\..+)$/, "")}

> At: [${fileName}](./src/${fileName})\n`;
      fileNames[fileName] = true;
    }

    output += `
${h2filename}
### **${name}**

${docs}

From ${linkToFile}

Copy:
\`\`\`js
const ${name} = ${regex.toString()}
\`\`\`

\`\`\`ts
import { ${name} } from "https://deno.land/x/regular_expressions/src/${fileName}";
\`\`\`

| Should match | Should not match  |
|---|---|
${
      table.map(([shouldMatch, shouldNotMatch]) =>
        `| ${
          shouldMatch
            ? `\`${escapeNonPrintable(shouldMatch).replaceAll(/\|/g, "\\|")}\``
            : ""
        } | ${
          shouldNotMatch
            ? `\`${
              escapeNonPrintable(shouldNotMatch).replaceAll(/\|/g, "\\|")
            }\``
            : ""
        }  |`
      ).join("\n")
    }


`;
  }
  return output;
}

const markdown = generateMarkdown(data);

await Deno.writeTextFile(path + "../README.md", markdown);

console.log("Generated README.md");
