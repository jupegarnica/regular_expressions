/**
 * Should match  camelCase string
 */

export const camelCase = /((?![A-Z])[a-zA-Z0-9]+)+/;

export const camelCase_should_match = [
  "camelCase",
  "camelCase2",
  "camelCase3",
];
export const camelCase_should_not_match = [
  "PascalCase",
  "kebab-case",
  "snake_case",
  // "camelCAse",
];

/**
 * Should match  kebab-case string
 */

export const kebabCase = /((?!-)([a-z0-9]+)(-[a-z0-9])?)+/;

export const kebabCase_should_match = [
  "kebab-case",
  "kebab-case2",
  "kebab-case3",
];
export const kebabCase_should_not_match = [
  "PascalCase",
  "camelCase",
  "no kebab case",
  "snake_case",
  "-kebab-case",
  "kebab-case-",
  "kebab--case",
  "kebab-CAse",
  "KEBAB-CASE",
];

/**
 * Should match  snake_case string
 */

export const snakeCase = /((?!_)([a-z0-9]+)(_[a-z0-9])?)+/;

export const snakeCase_should_match = [
  "snake_case",
  "snake_case2",
  "snake_case3",
];
export const snakeCase_should_not_match = [
  "PascalCase",
  "camelCase",
  "no snake case",
  "no-snake-case",
  "kebab-case",
  "_snake_case",
  "snake_case_",
  "snake__case",
  "snake_CAse",
  "SNAKE_CASE",
];

/**
 * Should match  PascalCase string
 */

export const pascalCase = /([A-Z][a-z0-9]+)+/;

export const pascalCase_should_match = [
  "PascalCase",
  "Pascal",
  "PascalCase2",
];
export const pascalCase_should_not_match = [
  "PascalCAse3",
  "PAscalCase3",
  "camelCase",
  "kebab-case",
  "snake_case",
  // "PascalCAse",
];

/**
 * Should match  CONSTANT_CASE string
 */

export const constantCase = /([A-Z0-9]+)(_[A-Z0-9]+)?/;

export const constantCase_should_match = [
  "CONSTANT_CASE2",
  "CONSTANT",
];
export const constantCase_should_not_match = [
  "PascalCase",
  "camelCase",
  "kebab-case",
  "snake_case",
  "CONSTANT-CASE",
  "CONSTANT_CASE_",
  "_CONSTANT_CASE",
  "CONSTANT_CAse",
];
