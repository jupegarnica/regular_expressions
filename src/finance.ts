/**
 * Should match a Visa credit card number (starts with 4, 13 or
 * 16 digits).
 */
export const creditCardVisa = /4[0-9]{12}(?:[0-9]{3})?/;
export const creditCardVisa_description =
  "Should match a Visa credit card number (starts with 4, 13 or 16 digits).";
export const creditCardVisa_should_match: string[] = [
  "4111111111111111",
  "4012888888881881",
  "4222222222222",
  "4000056655665556",
];
export const creditCardVisa_should_not_match: string[] = [
  "5111111111111111",
  "411111111111111",
  "41111111111111112",
  "4111-1111-1111-1111",
];

/**
 * Should match a Mastercard credit card number (starts with 51-55 or
 * 2221-2720, 16 digits).
 */
export const creditCardMastercard =
  /(?:5[1-5][0-9]{2}|2(?:2[2-9][0-9]|[3-6][0-9]{2}|7[01][0-9]|720))[0-9]{12}/;
export const creditCardMastercard_description =
  "Should match a Mastercard credit card number (starts with 51-55 or 2221-2720, 16 digits).";
export const creditCardMastercard_should_match: string[] = [
  "5111111111111118",
  "5500000000000004",
  "2221000000000009",
  "2720990000000007",
];
export const creditCardMastercard_should_not_match: string[] = [
  "4111111111111111",
  "5011111111111111",
  "5600000000000004",
  "2221000000000",
];

/**
 * Should match an American Express credit card number (starts with
 * 34 or 37, 15 digits).
 */
export const creditCardAmex = /3[47][0-9]{13}/;
export const creditCardAmex_description =
  "Should match an American Express credit card number (starts with 34 or 37, 15 digits).";
export const creditCardAmex_should_match: string[] = [
  "340000000000009",
  "371449635398431",
  "378282246310005",
  "341111111111111",
];
export const creditCardAmex_should_not_match: string[] = [
  "350000000000009",
  "34000000000000",
  "3400000000000090",
  "4111111111111111",
];

/**
 * Should match any major credit card number (Visa, Mastercard, or
 * Amex).
 */
export const creditCard = new RegExp(
  `(?:${creditCardVisa.source})|(?:${creditCardMastercard.source})|(?:${creditCardAmex.source})`,
);
export const creditCard_description =
  "Should match any major credit card number (Visa, Mastercard, or Amex).";
export const creditCard_should_match: string[] = [
  "4111111111111111",
  "5500000000000004",
  "371449635398431",
  "2221000000000009",
];
export const creditCard_should_not_match: string[] = [
  "6011111111111117",
  "1234567890123456",
  "411111111111",
  "abcdefghijklmnop",
];

/**
 * Should match an International Bank Account Number (IBAN).
 */
export const ibanCode =
  /[A-Z]{2}[0-9]{2}[A-Z0-9]{4}[0-9]{7}(?:[A-Z0-9]{0,16})?/;
export const ibanCode_description =
  "Should match an International Bank Account Number (IBAN).";
export const ibanCode_should_match: string[] = [
  "GB29NWBK60161331926819",
  "DE89370400440532013000",
  "FR7630006000011234567890189",
  "ES9121000418450200051332",
];
export const ibanCode_should_not_match: string[] = [
  "gb29NWBK60161331926819",
  "G129NWBK60161331926819",
  "GB2NWBK60161331926819",
  "1234567890",
];

/**
 * Should match a SWIFT/BIC bank code (8 or 11 characters).
 */
export const swiftBic = /[A-Z]{6}[A-Z0-9]{2}(?:[A-Z0-9]{3})?/;
export const swiftBic_description =
  "Should match a SWIFT/BIC bank code (8 or 11 characters).";
export const swiftBic_should_match: string[] = [
  "DEUTDEFF",
  "BNPAFRPP",
  "CHASUS33XXX",
  "COBADEFFXXX",
];
export const swiftBic_should_not_match: string[] = [
  "DEUTDE",
  "deutdeff",
  "DEUTDEFF1",
  "12345678",
];

/**
 * Should match a stock ticker symbol (1-5 uppercase letters).
 */
export const stockTicker = /[A-Z]{1,5}/;
export const stockTicker_description =
  "Should match a stock ticker symbol (1-5 uppercase letters).";
export const stockTicker_should_match: string[] = [
  "AAPL",
  "MSFT",
  "GOOGL",
  "A",
  "TSLA",
];
export const stockTicker_should_not_match: string[] = [
  "aapl",
  "GOOGLES",
  "123",
  "AA1",
];
