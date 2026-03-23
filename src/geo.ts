/**
 * Should match a latitude value in decimal degrees (-90 to 90).
 */
export const latitude = /-?(?:90(?:\.0+)?|[1-8]?[0-9](?:\.[0-9]+)?)/;
export const latitude_description =
  "Should match a latitude value in decimal degrees (-90 to 90).";
export const latitude_should_match: string[] = [
  "0",
  "45.123",
  "-90",
  "90",
  "90.0",
  "-45.6789",
  "12.3456789",
];
export const latitude_should_not_match: string[] = [
  "91",
  "-91",
  "100",
  "90.1",
  "-90.1",
];

/**
 * Should match a longitude value in decimal degrees (-180 to 180).
 */
export const longitude =
  /-?(?:180(?:\.0+)?|(?:1[0-7][0-9]|[1-9]?[0-9])(?:\.[0-9]+)?)/;
export const longitude_description =
  "Should match a longitude value in decimal degrees (-180 to 180).";
export const longitude_should_match: string[] = [
  "0",
  "45.123",
  "-180",
  "180",
  "180.0",
  "-179.999",
  "123.456789",
];
export const longitude_should_not_match: string[] = [
  "181",
  "-181",
  "200",
  "180.1",
  "-180.1",
];

/**
 * Should match a latitude,longitude coordinate pair.
 */
export const latLng = new RegExp(
  `${latitude.source},\\s*${longitude.source}`,
);
export const latLng_description =
  "Should match a latitude,longitude coordinate pair.";
export const latLng_should_match: string[] = [
  "0,0",
  "45.123, -93.456",
  "-90,180",
  "90, -180",
  "37.7749, -122.4194",
];
export const latLng_should_not_match: string[] = [
  "91, 0",
  "0, 181",
  "45.123",
  "abc, def",
];

/**
 * Should match a US ZIP code in 5-digit or ZIP+4 format.
 */
export const zipCodeUS = /[0-9]{5}(?:-[0-9]{4})?/;
export const zipCodeUS_description =
  "Should match a US ZIP code in 5-digit or ZIP+4 format.";
export const zipCodeUS_should_match: string[] = [
  "10001",
  "90210",
  "00501",
  "10001-1234",
  "99999-9999",
];
export const zipCodeUS_should_not_match: string[] = [
  "1234",
  "123456",
  "ABCDE",
  "10001-123",
  "10001-12345",
];

/**
 * Should match a UK postcode (e.g. SW1A 1AA, EC1A 1BB).
 */
export const zipCodeUK = /[A-Z]{1,2}[0-9][A-Z0-9]?\s?[0-9][A-Z]{2}/;
export const zipCodeUK_description =
  "Should match a UK postcode (e.g. SW1A 1AA, EC1A 1BB).";
export const zipCodeUK_should_match: string[] = [
  "SW1A 1AA",
  "EC1A 1BB",
  "W1A 0AX",
  "M1 1AE",
  "B33 8TH",
  "CR2 6XH",
  "DN55 1PT",
];
export const zipCodeUK_should_not_match: string[] = [
  "111 1AA",
  "AAA 1AA",
  "SW1A 1A",
  "12345",
  "SWIA IAA",
];

/**
 * Should match a Canadian postal code (e.g. K1A 0B1).
 */
export const zipCodeCA =
  /[A-CEGHJ-NPR-TVXY][0-9][A-CEGHJ-NPR-TV-Z]\s?[0-9][A-CEGHJ-NPR-TV-Z][0-9]/;
export const zipCodeCA_description =
  "Should match a Canadian postal code (e.g. K1A 0B1).";
export const zipCodeCA_should_match: string[] = [
  "K1A 0B1",
  "V6B 3K9",
  "T2P 1J9",
  "M5W 1E6",
  "H3Z 2Y7",
];
export const zipCodeCA_should_not_match: string[] = [
  "D1A 0B1",
  "K1A OB1",
  "12345",
  "K1A0B",
  "W1A 0B1",
];

/**
 * Should match an ISO 3166-1 alpha-2 country code (e.g. US, DE).
 */
export const countryCode2 = /[A-Z]{2}/;
export const countryCode2_description =
  "Should match an ISO 3166-1 alpha-2 country code (e.g. US, DE).";
export const countryCode2_should_match: string[] = [
  "US",
  "DE",
  "GB",
  "JP",
  "FR",
];
export const countryCode2_should_not_match: string[] = [
  "us",
  "USA",
  "1A",
  "U",
  "U5",
];

/**
 * Should match an ISO 3166-1 alpha-3 country code (e.g. USA, DEU).
 */
export const countryCode3 = /[A-Z]{3}/;
export const countryCode3_description =
  "Should match an ISO 3166-1 alpha-3 country code (e.g. USA, DEU).";
export const countryCode3_should_match: string[] = [
  "USA",
  "DEU",
  "GBR",
  "JPN",
  "FRA",
];
export const countryCode3_should_not_match: string[] = [
  "usa",
  "US",
  "USAA",
  "1AB",
  "U5A",
];
