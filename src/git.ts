/**
 * Should match a conventional commit message
 * (e.g. feat(scope): message or fix!: breaking change).
 */
export const conventionalCommit =
  /(?:feat|fix|docs|style|refactor|perf|test|build|ci|chore|revert)(?:\([a-zA-Z0-9_-]+\))?!?:\s.+/;
export const conventionalCommit_description =
  "Should match a conventional commit message (e.g. feat(scope): message).";
export const conventionalCommit_should_match: string[] = [
  "feat: add new feature",
  "fix(auth): resolve login bug",
  "docs: update README",
  "feat!: breaking change",
  "refactor(core): simplify logic",
  "chore: update deps",
];
export const conventionalCommit_should_not_match: string[] = [
  "feature: add something",
  "feat add new feature",
  "feat:",
  "feat(: bad scope",
  "FIX: uppercase",
];

/**
 * Should match a git diff hunk header
 * (e.g. @@ -1,3 +1,4 @@).
 */
export const gitDiffHunk = /@@ -\d+(?:,\d+)? \+\d+(?:,\d+)? @@/;
export const gitDiffHunk_description =
  "Should match a git diff hunk header (e.g. @@ -1,3 +1,4 @@).";
export const gitDiffHunk_should_match: string[] = [
  "@@ -1,3 +1,4 @@",
  "@@ -0,0 +1,10 @@",
  "@@ -100 +200 @@",
  "@@ -1,5 +1,5 @@",
];
export const gitDiffHunk_should_not_match: string[] = [
  "@@ -1 @@",
  "@@ +1 @@",
  "--- a/file",
  "+++ b/file",
];

/**
 * Should match a git conflict marker
 * (<<<<<<< HEAD, =======, or >>>>>>> branch).
 */
export const gitConflictMarker = /(?:<{7}|={7}|>{7})(?:\s+\S+)?/;
export const gitConflictMarker_description =
  "Should match a git conflict marker (<<<<<<< HEAD, =======, >>>>>>> branch).";
export const gitConflictMarker_should_match: string[] = [
  "<<<<<<< HEAD",
  "=======",
  ">>>>>>> feature/branch",
  "<<<<<<< ours",
  ">>>>>>> theirs",
];
export const gitConflictMarker_should_not_match: string[] = [
  "<<<<<< short",
  "====",
  ">>> not enough",
  "<<<<<<",
];

/**
 * Should match a git remote URL
 * (SSH git@host:org/repo.git or HTTPS ...git).
 */
export const gitRemoteUrl =
  /(?:git@[a-zA-Z0-9.-]+:[a-zA-Z0-9_-]+\/[a-zA-Z0-9._-]+(?:\.git)?|https?:\/\/[a-zA-Z0-9.-]+\/[a-zA-Z0-9_-]+\/[a-zA-Z0-9._-]+(?:\.git)?)/;
export const gitRemoteUrl_description =
  "Should match a git remote URL (SSH or HTTPS format).";
export const gitRemoteUrl_should_match: string[] = [
  "git@github.com:user/repo.git",
  "https://github.com/user/repo.git",
  "git@gitlab.com:org/project",
  "https://bitbucket.org/team/repo",
];
export const gitRemoteUrl_should_not_match: string[] = [
  "github.com/user/repo",
  "git@:user/repo.git",
  "ftp://github.com/user/repo",
  "user/repo",
];

/**
 * Should match a git tag (e.g. v1.2.3, release-1.0).
 */
export const gitTag =
  /v?(?:0|[1-9][0-9]*)(?:\.(?:0|[1-9][0-9]*))+(?:-[a-zA-Z0-9._-]+)?/;
export const gitTag_description =
  "Should match a git tag (e.g. v1.2.3, release-1.0).";
export const gitTag_should_match: string[] = [
  "v1.2.3",
  "1.0.0",
  "v0.1.0",
  "v2.0.0-beta.1",
  "1.0.0-rc1",
  "v10.20.30",
];
export const gitTag_should_not_match: string[] = [
  "v1",
  "abc",
  "v",
  "1",
  "v01.2.3",
];
