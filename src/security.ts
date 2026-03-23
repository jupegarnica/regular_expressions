/**
 * Should match a CVE identifier
 * (e.g. CVE-2024-12345).
 */
export const cveId = /CVE-[0-9]{4}-[0-9]{4,}/;
export const cveId_description =
  "Should match a CVE identifier (e.g. CVE-2024-12345).";
export const cveId_should_match: string[] = [
  "CVE-2024-12345",
  "CVE-2021-44228",
  "CVE-2014-0160",
  "CVE-2023-1234567",
  "CVE-2017-5638",
];
export const cveId_should_not_match: string[] = [
  "CVE-2024-123",
  "cve-2024-12345",
  "CVE-24-12345",
  "CVE2024-12345",
  "CWE-79",
];

/**
 * Should match a CWE identifier (e.g. CWE-79).
 */
export const cweId = /CWE-[1-9][0-9]*/;
export const cweId_description = "Should match a CWE identifier (e.g. CWE-79).";
export const cweId_should_match: string[] = [
  "CWE-79",
  "CWE-89",
  "CWE-200",
  "CWE-1234",
  "CWE-22",
];
export const cweId_should_not_match: string[] = [
  "CWE-0",
  "cwe-79",
  "CWE79",
  "CVE-2024-1234",
  "CWE-",
];

/**
 * Should match a shebang/hashbang line
 * (e.g. #!/usr/bin/env node).
 */
export const hashBang =
  /#!\/[a-zA-Z0-9._-]+(?:\/[a-zA-Z0-9._-]+)*(?:\s+[a-zA-Z0-9._-]+)*/;
export const hashBang_description =
  "Should match a shebang/hashbang line (e.g. #!/usr/bin/env node).";
export const hashBang_should_match: string[] = [
  "#!/usr/bin/env node",
  "#!/bin/bash",
  "#!/usr/bin/python3",
  "#!/bin/sh",
  "#!/usr/bin/env deno",
];
export const hashBang_should_not_match: string[] = [
  "#/bin/bash",
  "!/bin/bash",
  "# comment",
  "#!/",
];

/**
 * Should match a Unix file permission string
 * (e.g. rwxr-xr-x) or octal (e.g. 755).
 */
export const filePermission =
  /[r-][w-][xsS-][r-][w-][xsS-][r-][w-][xtT-]|[0-7]{3,4}/;
export const filePermission_description =
  "Should match a Unix file permission string (e.g. rwxr-xr-x) or octal (e.g. 755).";
export const filePermission_should_match: string[] = [
  "rwxr-xr-x",
  "rw-r--r--",
  "rwx------",
  "755",
  "644",
  "0755",
  "---------",
];
export const filePermission_should_not_match: string[] = [
  "rwx",
  "rw",
  "888",
  "75",
  "rwxrwxrw",
];
