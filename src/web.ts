/**
 * Should match an HTTP header line (e.g. Content-Type: application/json).
 */
export const httpHeader = /[A-Za-z][A-Za-z0-9-]*:\s*.+/;
export const httpHeader_description =
  "Should match an HTTP header line (e.g. Content-Type: application/json).";
export const httpHeader_should_match: string[] = [
  "Content-Type: application/json",
  "Authorization: Bearer token",
  "X-Custom-Header: value",
  "Accept: */*",
  "Host: example.com",
];
export const httpHeader_should_not_match: string[] = [
  ": value",
  "Header",
  "123: value",
  "-Header: value",
];

/**
 * Should match a cookie key=value pair.
 */
export const cookiePair = /[a-zA-Z0-9_-]+=[^\s;]*/;
export const cookiePair_description = "Should match a cookie key=value pair.";
export const cookiePair_should_match: string[] = [
  "session_id=abc123",
  "theme=dark",
  "user-pref=compact",
  "token=eyJhbGci",
  "flag=true",
];
export const cookiePair_should_not_match: string[] = [
  "=value",
  "key value",
  "key;value",
  "=",
];

/**
 * Should match a URL query string (e.g. ?key=value&key2=value2).
 */
export const queryString =
  /\?[a-zA-Z0-9_-]+=[^\s&#]*(?:&[a-zA-Z0-9_-]+=[^\s&#]*)*/;
export const queryString_description =
  "Should match a URL query string (e.g. ?key=value&key2=value2).";
export const queryString_should_match: string[] = [
  "?key=value",
  "?name=john&age=30",
  "?q=search+term&page=1",
  "?filter=active",
];
export const queryString_should_not_match: string[] = [
  "key=value",
  "?",
  "?=value",
  "&key=value",
];

/**
 * Should match a URL fragment/anchor (e.g. #section-name).
 */
export const urlFragment = /#[a-zA-Z][a-zA-Z0-9_-]*/;
export const urlFragment_description =
  "Should match a URL fragment/anchor (e.g. #section-name).";
export const urlFragment_should_match: string[] = [
  "#section",
  "#top",
  "#my-section",
  "#heading_1",
  "#A",
];
export const urlFragment_should_not_match: string[] = [
  "#",
  "#123",
  "section",
  "##double",
];

/**
 * Should match a CSS custom property / variable
 * (e.g. var(--custom-property) or --custom-property).
 */
export const cssVariable = /(?:var\()?--[a-zA-Z][a-zA-Z0-9-]*\)?/;
export const cssVariable_description =
  "Should match a CSS custom property / variable (e.g. var(--custom-property) or --custom-property).";
export const cssVariable_should_match: string[] = [
  "--color-primary",
  "var(--font-size)",
  "--bg-color",
  "var(--spacing-lg)",
  "--a",
];
export const cssVariable_should_not_match: string[] = [
  "-single-dash",
  "var(color)",
  "--",
  "--123",
];

/**
 * Should match a CSS property name (e.g. background-color, font-size).
 */
export const cssProperty = /[a-z][a-z-]*[a-z]/;
export const cssProperty_description =
  "Should match a CSS property name (e.g. background-color, font-size).";
export const cssProperty_should_match: string[] = [
  "background-color",
  "font-size",
  "margin",
  "border-top-left-radius",
  "color",
  "display",
];
export const cssProperty_should_not_match: string[] = [
  "Background-Color",
  "-webkit-transform",
  "a",
  "123",
  "font_size",
];

/**
 * Should match a basic CSS selector
 * (class, ID, element, or attribute selector).
 */
export const cssSelector =
  /(?:[.#]?[a-zA-Z][a-zA-Z0-9_-]*|\*|\[[a-zA-Z][a-zA-Z0-9_-]*(?:=[^\]]+)?\])(?:\s*[>+~]\s*[.#]?[a-zA-Z][a-zA-Z0-9_-]*)*/;
export const cssSelector_description =
  "Should match a basic CSS selector (class, ID, element, or attribute selector).";
export const cssSelector_should_match: string[] = [
  ".class-name",
  "#my-id",
  "div",
  "div > span",
  ".parent + .sibling",
  "[data-attr]",
  "h1",
];
export const cssSelector_should_not_match: string[] = [
  ".",
  "#",
  "123",
  ">child",
  ".123class",
];
