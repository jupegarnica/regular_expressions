/**
 * should match valid hours in 24h format
 */

export const hour = /([0-1][0-9]|2[0-3])/;

export const hour_description = "should match valid hours in 24h format";
export const hour_should_match: string[] = [
  "00",
  "23",
  "12",
  "15",
  "05",
];
export const hour_should_not_match: string[] = [
  "24",
  "-2",
  "2",
  "0",
  "33",
];

/**
 * should match valid minutes in 24h format
 */

export const minute = /([0-5][0-9])/;

export const minute_description = "should match valid minutes in 24h format";
export const minute_should_match: string[] = [
  "00",
  "59",
  "12",
  "15",
  "05",
];
export const minute_should_not_match: string[] = [
  "60",
  "-2",
  "2",
  "0",
];
/**
 * should match valid seconds in 24h format
 */

export const second = /([0-5][0-9])/;

export const second_description = "should match valid seconds in 24h format";
export const second_should_match: string[] = [
  "00",
  "59",
  "12",
  "15",
  "05",
];
export const second_should_not_match: string[] = [
  "60",
  "-2",
  "2",
  "0",
];

/**
 * should match valid milliseconds in 24h format
 */

export const millisecond = /([0-9]{3})/;
export const millisecond_description = "should match valid milliseconds in 24h format";
export const millisecond_should_match: string[] = [
  "000",
  "999",
  "123",
  "456",
  "789",
];
export const millisecond_should_not_match: string[] = [
  "1000",
  "-22",
  "2",
  "0",
  "33",
];

/**
 * should match valid time in 24h format
 */

export const time = /([0-1][0-9]|2[0-3]):([0-5][0-9]):([0-5][0-9])/;
export const time_description = "should match valid time in 24h format";
export const time_should_match: string[] = [
  "00:00:00",
  "23:59:59",
  "12:00:00",
  "15:00:00",
  "05:05:05",
];
export const time_should_not_match: string[] = [
  "05:05:5",
  "05:5:05",
  "1:5:05",
  "24:00:00",
  "00:60:00",
  "00:00:60",
];

/**
 * should match any day number, 2 digits numbers from 01 to 31,
 */

export const day = /(0[1-9]|[1-2][0-9]|3[0-1])/;
export const day_description = "should match any day number, 2 digits numbers from 01 to 31,";
export const day_should_match: string[] = [
  "01",
  "12",
  "03",
  "04",
  "05",
  "22",
  "31",
];
export const day_should_not_match: string[] = [
  "00",
  "32",
  "100",
  "0",
  "2",
];

/**
 * should match any month number, must be 2 digits numbers
 */
export const month = /(0[1-9]|1[0-2])/;
export const month_description = "should match any month number, must be 2 digits numbers";
export const month_should_match: string[] = [
  "01",
  "12",
  "03",
  "04",
];
export const month_should_not_match: string[] = [
  "13",
  "00",
  "2",
];

/**
 * should match any year number, must be  4 digits numbers
 */

export const year = /([0-9]{4})/;
export const year_description = "should match any year number, must be  4 digits numbers";
export const year_should_match: string[] = [
  "2020",
  "1982",
  "1082",
  "3022",
  "2021",
  "2022",
  "2023",
  "2024",
];
export const year_should_not_match: string[] = [
  "019",
  "25",
  "26",
  "27",
  "28",
];

/**
 * should match any date in YYYY-MM-DD format
 */

export const date = new RegExp(`${year.source}-${month.source}-${day.source}`);
export const date_description = "should match any date in YYYY-MM-DD format";
export const date_should_match: string[] = [
  "2022-01-01",
  "3044-12-31",
  "1982-01-01",
  "1982-12-31",
  "1082-01-01",
  "0082-12-31",
];
export const date_should_not_match: string[] = [
  "2022/01/01",
  "13-12-2021",
  "82-12-31",
  "2020-31-12",
];

/**
 * should match any date time in `YYYY-MM-DD  hh:mm:ss` format
 */

export const dateTime = new RegExp(`${date.source} ${time.source}`);
export const dateTime_description = "should match any date time in `YYYY-MM-DD  hh:mm:ss` format";
export const dateTime_should_match: string[] = [
  "2020-01-01 00:00:00",
  "2020-12-31 23:59:59",
  "1982-01-01 00:00:00",
  "1982-12-31 23:59:59",
  "1082-01-01 00:00:00",
  "0082-12-31 23:59:59",
];
export const dateTime_should_not_match: string[] = [
  "13-12-2021 23:59:59",
  "82-12-31 23:59:59",
  "2020-12-31 00:60:00",
  "2020-12-31",
  "00:59:00",
];

/**
 * should match any date time ISO8601 in `YYYY-MM-DDThh:mm:ss` format
 * https://es.wikipedia.org/wiki/ISO_8601
 */
export const dateTimeISO8601 = new RegExp(`${date.source}T${time.source}`);
export const dateTimeISO8601_description = "should match any date time ISO8601 in `YYYY-MM-DDThh:mm:ss` format\n https://es.wikipedia.org/wiki/ISO_8601";
export const dateTimeISO8601_should_match: string[] = [
  "2020-01-01T00:00:00",
  "2020-12-31T23:59:59",
  "1982-01-01T00:00:00",
  "1982-12-31T23:59:59",
  "1082-01-01T00:00:00",
];
export const dateTimeISO8601_should_not_match: string[] = [
  "13-12-2021T23:59:59",
  "82-12-31T23:59:59",
  "2020-12-31T00:60:00",
  "2020-12-31",
  "00:59:00",
];
