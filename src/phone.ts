/**
 * Should match a phone number in E.164 international format
 * (e.g. +15551234567).
 */
export const phoneE164 = /\+[1-9][0-9]{6,14}/;
export const phoneE164_description =
  "Should match a phone number in E.164 international format (e.g. +15551234567).";
export const phoneE164_should_match: string[] = [
  "+15551234567",
  "+442071234567",
  "+861012345678",
  "+1234567",
  "+123456789012345",
];
export const phoneE164_should_not_match: string[] = [
  "15551234567",
  "+0551234567",
  "+123456",
  "+1234567890123456",
  "++15551234567",
];

/**
 * Should match a US/Canada phone number in common formats such as
 * (555) 123-4567 or 555-123-4567.
 */
export const phoneUS =
  /(?:\+?1[-.\s]?)?(?:\(?[2-9][0-9]{2}\)?[-.\s]?)[2-9][0-9]{2}[-.\s]?[0-9]{4}/;
export const phoneUS_description =
  "Should match a US/Canada phone number in common formats such as (555) 123-4567 or 555-123-4567.";
export const phoneUS_should_match: string[] = [
  "(555) 234-5678",
  "555-234-5678",
  "5552345678",
  "1-555-234-5678",
  "+1 555 234 5678",
  "+1.555.234.5678",
  "(555)234-5678",
];
export const phoneUS_should_not_match: string[] = [
  "(055) 234-5678",
  "555-023-5678",
  "12345",
  "(555) 234-567",
  "+2 555 234 5678",
];

/**
 * Should match a generic international phone number with country code.
 */
export const phoneInternational =
  /\+?[1-9][0-9]{0,2}[-.\s]?\(?[0-9]{1,4}\)?(?:[-.\s]?[0-9]{1,4}){1,5}/;
export const phoneInternational_description =
  "Should match a generic international phone number with country code.";
export const phoneInternational_should_match: string[] = [
  "+44 20 7123 4567",
  "+49 30 12345678",
  "+81 3 1234 5678",
  "+1 555 123 4567",
  "+33 1 23 45 67 89",
  "44 20 71234567",
];
export const phoneInternational_should_not_match: string[] = [
  "+0 123 456 7890",
  "abcdefghij",
  "++44 20 7123 4567",
  "+",
];
