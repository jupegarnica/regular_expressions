/**
 * Should match a GitHub repository reference in owner/repo format.
 */
export const githubRepo =
  /[a-zA-Z0-9](?:[a-zA-Z0-9-]*[a-zA-Z0-9])?\/[a-zA-Z0-9._-]+/;
export const githubRepo_description =
  "Should match a GitHub repository reference in owner/repo format.";
export const githubRepo_should_match: string[] = [
  "facebook/react",
  "torvalds/linux",
  "my-org/my-repo",
  "user123/project.js",
  "a/b",
];
export const githubRepo_should_not_match: string[] = [
  "facebook",
  "/react",
  "facebook/",
  "-org/repo",
  "/repo",
];

/**
 * Should match a Twitter/X handle (1-15 chars, alphanumeric + underscore).
 */
export const twitterHandle = /@[a-zA-Z_][a-zA-Z0-9_]{0,14}/;
export const twitterHandle_description =
  "Should match a Twitter/X handle (1-15 chars, alphanumeric + underscore).";
export const twitterHandle_should_match: string[] = [
  "@jack",
  "@TwitterDev",
  "@user_name",
  "@A",
  "@user123_test",
];
export const twitterHandle_should_not_match: string[] = [
  "@",
  "@123start",
  "noatsign",
  "@@double",
  "@-invalid",
];

/**
 * Should match a YouTube video ID (11 characters, base64url).
 */
export const youtubeVideoId = /[a-zA-Z0-9_-]{11}/;
export const youtubeVideoId_description =
  "Should match a YouTube video ID (11 characters, base64url).";
export const youtubeVideoId_should_match: string[] = [
  "dQw4w9WgXcQ",
  "jNQXAC9IVRw",
  "9bZkp7q19f0",
  "kJQP7kiw5Fk",
];
export const youtubeVideoId_should_not_match: string[] = [
  "dQw4w9WgXc",
  "dQw4w9WgXcQQ",
  "dQw4w9Wg.cQ",
  "dQw4w9Wg cQ",
];

/**
 * Should match an npm package name
 * (scoped @scope/pkg or unscoped package-name).
 */
export const npmPackage =
  /(?:@[a-z0-9](?:[a-z0-9._-]*[a-z0-9])?\/)?[a-z0-9](?:[a-z0-9._-]*[a-z0-9])?/;
export const npmPackage_description =
  "Should match an npm package name (scoped @scope/pkg or unscoped package-name).";
export const npmPackage_should_match: string[] = [
  "express",
  "lodash",
  "@types/node",
  "@babel/core",
  "my-package",
  "package123",
];
export const npmPackage_should_not_match: string[] = [
  "@/package",
  "-invalid",
  ".hidden",
  "UPPERCASE",
  "@-scope/pkg",
];

/**
 * Should match a Discord snowflake ID (17-20 digit numeric ID).
 */
export const discordSnowflake = /[0-9]{17,20}/;
export const discordSnowflake_description =
  "Should match a Discord snowflake ID (17-20 digit numeric ID).";
export const discordSnowflake_should_match: string[] = [
  "12345678901234567",
  "84484653687267328",
  "175928847299117063",
  "12345678901234567890",
];
export const discordSnowflake_should_not_match: string[] = [
  "1234567890123456",
  "123456789012345678901",
  "abcdefghijklmnopq",
  "1234567890123456a",
];
