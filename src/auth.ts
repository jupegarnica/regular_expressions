/**
 * Should match an AWS access key ID (starts with AKIA, 20 characters).
 */
export const awsAccessKey = /AKIA[0-9A-Z]{16}/;
export const awsAccessKey_description =
  "Should match an AWS access key ID (starts with AKIA, 20 characters).";
export const awsAccessKey_should_match: string[] = [
  "AKIAIOSFODNN7EXAMPLE",
  "AKIA1234567890ABCDEF",
  "AKIAZ5BCD3EFGHIJ4KLM",
];
export const awsAccessKey_should_not_match: string[] = [
  "ASIA1234567890ABCDEF",
  "AKIA12345",
  "akia1234567890abcdef",
  "AKIAIOSFODNN7EXAMPLEE",
];

/**
 * Should match a GitHub personal access token
 * (ghp_, gho_, ghs_, ghr_ prefixed).
 */
export const githubToken = /gh[posru]_[A-Za-z0-9_]{36,255}/;
export const githubToken_description =
  "Should match a GitHub personal access token (ghp_, gho_, ghs_, ghr_ prefixed).";
export const githubToken_should_match: string[] = [
  "ghp_ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghij",
  "gho_1234567890abcdefghijklmnopqrstuvwxyz",
  "ghs_ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghij",
  "ghr_ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghij",
];
export const githubToken_should_not_match: string[] = [
  "ghx_ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghij",
  "ghp_short",
  "ghp_",
  "GHP_ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghij",
];

/**
 * Should match a Slack bot or user token
 * (xoxb-, xoxp-, xoxs-, xoxa- prefixed).
 */
export const slackToken = /xox[bpsa]-[0-9A-Za-z-]+/;
export const slackToken_description =
  "Should match a Slack bot or user token (xoxb-, xoxp-, xoxs-, xoxa- prefixed).";
export const slackToken_should_match: string[] = [
  "xoxb-not-a-real-token-000",
  "xoxp-fake-token-for-tests-000",
  "xoxs-example-000",
  "xoxa-2-example",
];
export const slackToken_should_not_match: string[] = [
  "xoxc-123456789",
  "xoxb-",
  "xoxb",
  "XOXB-123456789",
];

/**
 * Should match a generic API key format (32+ alphanumeric characters).
 */
export const apiKeyGeneric = /[A-Za-z0-9]{32,}/;
export const apiKeyGeneric_description =
  "Should match a generic API key format (32+ alphanumeric characters).";
export const apiKeyGeneric_should_match: string[] = [
  "abcdefghijklmnopqrstuvwxyz123456",
  "ABCDEFGHIJKLMNOPQRSTUVWXYZ012345",
  "a1b2c3d4e5f6g7h8i9j0k1l2m3n4o5p6",
  "ThisIsAVeryLongApiKeyThatExceeds32Characters",
];
export const apiKeyGeneric_should_not_match: string[] = [
  "short_key",
  "abc-def-ghi-jkl-mno-pqr-stu-vwx",
  "1234567890123456789012345678901",
  "key with spaces 1234567890abcdef",
];
