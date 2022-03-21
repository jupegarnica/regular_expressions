import jsDocs from "../jsDocs_data.json" assert { type: "json" };

import * as all from "../mod.ts";

const allKeysImported = Object.keys(all);
const allImported: Record<string, RegExp | string[]> = all;

export const allRegularExpressionsImported = allKeysImported.filter((key) =>
  allImported[key] instanceof RegExp
);


type Expression = {
  name: string,
  regex: RegExp,
  shouldMatch: string[],
  shouldNotMatch: string[],
  docs: string,
};
const data: Expression[] = allRegularExpressionsImported.map((name) => {
  const jsDoc = jsDocs.find((doc: { name: string }) => doc.name === name)?.jsDoc;
  const docs = `${jsDoc?.doc || ""}
${jsDoc?.tags.map((tag: { value: string }) => tag.value).join("\n")}`

  return {
    name,
    regex: allImported[name] as RegExp,
    shouldMatch: allImported[name + "_should_match"] as string[],
    shouldNotMatch: allImported[name + "_should_not_match"] as string[],
    docs: docs,
  };
});

function generateMarkdown(data: Expression[]): string {
  let output = ''
  for (const { name, regex, shouldMatch, shouldNotMatch, docs } of data) {
    output +=`## ${name}

${docs}

Should match:
- ${shouldMatch.join("\n- ")}

Should not match:
- ${shouldNotMatch.join("\n- ")}


\`\`\`js
${regex.toString()}
\`\`\`

`
  }
  return output;

}


const markdown = generateMarkdown(data);

await Deno.writeTextFile("./docs.md", markdown);
