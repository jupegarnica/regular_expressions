/**
 * Should match an MD5 hash (32 lowercase hex characters).
 */
export const md5 = /[0-9a-f]{32}/;
export const md5_description =
  "Should match an MD5 hash (32 lowercase hex characters).";
export const md5_should_match: string[] = [
  "d41d8cd98f00b204e9800998ecf8427e",
  "098f6bcd4621d373cade4e832627b4f6",
  "5d41402abc4b2a76b9719d911017c592",
];
export const md5_should_not_match: string[] = [
  "d41d8cd98f00b204e9800998ecf8427",
  "g41d8cd98f00b204e9800998ecf8427e",
  "D41D8CD98F00B204E9800998ECF8427E",
  "d41d8cd98f00b204e9800998ecf8427e0",
];

/**
 * Should match a SHA-1 hash (40 lowercase hex characters).
 */
export const sha1 = /[0-9a-f]{40}/;
export const sha1_description =
  "Should match a SHA-1 hash (40 lowercase hex characters).";
export const sha1_should_match: string[] = [
  "da39a3ee5e6b4b0d3255bfef95601890afd80709",
  "a94a8fe5ccb19ba61c4c0873d391e987982fbbd3",
  "2fd4e1c67a2d28fced849ee1bb76e7391b93eb12",
];
export const sha1_should_not_match: string[] = [
  "da39a3ee5e6b4b0d3255bfef95601890afd8070",
  "ga39a3ee5e6b4b0d3255bfef95601890afd80709",
  "DA39A3EE5E6B4B0D3255BFEF95601890AFD80709",
];

/**
 * Should match a SHA-256 hash (64 lowercase hex characters).
 */
export const sha256 = /[0-9a-f]{64}/;
export const sha256_description =
  "Should match a SHA-256 hash (64 lowercase hex characters).";
export const sha256_should_match: string[] = [
  "e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855",
  "ba7816bf8f01cfea414140de5dae2223b00361a396177a9cb410ff61f20015ad",
  "d7a8fbb307d7809469ca9abcb0082e4f8d5651e46d3cdb762d02d0bf37c9e592",
];
export const sha256_should_not_match: string[] = [
  "e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b85",
  "g3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855",
  "E3B0C44298FC1C149AFBF4C8996FB92427AE41E4649B934CA495991B7852B855",
];

/**
 * Should match a SHA-512 hash (128 lowercase hex characters).
 */
export const sha512 = /[0-9a-f]{128}/;
export const sha512_description =
  "Should match a SHA-512 hash (128 lowercase hex characters).";
export const sha512_should_match: string[] = [
  "cf83e1357eefb8bdf1542850d66d8007d620e4050b5715dc83f4a921d36ce9ce47d0d13c5d85f2b0ff8318d2877eec2f63b931bd47417a81a538327af927da3e",
  "ddaf35a193617abacc417349ae20413112e6fa4e89a97ea20a9eeee64b55d39a2192992a274fc1a836ba3c23a3feebbd454d4423643ce80e2a9ac94fa54ca49f",
];
export const sha512_should_not_match: string[] = [
  "cf83e1357eefb8bdf1542850d66d8007d620e4050b5715dc83f4a921d36ce9ce47d0d13c5d85f2b0ff8318d2877eec2f63b931bd47417a81a538327af927da3",
  "CF83E1357EEFB8BDF1542850D66D8007D620E4050B5715DC83F4A921D36CE9CE47D0D13C5D85F2B0FF8318D2877EEC2F63B931BD47417A81A538327AF927DA3E",
];

/**
 * Should match a UUID version 4 (RFC 4122).
 */
export const uuidV4 =
  /[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}/;
export const uuidV4_description = "Should match a UUID version 4 (RFC 4122).";
export const uuidV4_should_match: string[] = [
  "550e8400-e29b-41d4-a716-446655440000",
  "6ba7b810-9dad-41d4-80b5-fc0098000000",
  "f47ac10b-58cc-4372-a567-0e02b2c3d479",
  "91b4d142-5c28-4be2-8e5a-2b3c4d5e6f70",
];
export const uuidV4_should_not_match: string[] = [
  "550e8400-e29b-31d4-a716-446655440000",
  "550e8400-e29b-41d4-c716-446655440000",
  "550e8400e29b41d4a716446655440000",
  "550e8400-e29b-41d4-a716-44665544000",
  "ZZZZZZZZ-ZZZZ-4ZZZ-8ZZZ-ZZZZZZZZZZZZ",
];

/**
 * Should match a JSON Web Token (JWT) with three base64url-encoded segments.
 */
export const jwtToken = /[A-Za-z0-9_-]{2,}(?:\.[A-Za-z0-9_-]{2,}){2}/;
export const jwtToken_description =
  "Should match a JSON Web Token (JWT) with three base64url-encoded segments.";
export const jwtToken_should_match: string[] = [
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIn0.dozjgNryP4J3jVmNHl0w5N_XgL0n3I9PlFUP0THsR8U",
  "eyJhbGciOiJSUzI1NiJ9.eyJpc3MiOiJqb2UifQ.cC4hiUPoj9Eetdgtv3hF80EGrhuB__dzERat0XF9g2VtQgr9PJbu3XOiZj5RZmh7AAuHIm4Bh-0Qc_lF5YKt_O8W2Fp5jujGbds9uJdbF9CUAr7t1dnZcAcQjbKBYNX4BAynRFdiuB--f_nZLgrnbyTyWzO75vRK5h6xBArLIARNPvkSjtQBMHlb1L07Qe7K0GarZRmB_eSN9383LcOLn6_dO--xi12jzDwusC-eOkHWEsqtFZESc6BfI7noOPqvhJ1phCnvWh6IeYI2w9QOYEUipUTI8np6LbgGY9Fs98rqVt5AXLIhWkWywlVmtVrBp0igcN_IoypGlUPQGe77Rw",
  "abc.def.ghi",
];
export const jwtToken_should_not_match: string[] = [
  "abc.def",
  "abc",
  ".def.ghi",
  "abc..ghi",
  "a.b.c",
];

/**
 * Should match a PEM-encoded certificate or key block.
 */
export const pemCertificate =
  /-----BEGIN [A-Z ]+-----[\s\S]+?-----END [A-Z ]+-----/;
export const pemCertificate_description =
  "Should match a PEM-encoded certificate or key block.";
export const pemCertificate_should_match: string[] = [
  "-----BEGIN CERTIFICATE-----\nMIIBkTCB+wIJAL2B\n-----END CERTIFICATE-----",
  "-----BEGIN PUBLIC KEY-----\nMIGfMA0GCSqGSIb3DQEBAQUAA4GN\n-----END PUBLIC KEY-----",
  "-----BEGIN RSA PRIVATE KEY-----\nMIIEpAIBAAKCAQEA\n-----END RSA PRIVATE KEY-----",
];
export const pemCertificate_should_not_match: string[] = [
  "-----BEGIN CERTIFICATE-----",
  "-----END CERTIFICATE-----",
  "-----BEGIN lowercase-----\ndata\n-----END lowercase-----",
  "BEGIN CERTIFICATE\ndata\nEND CERTIFICATE",
];
