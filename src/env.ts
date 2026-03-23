/**
 * Should match an environment variable assignment
 * (e.g. KEY=value or export KEY=value).
 */
export const envVar = /(?:export\s+)?[A-Z][A-Z0-9_]*=[^\s]*/;
export const envVar_description =
  "Should match an environment variable assignment (e.g. KEY=value or export KEY=value).";
export const envVar_should_match: string[] = [
  "FOO=bar",
  "DATABASE_URL=postgres://localhost/db",
  "export SECRET_KEY=abc123",
  "NODE_ENV=production",
  "A=1",
];
export const envVar_should_not_match: string[] = [
  "foo=bar",
  "=value",
  "123=abc",
  "_KEY=val",
];

/**
 * Should match an environment variable placeholder
 * (e.g. ${VAR_NAME} or $VAR_NAME).
 */
export const envPlaceholder = /\$\{[A-Z_][A-Z0-9_]*\}|\$[A-Z_][A-Z0-9_]*/;
export const envPlaceholder_description =
  "Should match an environment variable placeholder (e.g. ${VAR_NAME} or $VAR_NAME).";
export const envPlaceholder_should_match: string[] = [
  "${HOME}",
  "$HOME",
  "${DATABASE_URL}",
  "$NODE_ENV",
  "${A}",
];
export const envPlaceholder_should_not_match: string[] = [
  "${lowercase}",
  "$123",
  "${}",
  "HOME",
];

/**
 * Should match a Docker image reference
 * (e.g. nginx:latest, registry.io/org/image:v1.2.3).
 */
export const dockerImage =
  /[a-z0-9]+(?:[._-][a-z0-9]+)*(?:\/[a-z0-9]+(?:[._-][a-z0-9]+)*)*(?::[a-zA-Z0-9][a-zA-Z0-9._-]*)?/;
export const dockerImage_description =
  "Should match a Docker image reference (e.g. nginx:latest, registry.io/org/image:v1.2.3).";
export const dockerImage_should_match: string[] = [
  "nginx:latest",
  "ubuntu:22.04",
  "registry.io/org/image:v1.2.3",
  "node:18-alpine",
  "myapp:build-123",
];
export const dockerImage_should_not_match: string[] = [
  ":latest",
  "UPPERCASE:tag",
  "image:",
  "a//b:tag",
];

/**
 * Should match a 5-field cron expression
 * (e.g. * /5 * * * *).
 */
export const cronExpression = /(?:[0-9*\/,-]+\s+){4}[0-9*\/,-]+/;
export const cronExpression_description =
  "Should match a 5-field cron expression (minute hour day month weekday).";
export const cronExpression_should_match: string[] = [
  "* * * * *",
  "0 12 * * 1-5",
  "*/5 * * * *",
  "0 0 1 1 *",
  "30 4 1,15 * *",
];
export const cronExpression_should_not_match: string[] = [
  "* * * *",
  "* * * * * *",
  "abc * * * *",
  "hello",
];

/**
 * Should match a generic database connection string URI
 * (e.g. postgres://user:pass@host:5432/db).
 */
export const connectionString =
  /[a-z][a-z0-9+.-]*:\/\/(?:[^\s:@]+(?::[^\s:@]*)?@)?(?:[^\s:\/]+(?::\d+)?)?(?:\/[^\s?#]*)?/;
export const connectionString_description =
  "Should match a generic database connection string URI (e.g. postgres://user:pass@host:5432/db).";
export const connectionString_should_match: string[] = [
  "postgres://user:pass@localhost:5432/mydb",
  "mysql://root@127.0.0.1/test",
  "redis://localhost:6379",
  "mongodb://admin:secret@db.example.com:27017/app",
  "sqlite:///path/to/db.sqlite",
];
export const connectionString_should_not_match: string[] = [
  "://missing-scheme",
  "postgres//no-colon",
  "just-a-string",
  "123://invalid",
];

/**
 * Should match an S3 URI (e.g. s3://bucket/key/path).
 */
export const s3Uri = /s3:\/\/[a-z0-9][a-z0-9.-]*[a-z0-9](?:\/[^\s]*)?/;
export const s3Uri_description =
  "Should match an S3 URI (e.g. s3://bucket/key/path).";
export const s3Uri_should_match: string[] = [
  "s3://my-bucket/path/to/file.txt",
  "s3://bucket123/key",
  "s3://my.bucket.name/folder/",
  "s3://data-lake/2024/01/data.parquet",
];
export const s3Uri_should_not_match: string[] = [
  "s3://",
  "s3://-bucket/key",
  "S3://bucket/key",
  "http://bucket/key",
];
