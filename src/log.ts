/**
 * Should match a log level keyword
 * (DEBUG, INFO, WARN, ERROR, FATAL, TRACE).
 */
export const logLevel = /TRACE|DEBUG|INFO|WARN|ERROR|FATAL/;
export const logLevel_description =
  "Should match a log level keyword (DEBUG, INFO, WARN, ERROR, FATAL, TRACE).";
export const logLevel_should_match: string[] = [
  "DEBUG",
  "INFO",
  "WARN",
  "ERROR",
  "FATAL",
  "TRACE",
];
export const logLevel_should_not_match: string[] = [
  "debug",
  "WARNING",
  "CRITICAL",
  "info",
  "LOG",
];

/**
 * Should match a common log timestamp format
 * (e.g. 2024-01-15 14:30:00.123 or 2024-01-15T14:30:00Z).
 */
export const logTimestamp =
  /[0-9]{4}-[0-9]{2}-[0-9]{2}[T ][0-9]{2}:[0-9]{2}:[0-9]{2}(?:\.[0-9]+)?(?:Z|[+-][0-9]{2}:?[0-9]{2})?/;
export const logTimestamp_description =
  "Should match a common log timestamp format (e.g. 2024-01-15 14:30:00.123).";
export const logTimestamp_should_match: string[] = [
  "2024-01-15 14:30:00",
  "2024-01-15T14:30:00Z",
  "2024-01-15T14:30:00.123Z",
  "2024-01-15 14:30:00.123456",
  "2024-01-15T14:30:00+05:30",
  "2024-01-15T14:30:00-0800",
];
export const logTimestamp_should_not_match: string[] = [
  "2024-01-15",
  "14:30:00",
  "2024/01/15 14:30:00",
  "Jan 15, 2024",
];

/**
 * Should match a JavaScript/Node.js stack trace line
 * (e.g. at Function (file.js:10:5)).
 */
export const stackTraceLine = /at\s+(?:[^\s(]+\s+)?\(?[^\s)]+:\d+:\d+\)?/;
export const stackTraceLine_description =
  "Should match a JavaScript/Node.js stack trace line (e.g. at Function (file.js:10:5)).";
export const stackTraceLine_should_match: string[] = [
  "at Object.<anonymous> (/app/index.js:10:5)",
  "at Module._compile (internal/modules/cjs/loader.js:1085:14)",
  "at processTicksAndRejections (internal/process/task_queues.js:95:5)",
  "at /app/server.js:42:3",
];
export const stackTraceLine_should_not_match: string[] = [
  "in file.js line 10",
  "at Object.<anonymous>",
  "file.js:10:5",
  "Error: something failed",
];

/**
 * Should match an OpenTelemetry trace ID (32 lowercase hex characters).
 */
export const traceId = /[0-9a-f]{32}/;
export const traceId_description =
  "Should match an OpenTelemetry trace ID (32 lowercase hex characters).";
export const traceId_should_match: string[] = [
  "4bf92f3577b34da6a3ce929d0e0e4736",
  "00000000000000000000000000000001",
  "abcdef1234567890abcdef1234567890",
];
export const traceId_should_not_match: string[] = [
  "4bf92f3577b34da6a3ce929d0e0e473",
  "ABCDEF1234567890ABCDEF1234567890",
  "4bf92f3577b34da6a3ce929d0e0e47zz",
];

/**
 * Should match an OpenTelemetry span ID (16 lowercase hex characters).
 */
export const spanId = /[0-9a-f]{16}/;
export const spanId_description =
  "Should match an OpenTelemetry span ID (16 lowercase hex characters).";
export const spanId_should_match: string[] = [
  "00f067aa0ba902b7",
  "0000000000000001",
  "abcdef1234567890",
];
export const spanId_should_not_match: string[] = [
  "00f067aa0ba902b",
  "ABCDEF1234567890",
  "00f067aa0ba902zz",
];

/**
 * Should match an error code pattern
 * (e.g. E1234, ERR_MODULE_NOT_FOUND).
 */
export const errorCode =
  /ERR_[A-Z][A-Z0-9_]*|E[A-Z][A-Z0-9]*[A-Z][A-Z0-9]*|E[0-9]{2,}/;
export const errorCode_description =
  "Should match an error code pattern (e.g. E1234, ERR_MODULE_NOT_FOUND, ENOENT).";
export const errorCode_should_match: string[] = [
  "E1234",
  "ERR_MODULE_NOT_FOUND",
  "ERR_HTTP_HEADERS_SENT",
  "ENOENT",
  "ECONNREFUSED",
  "ERR_INVALID_ARG_TYPE",
];
export const errorCode_should_not_match: string[] = [
  "e1234",
  "err_module",
  "1234",
  "WARNING_CODE",
  "E1",
];
