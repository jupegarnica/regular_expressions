/**
 * Should match a CSS length value with unit
 * (e.g. 12px, 1.5rem, 100vh, 50%).
 */
export const cssLength =
  /-?(?:0|[1-9][0-9]*)(?:\.[0-9]+)?(?:px|em|rem|vh|vw|vmin|vmax|ch|ex|cm|mm|in|pt|pc|%)/;
export const cssLength_description =
  "Should match a CSS length value with unit (e.g. 12px, 1.5rem, 100vh, 50%).";
export const cssLength_should_match: string[] = [
  "12px",
  "1.5rem",
  "100vh",
  "50%",
  "0px",
  "-10px",
  "3.14em",
  "100vw",
];
export const cssLength_should_not_match: string[] = [
  "12",
  "px",
  "12 px",
  "12dp",
  "12sp",
];

/**
 * Should match a data size with unit
 * (e.g. 1.5GB, 256KB, 4TB, 100MiB).
 */
export const dataSize =
  /(?:0|[1-9][0-9]*)(?:\.[0-9]+)?\s*(?:Ti|Gi|Mi|Ki|T|G|M|K)?B/;
export const dataSize_description =
  "Should match a data size with unit (e.g. 1.5GB, 256KB, 4TB, 100MiB).";
export const dataSize_should_match: string[] = [
  "1.5GB",
  "256KB",
  "4TB",
  "100MiB",
  "512B",
  "0B",
  "1 GiB",
  "64KiB",
];
export const dataSize_should_not_match: string[] = [
  "1.5",
  "GB",
  "1.5XB",
  "1.5 G",
];

/**
 * Should match a percentage value (e.g. 50%, 100%, 0.5%).
 */
export const percentage = /-?(?:0|[1-9][0-9]*)(?:\.[0-9]+)?%/;
export const percentage_description =
  "Should match a percentage value (e.g. 50%, 100%, 0.5%).";
export const percentage_should_match: string[] = [
  "0%",
  "50%",
  "100%",
  "0.5%",
  "99.99%",
  "-10%",
];
export const percentage_should_not_match: string[] = [
  "%",
  "50",
  "50 %",
  "abc%",
];

/**
 * Should match an ISO 8601 duration
 * (e.g. P1DT12H, PT30M, P1Y2M3D).
 */
export const isoDuration =
  /P(?=\d|T\d)(?:\d+Y)?(?:\d+M)?(?:\d+W)?(?:\d+D)?(?:T(?:\d+H)?(?:\d+M)?(?:\d+(?:\.\d+)?S)?)?/;
export const isoDuration_description =
  "Should match an ISO 8601 duration (e.g. P1DT12H, PT30M, P1Y2M3D).";
export const isoDuration_should_match: string[] = [
  "P1D",
  "PT30M",
  "P1DT12H",
  "P1Y2M3D",
  "PT1H30M",
  "P2W",
  "PT0.5S",
];
export const isoDuration_should_not_match: string[] = [
  "1D",
  "T30M",
  "P",
  "30M",
  "1H30M",
];

/**
 * Should match a CSS angle value
 * (e.g. 90deg, 3.14rad, 100grad, 0.25turn).
 */
export const angle = /-?(?:0|[1-9][0-9]*)(?:\.[0-9]+)?(?:deg|rad|grad|turn)/;
export const angle_description =
  "Should match a CSS angle value (e.g. 90deg, 3.14rad, 100grad, 0.25turn).";
export const angle_should_match: string[] = [
  "90deg",
  "3.14rad",
  "100grad",
  "0.25turn",
  "0deg",
  "-45deg",
  "360deg",
];
export const angle_should_not_match: string[] = [
  "90",
  "deg",
  "90 deg",
  "90degrees",
];

/**
 * Should match a temperature value
 * (e.g. 98.6\u00B0F, -40\u00B0C, 300K).
 */
export const temperature =
  /-?(?:0|[1-9][0-9]*)(?:\.[0-9]+)?\s*(?:\u00B0[FCR]|K)/;
export const temperature_description =
  "Should match a temperature value (e.g. 98.6\u00B0F, -40\u00B0C, 300K).";
export const temperature_should_match: string[] = [
  "98.6\u00B0F",
  "-40\u00B0C",
  "300K",
  "0\u00B0C",
  "212\u00B0F",
  "373.15K",
];
export const temperature_should_not_match: string[] = [
  "98.6F",
  "300 Kelvin",
  "\u00B0C",
  "hot",
];
