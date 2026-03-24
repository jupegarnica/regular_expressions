/**
 * Should match a Digital Object Identifier
 * (e.g. 10.1000/xyz123).
 */
export const doi = /10\.\d{4,9}\/[^\s]+/;
export const doi_description =
  "Should match a Digital Object Identifier (e.g. 10.1000/xyz123).";
export const doi_should_match: string[] = [
  "10.1000/xyz123",
  "10.1038/nphys1170",
  "10.1002/0470841559.ch1",
  "10.1371/journal.pmed.0020124",
  "10.18637/jss.v067.i01",
];
export const doi_should_not_match: string[] = [
  "11.1000/xyz123",
  "10.123/xyz",
  "10/1000/xyz",
  "doi:10.1000",
];

/**
 * Should match a simple chemical formula
 * (e.g. H2O, NaCl, C6H12O6).
 */
export const chemicalFormula = /[A-Z][a-z]?(?:\d+)?(?:[A-Z][a-z]?(?:\d+)?)*/;
export const chemicalFormula_description =
  "Should match a simple chemical formula (e.g. H2O, NaCl, C6H12O6).";
export const chemicalFormula_should_match: string[] = [
  "H2O",
  "NaCl",
  "C6H12O6",
  "CO2",
  "Fe2O3",
  "Ca",
];
export const chemicalFormula_should_not_match: string[] = [
  "h2o",
  "123",
  "nacl",
  "2H",
];

/**
 * Should match an ISBN-13 (e.g. 978-3-16-148410-0).
 */
export const isbn =
  /(?:978|979)[- ]?[0-9]{1,5}[- ]?[0-9]{1,7}[- ]?[0-9]{1,6}[- ]?[0-9]/;
export const isbn_description =
  "Should match an ISBN-13 (e.g. 978-3-16-148410-0).";
export const isbn_should_match: string[] = [
  "978-3-16-148410-0",
  "978 0 596 52068 7",
  "9780596520687",
  "979-10-90636-07-1",
];
export const isbn_should_not_match: string[] = [
  "977-3-16-148410-0",
  "978",
  "abc-3-16-148410-0",
  "1234567890",
];

/**
 * Should match a scientific notation number
 * (e.g. 6.022e23, 1.6E-19).
 */
export const scientificNotation =
  /-?(?:0|[1-9][0-9]*)(?:\.[0-9]+)?[eE][+-]?[0-9]+/;
export const scientificNotation_description =
  "Should match a scientific notation number (e.g. 6.022e23, 1.6E-19).";
export const scientificNotation_should_match: string[] = [
  "6.022e23",
  "1.6E-19",
  "3e8",
  "-2.5e10",
  "1.0E+5",
];
export const scientificNotation_should_not_match: string[] = [
  "6.022",
  "e23",
  "1.6x10",
  "3*10^8",
];

/**
 * Should match an IP address range
 * (e.g. 192.168.1.1-192.168.1.255).
 */
export const ipRange =
  /(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)-(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)/;
export const ipRange_description =
  "Should match an IP address range (e.g. 192.168.1.1-192.168.1.255).";
export const ipRange_should_match: string[] = [
  "192.168.1.1-192.168.1.255",
  "10.0.0.0-10.255.255.255",
  "0.0.0.0-255.255.255.255",
];
export const ipRange_should_not_match: string[] = [
  "192.168.1.1",
  "192.168.1.1-",
  "256.168.1.1-192.168.1.255",
  "192.168.1-192.168.1.255",
];
