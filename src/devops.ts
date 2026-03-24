/**
 * Should match an INI-style section header
 * (e.g. [section] or [section.subsection]).
 */
export const iniSection = /\[[a-zA-Z][a-zA-Z0-9_.-]*\]/;
export const iniSection_description =
  "Should match an INI-style section header (e.g. [section] or [section.subsection]).";
export const iniSection_should_match: string[] = [
  "[section]",
  "[database]",
  "[app.settings]",
  "[my-config]",
  "[Section_1]",
];
export const iniSection_should_not_match: string[] = [
  "[]",
  "[123]",
  "section",
  "[-invalid]",
  "[[double]]",
];

/**
 * Should match a TOML key-value assignment
 * (e.g. key = "value").
 */
export const tomlKeyValue =
  /[a-zA-Z_][a-zA-Z0-9_-]*\s*=\s*(?:"[^"]*"|'[^']*'|true|false|[0-9][0-9._]*)/;
export const tomlKeyValue_description =
  'Should match a TOML key-value assignment (e.g. key = "value").';
export const tomlKeyValue_should_match: string[] = [
  'name = "TOML"',
  "debug = true",
  "port = 8080",
  "title = 'example'",
  "version = 0.1",
];
export const tomlKeyValue_should_not_match: string[] = [
  "= value",
  "key =",
  "123 = value",
  "key: value",
];

/**
 * Should match a Go/Helm template expression
 * (e.g. {{ .Values.property }}).
 */
export const helmTemplate = /\{\{-?\s*[^}\s][^}]*\s*-?\}\}/;
export const helmTemplate_description =
  "Should match a Go/Helm template expression (e.g. {{ .Values.property }}).";
export const helmTemplate_should_match: string[] = [
  "{{ .Values.image }}",
  "{{- .Release.Name -}}",
  "{{ if .Values.enabled }}",
  '{{ include "chart.name" . }}',
  "{{ .Chart.Version }}",
];
export const helmTemplate_should_not_match: string[] = [
  "{ .Values }",
  "{{}",
  "{{ }}",
  "{ { .Values } }",
];

/**
 * Should match a Dockerfile instruction keyword
 * (FROM, RUN, COPY, CMD, ENV, etc.).
 */
export const dockerfileInstruction =
  /FROM|RUN|CMD|LABEL|MAINTAINER|EXPOSE|ENV|ADD|COPY|ENTRYPOINT|VOLUME|USER|WORKDIR|ARG|ONBUILD|STOPSIGNAL|HEALTHCHECK|SHELL/;
export const dockerfileInstruction_description =
  "Should match a Dockerfile instruction keyword (FROM, RUN, COPY, CMD, ENV, etc.).";
export const dockerfileInstruction_should_match: string[] = [
  "FROM",
  "RUN",
  "COPY",
  "CMD",
  "ENV",
  "WORKDIR",
  "ENTRYPOINT",
];
export const dockerfileInstruction_should_not_match: string[] = [
  "from",
  "INSTALL",
  "EXECUTE",
  "MOVE",
  "PRINT",
];

/**
 * Should match a Terraform resource block header
 * (e.g. resource "aws_instance" "example").
 */
export const terraformResource =
  /(?:resource|data|module)\s+"[a-zA-Z_][a-zA-Z0-9_]*"\s+"[a-zA-Z_][a-zA-Z0-9_]*"/;
export const terraformResource_description =
  'Should match a Terraform resource block header (e.g. resource "aws_instance" "example").';
export const terraformResource_should_match: string[] = [
  'resource "aws_instance" "web"',
  'data "aws_ami" "ubuntu"',
  'module "vpc" "main"',
  'resource "google_compute_instance" "default"',
];
export const terraformResource_should_not_match: string[] = [
  "resource aws_instance web",
  'variable "name"',
  'provider "aws"',
  'resource "123" "name"',
];
