/**
 * Should match a display aspect ratio (e.g. 16:9, 4:3).
 */
export const aspectRatio = /[1-9][0-9]*:[1-9][0-9]*/;
export const aspectRatio_description =
  "Should match a display aspect ratio (e.g. 16:9, 4:3).";
export const aspectRatio_should_match: string[] = [
  "16:9",
  "4:3",
  "21:9",
  "1:1",
  "32:9",
];
export const aspectRatio_should_not_match: string[] = [
  "0:9",
  "16:0",
  "16-9",
  ":9",
  "16:",
];

/**
 * Should match a screen resolution (e.g. 1920x1080, 3840x2160).
 */
export const resolution = /[1-9][0-9]*x[1-9][0-9]*/;
export const resolution_description =
  "Should match a screen resolution (e.g. 1920x1080, 3840x2160).";
export const resolution_should_match: string[] = [
  "1920x1080",
  "3840x2160",
  "1280x720",
  "800x600",
  "7680x4320",
];
export const resolution_should_not_match: string[] = [
  "0x1080",
  "1920x0",
  "1920*1080",
  "1920X1080",
  "1920 x 1080",
];

/**
 * Should match a common CSS named color.
 */
export const colorName =
  /red|blue|green|black|white|yellow|orange|purple|pink|gray|grey|brown|cyan|magenta|lime|navy|teal|silver|gold|indigo|violet|coral|salmon|khaki|maroon|olive|aqua|fuchsia|beige|ivory|linen|plum|orchid|peru|sienna|tan|wheat|tomato|turquoise/;
export const colorName_description = "Should match a common CSS named color.";
export const colorName_should_match: string[] = [
  "red",
  "blue",
  "green",
  "coral",
  "turquoise",
  "navy",
];
export const colorName_should_not_match: string[] = [
  "Red",
  "BLUE",
  "chartreuse",
  "123",
  "color",
];

/**
 * Should match a font stack declaration
 * (e.g. "Helvetica Neue", Arial, sans-serif).
 */
export const fontStack =
  /(?:"[^"]+"|'[^']+'|[a-zA-Z-]+)(?:\s*,\s*(?:"[^"]+"|'[^']+'|[a-zA-Z-]+))+/;
export const fontStack_description =
  'Should match a font stack declaration (e.g. "Helvetica Neue", Arial, sans-serif).';
export const fontStack_should_match: string[] = [
  '"Helvetica Neue", Arial, sans-serif',
  "Georgia, serif",
  "'Courier New', monospace",
  "system-ui, -apple-system, sans-serif",
];
export const fontStack_should_not_match: string[] = [
  "Arial",
  "sans-serif",
  ",Arial",
  "Arial,",
];
