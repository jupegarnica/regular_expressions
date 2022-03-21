/**
 * should match any single letter but not H.
 * https://www.w3.org/TR/CSS2/syndata.html#characters
 */

export const lettersButNotH = /(?![H])[a-zA-Z]/;
export const lettersButNotH_should_match: string[] = [
  "a",
  "h",
  "A",
  "Z",
];
export const lettersButNotH_should_not_match: string[] = [
  "H",
  "3",
  "aa",
];
