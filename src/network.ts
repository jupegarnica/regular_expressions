/**
 * Should match an IEEE 802 MAC address separated by colons, dashes,
 * or dots.
 */
export const macAddress = /[0-9a-fA-F]{2}(?:[:\-][0-9a-fA-F]{2}){5}/;
export const macAddress_description =
  "Should match an IEEE 802 MAC address separated by colons, dashes, or dots.";
export const macAddress_should_match: string[] = [
  "00:1A:2B:3C:4D:5E",
  "aa:bb:cc:dd:ee:ff",
  "00-1A-2B-3C-4D-5E",
  "aa-bb-cc-dd-ee-ff",
  "01:23:45:67:89:ab",
];
export const macAddress_should_not_match: string[] = [
  "00:1A:2B:3C:4D",
  "00:1A:2B:3C:4D:5E:6F",
  "GG:HH:II:JJ:KK:LL",
  "001A2B3C4D5E",
  "00:1A:2B:3C:4D:5G",
];

/**
 * Should match a valid TCP/UDP port number (0-65535).
 */
export const portNumber =
  /(?:6553[0-5]|655[0-2][0-9]|65[0-4][0-9]{2}|6[0-4][0-9]{3}|[1-5][0-9]{4}|[1-9][0-9]{0,3}|0)/;
export const portNumber_description =
  "Should match a valid TCP/UDP port number (0-65535).";
export const portNumber_should_match: string[] = [
  "0",
  "80",
  "443",
  "8080",
  "65535",
  "1024",
  "3000",
];
export const portNumber_should_not_match: string[] = [
  "65536",
  "99999",
  "100000",
  "-1",
  "abc",
];

/**
 * Should match an IPv4 CIDR block notation (e.g. 192.168.1.0/24).
 */
export const cidrBlock =
  /(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\/(?:3[0-2]|[12]?[0-9])/;
export const cidrBlock_description =
  "Should match an IPv4 CIDR block notation (e.g. 192.168.1.0/24).";
export const cidrBlock_should_match: string[] = [
  "192.168.1.0/24",
  "10.0.0.0/8",
  "172.16.0.0/12",
  "0.0.0.0/0",
  "255.255.255.255/32",
];
export const cidrBlock_should_not_match: string[] = [
  "192.168.1.0/33",
  "256.168.1.0/24",
  "192.168.1/24",
  "192.168.1.0",
];

/**
 * Should match a bare domain name without protocol.
 */
export const domainName =
  /(?:[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?\.)+[a-zA-Z]{2,}/;
export const domainName_description =
  "Should match a bare domain name without protocol.";
export const domainName_should_match: string[] = [
  "example.com",
  "sub.example.com",
  "my-site.org",
  "a.co",
  "deep.nested.sub.domain.example.com",
];
export const domainName_should_not_match: string[] = [
  "example",
  "-example.com",
  "example-.com",
  "example.c",
  ".example.com",
];

/**
 * Should match a standard HTTP method verb.
 */
export const httpMethod =
  /GET|POST|PUT|DELETE|PATCH|HEAD|OPTIONS|CONNECT|TRACE/;
export const httpMethod_description =
  "Should match a standard HTTP method verb.";
export const httpMethod_should_match: string[] = [
  "GET",
  "POST",
  "PUT",
  "DELETE",
  "PATCH",
  "HEAD",
  "OPTIONS",
  "CONNECT",
  "TRACE",
];
export const httpMethod_should_not_match: string[] = [
  "get",
  "GETS",
  "PUSH",
  "REMOVE",
  "FETCH",
];

/**
 * Should match an HTTP status code (100-599).
 */
export const httpStatusCode = /[1-5][0-9]{2}/;
export const httpStatusCode_description =
  "Should match an HTTP status code (100-599).";
export const httpStatusCode_should_match: string[] = [
  "100",
  "200",
  "301",
  "404",
  "500",
  "599",
];
export const httpStatusCode_should_not_match: string[] = [
  "600",
  "099",
  "999",
  "10",
  "1000",
];

/**
 * Should match a Bearer token authorization header value.
 */
export const bearerToken = /Bearer\s+[A-Za-z0-9\-._~+\/]+=*/;
export const bearerToken_description =
  "Should match a Bearer token authorization header value.";
export const bearerToken_should_match: string[] = [
  "Bearer eyJhbGciOiJIUzI1NiJ9",
  "Bearer abc123def456",
  "Bearer dG9rZW4=",
];
export const bearerToken_should_not_match: string[] = [
  "bearer abc123",
  "Basic abc123",
  "Bearerabc123",
  "Bearer ",
];

/**
 * Should match a Basic authentication header value (Basic followed by
 * base64).
 */
export const basicAuth = /Basic\s+[A-Za-z0-9+\/]+=*/;
export const basicAuth_description =
  "Should match a Basic authentication header value (Basic followed by base64).";
export const basicAuth_should_match: string[] = [
  "Basic dXNlcjpwYXNz",
  "Basic YWRtaW46YWRtaW4=",
  "Basic Zm9vOmJhcg==",
];
export const basicAuth_should_not_match: string[] = [
  "basic dXNlcjpwYXNz",
  "Bearer dXNlcjpwYXNz",
  "Basicabc123",
  "Basic ",
];
