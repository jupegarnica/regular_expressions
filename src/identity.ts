/**
 * Should match a US Social Security Number in XXX-XX-XXXX format.
 * Excludes invalid area numbers (000, 666, 900-999).
 */
export const ssnUS =
  /(?!000|666|9[0-9]{2})[0-9]{3}-(?!00)[0-9]{2}-(?!0000)[0-9]{4}/;
export const ssnUS_description =
  "Should match a US Social Security Number in XXX-XX-XXXX format. Excludes invalid area numbers (000, 666, 900-999).";
export const ssnUS_should_match: string[] = [
  "123-45-6789",
  "001-01-0001",
  "899-99-9999",
  "765-43-2100",
  "078-05-1120",
];
export const ssnUS_should_not_match: string[] = [
  "000-45-6789",
  "666-45-6789",
  "900-45-6789",
  "123-00-6789",
  "123-45-0000",
  "1234-56-7890",
  "123456789",
];

/**
 * Should match an ORCID identifier in XXXX-XXXX-XXXX-XXXX format
 * where X is a digit and the last character can be a digit or X
 * (checksum).
 */
export const orcidId = /[0-9]{4}-[0-9]{4}-[0-9]{4}-[0-9]{3}[0-9X]/;
export const orcidId_description =
  "Should match an ORCID identifier in XXXX-XXXX-XXXX-XXXX format where X is a digit and the last character can be a digit or X (checksum).";
export const orcidId_should_match: string[] = [
  "0000-0002-1825-0097",
  "0000-0001-5109-3700",
  "0000-0002-9079-593X",
  "1234-5678-9012-3456",
];
export const orcidId_should_not_match: string[] = [
  "0000-0002-1825-009",
  "0000-0002-1825-00977",
  "0000-00021825-0097",
  "AAAA-BBBB-CCCC-DDDD",
  "0000:0002:1825:0097",
];
