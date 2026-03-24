/**
 * Should match a Python decorator (e.g. @decorator or
 * @module.decorator).
 */
export const pythonDecorator =
  /@[a-zA-Z_][a-zA-Z0-9_]*(?:\.[a-zA-Z_][a-zA-Z0-9_]*)*/;
export const pythonDecorator_description =
  "Should match a Python decorator (e.g. @decorator or @module.decorator).";
export const pythonDecorator_should_match: string[] = [
  "@property",
  "@staticmethod",
  "@app.route",
  "@pytest.mark.skip",
  "@my_decorator",
];
export const pythonDecorator_should_not_match: string[] = [
  "decorator",
  "@123",
  "@ property",
  "@@double",
];

/**
 * Should match a Java-style annotation (e.g. @Override, @Deprecated).
 */
export const javaAnnotation = /@[A-Z][a-zA-Z0-9_]*/;
export const javaAnnotation_description =
  "Should match a Java-style annotation (e.g. @Override, @Deprecated).";
export const javaAnnotation_should_match: string[] = [
  "@Override",
  "@Deprecated",
  "@SuppressWarnings",
  "@Test",
  "@Autowired",
];
export const javaAnnotation_should_not_match: string[] = [
  "@override",
  "Override",
  "@123",
  "@@Override",
];

/**
 * Should match a JavaScript/TypeScript import statement
 * (e.g. import ... from "...").
 */
export const importStatement =
  /import\s+(?:(?:\{[^}]*\}|[a-zA-Z_$][a-zA-Z0-9_$]*|\*\s+as\s+[a-zA-Z_$][a-zA-Z0-9_$]*)(?:\s*,\s*(?:\{[^}]*\}|\*\s+as\s+[a-zA-Z_$][a-zA-Z0-9_$]*))?)\s+from\s+["'][^"']+["']/;
export const importStatement_description =
  'Should match a JavaScript/TypeScript import statement (e.g. import x from "y").';
export const importStatement_should_match: string[] = [
  'import foo from "bar"',
  "import { a, b } from 'module'",
  'import * as utils from "./utils"',
  'import React, { useState } from "react"',
];
export const importStatement_should_not_match: string[] = [
  "import()",
  'require("module")',
  "import",
  'from "module"',
];

/**
 * Should match a CommonJS require statement
 * (e.g. require("module")).
 */
export const requireStatement = /require\(["'][^"']+["']\)/;
export const requireStatement_description =
  'Should match a CommonJS require statement (e.g. require("module")).';
export const requireStatement_should_match: string[] = [
  'require("fs")',
  "require('path')",
  'require("./local-module")',
  'require("@scope/package")',
];
export const requireStatement_should_not_match: string[] = [
  "require()",
  "require(variable)",
  "require",
  'import("module")',
];

/**
 * Should match a JavaScript regex literal (e.g. /pattern/flags).
 */
export const regexLiteral = /\/(?:[^\/\\]|\\.)+\/[gimsuy]*/;
export const regexLiteral_description =
  "Should match a JavaScript regex literal (e.g. /pattern/flags).";
export const regexLiteral_should_match: string[] = [
  "/hello/",
  "/^test$/gi",
  "/foo\\/bar/",
  "/[a-z]+/m",
  "/\\d+/g",
];
export const regexLiteral_should_not_match: string[] = [
  "//comment",
  "/single",
  "regex",
  "//",
];

/**
 * Should match a JavaScript template literal placeholder
 * (e.g. ${expression}).
 */
export const templateLiteral = /\$\{[^}]+\}/;
export const templateLiteral_description =
  "Should match a JavaScript template literal placeholder (e.g. ${expression}).";
export const templateLiteral_should_match: string[] = [
  "${name}",
  "${a + b}",
  "${obj.prop}",
  "${fn()}",
  "${arr[0]}",
];
export const templateLiteral_should_not_match: string[] = [
  "${}",
  "$name",
  "{name}",
  "${",
];
