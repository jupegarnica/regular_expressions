/**
 * Should match a JSON string value (double-quoted with escape support).
 */
export const jsonString = /"(?:[^"\\]|\\.)*"/;
export const jsonString_description =
  "Should match a JSON string value (double-quoted with escape support).";
export const jsonString_should_match: string[] = [
  '"hello"',
  '"hello world"',
  '"escaped \\"quote\\""',
  '"line\\nbreak"',
  '""',
];
export const jsonString_should_not_match: string[] = [
  "'single quotes'",
  "no quotes",
  '"unclosed',
  '""extra"',
];

/**
 * Should match a JSON number (integer or decimal, with optional
 * exponent).
 */
export const jsonNumber =
  /-?(?:0|[1-9][0-9]*)(?:\.[0-9]+)?(?:[eE][+-]?[0-9]+)?/;
export const jsonNumber_description =
  "Should match a JSON number (integer or decimal, with optional exponent).";
export const jsonNumber_should_match: string[] = [
  "0",
  "123",
  "-456",
  "3.14",
  "-0.5",
  "1e10",
  "2.5E-3",
];
export const jsonNumber_should_not_match: string[] = [
  "0123",
  "+5",
  ".5",
  "1.",
  "NaN",
  "Infinity",
];

/**
 * Should match a JSON boolean value (true or false).
 */
export const jsonBoolean = /true|false/;
export const jsonBoolean_description =
  "Should match a JSON boolean value (true or false).";
export const jsonBoolean_should_match: string[] = [
  "true",
  "false",
];
export const jsonBoolean_should_not_match: string[] = [
  "True",
  "FALSE",
  "yes",
  "no",
  "1",
  "0",
];

/**
 * Should match a JSON null value.
 */
export const jsonNull = /null/;
export const jsonNull_description = "Should match a JSON null value.";
export const jsonNull_should_match: string[] = [
  "null",
];
export const jsonNull_should_not_match: string[] = [
  "Null",
  "NULL",
  "nil",
  "undefined",
  "none",
];

/**
 * Should match a key=value or key: value pair.
 */
export const keyValuePair = /[a-zA-Z_][a-zA-Z0-9_]*\s*[:=]\s*[^\s,;]+/;
export const keyValuePair_description =
  "Should match a key=value or key: value pair.";
export const keyValuePair_should_match: string[] = [
  "key=value",
  "name: John",
  "count=42",
  "DATABASE_URL=localhost",
  "debug = true",
];
export const keyValuePair_should_not_match: string[] = [
  "=value",
  ": value",
  "123=abc",
  "key",
];

/**
 * Should match an XML/HTML character entity
 * (e.g. &amp;amp;, &amp;#123;, &amp;#x1F;).
 */
export const xmlEntity = /&(?:#x[0-9a-fA-F]+|#[0-9]+|[a-zA-Z][a-zA-Z0-9]*);/;
export const xmlEntity_description =
  "Should match an XML/HTML character entity (e.g. &amp;, &#123;, &#x1F;).";
export const xmlEntity_should_match: string[] = [
  "&amp;",
  "&lt;",
  "&gt;",
  "&#123;",
  "&#x1F600;",
  "&nbsp;",
  "&#39;",
];
export const xmlEntity_should_not_match: string[] = [
  "&;",
  "&#;",
  "&#x;",
  "&123;",
  "amp;",
  "& amp;",
];

/**
 * Should match a data URI (e.g. data:image/png;base64,iVBOR...).
 */
export const dataUri =
  /data:[a-zA-Z0-9][a-zA-Z0-9!#$&\-^_.+]*\/[a-zA-Z0-9][a-zA-Z0-9!#$&\-^_.+]*(?:;[a-zA-Z0-9-]+=[a-zA-Z0-9-]+)*(?:;base64)?,[A-Za-z0-9+\/=]+/;
export const dataUri_description =
  "Should match a data URI (e.g. data:image/png;base64,iVBOR...).";
export const dataUri_should_match: string[] = [
  "data:text/plain,Hello",
  "data:text/plain;base64,SGVsbG8=",
  "data:image/png;base64,iVBORw0KGgo=",
  "data:application/json;charset=utf-8,eyJrZXkiOiJ2YWx1ZSJ9",
];
export const dataUri_should_not_match: string[] = [
  "data:",
  "data:text/plain",
  "data://not-a-data-uri",
  "http://example.com",
];
