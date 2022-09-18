/**
 * Should match any valid JS number but not NaN, Infinity or -Infinity.
 */

export const number =
  /(?:[-+]?(?:0|[1-9_][0-9_]*)(?:\.[0-9_]*)?(?:[eE][-+]?[0-9]+)?)/;
export const number_description =
  "Should match any valid JS number but not NaN, Infinity or -Infinity.";
export const number_should_match: string[] = [
  "1_000_000",
  "1_000.45",
  "123.45",
  "0.123",
  "1e4",
  "1E4",
  "0.123e4",
  "0.123E4",
  "0.123e-4",
  "0.123e+4",
  "123",
  "-123",
  "+123",
];
export const number_should_not_match: string[] = [
  "0123",
  "123a",
  "123e",
  "123e0.1",
  "a123",
  "a12b3",
  "NaN",
  "Infinity",
];
/**
 * Should match any number signed integer or unsigned integer.
 */

export const numberInteger = /(?:[-+]?(?:0|[1-9][0-9]*))/;
export const numberInteger_description =
  "Should match any number signed integer or unsigned integer.";
export const numberInteger_should_match: string[] = [
  "0",
  "123",
  "-999",
  "+6",
];
export const numberInteger_should_not_match: string[] = [
  "00",
  "000",
  "123.45",
  "0.123",
  "1e4",
  "0.123e4",
  "0.123e-4",
  "0.123e+4",
];

/**
 * Should match any float number, signed or unsigned, but not integers or exponential.
 */

export const numberFloat = /([-+]?([0-9]+))?\.([0-9])+/;
export const numberFloat_description =
  "Should match any float number, signed or unsigned, but not integers or exponential.";
export const numberFloat_should_match: string[] = [
  "123.45",
  "0.123",
  "1.0",
  "0.0",
  ".9",
];
export const numberFloat_should_not_match: string[] = [
  "7",
  "7.",
  "123",
  "1e4",
  "0.123e4",
  "0.123e-4",
  "0.123e+4",
  "123.45.67",
  "0.123e",
  "0.123e4.5",
  "0.123e-4.5",
  "0.123e+4.5",
];
/**
 * Should match any exponential number.
 */

export const numberExponential =
  /([-+]?([0-9]+))?(\.([0-9]+))?[eE]([-+]?([0-9]+))/;
export const numberExponential_description =
  "Should match any exponential number.";
export const numberExponential_should_match: string[] = [
  "123e4",
  "0.123e4",
  ".1e4",
  "1e4",
  "1E4",
  "3E2",
  "3E-2",
  "12.3456e-4",
  "0.123e-4",
  "0.123e+4",
];
export const numberExponential_should_not_match: string[] = [
  "123.45",
  ".e4",
  "0.123",
  "0.123a",
  "123",
  "1e",
  "0.123e4.5",
  "0.123e-4.5",
  "0.123e+4.5",
];

/**
 * Should match any number hexadecimal, signed or unsigned
 */

export const numberHex = /(([+-])?0[xX][0-9a-fA-F]+)/;
export const numberHex_description =
  "Should match any number hexadecimal, signed or unsigned";
export const numberHex_should_match: string[] = [
  "0x123",
  "0x0",
  "0X1",
  "+0x1",
  "-0x1",
  "0xf",
  "0xF",
  "0xabcdef",
  "0xabc",
];
export const numberHex_should_not_match: string[] = [
  "*0x1",
  "123",
  "0xG",
  "0x1z",
  "0x123.45",
  "0x123.45e4",
  "0x123.45e-4",
  "0x123.45e+4",
];

/**
 * Should match any number octal, signed or unsigned, but not integers or exponential.
 */

export const numberOctal = /([+-])?(0o?[0-7]+)/;
export const numberOctal_description =
  "Should match any number octal, signed or unsigned, but not integers or exponential.";
export const numberOctal_should_match: string[] = [
  "0123",
  "07",
  "0o51",
  "0o7",
  "+0o7",
  "-0o7",
];

export const numberOctal_should_not_match: string[] = [
  "0",
  "058",
  "0o58",
  "0O7",
  "7",
  "08",
  "09",
  "abc",
  "0abc",
  "123",
  "0o123.45",
  "0123.45",
  "0123.45e4",
  "0123.45e-4",
  "0123.45e+4",
];

/**
 * Should match any binary number, signed or unsigned, but not integers or exponential.
 */

export const numberBinary = /([+-])?0[bB][01]+/;
export const numberBinary_description =
  "Should match any binary number, signed or unsigned, but not integers or exponential.";
export const numberBinary_should_match: string[] = [
  "0b101",
  "0b0",
  "+0b1",
  "-0b1",
  "0B0",
  "0b00001111001",
  "0b01111000",
];
export const numberBinary_should_not_match: string[] = [
  "0b0abc",
  "0babc",
  "0",
  "0b",
  "0b101.45",
  "0b101.45e4",
  "0b101.45e-4",
  "0b101.45e+4",
  "123",
  "0b101.45",
  "0b101.45e4.5",
  "0b101.45e-4.5",
  "0b101.45e+4.5",
];

/**
 * Should match any base64 string.
 * https://en.wikipedia.org/wiki/Base64
 */

export const base64 = /[A-Za-z0-9+/]+={0,2}/;
export const base64_description = "Should match any base64 string.";
export const base64_should_match: string[] = [
  "Zm9vYmFy",
  btoa(
    `12345677890qweertyuiopasdfghjklñzxcvbnmQWEERTYUIOPASDFGHJKLÑZXCVBNM+/|@#~½~¬{[]}\n!¿?[]_:;,.<>()$%&^*`,
  ),
];
export const base64_should_not_match: string[] = [
  "!@#$%^&*()_+",
];

/**
 * Should match any roman numeral
 * https://en.wikipedia.org/wiki/Roman_numerals
 */

export const romanNumeral =
  /M{0,4}(CM|CD|D?C{0,3})(XC|XL|L?X{0,3})(IX|IV|V?I{0,3})/;
export const romanNumeral_description = "Should match any roman numeral";
export const romanNumeral_should_match: string[] = [
  "I",
  "II",
  "III",
  "IV",
  "V",
  "VI",
  "VII",
  "VIII",
  "IX",
  "X",
  "XI",
  "XII",
  "XIII",
  "XIV",
  "XV",
  "XVI",
  "XVII",
  "XVIII",
  "XIX",
  "XX",
  "XXI",
  "XXII",
  "XXIII",
  "XXIV",
  "XXV",
  "XXVI",
  "XXVII",
  "XXVIII",
  "XXIX",
  "XXX",
  "XXXI",
  "XXXII",
  "XXXIII",
  "XXXIV",
  "XXXV",
  "XXXVI",
  "XXXVII",
  "XXXVIII",
  "XXXIX",
  "XL",
  "XLI",
  "XLII",
  "XLIII",
  "XLIV",
  "XLV",
  "XLVI",
  "XLVII",
  "XLVIII",
  "XLIX",
  "L",
  "LI",
  "LII",
  "LIII",
  "LIV",
  "LV",
  "LVI",
  "LVII",
  "LVIII",
  "LIX",
  "LX",
  "LXI",
  "LXII",
  "LXIII",
  "LXIV",
  "LXV",
  "LXVI",
  "LXVII",
  "LXVIII",
  "LXIX",
  "LXX",
  "LXXI",
  "LXXII",
  "LXXIII",
  "LXXIV",
  "LXXV",
  "LXXVI",
  "LXXVII",
  "LXXVIII",
  "LXXIX",
  "LXXX",
  "LXXXI",
  "LXXXII",
  "LXXXIII",
  "LXXXIV",
  "LXXXV",
  "LXXXVI",
  "LXXXVII",
  "LXXXVIII",
  "LXXXIX",

  "C",
  "CI",
  "CII",
  "CIII",
  "CIV",
  "CV",
  "CVI",
  "CVII",

  "D",
  "DI",
  "DII",
  "DIII",
  "DIV",
  "DV",
  "DVI",
  "DVII",

  "M",
  "MI",
  "MII",
  "MIII",
  "MIV",
  "MV",
  "MVI",
  "MVII",
  "MVIII",
  "MIX",

  "MM",
  "MMM",
  "MMMM",
];
export const romanNumeral_should_not_match: string[] = [
  "iii",
  "IIV",
  "IIII",
  "IIIII",
  "IIIIII",
  "IIIIIII",
  "lxx",
  "lxxi",
  "lxxii",
  "lxxiii",
  "lxxiv",
  "lxxv",
  "lxxvi",
  "lxxvii",
  "lxxviii",
  "asdsdf",
];

/**
 * Should match any BigInt
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/BigInt
 */

export const numberBigInt = /[+-]?(0|[1-9][0-9]*)n/;
export const numberBigInt_description = "Should match any BigInt";
export const numberBigInt_should_match: string[] = [
  "0n",
  "+1n",
  "-1n",
  "20n",
  "300n",
  "9999999999n",
];
export const numberBigInt_should_not_match: string[] = [
  "00n",
  "01n",
  "10",
  "200",
];
