/**
 * Should match a sentence starting with a capital letter and ending
 * with punctuation (period, exclamation, or question mark).
 */
export const sentence = /[A-Z][^.!?]*[.!?]/;
export const sentence_description =
  "Should match a sentence starting with a capital letter and ending with punctuation.";
export const sentence_should_match: string[] = [
  "Hello world.",
  "This is a test!",
  "Is this working?",
  "A.",
  "The quick brown fox jumps over the lazy dog.",
];
export const sentence_should_not_match: string[] = [
  "hello world.",
  "No punctuation",
  "123 start.",
  "lowercase!",
];

/**
 * Should match a hashtag (e.g. #topic, #CamelCase).
 */
export const hashtag = /#[a-zA-Z][a-zA-Z0-9_]*/;
export const hashtag_description =
  "Should match a hashtag (e.g. #topic, #CamelCase).";
export const hashtag_should_match: string[] = [
  "#hello",
  "#JavaScript",
  "#my_tag",
  "#A",
  "#camelCase123",
];
export const hashtag_should_not_match: string[] = [
  "#123",
  "#",
  "##double",
  "hashtag",
  "#_start",
];

/**
 * Should match an @mention (e.g. @username).
 */
export const mention = /@[a-zA-Z][a-zA-Z0-9_]*/;
export const mention_description = "Should match an @mention (e.g. @username).";
export const mention_should_match: string[] = [
  "@john",
  "@User123",
  "@my_name",
  "@A",
  "@userName",
];
export const mention_should_not_match: string[] = [
  "@123",
  "@",
  "@@double",
  "mention",
  "@_start",
];

/**
 * Should match a URL-friendly slug (e.g. my-post-title).
 */
export const slug = /[a-z0-9]+(?:-[a-z0-9]+)*/;
export const slug_description =
  "Should match a URL-friendly slug (e.g. my-post-title).";
export const slug_should_match: string[] = [
  "my-post-title",
  "hello",
  "hello-world",
  "post-123",
  "a-b-c-d",
];
export const slug_should_not_match: string[] = [
  "My-Post",
  "-leading",
  "trailing-",
  "double--dash",
  "UPPER",
];

/**
 * Should match a string containing only whitespace characters.
 */
export const whitespaceOnly = /\s+/;
export const whitespaceOnly_description =
  "Should match a string containing only whitespace characters.";
export const whitespaceOnly_should_match: string[] = [
  " ",
  "   ",
  "\t",
  "\n",
  " \t\n ",
];
export const whitespaceOnly_should_not_match: string[] = [
  "a",
  " a ",
  "hello",
  "123",
];

/**
 * Should match a blank line (empty or whitespace-only).
 */
export const blankLine = /[ \t]*/;
export const blankLine_description =
  "Should match a blank line (empty or whitespace-only).";
export const blankLine_should_match: string[] = [
  "",
  " ",
  "\t",
  "   ",
  "\t\t",
  " \t ",
];
export const blankLine_should_not_match: string[] = [
  "a",
  " a",
  "hello",
  "\n",
];

/**
 * Should match a single-line comment (// or #).
 */
export const singleLineComment = /(?:\/\/|#).*/;
export const singleLineComment_description =
  "Should match a single-line comment (// or #).";
export const singleLineComment_should_match: string[] = [
  "// this is a comment",
  "# python comment",
  "//compact",
  "#!shebang",
  "// ",
];
export const singleLineComment_should_not_match: string[] = [
  "/* block comment */",
  "not a comment",
  "/ slash",
  "http://url.com",
];

/**
 * Should match a multi-line block comment.
 */
export const multilineComment = /\/\*[^]*?\*\//;
export const multilineComment_description =
  "Should match a multi-line block comment (/* ... */).";
export const multilineComment_should_match: string[] = [
  "/* comment */",
  "/* multi\nline */",
  "/** jsdoc */",
  "/* a */",
];
export const multilineComment_should_not_match: string[] = [
  "// single line",
  "/* unclosed",
  "no comment",
  "*/ end only",
];
