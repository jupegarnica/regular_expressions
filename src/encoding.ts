/**
 * Should match a percent-encoded character (e.g. %20, %2F).
 */
export const urlEncoded = /%[0-9a-fA-F]{2}/;
export const urlEncoded_description =
  "Should match a percent-encoded character (e.g. %20, %2F).";
export const urlEncoded_should_match: string[] = [
  "%20",
  "%2F",
  "%3A",
  "%00",
  "%ff",
  "%7E",
];
export const urlEncoded_should_not_match: string[] = [
  "%2",
  "%GG",
  "20",
  "%%20",
  "%2g",
];

/**
 * Should match a JavaScript unicode escape sequence
 * (e.g. \\u0041, \\u{1F600}).
 */
export const unicodeEscape = /\\u(?:\{[0-9a-fA-F]{1,6}\}|[0-9a-fA-F]{4})/;
export const unicodeEscape_description =
  "Should match a JavaScript unicode escape sequence (e.g. \\u0041, \\u{1F600}).";
export const unicodeEscape_should_match: string[] = [
  "\\u0041",
  "\\u{1F600}",
  "\\uFFFF",
  "\\u{0}",
  "\\u{10FFFF}",
];
export const unicodeEscape_should_not_match: string[] = [
  "\\u04",
  "\\u{}",
  "u0041",
  "\\UFFFF",
  "\\u{GGGGGG}",
];

/**
 * Should match an HTML/XML named or numeric character entity
 * (e.g. &amp;amp;, &amp;lt;, &amp;#39;, &amp;#x27;).
 */
export const htmlEntity = /&(?:#x[0-9a-fA-F]+|#[0-9]+|[a-zA-Z][a-zA-Z0-9]*);/;
export const htmlEntity_description =
  "Should match an HTML/XML named or numeric character entity (e.g. &amp;, &lt;, &#39;).";
export const htmlEntity_should_match: string[] = [
  "&amp;",
  "&lt;",
  "&gt;",
  "&#39;",
  "&#x27;",
  "&nbsp;",
  "&#8212;",
];
export const htmlEntity_should_not_match: string[] = [
  "&;",
  "&#;",
  "&#x;",
  "&123;",
  "amp;",
];

/**
 * Should match a base32-encoded string (uppercase A-Z, digits 2-7,
 * optional padding).
 */
export const base32 = /[A-Z2-7]{2,}={0,6}/;
export const base32_description =
  "Should match a base32-encoded string (uppercase A-Z, digits 2-7, optional padding).";
export const base32_should_match: string[] = [
  "JBSWY3DPEHPK3PXP",
  "MFRA====",
  "GEZDGNBVGY3TQOJQ",
  "NBSWY3DP",
];
export const base32_should_not_match: string[] = [
  "jbswy3dp",
  "A",
  "JBSWY89Z",
  "12345678",
];

/**
 * Should match a hexadecimal string with 0x prefix
 * (e.g. 0x1a2b3c).
 */
export const hexString = /0x[0-9a-fA-F]+/;
export const hexString_description =
  "Should match a hexadecimal string with 0x prefix (e.g. 0x1a2b3c).";
export const hexString_should_match: string[] = [
  "0x1a2b3c",
  "0xFF",
  "0x0",
  "0xDEADBEEF",
  "0x123abc",
];
export const hexString_should_not_match: string[] = [
  "1a2b3c",
  "0xGHI",
  "0x",
  "x1234",
];

/**
 * Should match a string containing common escape sequences
 * (e.g. \\n, \\t, \\\\, \\").
 */
export const escapedString = /\\[nrtbfv0'"\\\/]/;
export const escapedString_description =
  "Should match a common escape sequence (e.g. \\n, \\t, \\\\).";
export const escapedString_should_match: string[] = [
  "\\n",
  "\\t",
  "\\\\",
  "\\'",
  '\\"',
  "\\r",
  "\\0",
];
export const escapedString_should_not_match: string[] = [
  "\\x",
  "\\q",
  "n",
  "\\",
];
