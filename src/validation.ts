/**
 * Should match a valid username (3-20 chars, alphanumeric, underscore,
 * or dash).
 */
export const username = /[a-zA-Z0-9][a-zA-Z0-9_-]{2,19}/;
export const username_description =
  "Should match a valid username (3-20 chars, alphanumeric, underscore, or dash).";
export const username_should_match: string[] = [
  "john",
  "user_name",
  "my-user",
  "abc",
  "User123",
  "a1b2c3d4e5f6g7h8i9j0",
];
export const username_should_not_match: string[] = [
  "ab",
  "_user",
  "-user",
  "a b",
  "user!name",
  "a1b2c3d4e5f6g7h8i9j0x",
];

/**
 * Should match a strong password (min 8 chars with at least one
 * uppercase, one lowercase, one digit, and one special character).
 */
export const strongPassword =
  /(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^a-zA-Z0-9]).{8,}/;
export const strongPassword_description =
  "Should match a strong password (min 8 chars with uppercase, lowercase, digit, and special char).";
export const strongPassword_should_match: string[] = [
  "P@ssw0rd!",
  "Str0ng#Pass",
  "Abcd1234!",
  "myP@ss99",
];
export const strongPassword_should_not_match: string[] = [
  "password",
  "PASSWORD1!",
  "Passw0rd",
  "Pa1!",
  "12345678",
];

/**
 * Should match a string containing only alphanumeric characters.
 */
export const alphanumeric = /[a-zA-Z0-9]+/;
export const alphanumeric_description =
  "Should match a string containing only alphanumeric characters.";
export const alphanumeric_should_match: string[] = [
  "hello",
  "Hello123",
  "ABC",
  "123",
  "a",
];
export const alphanumeric_should_not_match: string[] = [
  "hello world",
  "hello!",
  "hello-world",
  "hello_world",
];

/**
 * Should match a string containing only letters (a-z, A-Z).
 */
export const alphabetic = /[a-zA-Z]+/;
export const alphabetic_description =
  "Should match a string containing only letters (a-z, A-Z).";
export const alphabetic_should_match: string[] = [
  "hello",
  "Hello",
  "ABC",
  "a",
  "abcXYZ",
];
export const alphabetic_should_not_match: string[] = [
  "hello1",
  "123",
  "hello world",
  "hello!",
];

/**
 * Should match a string containing only digits (0-9).
 */
export const numericString = /[0-9]+/;
export const numericString_description =
  "Should match a string containing only digits (0-9).";
export const numericString_should_match: string[] = [
  "0",
  "123",
  "9999999999",
  "007",
];
export const numericString_should_not_match: string[] = [
  "12.34",
  "12a",
  "-5",
  "+3",
  "1 2",
];

/**
 * Should match a string with no whitespace characters.
 */
export const noWhitespace = /[^\s]+/;
export const noWhitespace_description =
  "Should match a string with no whitespace characters.";
export const noWhitespace_should_match: string[] = [
  "hello",
  "hello-world",
  "user@example.com",
  "123!@#",
  "no_spaces_here",
];
export const noWhitespace_should_not_match: string[] = [
  " ",
  "hello world",
  "tab\there",
  "\n",
];

/**
 * Should match a string of only printable ASCII characters (32-126).
 */
export const printableAscii = /[\x20-\x7E]+/;
export const printableAscii_description =
  "Should match a string of only printable ASCII characters (32-126).";
export const printableAscii_should_match: string[] = [
  "Hello, World!",
  " ",
  "~",
  "abc123!@#",
  "all printable chars",
];
export const printableAscii_should_not_match: string[] = [
  "\t",
  "\n",
  "\x00",
  "\x7F",
];
