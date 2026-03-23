/**
 * Should match an HTML tag including attributes
 * (e.g. &lt;div class="foo"&gt;).
 */
export const htmlTag =
  /<[a-zA-Z][a-zA-Z0-9-]*(?:\s+[a-zA-Z][\w-]*(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s>]+))?)*\s*\/?>/;
export const htmlTag_description =
  'Should match an HTML tag including attributes (e.g. <div class="foo">).';
export const htmlTag_should_match: string[] = [
  "<div>",
  '<div class="foo">',
  "<br/>",
  "<br />",
  "<img src='image.png' alt='test'>",
  '<input type="text" disabled>',
  "<p>",
  "<custom-element>",
];
export const htmlTag_should_not_match: string[] = [
  "</div>",
  "< div>",
  "<123>",
  "div",
  "< >",
];

/**
 * Should match an HTML comment (&lt;!-- ... --&gt;).
 */
export const htmlComment = /<!--[^]*?-->/;
export const htmlComment_description =
  "Should match an HTML comment (<!-- ... -->).";
export const htmlComment_should_match: string[] = [
  "<!-- comment -->",
  "<!-- multi\nline\ncomment -->",
  "<!---->",
  "<!-- a -->",
];
export const htmlComment_should_not_match: string[] = [
  "<!-- unclosed",
  "/* css comment */",
  "// js comment",
  "<!- not a comment ->",
];

/**
 * Should match a Markdown heading (# H1 through ###### H6).
 */
export const markdownHeading = /#{1,6}\s+.+/;
export const markdownHeading_description =
  "Should match a Markdown heading (# H1 through ###### H6).";
export const markdownHeading_should_match: string[] = [
  "# Heading 1",
  "## Heading 2",
  "### Heading 3",
  "###### Heading 6",
  "# A",
];
export const markdownHeading_should_not_match: string[] = [
  "####### Too deep",
  "#NoSpace",
  "Not a heading",
  "# ",
];

/**
 * Should match a Markdown link (e.g. [text](url)).
 */
export const markdownLink = /\[[^\]]+\]\([^)]+\)/;
export const markdownLink_description =
  "Should match a Markdown link (e.g. [text](url)).";
export const markdownLink_should_match: string[] = [
  "[Google](https://google.com)",
  "[click here](./page.html)",
  "[link text](http://example.com/path?q=1)",
  "[a](b)",
];
export const markdownLink_should_not_match: string[] = [
  "[text]",
  "(url)",
  "[text]()",
  "[](url)",
  "text(url)",
];

/**
 * Should match a fenced Markdown code block (triple backticks).
 */
export const markdownCodeBlock = /```[a-zA-Z]*\n[^]*?```/;
export const markdownCodeBlock_description =
  "Should match a fenced Markdown code block (triple backticks).";
export const markdownCodeBlock_should_match: string[] = [
  "```\ncode\n```",
  "```js\nconsole.log('hi');\n```",
  "```python\nprint('hello')\n```",
  "```\nline1\nline2\n```",
];
export const markdownCodeBlock_should_not_match: string[] = [
  "```",
  "``code``",
  "`inline`",
  "```no newline```",
];
