/**
 * Should match a SQL keyword
 * (SELECT, INSERT, UPDATE, DELETE, CREATE, ALTER, DROP, JOIN, WHERE, FROM, etc.).
 */
export const sqlKeyword =
  /SELECT|INSERT|UPDATE|DELETE|CREATE|ALTER|DROP|JOIN|WHERE|FROM|INTO|VALUES|SET|ORDER|GROUP|HAVING|LIMIT|OFFSET|UNION|DISTINCT|INDEX|TABLE|VIEW|BEGIN|COMMIT|ROLLBACK/;
export const sqlKeyword_description =
  "Should match a SQL keyword (SELECT, INSERT, UPDATE, DELETE, etc.).";
export const sqlKeyword_should_match: string[] = [
  "SELECT",
  "INSERT",
  "UPDATE",
  "DELETE",
  "CREATE",
  "JOIN",
  "WHERE",
];
export const sqlKeyword_should_not_match: string[] = [
  "select",
  "SELECTS",
  "FIND",
  "REMOVE",
  "FETCH",
];

/**
 * Should match a dotted SQL table reference
 * (e.g. schema.table or database.schema.table).
 */
export const sqlTableRef =
  /[a-zA-Z_][a-zA-Z0-9_]*(?:\.[a-zA-Z_][a-zA-Z0-9_]*)+/;
export const sqlTableRef_description =
  "Should match a dotted SQL table reference (e.g. schema.table).";
export const sqlTableRef_should_match: string[] = [
  "public.users",
  "mydb.public.orders",
  "dbo.Customers",
  "schema_1.table_2",
];
export const sqlTableRef_should_not_match: string[] = [
  "users",
  ".users",
  "public.",
  "123.table",
];

/**
 * Should match a MongoDB ObjectId (24 lowercase hex characters).
 */
export const mongoObjectId = /[0-9a-f]{24}/;
export const mongoObjectId_description =
  "Should match a MongoDB ObjectId (24 lowercase hex characters).";
export const mongoObjectId_should_match: string[] = [
  "507f1f77bcf86cd799439011",
  "000000000000000000000000",
  "aabbccddeeff112233445566",
];
export const mongoObjectId_should_not_match: string[] = [
  "507f1f77bcf86cd79943901",
  "507F1F77BCF86CD799439011",
  "507f1f77bcf86cd79943901g",
  "short",
];

/**
 * Should match a SQL prepared statement placeholder
 * ($1, :name, or ?).
 */
export const sqlPlaceholder = /\$[1-9][0-9]*|:[a-zA-Z_][a-zA-Z0-9_]*|\?/;
export const sqlPlaceholder_description =
  "Should match a SQL prepared statement placeholder ($1, :name, or ?).";
export const sqlPlaceholder_should_match: string[] = [
  "$1",
  "$12",
  ":username",
  ":user_id",
  "?",
];
export const sqlPlaceholder_should_not_match: string[] = [
  "$0",
  "$",
  ":",
  ":123",
  "??",
];

/**
 * Should match a single-line SQL comment (-- comment).
 */
export const sqlComment = /--.*/;
export const sqlComment_description =
  "Should match a single-line SQL comment (-- comment).";
export const sqlComment_should_match: string[] = [
  "-- this is a comment",
  "-- SELECT * FROM users",
  "--compact",
  "-- ",
];
export const sqlComment_should_not_match: string[] = [
  "- not a comment",
  "// js comment",
  "# python comment",
  "/* block */",
];
