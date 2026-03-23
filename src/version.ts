/**
 * Should match a calendar version (e.g. 2024.01.15).
 */
export const calver =
  /(?:19|20)[0-9]{2}\.(?:0[1-9]|1[0-2])\.(?:0[1-9]|[12][0-9]|3[01])/;
export const calver_description =
  "Should match a calendar version (e.g. 2024.01.15).";
export const calver_should_match: string[] = [
  "2024.01.15",
  "2023.12.31",
  "2000.01.01",
  "1999.06.30",
];
export const calver_should_not_match: string[] = [
  "2024.13.01",
  "2024.00.15",
  "2024.01.32",
  "24.01.15",
  "2024-01-15",
];

/**
 * Should match a Node.js version string with v prefix
 * (e.g. v18.17.0).
 */
export const nodeVersion =
  /v(?:0|[1-9][0-9]*)\.(?:0|[1-9][0-9]*)\.(?:0|[1-9][0-9]*)/;
export const nodeVersion_description =
  "Should match a Node.js version string with v prefix (e.g. v18.17.0).";
export const nodeVersion_should_match: string[] = [
  "v18.17.0",
  "v20.0.0",
  "v0.12.7",
  "v16.20.2",
];
export const nodeVersion_should_not_match: string[] = [
  "18.17.0",
  "v18.17",
  "v018.17.0",
  "V18.17.0",
];

/**
 * Should match a changelog version entry heading
 * (e.g. ## [1.2.3] - 2024-01-15).
 */
export const changelogEntry =
  /## \[(?:0|[1-9][0-9]*)\.(?:0|[1-9][0-9]*)\.(?:0|[1-9][0-9]*)\] - [0-9]{4}-[0-9]{2}-[0-9]{2}/;
export const changelogEntry_description =
  "Should match a changelog version entry heading (e.g. ## [1.2.3] - 2024-01-15).";
export const changelogEntry_should_match: string[] = [
  "## [1.2.3] - 2024-01-15",
  "## [0.0.1] - 2023-12-31",
  "## [10.0.0] - 2024-06-01",
];
export const changelogEntry_should_not_match: string[] = [
  "# [1.2.3] - 2024-01-15",
  "## 1.2.3 - 2024-01-15",
  "## [1.2.3] 2024-01-15",
  "## [1.2] - 2024-01-15",
];

/**
 * Should match an npm-style version range
 * (e.g. ^1.2.3, ~1.2.3, >=1.0.0).
 */
export const versionRange =
  /[\^~>=<]{1,2}(?:0|[1-9][0-9]*)(?:\.(?:0|[1-9][0-9]*))*(?:-[a-zA-Z0-9._-]+)?/;
export const versionRange_description =
  "Should match an npm-style version range (e.g. ^1.2.3, ~1.2.3, >=1.0.0).";
export const versionRange_should_match: string[] = [
  "^1.2.3",
  "~1.2.3",
  ">=1.0.0",
  "<2.0.0",
  ">=0.5.0-beta",
  ">3",
];
export const versionRange_should_not_match: string[] = [
  "1.2.3",
  "v1.2.3",
  "*",
  "latest",
];
