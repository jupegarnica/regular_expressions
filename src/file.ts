/**
 * Should match a Unix-style absolute file path.
 */
export const filePathUnix = /(?:\/[a-zA-Z0-9._-]+)+/;
export const filePathUnix_description =
  "Should match a Unix-style absolute file path.";
export const filePathUnix_should_match: string[] = [
  "/usr/local/bin/foo",
  "/home/user/file.txt",
  "/var/log/syslog",
  "/tmp/test",
  "/a",
];
export const filePathUnix_should_not_match: string[] = [
  "usr/local/bin",
  "C:\\Users\\foo",
  "//double",
  "/",
  "relative/path",
];

/**
 * Should match a Windows-style absolute file path.
 */
export const filePathWindows =
  /[a-zA-Z]:\\(?:[a-zA-Z0-9._-]+\\)*[a-zA-Z0-9._-]+/;
export const filePathWindows_description =
  "Should match a Windows-style absolute file path.";
export const filePathWindows_should_match: string[] = [
  "C:\\Users\\foo\\bar",
  "D:\\Documents\\file.txt",
  "E:\\data",
  "C:\\Windows\\System32\\cmd.exe",
];
export const filePathWindows_should_not_match: string[] = [
  "/usr/local/bin",
  "C:/Users/foo",
  "C:\\",
  "1:\\foo",
  "CC:\\foo",
];

/**
 * Should match a file extension including compound extensions
 * like .tar.gz.
 */
export const fileExtension = /\.[a-zA-Z0-9]+(?:\.[a-zA-Z0-9]+)*/;
export const fileExtension_description =
  "Should match a file extension including compound extensions like .tar.gz.";
export const fileExtension_should_match: string[] = [
  ".txt",
  ".tar.gz",
  ".js",
  ".d.ts",
  ".json",
  ".min.js",
];
export const fileExtension_should_not_match: string[] = [
  "txt",
  ".",
  "..",
  "tar.gz",
  "..txt",
];

/**
 * Should match a valid filename without path separators.
 */
export const fileName =
  /[a-zA-Z0-9](?:[a-zA-Z0-9._-]*[a-zA-Z0-9])?(?:\.[a-zA-Z0-9]+)?/;
export const fileName_description =
  "Should match a valid filename without path separators.";
export const fileName_should_match: string[] = [
  "file.txt",
  "my-document.pdf",
  "image_001.png",
  "README",
  "a",
  "data.backup.tar.gz",
];
export const fileName_should_not_match: string[] = [
  ".hidden",
  "-start",
  "file/name",
  "my file",
  "file?name",
];

/**
 * Should match a MIME type (e.g. application/json, image/png).
 */
export const mimeType =
  /[a-zA-Z0-9][a-zA-Z0-9!#$&\-^_]*\/[a-zA-Z0-9][a-zA-Z0-9!#$&\-^_.+]*/;
export const mimeType_description =
  "Should match a MIME type (e.g. application/json, image/png).";
export const mimeType_should_match: string[] = [
  "application/json",
  "text/html",
  "image/png",
  "application/octet-stream",
  "text/plain",
  "application/vnd.api+json",
  "multipart/form-data",
];
export const mimeType_should_not_match: string[] = [
  "application",
  "/json",
  "application/",
  "text html",
  "application\\json",
];

/**
 * Should match a semantic version string (e.g. 1.2.3,
 * 1.0.0-alpha.1, 2.0.0+build.123).
 */
export const semver =
  /(?:0|[1-9][0-9]*)\.(?:0|[1-9][0-9]*)\.(?:0|[1-9][0-9]*)(?:-(?:0|[1-9][0-9]*|[0-9]*[a-zA-Z-][0-9a-zA-Z-]*)(?:\.(?:0|[1-9][0-9]*|[0-9]*[a-zA-Z-][0-9a-zA-Z-]*))*)?(?:\+[0-9a-zA-Z-]+(?:\.[0-9a-zA-Z-]+)*)?/;
export const semver_description =
  "Should match a semantic version string (e.g. 1.2.3, 1.0.0-alpha.1, 2.0.0+build.123).";
export const semver_should_match: string[] = [
  "1.2.3",
  "0.0.0",
  "1.0.0-alpha",
  "1.0.0-alpha.1",
  "1.0.0+build.123",
  "1.0.0-beta+exp.sha.5114f85",
  "10.20.30",
];
export const semver_should_not_match: string[] = [
  "1.2",
  "1",
  "01.2.3",
  "1.02.3",
  "1.2.03",
  "1.2.3.4",
];

/**
 * Should match a git commit hash (7 to 40 lowercase hex characters).
 */
export const gitCommitHash = /[0-9a-f]{7,40}/;
export const gitCommitHash_description =
  "Should match a git commit hash (7 to 40 lowercase hex characters).";
export const gitCommitHash_should_match: string[] = [
  "a94a8fe",
  "da39a3ee5e6b4b0d3255bfef95601890afd80709",
  "1234abc",
  "abcdef1234567890abcdef1234567890abcdef12",
];
export const gitCommitHash_should_not_match: string[] = [
  "a94a8f",
  "ABCDEF1",
  "ghijklm",
  "12345g7",
];

/**
 * Should match a valid git branch name.
 */
export const gitBranchName =
  /[a-zA-Z0-9](?:[a-zA-Z0-9_\/-]*(?:\.[a-zA-Z0-9_\/-]+))*(?:[a-zA-Z0-9_\/-]*[a-zA-Z0-9])?/;
export const gitBranchName_description =
  "Should match a valid git branch name.";
export const gitBranchName_should_match: string[] = [
  "main",
  "feature/login",
  "fix/bug-123",
  "release/v1.0.0",
  "my-branch",
  "dev",
];
export const gitBranchName_should_not_match: string[] = [
  ".hidden",
  "-start",
  "branch..name",
  "branch name",
  "branch~name",
];
