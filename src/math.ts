/**
 * Should match a fraction (e.g. 3/4, 1/2, -7/8).
 */
export const fraction = /-?(?:0|[1-9][0-9]*)\/[1-9][0-9]*/;
export const fraction_description =
  "Should match a fraction (e.g. 3/4, 1/2, -7/8).";
export const fraction_should_match: string[] = [
  "1/2",
  "3/4",
  "-7/8",
  "0/1",
  "22/7",
  "100/3",
];
export const fraction_should_not_match: string[] = [
  "1/0",
  "/2",
  "1/",
  "abc",
  "1.5/2",
];

/**
 * Should match a numeric range notation (e.g. 1-10).
 */
export const numericRange = /[0-9]+-[0-9]+/;
export const numericRange_description =
  "Should match a numeric range notation (e.g. 1-10).";
export const numericRange_should_match: string[] = [
  "1-10",
  "0-100",
  "1-1",
  "100-200",
  "0-9",
];
export const numericRange_should_not_match: string[] = [
  "-10",
  "1-",
  "1..10",
  "abc",
  "1 - 10",
];

/**
 * Should match a parenthesized coordinate pair (e.g. (3, 4)).
 */
export const coordinate =
  /\(-?(?:0|[1-9][0-9]*)(?:\.[0-9]+)?,\s*-?(?:0|[1-9][0-9]*)(?:\.[0-9]+)?\)/;
export const coordinate_description =
  "Should match a parenthesized coordinate pair (e.g. (3, 4)).";
export const coordinate_should_match: string[] = [
  "(0, 0)",
  "(3, 4)",
  "(-1, 2)",
  "(10.5, -3.14)",
  "(100, 200)",
];
export const coordinate_should_not_match: string[] = [
  "3, 4",
  "(3 4)",
  "()",
  "(3,)",
  "[3, 4]",
];

/**
 * Should match a math operator (+, -, *, /, %, **, ^).
 */
export const mathOperator = /\*\*|[+\-*\/%^]/;
export const mathOperator_description =
  "Should match a math operator (+, -, *, /, %, **, ^).";
export const mathOperator_should_match: string[] = [
  "+",
  "-",
  "*",
  "/",
  "%",
  "**",
  "^",
];
export const mathOperator_should_not_match: string[] = [
  "=",
  "&&",
  "||",
  "!",
  "++",
];
