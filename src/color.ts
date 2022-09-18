/**
Should match any valid css hex color. (#ffcc00,  #abc, or #ffcc0033)
 */
export const colorHex = /#((([0-9a-fA-F]{1}){3,4})|(([0-9a-fA-F]{2}){3,4}))/;

export const colorHex_description = "Should match any valid css hex color. (#ffcc00,  #abc, or #ffcc0033)";
export const colorHex_should_match: string[] = [
  "#abc",
  "#ABC",
  "#123",
  "#123456",
  "#aAcCff",
  "#1234",
  "#ffcc00",
  "#ffcc0033",
  "#abcdefee",
];
export const colorHex_should_not_match: string[] = [
  "#0ffcc00",
  "#abcdefG",
  "#FFG",
  "FFF",
  "FFF",
  "$FFF",
  "#12345",
  "#1234567",
  "#123456789",
  "#123456789a",
  "#123456789ab",
];

/**
Should match any valid css rgb o rgba color. (rgb(255,255,255), rgba(255,255,255,0.5))
 */
export const colorRgb =
  /rgba?\(\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})(\s*,\s*0?\.[0-9])?\s*\)/;

export const colorRgb_description = "Should match any valid css rgb o rgba color. (rgb(255,255,255), rgba(255,255,255,0.5))";
export const colorRgb_should_match: string[] = [
  "rgb(255,255,255)",
  "rgb(255,255,255,0.5)",
  "rgba(255,255,255,0.1)",
  "rgba(255,255,255)",
  "rgba( 255  ,   255     ,  255  )",
  "rgb(999,0,0)",
];
export const colorRgb_should_not_match: string[] = [
  "rgba(2 55,255,255)",
  "rgbc(300,0,0)",
  "rgb(256,25 5,255,0.5)",
  "rg(256,255,255,0.5)",
  "(256,255,255,0.5)",
];

/**
Should match any valid  css hsl color. (hsl(0,100%,50%), hsla(0,100%,50%,0.5))
 */

export const colorHsl =
  /hsla?\(\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})%\s*,\s*([0-9]{1,3}%)(\s*,\s*0?\.[0-9])?\s*\)/;

export const colorHsl_description = "Should match any valid  css hsl color. (hsl(0,100%,50%), hsla(0,100%,50%,0.5))";
export const colorHsl_should_match: string[] = [
  "hsl(0,100%,50%)",
  "hsl(0,100%,50%,0.5)",
  "hsla(0,100%,50%,0.1)",
  "hsla(0,100%,50%)",
  "hsla( 0  ,  100%       ,  50%  )",
  "hsl(24,50%,200%)",
];
export const colorHsl_should_not_match: string[] = [
  "hsl(24,50%,200)",
  "hsla(2 55,255,255)",
  "hslc(300,0%,0%)",
  "hsl(256,25 5,255,0.5)",
  "hs(256,255,255,0.5)",
  "(256,255,255,0.5)",
];

/**
Should match any valid css color.
 */
export const color = new RegExp(
  `(${colorHex.source})|(${colorRgb.source})|(${colorHsl.source})`,
);
export const color_description = "Should match any valid css color.";
export const color_should_match: string[] = [
  ...colorHex_should_match,
  ...colorRgb_should_match,
  ...colorHsl_should_match,
];
export const color_should_not_match: string[] = [
  ...colorHex_should_not_match,
  ...colorRgb_should_not_match,
  ...colorHsl_should_not_match,
];
