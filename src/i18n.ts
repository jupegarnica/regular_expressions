/**
 * Should match a BCP 47 / IETF language tag
 * (e.g. en, en-US, zh-Hans-CN).
 */
export const bcp47 =
  /[a-zA-Z]{2,3}(?:-[a-zA-Z]{4})?(?:-(?:[a-zA-Z]{2}|[0-9]{3}))?(?:-(?:[a-zA-Z0-9]{5,8}|[0-9][a-zA-Z0-9]{3}))*/;
export const bcp47_description =
  "Should match a BCP 47 / IETF language tag (e.g. en, en-US, zh-Hans-CN).";
export const bcp47_should_match: string[] = [
  "en",
  "en-US",
  "zh-Hans-CN",
  "pt-BR",
  "sr-Latn",
  "de-DE",
  "ja-JP",
];
export const bcp47_should_not_match: string[] = [
  "e",
  "english",
  "en_US",
  "12-US",
  "en-",
];

/**
 * Should match a locale code in underscore format
 * (e.g. en_US, pt_BR).
 */
export const localeCode = /[a-z]{2}_[A-Z]{2}/;
export const localeCode_description =
  "Should match a locale code in underscore format (e.g. en_US, pt_BR).";
export const localeCode_should_match: string[] = [
  "en_US",
  "pt_BR",
  "zh_CN",
  "ja_JP",
  "de_DE",
  "fr_FR",
];
export const localeCode_should_not_match: string[] = [
  "en-US",
  "EN_US",
  "en_us",
  "english_US",
  "e_US",
];

/**
 * Should match a dot-notation translation key
 * (e.g. common.button.submit).
 */
export const translationKey =
  /[a-zA-Z_][a-zA-Z0-9_]*(?:\.[a-zA-Z_][a-zA-Z0-9_]*)+/;
export const translationKey_description =
  "Should match a dot-notation translation key (e.g. common.button.submit).";
export const translationKey_should_match: string[] = [
  "common.button.submit",
  "errors.notFound",
  "app.header.title",
  "i18n.key.nested.deep",
  "nav.home",
];
export const translationKey_should_not_match: string[] = [
  "singlekey",
  ".leading.dot",
  "trailing.",
  "123.key",
  "a..b",
];
