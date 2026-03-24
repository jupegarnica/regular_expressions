
# The Collection of Regular Expressions

A handmade collection of regular expressions for JavaScript.

Ready to be imported or copy pasted into your code.

Fully tested, benchmarked and documented.

Mainly assisted by LLMs and tweaked by [me](https://garn.dev).

## Summary

38 categories, 212 patterns

## Index

- <details><summary>log</summary>

  - [errorCode](#errorcode)
  - [logLevel](#loglevel)
  - [logTimestamp](#logtimestamp)
  - [spanId](#spanid)
  - [stackTraceLine](#stacktraceline)
  - [traceId](#traceid)

  </details>
- <details><summary>measurement</summary>

  - [angle](#angle)
  - [cssLength](#csslength)
  - [dataSize](#datasize)
  - [isoDuration](#isoduration)
  - [percentage](#percentage)
  - [temperature](#temperature)

  </details>
- <details><summary>web</summary>

  - [cookiePair](#cookiepair)
  - [cssProperty](#cssproperty)
  - [cssSelector](#cssselector)
  - [cssVariable](#cssvariable)
  - [httpHeader](#httpheader)
  - [queryString](#querystring)
  - [urlFragment](#urlfragment)

  </details>
- <details><summary>database</summary>

  - [mongoObjectId](#mongoobjectid)
  - [sqlComment](#sqlcomment)
  - [sqlKeyword](#sqlkeyword)
  - [sqlPlaceholder](#sqlplaceholder)
  - [sqlTableRef](#sqltableref)

  </details>
- <details><summary>finance</summary>

  - [creditCard](#creditcard)
  - [creditCardAmex](#creditcardamex)
  - [creditCardMastercard](#creditcardmastercard)
  - [creditCardVisa](#creditcardvisa)
  - [ibanCode](#ibancode)
  - [stockTicker](#stockticker)
  - [swiftBic](#swiftbic)

  </details>
- <details><summary>uri</summary>

  - [hostname](#hostname)
  - [iPv4Private](#ipv4private)
  - [ipv4](#ipv4)
  - [ipv4CIDR](#ipv4cidr)
  - [ipv4SubnetMask](#ipv4subnetmask)
  - [ipv6](#ipv6)
  - [uri](#uri)
  - [uriProtocol](#uriprotocol)
  - [url](#url)
  - [urlWithPort](#urlwithport)
  - [urlWithProtocol](#urlwithprotocol)

  </details>
- <details><summary>example</summary>

  - [lettersButNotH](#lettersbutnoth)

  </details>
- <details><summary>text</summary>

  - [blankLine](#blankline)
  - [hashtag](#hashtag)
  - [mention](#mention)
  - [multilineComment](#multilinecomment)
  - [sentence](#sentence)
  - [singleLineComment](#singlelinecomment)
  - [slug](#slug)
  - [whitespaceOnly](#whitespaceonly)

  </details>
- <details><summary>file</summary>

  - [fileExtension](#fileextension)
  - [fileName](#filename)
  - [filePathUnix](#filepathunix)
  - [filePathWindows](#filepathwindows)
  - [gitBranchName](#gitbranchname)
  - [gitCommitHash](#gitcommithash)
  - [mimeType](#mimetype)
  - [semver](#semver)

  </details>
- <details><summary>git</summary>

  - [conventionalCommit](#conventionalcommit)
  - [gitConflictMarker](#gitconflictmarker)
  - [gitDiffHunk](#gitdiffhunk)
  - [gitRemoteUrl](#gitremoteurl)
  - [gitTag](#gittag)

  </details>
- <details><summary>i18n</summary>

  - [bcp47](#bcp47)
  - [localeCode](#localecode)
  - [translationKey](#translationkey)

  </details>
- <details><summary>crypto</summary>

  - [jwtToken](#jwttoken)
  - [md5](#md5)
  - [pemCertificate](#pemcertificate)
  - [sha1](#sha1)
  - [sha256](#sha256)
  - [sha512](#sha512)
  - [uuidV4](#uuidv4)

  </details>
- <details><summary>auth</summary>

  - [apiKeyGeneric](#apikeygeneric)
  - [awsAccessKey](#awsaccesskey)
  - [githubToken](#githubtoken)
  - [slackToken](#slacktoken)

  </details>
- <details><summary>validation</summary>

  - [alphabetic](#alphabetic)
  - [alphanumeric](#alphanumeric)
  - [noWhitespace](#nowhitespace)
  - [numericString](#numericstring)
  - [printableAscii](#printableascii)
  - [strongPassword](#strongpassword)
  - [username](#username)

  </details>
- <details><summary>env</summary>

  - [connectionString](#connectionstring)
  - [cronExpression](#cronexpression)
  - [dockerImage](#dockerimage)
  - [envPlaceholder](#envplaceholder)
  - [envVar](#envvar)
  - [s3Uri](#s3uri)

  </details>
- <details><summary>js_eval</summary>

  - [classDefinition](#classdefinition)
  - [functionAnonymous](#functionanonymous)
  - [functionArrow](#functionarrow)
  - [functionAsync](#functionasync)
  - [functionAsyncGenerator](#functionasyncgenerator)
  - [functionClassic](#functionclassic)
  - [functionGenerator](#functiongenerator)
  - [globalScope](#globalscope)
  - [identifierNames](#identifiernames)
  - [reservedWords](#reservedwords)

  </details>
- <details><summary>math</summary>

  - [coordinate](#coordinate)
  - [fraction](#fraction)
  - [mathOperator](#mathoperator)
  - [numericRange](#numericrange)

  </details>
- <details><summary>geo</summary>

  - [countryCode2](#countrycode2)
  - [countryCode3](#countrycode3)
  - [latLng](#latlng)
  - [latitude](#latitude)
  - [longitude](#longitude)
  - [zipCodeCA](#zipcodeca)
  - [zipCodeUK](#zipcodeuk)
  - [zipCodeUS](#zipcodeus)

  </details>
- <details><summary>social</summary>

  - [discordSnowflake](#discordsnowflake)
  - [githubRepo](#githubrepo)
  - [npmPackage](#npmpackage)
  - [twitterHandle](#twitterhandle)
  - [youtubeVideoId](#youtubevideoid)

  </details>
- <details><summary>number</summary>

  - [base64](#base64)
  - [number](#number)
  - [numberBigInt](#numberbigint)
  - [numberBinary](#numberbinary)
  - [numberExponential](#numberexponential)
  - [numberFloat](#numberfloat)
  - [numberHex](#numberhex)
  - [numberInteger](#numberinteger)
  - [numberOctal](#numberoctal)
  - [romanNumeral](#romannumeral)

  </details>
- <details><summary>network</summary>

  - [basicAuth](#basicauth)
  - [bearerToken](#bearertoken)
  - [cidrBlock](#cidrblock)
  - [domainName](#domainname)
  - [httpMethod](#httpmethod)
  - [httpStatusCode](#httpstatuscode)
  - [macAddress](#macaddress)
  - [portNumber](#portnumber)

  </details>
- <details><summary>identity</summary>

  - [orcidId](#orcidid)
  - [ssnUS](#ssnus)

  </details>
- <details><summary>markup</summary>

  - [htmlComment](#htmlcomment)
  - [htmlTag](#htmltag)
  - [markdownCodeBlock](#markdowncodeblock)
  - [markdownHeading](#markdownheading)
  - [markdownLink](#markdownlink)

  </details>
- <details><summary>science</summary>

  - [chemicalFormula](#chemicalformula)
  - [doi](#doi)
  - [ipRange](#iprange)
  - [isbn](#isbn)
  - [scientificNotation](#scientificnotation)

  </details>
- <details><summary>data</summary>

  - [dataUri](#datauri)
  - [jsonBoolean](#jsonboolean)
  - [jsonNull](#jsonnull)
  - [jsonNumber](#jsonnumber)
  - [jsonString](#jsonstring)
  - [keyValuePair](#keyvaluepair)
  - [xmlEntity](#xmlentity)

  </details>
- <details><summary>phone</summary>

  - [phoneE164](#phonee164)
  - [phoneInternational](#phoneinternational)
  - [phoneUS](#phoneus)

  </details>
- <details><summary>currency</summary>

  - [currencySymbol](#currencysymbol)

  </details>
- <details><summary>case</summary>

  - [camelCase](#camelcase)
  - [constantCase](#constantcase)
  - [kebabCase](#kebabcase)
  - [pascalCase](#pascalcase)
  - [snakeCase](#snakecase)

  </details>
- <details><summary>media</summary>

  - [aspectRatio](#aspectratio)
  - [colorName](#colorname)
  - [fontStack](#fontstack)
  - [resolution](#resolution)

  </details>
- <details><summary>language</summary>

  - [importStatement](#importstatement)
  - [javaAnnotation](#javaannotation)
  - [pythonDecorator](#pythondecorator)
  - [regexLiteral](#regexliteral)
  - [requireStatement](#requirestatement)
  - [templateLiteral](#templateliteral)

  </details>
- <details><summary>version</summary>

  - [calver](#calver)
  - [changelogEntry](#changelogentry)
  - [nodeVersion](#nodeversion)
  - [versionRange](#versionrange)

  </details>
- <details><summary>security</summary>

  - [cveId](#cveid)
  - [cweId](#cweid)
  - [filePermission](#filepermission)
  - [hashBang](#hashbang)

  </details>
- <details><summary>email</summary>

  - [email](#email)

  </details>
- <details><summary>devops</summary>

  - [dockerfileInstruction](#dockerfileinstruction)
  - [helmTemplate](#helmtemplate)
  - [iniSection](#inisection)
  - [terraformResource](#terraformresource)
  - [tomlKeyValue](#tomlkeyvalue)

  </details>
- <details><summary>color</summary>

  - [color](#color)
  - [colorHex](#colorhex)
  - [colorHsl](#colorhsl)
  - [colorRgb](#colorrgb)

  </details>
- <details><summary>datetime</summary>

  - [date](#date)
  - [dateTime](#datetime)
  - [dateTimeISO8601](#datetimeiso8601)
  - [day](#day)
  - [hour](#hour)
  - [millisecond](#millisecond)
  - [minute](#minute)
  - [month](#month)
  - [second](#second)
  - [time](#time)
  - [year](#year)

  </details>
- <details><summary>encoding</summary>

  - [base32](#base32)
  - [escapedString](#escapedstring)
  - [hexString](#hexstring)
  - [htmlEntity](#htmlentity)
  - [unicodeEscape](#unicodeescape)
  - [urlEncoded](#urlencoded)

  </details>
- <details><summary>container</summary>

  - [arnAws](#arnaws)
  - [k8sLabel](#k8slabel)
  - [k8sResourceName](#k8sresourcename)

  </details>

# Contents

# log

> At: [log.ts](./src/log.ts)

### **errorCode**

Should match an error code pattern
(e.g. E1234, ERR_MODULE_NOT_FOUND).

From [log.ts](./src/log.ts#L105)

Copy:
```js
const errorCode = /ERR_[A-Z][A-Z0-9_]*|E[A-Z][A-Z0-9]*[A-Z][A-Z0-9]*|E[0-9]{2,}/
```

```ts
import { errorCode } from "https://deno.land/x/regular_expressions/src/log.ts";
```

| Should match | Should not match  |
|---|---|
| `E1234` | `e1234`  |
| `ERR_MODULE_NOT_FOUND` | `err_module`  |
| `ERR_HTTP_HEADERS_SENT` | `1234`  |
| `ENOENT` | `WARNING_CODE`  |
| `ECONNREFUSED` | `E1`  |
| `ERR_INVALID_ARG_TYPE` |   |




### **logLevel**

Should match a log level keyword
(DEBUG, INFO, WARN, ERROR, FATAL, TRACE).

From [log.ts](./src/log.ts#L5)

Copy:
```js
const logLevel = /TRACE|DEBUG|INFO|WARN|ERROR|FATAL/
```

```ts
import { logLevel } from "https://deno.land/x/regular_expressions/src/log.ts";
```

| Should match | Should not match  |
|---|---|
| `DEBUG` | `debug`  |
| `INFO` | `WARNING`  |
| `WARN` | `CRITICAL`  |
| `ERROR` | `info`  |
| `FATAL` | `LOG`  |
| `TRACE` |   |




### **logTimestamp**

Should match a common log timestamp format
(e.g. 2024-01-15 14:30:00.123 or 2024-01-15T14:30:00Z).

From [log.ts](./src/log.ts#L28)

Copy:
```js
const logTimestamp = /[0-9]{4}-[0-9]{2}-[0-9]{2}[T ][0-9]{2}:[0-9]{2}:[0-9]{2}(?:\.[0-9]+)?(?:Z|[+-][0-9]{2}:?[0-9]{2})?/
```

```ts
import { logTimestamp } from "https://deno.land/x/regular_expressions/src/log.ts";
```

| Should match | Should not match  |
|---|---|
| `2024-01-15 14:30:00` | `2024-01-15`  |
| `2024-01-15T14:30:00Z` | `14:30:00`  |
| `2024-01-15T14:30:00.123Z` | `2024/01/15 14:30:00`  |
| `2024-01-15 14:30:00.123456` | `Jan 15, 2024`  |
| `2024-01-15T14:30:00+05:30` |   |
| `2024-01-15T14:30:00-0800` |   |




### **spanId**

Should match an OpenTelemetry span ID (16 lowercase hex characters).

From [log.ts](./src/log.ts#L87)

Copy:
```js
const spanId = /[0-9a-f]{16}/
```

```ts
import { spanId } from "https://deno.land/x/regular_expressions/src/log.ts";
```

| Should match | Should not match  |
|---|---|
| `00f067aa0ba902b7` | `00f067aa0ba902b`  |
| `0000000000000001` | `ABCDEF1234567890`  |
| `abcdef1234567890` | `00f067aa0ba902zz`  |




### **stackTraceLine**

Should match a JavaScript/Node.js stack trace line
(e.g. at Function (file.js:10:5)).

From [log.ts](./src/log.ts#L51)

Copy:
```js
const stackTraceLine = /at\s+(?:[^\s(]+\s+)?\(?[^\s)]+:\d+:\d+\)?/
```

```ts
import { stackTraceLine } from "https://deno.land/x/regular_expressions/src/log.ts";
```

| Should match | Should not match  |
|---|---|
| `at Object.<anonymous> (/app/index.js:10:5)` | `in file.js line 10`  |
| `at Module._compile (internal/modules/cjs/loader.js:1085:14)` | `at Object.<anonymous>`  |
| `at processTicksAndRejections (internal/process/task_queues.js:95:5)` | `file.js:10:5`  |
| `at /app/server.js:42:3` | `Error: something failed`  |




### **traceId**

Should match an OpenTelemetry trace ID (32 lowercase hex characters).

From [log.ts](./src/log.ts#L70)

Copy:
```js
const traceId = /[0-9a-f]{32}/
```

```ts
import { traceId } from "https://deno.land/x/regular_expressions/src/log.ts";
```

| Should match | Should not match  |
|---|---|
| `4bf92f3577b34da6a3ce929d0e0e4736` | `4bf92f3577b34da6a3ce929d0e0e473`  |
| `00000000000000000000000000000001` | `ABCDEF1234567890ABCDEF1234567890`  |
| `abcdef1234567890abcdef1234567890` | `4bf92f3577b34da6a3ce929d0e0e47zz`  |



# measurement

> At: [measurement.ts](./src/measurement.ts)

### **angle**

Should match a CSS angle value
(e.g. 90deg, 3.14rad, 100grad, 0.25turn).

From [measurement.ts](./src/measurement.ts#L102)

Copy:
```js
const angle = /-?(?:0|[1-9][0-9]*)(?:\.[0-9]+)?(?:deg|rad|grad|turn)/
```

```ts
import { angle } from "https://deno.land/x/regular_expressions/src/measurement.ts";
```

| Should match | Should not match  |
|---|---|
| `90deg` | `90`  |
| `3.14rad` | `deg`  |
| `100grad` | `90 deg`  |
| `0.25turn` | `90degrees`  |
| `0deg` |   |
| `-45deg` |   |
| `360deg` |   |




### **cssLength**

Should match a CSS length value with unit
(e.g. 12px, 1.5rem, 100vh, 50%).

From [measurement.ts](./src/measurement.ts#L5)

Copy:
```js
const cssLength = /-?(?:0|[1-9][0-9]*)(?:\.[0-9]+)?(?:px|em|rem|vh|vw|vmin|vmax|ch|ex|cm|mm|in|pt|pc|%)/
```

```ts
import { cssLength } from "https://deno.land/x/regular_expressions/src/measurement.ts";
```

| Should match | Should not match  |
|---|---|
| `12px` | `12`  |
| `1.5rem` | `px`  |
| `100vh` | `12 px`  |
| `50%` | `12dp`  |
| `0px` | `12sp`  |
| `-10px` |   |
| `3.14em` |   |
| `100vw` |   |




### **dataSize**

Should match a data size with unit
(e.g. 1.5GB, 256KB, 4TB, 100MiB).

From [measurement.ts](./src/measurement.ts#L31)

Copy:
```js
const dataSize = /(?:0|[1-9][0-9]*)(?:\.[0-9]+)?\s*(?:Ti|Gi|Mi|Ki|T|G|M|K)?B/
```

```ts
import { dataSize } from "https://deno.land/x/regular_expressions/src/measurement.ts";
```

| Should match | Should not match  |
|---|---|
| `1.5GB` | `1.5`  |
| `256KB` | `GB`  |
| `4TB` | `1.5XB`  |
| `100MiB` | `1.5 G`  |
| `512B` |   |
| `0B` |   |
| `1 GiB` |   |
| `64KiB` |   |




### **isoDuration**

Should match an ISO 8601 duration
(e.g. P1DT12H, PT30M, P1Y2M3D).

From [measurement.ts](./src/measurement.ts#L77)

Copy:
```js
const isoDuration = /P(?=\d|T\d)(?:\d+Y)?(?:\d+M)?(?:\d+W)?(?:\d+D)?(?:T(?:\d+H)?(?:\d+M)?(?:\d+(?:\.\d+)?S)?)?/
```

```ts
import { isoDuration } from "https://deno.land/x/regular_expressions/src/measurement.ts";
```

| Should match | Should not match  |
|---|---|
| `P1D` | `1D`  |
| `PT30M` | `T30M`  |
| `P1DT12H` | `P`  |
| `P1Y2M3D` | `30M`  |
| `PT1H30M` | `1H30M`  |
| `P2W` |   |
| `PT0.5S` |   |




### **percentage**

Should match a percentage value (e.g. 50%, 100%, 0.5%).

From [measurement.ts](./src/measurement.ts#L55)

Copy:
```js
const percentage = /-?(?:0|[1-9][0-9]*)(?:\.[0-9]+)?%/
```

```ts
import { percentage } from "https://deno.land/x/regular_expressions/src/measurement.ts";
```

| Should match | Should not match  |
|---|---|
| `0%` | `%`  |
| `50%` | `50`  |
| `100%` | `50 %`  |
| `0.5%` | `abc%`  |
| `99.99%` |   |
| `-10%` |   |




### **temperature**

Should match a temperature value
(e.g. 98.6\u00B0F, -40\u00B0C, 300K).

From [measurement.ts](./src/measurement.ts#L125)

Copy:
```js
const temperature = /-?(?:0|[1-9][0-9]*)(?:\.[0-9]+)?\s*(?:\u00B0[FCR]|K)/
```

```ts
import { temperature } from "https://deno.land/x/regular_expressions/src/measurement.ts";
```

| Should match | Should not match  |
|---|---|
| `98.6°F` | `98.6F`  |
| `-40°C` | `300 Kelvin`  |
| `300K` | `°C`  |
| `0°C` | `hot`  |
| `212°F` |   |
| `373.15K` |   |



# web

> At: [web.ts](./src/web.ts)

### **cookiePair**

Should match a cookie key=value pair.

From [web.ts](./src/web.ts#L24)

Copy:
```js
const cookiePair = /[a-zA-Z0-9_-]+=[^\s;]*/
```

```ts
import { cookiePair } from "https://deno.land/x/regular_expressions/src/web.ts";
```

| Should match | Should not match  |
|---|---|
| `session_id=abc123` | `=value`  |
| `theme=dark` | `key value`  |
| `user-pref=compact` | `key;value`  |
| `token=eyJhbGci` | `=`  |
| `flag=true` |   |




### **cssProperty**

Should match a CSS property name (e.g. background-color, font-size).

From [web.ts](./src/web.ts#L104)

Copy:
```js
const cssProperty = /[a-z][a-z-]*[a-z]/
```

```ts
import { cssProperty } from "https://deno.land/x/regular_expressions/src/web.ts";
```

| Should match | Should not match  |
|---|---|
| `background-color` | `Background-Color`  |
| `font-size` | `-webkit-transform`  |
| `margin` | `a`  |
| `border-top-left-radius` | `123`  |
| `color` | `font_size`  |
| `display` |   |




### **cssSelector**

Should match a basic CSS selector
(class, ID, element, or attribute selector).

From [web.ts](./src/web.ts#L127)

Copy:
```js
const cssSelector = /(?:[.#]?[a-zA-Z][a-zA-Z0-9_-]*|\*|\[[a-zA-Z][a-zA-Z0-9_-]*(?:=[^\]]+)?\])(?:\s*[>+~]\s*[.#]?[a-zA-Z][a-zA-Z0-9_-]*)*/
```

```ts
import { cssSelector } from "https://deno.land/x/regular_expressions/src/web.ts";
```

| Should match | Should not match  |
|---|---|
| `.class-name` | `.`  |
| `#my-id` | `#`  |
| `div` | `123`  |
| `div > span` | `>child`  |
| `.parent + .sibling` | `.123class`  |
| `[data-attr]` |   |
| `h1` |   |




### **cssVariable**

Should match a CSS custom property / variable
(e.g. var(--custom-property) or --custom-property).

From [web.ts](./src/web.ts#L84)

Copy:
```js
const cssVariable = /(?:var\()?--[a-zA-Z][a-zA-Z0-9-]*\)?/
```

```ts
import { cssVariable } from "https://deno.land/x/regular_expressions/src/web.ts";
```

| Should match | Should not match  |
|---|---|
| `--color-primary` | `-single-dash`  |
| `var(--font-size)` | `var(color)`  |
| `--bg-color` | `--`  |
| `var(--spacing-lg)` | `--123`  |
| `--a` |   |




### **httpHeader**

Should match an HTTP header line (e.g. Content-Type: application/json).

From [web.ts](./src/web.ts#L4)

Copy:
```js
const httpHeader = /[A-Za-z][A-Za-z0-9-]*:\s*.+/
```

```ts
import { httpHeader } from "https://deno.land/x/regular_expressions/src/web.ts";
```

| Should match | Should not match  |
|---|---|
| `Content-Type: application/json` | `: value`  |
| `Authorization: Bearer token` | `Header`  |
| `X-Custom-Header: value` | `123: value`  |
| `Accept: */*` | `-Header: value`  |
| `Host: example.com` |   |




### **queryString**

Should match a URL query string (e.g. ?key=value&key2=value2).

From [web.ts](./src/web.ts#L43)

Copy:
```js
const queryString = /\?[a-zA-Z0-9_-]+=[^\s&#]*(?:&[a-zA-Z0-9_-]+=[^\s&#]*)*/
```

```ts
import { queryString } from "https://deno.land/x/regular_expressions/src/web.ts";
```

| Should match | Should not match  |
|---|---|
| `?key=value` | `key=value`  |
| `?name=john&age=30` | `?`  |
| `?q=search+term&page=1` | `?=value`  |
| `?filter=active` | `&key=value`  |




### **urlFragment**

Should match a URL fragment/anchor (e.g. #section-name).

From [web.ts](./src/web.ts#L63)

Copy:
```js
const urlFragment = /#[a-zA-Z][a-zA-Z0-9_-]*/
```

```ts
import { urlFragment } from "https://deno.land/x/regular_expressions/src/web.ts";
```

| Should match | Should not match  |
|---|---|
| `#section` | `#`  |
| `#top` | `#123`  |
| `#my-section` | `section`  |
| `#heading_1` | `##double`  |
| `#A` |   |



# database

> At: [database.ts](./src/database.ts)

### **mongoObjectId**

Should match a MongoDB ObjectId (24 lowercase hex characters).

From [database.ts](./src/database.ts#L50)

Copy:
```js
const mongoObjectId = /[0-9a-f]{24}/
```

```ts
import { mongoObjectId } from "https://deno.land/x/regular_expressions/src/database.ts";
```

| Should match | Should not match  |
|---|---|
| `507f1f77bcf86cd799439011` | `507f1f77bcf86cd79943901`  |
| `000000000000000000000000` | `507F1F77BCF86CD799439011`  |
| `aabbccddeeff112233445566` | `507f1f77bcf86cd79943901g`  |
|  | `short`  |




### **sqlComment**

Should match a single-line SQL comment (-- comment).

From [database.ts](./src/database.ts#L90)

Copy:
```js
const sqlComment = /--.*/
```

```ts
import { sqlComment } from "https://deno.land/x/regular_expressions/src/database.ts";
```

| Should match | Should not match  |
|---|---|
| `-- this is a comment` | `- not a comment`  |
| `-- SELECT * FROM users` | `// js comment`  |
| `--compact` | `# python comment`  |
| `-- ` | `/* block */`  |




### **sqlKeyword**

Should match a SQL keyword
(SELECT, INSERT, UPDATE, DELETE, CREATE, ALTER, DROP, JOIN, WHERE, FROM, etc.).

From [database.ts](./src/database.ts#L5)

Copy:
```js
const sqlKeyword = /SELECT|INSERT|UPDATE|DELETE|CREATE|ALTER|DROP|JOIN|WHERE|FROM|INTO|VALUES|SET|ORDER|GROUP|HAVING|LIMIT|OFFSET|UNION|DISTINCT|INDEX|TABLE|VIEW|BEGIN|COMMIT|ROLLBACK/
```

```ts
import { sqlKeyword } from "https://deno.land/x/regular_expressions/src/database.ts";
```

| Should match | Should not match  |
|---|---|
| `SELECT` | `select`  |
| `INSERT` | `SELECTS`  |
| `UPDATE` | `FIND`  |
| `DELETE` | `REMOVE`  |
| `CREATE` | `FETCH`  |
| `JOIN` |   |
| `WHERE` |   |




### **sqlPlaceholder**

Should match a SQL prepared statement placeholder
($1, :name, or ?).

From [database.ts](./src/database.ts#L69)

Copy:
```js
const sqlPlaceholder = /\$[1-9][0-9]*|:[a-zA-Z_][a-zA-Z0-9_]*|\?/
```

```ts
import { sqlPlaceholder } from "https://deno.land/x/regular_expressions/src/database.ts";
```

| Should match | Should not match  |
|---|---|
| `$1` | `$0`  |
| `$12` | `$`  |
| `:username` | `:`  |
| `:user_id` | `:123`  |
| `?` | `??`  |




### **sqlTableRef**

Should match a dotted SQL table reference
(e.g. schema.table or database.schema.table).

From [database.ts](./src/database.ts#L30)

Copy:
```js
const sqlTableRef = /[a-zA-Z_][a-zA-Z0-9_]*(?:\.[a-zA-Z_][a-zA-Z0-9_]*)+/
```

```ts
import { sqlTableRef } from "https://deno.land/x/regular_expressions/src/database.ts";
```

| Should match | Should not match  |
|---|---|
| `public.users` | `users`  |
| `mydb.public.orders` | `.users`  |
| `dbo.Customers` | `public.`  |
| `schema_1.table_2` | `123.table`  |



# finance

> At: [finance.ts](./src/finance.ts)

### **creditCard**

Should match any major credit card number (Visa, Mastercard, or
Amex).

From [finance.ts](./src/finance.ts#L66)

Copy:
```js
const creditCard = /(?:4[0-9]{12}(?:[0-9]{3})?)|(?:(?:5[1-5][0-9]{2}|2(?:2[2-9][0-9]|[3-6][0-9]{2}|7[01][0-9]|720))[0-9]{12})|(?:3[47][0-9]{13})/
```

```ts
import { creditCard } from "https://deno.land/x/regular_expressions/src/finance.ts";
```

| Should match | Should not match  |
|---|---|
| `4111111111111111` | `6011111111111117`  |
| `5500000000000004` | `1234567890123456`  |
| `371449635398431` | `411111111111`  |
| `2221000000000009` | `abcdefghijklmnop`  |




### **creditCardAmex**

Should match an American Express credit card number (starts with
34 or 37, 15 digits).

From [finance.ts](./src/finance.ts#L46)

Copy:
```js
const creditCardAmex = /3[47][0-9]{13}/
```

```ts
import { creditCardAmex } from "https://deno.land/x/regular_expressions/src/finance.ts";
```

| Should match | Should not match  |
|---|---|
| `340000000000009` | `350000000000009`  |
| `371449635398431` | `34000000000000`  |
| `378282246310005` | `3400000000000090`  |
| `341111111111111` | `4111111111111111`  |




### **creditCardMastercard**

Should match a Mastercard credit card number (starts with 51-55 or
2221-2720, 16 digits).

From [finance.ts](./src/finance.ts#L25)

Copy:
```js
const creditCardMastercard = /(?:5[1-5][0-9]{2}|2(?:2[2-9][0-9]|[3-6][0-9]{2}|7[01][0-9]|720))[0-9]{12}/
```

```ts
import { creditCardMastercard } from "https://deno.land/x/regular_expressions/src/finance.ts";
```

| Should match | Should not match  |
|---|---|
| `5111111111111118` | `4111111111111111`  |
| `5500000000000004` | `5011111111111111`  |
| `2221000000000009` | `5600000000000004`  |
| `2720990000000007` | `2221000000000`  |




### **creditCardVisa**

Should match a Visa credit card number (starts with 4, 13 or
16 digits).

From [finance.ts](./src/finance.ts#L5)

Copy:
```js
const creditCardVisa = /4[0-9]{12}(?:[0-9]{3})?/
```

```ts
import { creditCardVisa } from "https://deno.land/x/regular_expressions/src/finance.ts";
```

| Should match | Should not match  |
|---|---|
| `4111111111111111` | `5111111111111111`  |
| `4012888888881881` | `411111111111111`  |
| `4222222222222` | `41111111111111112`  |
| `4000056655665556` | `4111-1111-1111-1111`  |




### **ibanCode**

Should match an International Bank Account Number (IBAN).

From [finance.ts](./src/finance.ts#L87)

Copy:
```js
const ibanCode = /[A-Z]{2}[0-9]{2}[A-Z0-9]{4}[0-9]{7}(?:[A-Z0-9]{0,16})?/
```

```ts
import { ibanCode } from "https://deno.land/x/regular_expressions/src/finance.ts";
```

| Should match | Should not match  |
|---|---|
| `GB29NWBK60161331926819` | `gb29NWBK60161331926819`  |
| `DE89370400440532013000` | `G129NWBK60161331926819`  |
| `FR7630006000011234567890189` | `GB2NWBK60161331926819`  |
| `ES9121000418450200051332` | `1234567890`  |




### **stockTicker**

Should match a stock ticker symbol (1-5 uppercase letters).

From [finance.ts](./src/finance.ts#L126)

Copy:
```js
const stockTicker = /[A-Z]{1,5}/
```

```ts
import { stockTicker } from "https://deno.land/x/regular_expressions/src/finance.ts";
```

| Should match | Should not match  |
|---|---|
| `AAPL` | `aapl`  |
| `MSFT` | `GOOGLES`  |
| `GOOGL` | `123`  |
| `A` | `AA1`  |
| `TSLA` |   |




### **swiftBic**

Should match a SWIFT/BIC bank code (8 or 11 characters).

From [finance.ts](./src/finance.ts#L107)

Copy:
```js
const swiftBic = /[A-Z]{6}[A-Z0-9]{2}(?:[A-Z0-9]{3})?/
```

```ts
import { swiftBic } from "https://deno.land/x/regular_expressions/src/finance.ts";
```

| Should match | Should not match  |
|---|---|
| `DEUTDEFF` | `DEUTDE`  |
| `BNPAFRPP` | `deutdeff`  |
| `CHASUS33XXX` | `DEUTDEFF1`  |
| `COBADEFFXXX` | `12345678`  |



# uri

> At: [uri.ts](./src/uri.ts)

### **hostname**

Should match any url hostname (no protocol, no port, no path)

From [uri.ts](./src/uri.ts#L102)

Copy:
```js
const hostname = /[-a-zA-Z0-9:%._\+~#=]{2,256}\.[a-z]{2,6}/
```

```ts
import { hostname } from "https://deno.land/x/regular_expressions/src/uri.ts";
```

| Should match | Should not match  |
|---|---|
| `example.com` | `example.com/`  |
| `sub.example.com` | `example.com:1234`  |
| `www.exampl3.com` | `example.com:1234/`  |
|  | `example.com/path`  |
|  | `example.com/path/`  |
|  | `//example.com`  |
|  | `http://example.com:1234`  |
|  | `https://example.com`  |
|  | `http://example.com/`  |
|  | `https://example.com/`  |
|  | `http://example.com/path`  |
|  | `https://example.com/path`  |
|  | `http://example.com/path/`  |
|  | `https://example.com/path/`  |




### **iPv4Private**

Should match any private ip v4

From [uri.ts](./src/uri.ts#L301)

Copy:
```js
const iPv4Private = /(?:(?:10|127)\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?))|(?:(?:169\.254|192\.168)\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?))|(?:172\.(?:1[6-9]|2[0-9]|3[01]|4[0-9]|5[0-9])\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?))/
```

```ts
import { iPv4Private } from "https://deno.land/x/regular_expressions/src/uri.ts";
```

| Should match | Should not match  |
|---|---|
| `10.196.0.1` | `156.10.3.1`  |
| `127.196.100.1` | `127.196.300.1`  |
| `192.168.1.0` | `139.47.8.243`  |
| `192.168.123.134` |   |
| `192.168.0.1` |   |




### **ipv4**

Should match any ip v4 without protocol, no any mask of subnet

From [uri.ts](./src/uri.ts#L170)

Copy:
```js
const ipv4 = /((25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)/
```

```ts
import { ipv4 } from "https://deno.land/x/regular_expressions/src/uri.ts";
```

| Should match | Should not match  |
|---|---|
| `192.168.1.0` | `254.254.254.254.254`  |
| `192.168.1.1` | `1.1.1.1.1`  |
| `10.123.3.234` | `1.1.1`  |
| `254.254.254.254` | `192.168.A.0`  |
| `0.0.0.0` | `192.168.1.b`  |
| `255.0.0.0` |   |
| `255.255.0.0` |   |
| `255.255.255.0` |   |
| `255.255.255.255` |   |




### **ipv4CIDR**

Should match any ipv4 CIDR notation (subnet) * https://en.wikipedia.org/wiki/Classless_Inter-Domain_Routing

From [uri.ts](./src/uri.ts#L220)

Copy:
```js
const ipv4CIDR = /(([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])\.){3}([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])(\/([0-9]|[1-2][0-9]|3[0-2]))/
```

```ts
import { ipv4CIDR } from "https://deno.land/x/regular_expressions/src/uri.ts";
```

| Should match | Should not match  |
|---|---|
| `192.168.100.1/24` | `192.168.100.1/33`  |
| `192.168.0.1/25` | `0.0.0.0/90`  |
| `192.168.254.1/26` |   |
| `0.0.0.0/0` |   |
| `10.120.192.2/32` |   |
| `10.120.192.2/31` |   |
| `10.120.192.2/30` |   |
| `10.120.192.2/29` |   |
| `10.120.192.2/28` |   |
| `10.120.192.2/27` |   |
| `10.120.192.2/26` |   |
| `10.120.192.2/25` |   |
| `10.120.192.0/24` |   |
| `10.120.192.0/23` |   |
| `10.120.192.0/22` |   |
| `10.120.192.0/21` |   |
| `10.120.192.0/20` |   |
| `10.120.192.0/19` |   |
| `10.120.192.0/18` |   |
| `10.120.192.0/17` |   |
| `10.120.0.0/16` |   |
| `10.120.0.0/15` |   |
| `10.120.0.0/14` |   |
| `10.120.0.0/13` |   |
| `10.120.0.0/12` |   |
| `10.120.0.0/11` |   |
| `10.120.0.0/10` |   |
| `10.120.0.0/9` |   |
| `10.0.0.0/8` |   |
| `10.0.0.0/7` |   |
| `10.0.0.0/6` |   |
| `10.0.0.0/5` |   |
| `10.0.0.0/4` |   |
| `10.0.0.0/3` |   |
| `10.0.0.0/2` |   |
| `10.0.0.0/1` |   |




### **ipv4SubnetMask**

Should match any subnet mask * https://en.wikipedia.org/wiki/Subnetwork

From [uri.ts](./src/uri.ts#L199)

Copy:
```js
const ipv4SubnetMask = /((255\.){3}(0|128|192|224|240|248|252|254|255))|((255\.){2}(0|128|192|224|240|248|252|254|255)\.0)|((255\.)(0|128|192|224|240|248|252|254|255)\.0\.0)|((255\.){1}(0|128|192|224|240|248|252|254|255)\.0\.0\.0)/
```

```ts
import { ipv4SubnetMask } from "https://deno.land/x/regular_expressions/src/uri.ts";
```

| Should match | Should not match  |
|---|---|
| `255.255.255.255` | `255.255.255.253`  |
| `255.255.255.0` |   |
| `255.255.0.0` |   |
| `255.0.0.0` |   |
| `255.255.255.128` |   |
| `255.255.255.192` |   |




### **ipv6**

Should match any ip v6 without protocol
https://es.wikipedia.org/wiki/IPv6

From [uri.ts](./src/uri.ts#L276)

Copy:
```js
const ipv6 = /(?:[0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}/
```

```ts
import { ipv6 } from "https://deno.land/x/regular_expressions/src/uri.ts";
```

| Should match | Should not match  |
|---|---|
| `2001:0db8:85a3:0000:0000:8a2e:0370:7334` | `:a591:dfe9:8840:aa39:f830:0224:55c8:f21b`  |
| `2001:db8:85a3:0:0:8a2e:370:7334` | `2001:0db8:85a3:0000:0000:8a2e:0370:7334:`  |
| `2001:db8:85a3:8a2e:0370:7334:ff:fe00` | `g591:dfe9:8840:aa39:f830:0224:55c8:f21b`  |
| `a591:dfe9:8840:aa39:f830:0224:55c8:f21b` | `2001:db8:85a3:0:0:8a2e:370:7334:`  |
|  | `2001:db8:85a3:0:8a2e:370:7334:`  |
|  | `::1`  |
|  | `::ffff`  |




### **uri**

Should match any uri with any protocol, for example file://, http://, https://, ftp://, chrome-extension://, chrome://, etc... * https://es.wikipedia.org/wiki/Esquema_de_URI

From [uri.ts](./src/uri.ts#L132)

Copy:
```js
const uri = /([\w-.]{3,}:\/\/)(www\.)?[-a-zA-Z0-9:%._\+~#=]{2,256}\.[a-z]{2,6}(:([0-9]{1,5}))?(\/[-a-zA-Z0-9:%_\+.~#?&//=]*)?/
```

```ts
import { uri } from "https://deno.land/x/regular_expressions/src/uri.ts";
```

| Should match | Should not match  |
|---|---|
| `https://example.com:1234` | `//example.com`  |
| `http://example.com:1234/` | `example.com`  |
| `any://example.com` | `example.com/`  |
| `ftp://example.com/` | `example.com/path`  |
| `ftp://example.com:1234` | `example.com/path/`  |
| `z39.50r://example.com` |   |
| `https://example.com` |   |
| `https://example.com/` |   |
| `http://example.com/path` |   |
| `https://example.com/path` |   |
| `http://example.com/path/` |   |
| `https://example.com/path/` |   |
| `file://example.com` |   |
| `file://example.com/` |   |
| `file://example.com/path` |   |
| `file://example.com/path/` |   |
| `chrome-extensions://example.com/path/` |   |
| `estrange-protocol://example.com/path/` |   |




### **uriProtocol**

Should match any valid uri protocol
https://en.wikipedia.org/wiki/Uniform_Resource_Identifier
https://es.wikipedia.org/wiki/Esquema_de_URI

From [uri.ts](./src/uri.ts#L326)

Copy:
```js
const uriProtocol = /((aaa)|(aaas)|(about)|(acap)|(adiumxtra)|(afp)|(aim)|(apt)|(attachment)|(aw)|(beshare)|(bitcoin)|(bolo)|(callto)|(cap)|(chrome)|(chrome-extension)|(cid)|(content)|(crid)|(cvs)|(data)|(dav)|(dict)|(dns)|(ed2k)|(facetime)|(fax)|(feed)|(file)|(finger)|(fish)|(ftp)|(geo)|(gg)|(git)|(gizmoproject)|(go)|(gopher)|(gtalk)|(h323)|(hcp)|(http)|(https)|(iax)|(icap)|(im)|(imap)|(info)|(ipp)|(irc)|(irc6)|(ircs)|(iris)|(iris.beep)|(iris\.xpc)|(iris\.xpcs)|(iris\.lws)|(itms)|(jar)|(keyparc)|(lastfm)|(ldap)|(ldaps)|(lightning)|(magnet)|(mailto)|(maps)|(market)|(message)|(mid)|(mms)|(modem)|(ms-help)|(msnim)|(msrp)|(msrps)|(mtqp)|(mumble)|(mupdate)|(mvn)|(news)|(nfs)|(nntp)|(notes)|(opaquelocktoken)|(palm)|(paparazzi)|(platform)|(pop)|(pres)|(prospero)|(proxy)|(psyc)|(query)|(res)|(resource)|(rmi)|(rsync)|(rtmp)|(rtsp)|(secondlife)|(service)|(sftp)|(sgn)|(shttp)|(sieve)|(sip)|(sips)|(skype)|(smb)|(sms)|(snmp)|(soap\.beep)|(soap\.beeps)|(soldat)|(spotify)|(ssh)|(steam)|(svn)|(tag)|(teamspeak)|(tel)|(telnet)|(tftp)|(things)|(thismessage)|(tip)|(tv)|(udp)|(unreal)|(urn)|(ut2004)|(uuid)|(vemmi)|(ventrilo)|(view-source)|(wais)|(webcal)|(ws)|(wss)|(wtai)|(wyciwyg)|(xfire)|(xmlrpc\.beep)|(xmlrpc\.beeps)|(xmpp)|(xri)|(ymsgr)|(z39\.50r)|(z39\.50s)):/
```

```ts
import { uriProtocol } from "https://deno.land/x/regular_expressions/src/uri.ts";
```

| Should match | Should not match  |
|---|---|
| `http:` | `http://`  |
| `https:` | `https`  |
| `ftp:` | `www.google.com`  |
| `ssh:` | `ftp://ftp.is.co.za/rfc/rfc1808.txt`  |
| `irc:` |   |
| `ircs:` |   |
| `git:` |   |
| `gopher:` |   |
| `telnet:` |   |
| `nntp:` |   |
| `news:` |   |
| `mailto:` |   |
| `sftp:` |   |
| `ldap:` |   |
| `ldaps:` |   |
| `webcal:` |   |
| `xmpp:` |   |
| `callto:` |   |
| `ymsgr:` |   |
| `skype:` |   |
| `sip:` |   |
| `sips:` |   |
| `sms:` |   |
| `mailto:` |   |
| `msnim:` |   |
| `irc:` |   |
| `aim:` |   |
| `gtalk:` |   |
| `feed:` |   |
| `sip:` |   |
| `sips:` |   |
| `sms:` |   |
| `msnim:` |   |
| `aim:` |   |
| `gtalk:` |   |




### **url**

Should match any url with or without http/s protocol and with or without port

From [uri.ts](./src/uri.ts#L4)

Copy:
```js
const url = /((https?:)?\/\/)?(www\.)?[-a-zA-Z0-9:%._\+~#=]{2,256}\.[a-z]{2,6}(:[0-9]{1,5})?(\/[-a-zA-Z0-9:%_\+.~#?&//=]*)?/
```

```ts
import { url } from "https://deno.land/x/regular_expressions/src/uri.ts";
```

| Should match | Should not match  |
|---|---|
| `//ex4mpl3.com` | `https://example.com:123456`  |
| `http://ex4mpl3.com` | `http://example.com:123456`  |
| `http://subdomain.example.com` | `http://example.c0m`  |
| `http://sub.domain.example.com` | `example.c0m`  |
| `http://sub.domain.numb3rs.example.com` | `example,com`  |
| `http://example.com` | `example_com`  |
| `https://example.com` |   |
| `http://example.com/` |   |
| `https://example.com/` |   |
| `http://example.com/path` |   |
| `https://example.com/path` |   |
| `http://example.com/path/` |   |
| `https://example.com/path/subpath` |   |
| `http://example.com:1234` |   |
| `//example.com` |   |
| `example.com` |   |
| `example.com:80` |   |
| `example.com/` |   |
| `example.com/path` |   |
| `example.com/path/` |   |
| `//www.example.com` |   |
| `sub-d0m4in.exampl3.com` |   |
| `http://sub-d0m4in.exampl3.com` |   |
| `http://example.com` |   |
| `https://example.com:1` |   |
| `http://example.com:80` |   |
| `https://example.com:123` |   |
| `https://example.com:1234` |   |
| `https://example.com:65535` |   |




### **urlWithPort**

Should match any url with or without http/s protocols and port
https://es.wikipedia.org/wiki/Anexo:Puertos_de_red

From [uri.ts](./src/uri.ts#L54)

Copy:
```js
const urlWithPort = /((https?:)?\/\/)?(www\.)?[-a-zA-Z0-9:%._\+~#=]{2,256}\.[a-z]{2,6}(:([0-9]{1,5}))(\/[-a-zA-Z0-9:%_\+.~#?&//=]*)?/
```

```ts
import { urlWithPort } from "https://deno.land/x/regular_expressions/src/uri.ts";
```

| Should match | Should not match  |
|---|---|
| `https://example.com:0` | `https://example.com:`  |
| `http://example.com:1` | `//example.com`  |
| `http://example.com:80` | `example.com`  |
| `https://example.com:123` |   |
| `https://example.com:1234` |   |
| `https://example.com:65535` |   |
| `//example.com:65535` |   |
| `example.com:65535` |   |




### **urlWithProtocol**

Should match any url with http/s protocols and with or without port

From [uri.ts](./src/uri.ts#L78)

Copy:
```js
const urlWithProtocol = /(https?:\/\/)(www\.)?[-a-zA-Z0-9:%._\+~#=]{2,256}\.[a-z]{2,6}(:([0-9]{1,5}))(\/[-a-zA-Z0-9:%_\+.~#?&//=]*)?/
```

```ts
import { urlWithProtocol } from "https://deno.land/x/regular_expressions/src/uri.ts";
```

| Should match | Should not match  |
|---|---|
| `https://example.com:0` | `//example.com:65535`  |
| `http://example.com:1` | `example.com:65535`  |
| `http://example.com:80` | `https://example.com:`  |
| `https://example.com:123` | `//example.com`  |
| `https://example.com:1234` | `example.com`  |
| `https://example.com:65535` |   |



# example

> At: [example.ts](./src/example.ts)

### **lettersButNotH**

should match any single letter but not H.
https://www.w3.org/TR/CSS2/syndata.html#characters

From [example.ts](./src/example.ts#L6)

Copy:
```js
const lettersButNotH = /(?![H])[a-zA-Z]/
```

```ts
import { lettersButNotH } from "https://deno.land/x/regular_expressions/src/example.ts";
```

| Should match | Should not match  |
|---|---|
| `a` | `H`  |
| `h` | `3`  |
| `A` | `aa`  |
| `Z` |   |



# text

> At: [text.ts](./src/text.ts)

### **blankLine**

Should match a blank line (empty or whitespace-only).

From [text.ts](./src/text.ts#L107)

Copy:
```js
const blankLine = /[ \t]*/
```

```ts
import { blankLine } from "https://deno.land/x/regular_expressions/src/text.ts";
```

| Should match | Should not match  |
|---|---|
|  | `a`  |
| ` ` | ` a`  |
| `\x09` | `hello`  |
| `   ` | `\x0a`  |
| `\x09\x09` |   |
| ` \x09 ` |   |




### **hashtag**

Should match a hashtag (e.g. #topic, #CamelCase).

From [text.ts](./src/text.ts#L25)

Copy:
```js
const hashtag = /#[a-zA-Z][a-zA-Z0-9_]*/
```

```ts
import { hashtag } from "https://deno.land/x/regular_expressions/src/text.ts";
```

| Should match | Should not match  |
|---|---|
| `#hello` | `#123`  |
| `#JavaScript` | `#`  |
| `#my_tag` | `##double`  |
| `#A` | `hashtag`  |
| `#camelCase123` | `#_start`  |




### **mention**

Should match an @mention (e.g. @username).

From [text.ts](./src/text.ts#L46)

Copy:
```js
const mention = /@[a-zA-Z][a-zA-Z0-9_]*/
```

```ts
import { mention } from "https://deno.land/x/regular_expressions/src/text.ts";
```

| Should match | Should not match  |
|---|---|
| `@john` | `@123`  |
| `@User123` | `@`  |
| `@my_name` | `@@double`  |
| `@A` | `mention`  |
| `@userName` | `@_start`  |




### **multilineComment**

Should match a multi-line block comment.

From [text.ts](./src/text.ts#L148)

Copy:
```js
const multilineComment = /\/\*[^]*?\*\//
```

```ts
import { multilineComment } from "https://deno.land/x/regular_expressions/src/text.ts";
```

| Should match | Should not match  |
|---|---|
| `/* comment */` | `// single line`  |
| `/* multi\x0aline */` | `/* unclosed`  |
| `/** jsdoc */` | `no comment`  |
| `/* a */` | `*/ end only`  |




### **sentence**

Should match a sentence starting with a capital letter and ending
with punctuation (period, exclamation, or question mark).

From [text.ts](./src/text.ts#L5)

Copy:
```js
const sentence = /[A-Z][^.!?]*[.!?]/
```

```ts
import { sentence } from "https://deno.land/x/regular_expressions/src/text.ts";
```

| Should match | Should not match  |
|---|---|
| `Hello world.` | `hello world.`  |
| `This is a test!` | `No punctuation`  |
| `Is this working?` | `123 start.`  |
| `A.` | `lowercase!`  |
| `The quick brown fox jumps over the lazy dog.` |   |




### **singleLineComment**

Should match a single-line comment (// or #).

From [text.ts](./src/text.ts#L128)

Copy:
```js
const singleLineComment = /(?:\/\/|#).*/
```

```ts
import { singleLineComment } from "https://deno.land/x/regular_expressions/src/text.ts";
```

| Should match | Should not match  |
|---|---|
| `// this is a comment` | `/* block comment */`  |
| `# python comment` | `not a comment`  |
| `//compact` | `/ slash`  |
| `#!shebang` | `http://url.com`  |
| `// ` |   |




### **slug**

Should match a URL-friendly slug (e.g. my-post-title).

From [text.ts](./src/text.ts#L66)

Copy:
```js
const slug = /[a-z0-9]+(?:-[a-z0-9]+)*/
```

```ts
import { slug } from "https://deno.land/x/regular_expressions/src/text.ts";
```

| Should match | Should not match  |
|---|---|
| `my-post-title` | `My-Post`  |
| `hello` | `-leading`  |
| `hello-world` | `trailing-`  |
| `post-123` | `double--dash`  |
| `a-b-c-d` | `UPPER`  |




### **whitespaceOnly**

Should match a string containing only whitespace characters.

From [text.ts](./src/text.ts#L87)

Copy:
```js
const whitespaceOnly = /\s+/
```

```ts
import { whitespaceOnly } from "https://deno.land/x/regular_expressions/src/text.ts";
```

| Should match | Should not match  |
|---|---|
| ` ` | `a`  |
| `   ` | ` a `  |
| `\x09` | `hello`  |
| `\x0a` | `123`  |
| ` \x09\x0a ` |   |



# file

> At: [file.ts](./src/file.ts)

### **fileExtension**

Should match a file extension including compound extensions
like .tar.gz.

From [file.ts](./src/file.ts#L47)

Copy:
```js
const fileExtension = /\.[a-zA-Z0-9]+(?:\.[a-zA-Z0-9]+)*/
```

```ts
import { fileExtension } from "https://deno.land/x/regular_expressions/src/file.ts";
```

| Should match | Should not match  |
|---|---|
| `.txt` | `txt`  |
| `.tar.gz` | `.`  |
| `.js` | `..`  |
| `.d.ts` | `tar.gz`  |
| `.json` | `..txt`  |
| `.min.js` |   |




### **fileName**

Should match a valid filename without path separators.

From [file.ts](./src/file.ts#L69)

Copy:
```js
const fileName = /[a-zA-Z0-9](?:[a-zA-Z0-9._-]*[a-zA-Z0-9])?(?:\.[a-zA-Z0-9]+)?/
```

```ts
import { fileName } from "https://deno.land/x/regular_expressions/src/file.ts";
```

| Should match | Should not match  |
|---|---|
| `file.txt` | `.hidden`  |
| `my-document.pdf` | `-start`  |
| `image_001.png` | `file/name`  |
| `README` | `my file`  |
| `a` | `file?name`  |
| `data.backup.tar.gz` |   |




### **filePathUnix**

Should match a Unix-style absolute file path.

From [file.ts](./src/file.ts#L4)

Copy:
```js
const filePathUnix = /(?:\/[a-zA-Z0-9._-]+)+/
```

```ts
import { filePathUnix } from "https://deno.land/x/regular_expressions/src/file.ts";
```

| Should match | Should not match  |
|---|---|
| `/usr/local/bin/foo` | `usr/local/bin`  |
| `/home/user/file.txt` | `C:\Users\foo`  |
| `/var/log/syslog` | `//double`  |
| `/tmp/test` | `/`  |
| `/a` | `relative/path`  |




### **filePathWindows**

Should match a Windows-style absolute file path.

From [file.ts](./src/file.ts#L25)

Copy:
```js
const filePathWindows = /[a-zA-Z]:\\(?:[a-zA-Z0-9._-]+\\)*[a-zA-Z0-9._-]+/
```

```ts
import { filePathWindows } from "https://deno.land/x/regular_expressions/src/file.ts";
```

| Should match | Should not match  |
|---|---|
| `C:\Users\foo\bar` | `/usr/local/bin`  |
| `D:\Documents\file.txt` | `C:/Users/foo`  |
| `E:\data` | `C:\`  |
| `C:\Windows\System32\cmd.exe` | `1:\foo`  |
|  | `CC:\foo`  |




### **gitBranchName**

Should match a valid git branch name.

From [file.ts](./src/file.ts#L161)

Copy:
```js
const gitBranchName = /[a-zA-Z0-9](?:[a-zA-Z0-9_\/-]*(?:\.[a-zA-Z0-9_\/-]+))*(?:[a-zA-Z0-9_\/-]*[a-zA-Z0-9])?/
```

```ts
import { gitBranchName } from "https://deno.land/x/regular_expressions/src/file.ts";
```

| Should match | Should not match  |
|---|---|
| `main` | `.hidden`  |
| `feature/login` | `-start`  |
| `fix/bug-123` | `branch..name`  |
| `release/v1.0.0` | `branch name`  |
| `my-branch` | `branch~name`  |
| `dev` |   |




### **gitCommitHash**

Should match a git commit hash (7 to 40 lowercase hex characters).

From [file.ts](./src/file.ts#L142)

Copy:
```js
const gitCommitHash = /[0-9a-f]{7,40}/
```

```ts
import { gitCommitHash } from "https://deno.land/x/regular_expressions/src/file.ts";
```

| Should match | Should not match  |
|---|---|
| `a94a8fe` | `a94a8f`  |
| `da39a3ee5e6b4b0d3255bfef95601890afd80709` | `ABCDEF1`  |
| `1234abc` | `ghijklm`  |
| `abcdef1234567890abcdef1234567890abcdef12` | `12345g7`  |




### **mimeType**

Should match a MIME type (e.g. application/json, image/png).

From [file.ts](./src/file.ts#L92)

Copy:
```js
const mimeType = /[a-zA-Z0-9][a-zA-Z0-9!#$&\-^_]*\/[a-zA-Z0-9][a-zA-Z0-9!#$&\-^_.+]*/
```

```ts
import { mimeType } from "https://deno.land/x/regular_expressions/src/file.ts";
```

| Should match | Should not match  |
|---|---|
| `application/json` | `application`  |
| `text/html` | `/json`  |
| `image/png` | `application/`  |
| `application/octet-stream` | `text html`  |
| `text/plain` | `application\json`  |
| `application/vnd.api+json` |   |
| `multipart/form-data` |   |




### **semver**

Should match a semantic version string (e.g. 1.2.3,
1.0.0-alpha.1, 2.0.0+build.123).

From [file.ts](./src/file.ts#L117)

Copy:
```js
const semver = /(?:0|[1-9][0-9]*)\.(?:0|[1-9][0-9]*)\.(?:0|[1-9][0-9]*)(?:-(?:0|[1-9][0-9]*|[0-9]*[a-zA-Z-][0-9a-zA-Z-]*)(?:\.(?:0|[1-9][0-9]*|[0-9]*[a-zA-Z-][0-9a-zA-Z-]*))*)?(?:\+[0-9a-zA-Z-]+(?:\.[0-9a-zA-Z-]+)*)?/
```

```ts
import { semver } from "https://deno.land/x/regular_expressions/src/file.ts";
```

| Should match | Should not match  |
|---|---|
| `1.2.3` | `1.2`  |
| `0.0.0` | `1`  |
| `1.0.0-alpha` | `01.2.3`  |
| `1.0.0-alpha.1` | `1.02.3`  |
| `1.0.0+build.123` | `1.2.03`  |
| `1.0.0-beta+exp.sha.5114f85` | `1.2.3.4`  |
| `10.20.30` |   |



# git

> At: [git.ts](./src/git.ts)

### **conventionalCommit**

Should match a conventional commit message
(e.g. feat(scope): message or fix!: breaking change).

From [git.ts](./src/git.ts#L5)

Copy:
```js
const conventionalCommit = /(?:feat|fix|docs|style|refactor|perf|test|build|ci|chore|revert)(?:\([a-zA-Z0-9_-]+\))?!?:\s.+/
```

```ts
import { conventionalCommit } from "https://deno.land/x/regular_expressions/src/git.ts";
```

| Should match | Should not match  |
|---|---|
| `feat: add new feature` | `feature: add something`  |
| `fix(auth): resolve login bug` | `feat add new feature`  |
| `docs: update README` | `feat:`  |
| `feat!: breaking change` | `feat(: bad scope`  |
| `refactor(core): simplify logic` | `FIX: uppercase`  |
| `chore: update deps` |   |




### **gitConflictMarker**

Should match a git conflict marker
(<<<<<<< HEAD, =======, or >>>>>>> branch).

From [git.ts](./src/git.ts#L49)

Copy:
```js
const gitConflictMarker = /(?:<{7}|={7}|>{7})(?:\s+\S+)?/
```

```ts
import { gitConflictMarker } from "https://deno.land/x/regular_expressions/src/git.ts";
```

| Should match | Should not match  |
|---|---|
| `<<<<<<< HEAD` | `<<<<<< short`  |
| `=======` | `====`  |
| `>>>>>>> feature/branch` | `>>> not enough`  |
| `<<<<<<< ours` | `<<<<<<`  |
| `>>>>>>> theirs` |   |




### **gitDiffHunk**

Should match a git diff hunk header
(e.g. @@ -1,3 +1,4 @@).

From [git.ts](./src/git.ts#L29)

Copy:
```js
const gitDiffHunk = /@@ -\d+(?:,\d+)? \+\d+(?:,\d+)? @@/
```

```ts
import { gitDiffHunk } from "https://deno.land/x/regular_expressions/src/git.ts";
```

| Should match | Should not match  |
|---|---|
| `@@ -1,3 +1,4 @@` | `@@ -1 @@`  |
| `@@ -0,0 +1,10 @@` | `@@ +1 @@`  |
| `@@ -100 +200 @@` | `--- a/file`  |
| `@@ -1,5 +1,5 @@` | `+++ b/file`  |




### **gitRemoteUrl**

Should match a git remote URL
(SSH git@host:org/repo.git or HTTPS ...git).

From [git.ts](./src/git.ts#L70)

Copy:
```js
const gitRemoteUrl = /(?:git@[a-zA-Z0-9.-]+:[a-zA-Z0-9_-]+\/[a-zA-Z0-9._-]+(?:\.git)?|https?:\/\/[a-zA-Z0-9.-]+\/[a-zA-Z0-9_-]+\/[a-zA-Z0-9._-]+(?:\.git)?)/
```

```ts
import { gitRemoteUrl } from "https://deno.land/x/regular_expressions/src/git.ts";
```

| Should match | Should not match  |
|---|---|
| `git@github.com:user/repo.git` | `github.com/user/repo`  |
| `https://github.com/user/repo.git` | `git@:user/repo.git`  |
| `git@gitlab.com:org/project` | `ftp://github.com/user/repo`  |
| `https://bitbucket.org/team/repo` | `user/repo`  |




### **gitTag**

Should match a git tag (e.g. v1.2.3, release-1.0).

From [git.ts](./src/git.ts#L90)

Copy:
```js
const gitTag = /v?(?:0|[1-9][0-9]*)(?:\.(?:0|[1-9][0-9]*))+(?:-[a-zA-Z0-9._-]+)?/
```

```ts
import { gitTag } from "https://deno.land/x/regular_expressions/src/git.ts";
```

| Should match | Should not match  |
|---|---|
| `v1.2.3` | `v1`  |
| `1.0.0` | `abc`  |
| `v0.1.0` | `v`  |
| `v2.0.0-beta.1` | `1`  |
| `1.0.0-rc1` | `v01.2.3`  |
| `v10.20.30` |   |



# i18n

> At: [i18n.ts](./src/i18n.ts)

### **bcp47**

Should match a BCP 47 / IETF language tag
(e.g. en, en-US, zh-Hans-CN).

From [i18n.ts](./src/i18n.ts#L5)

Copy:
```js
const bcp47 = /[a-zA-Z]{2,3}(?:-[a-zA-Z]{4})?(?:-(?:[a-zA-Z]{2}|[0-9]{3}))?(?:-(?:[a-zA-Z0-9]{5,8}|[0-9][a-zA-Z0-9]{3}))*/
```

```ts
import { bcp47 } from "https://deno.land/x/regular_expressions/src/i18n.ts";
```

| Should match | Should not match  |
|---|---|
| `en` | `e`  |
| `en-US` | `english`  |
| `zh-Hans-CN` | `en_US`  |
| `pt-BR` | `12-US`  |
| `sr-Latn` | `en-`  |
| `de-DE` |   |
| `ja-JP` |   |




### **localeCode**

Should match a locale code in underscore format
(e.g. en_US, pt_BR).

From [i18n.ts](./src/i18n.ts#L30)

Copy:
```js
const localeCode = /[a-z]{2}_[A-Z]{2}/
```

```ts
import { localeCode } from "https://deno.land/x/regular_expressions/src/i18n.ts";
```

| Should match | Should not match  |
|---|---|
| `en_US` | `en-US`  |
| `pt_BR` | `EN_US`  |
| `zh_CN` | `en_us`  |
| `ja_JP` | `english_US`  |
| `de_DE` | `e_US`  |
| `fr_FR` |   |




### **translationKey**

Should match a dot-notation translation key
(e.g. common.button.submit).

From [i18n.ts](./src/i18n.ts#L53)

Copy:
```js
const translationKey = /[a-zA-Z_][a-zA-Z0-9_]*(?:\.[a-zA-Z_][a-zA-Z0-9_]*)+/
```

```ts
import { translationKey } from "https://deno.land/x/regular_expressions/src/i18n.ts";
```

| Should match | Should not match  |
|---|---|
| `common.button.submit` | `singlekey`  |
| `errors.notFound` | `.leading.dot`  |
| `app.header.title` | `trailing.`  |
| `i18n.key.nested.deep` | `123.key`  |
| `nav.home` | `a..b`  |



# crypto

> At: [crypto.ts](./src/crypto.ts)

### **jwtToken**

Should match a JSON Web Token (JWT) with three base64url-encoded segments.

From [crypto.ts](./src/crypto.ts#L91)

Copy:
```js
const jwtToken = /[A-Za-z0-9_-]{2,}(?:\.[A-Za-z0-9_-]{2,}){2}/
```

```ts
import { jwtToken } from "https://deno.land/x/regular_expressions/src/crypto.ts";
```

| Should match | Should not match  |
|---|---|
| `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIn0.dozjgNryP4J3jVmNHl0w5N_XgL0n3I9PlFUP0THsR8U` | `abc.def`  |
| `eyJhbGciOiJSUzI1NiJ9.eyJpc3MiOiJqb2UifQ.cC4hiUPoj9Eetdgtv3hF80EGrhuB__dzERat0XF9g2VtQgr9PJbu3XOiZj5RZmh7AAuHIm4Bh-0Qc_lF5YKt_O8W2Fp5jujGbds9uJdbF9CUAr7t1dnZcAcQjbKBYNX4BAynRFdiuB--f_nZLgrnbyTyWzO75vRK5h6xBArLIARNPvkSjtQBMHlb1L07Qe7K0GarZRmB_eSN9383LcOLn6_dO--xi12jzDwusC-eOkHWEsqtFZESc6BfI7noOPqvhJ1phCnvWh6IeYI2w9QOYEUipUTI8np6LbgGY9Fs98rqVt5AXLIhWkWywlVmtVrBp0igcN_IoypGlUPQGe77Rw` | `abc`  |
| `abc.def.ghi` | `.def.ghi`  |
|  | `abc..ghi`  |
|  | `a.b.c`  |




### **md5**

Should match an MD5 hash (32 lowercase hex characters).

From [crypto.ts](./src/crypto.ts#L4)

Copy:
```js
const md5 = /[0-9a-f]{32}/
```

```ts
import { md5 } from "https://deno.land/x/regular_expressions/src/crypto.ts";
```

| Should match | Should not match  |
|---|---|
| `d41d8cd98f00b204e9800998ecf8427e` | `d41d8cd98f00b204e9800998ecf8427`  |
| `098f6bcd4621d373cade4e832627b4f6` | `g41d8cd98f00b204e9800998ecf8427e`  |
| `5d41402abc4b2a76b9719d911017c592` | `D41D8CD98F00B204E9800998ECF8427E`  |
|  | `d41d8cd98f00b204e9800998ecf8427e0`  |




### **pemCertificate**

Should match a PEM-encoded certificate or key block.

From [crypto.ts](./src/crypto.ts#L110)

Copy:
```js
const pemCertificate = /-----BEGIN [A-Z ]+-----[\s\S]+?-----END [A-Z ]+-----/
```

```ts
import { pemCertificate } from "https://deno.land/x/regular_expressions/src/crypto.ts";
```

| Should match | Should not match  |
|---|---|
| `-----BEGIN CERTIFICATE-----\x0aMIIBkTCB+wIJAL2B\x0a-----END CERTIFICATE-----` | `-----BEGIN CERTIFICATE-----`  |
| `-----BEGIN PUBLIC KEY-----\x0aMIGfMA0GCSqGSIb3DQEBAQUAA4GN\x0a-----END PUBLIC KEY-----` | `-----END CERTIFICATE-----`  |
| `-----BEGIN RSA PRIVATE KEY-----\x0aMIIEpAIBAAKCAQEA\x0a-----END RSA PRIVATE KEY-----` | `-----BEGIN lowercase-----\x0adata\x0a-----END lowercase-----`  |
|  | `BEGIN CERTIFICATE\x0adata\x0aEND CERTIFICATE`  |




### **sha1**

Should match a SHA-1 hash (40 lowercase hex characters).

From [crypto.ts](./src/crypto.ts#L22)

Copy:
```js
const sha1 = /[0-9a-f]{40}/
```

```ts
import { sha1 } from "https://deno.land/x/regular_expressions/src/crypto.ts";
```

| Should match | Should not match  |
|---|---|
| `da39a3ee5e6b4b0d3255bfef95601890afd80709` | `da39a3ee5e6b4b0d3255bfef95601890afd8070`  |
| `a94a8fe5ccb19ba61c4c0873d391e987982fbbd3` | `ga39a3ee5e6b4b0d3255bfef95601890afd80709`  |
| `2fd4e1c67a2d28fced849ee1bb76e7391b93eb12` | `DA39A3EE5E6B4B0D3255BFEF95601890AFD80709`  |




### **sha256**

Should match a SHA-256 hash (64 lowercase hex characters).

From [crypto.ts](./src/crypto.ts#L39)

Copy:
```js
const sha256 = /[0-9a-f]{64}/
```

```ts
import { sha256 } from "https://deno.land/x/regular_expressions/src/crypto.ts";
```

| Should match | Should not match  |
|---|---|
| `e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855` | `e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b85`  |
| `ba7816bf8f01cfea414140de5dae2223b00361a396177a9cb410ff61f20015ad` | `g3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855`  |
| `d7a8fbb307d7809469ca9abcb0082e4f8d5651e46d3cdb762d02d0bf37c9e592` | `E3B0C44298FC1C149AFBF4C8996FB92427AE41E4649B934CA495991B7852B855`  |




### **sha512**

Should match a SHA-512 hash (128 lowercase hex characters).

From [crypto.ts](./src/crypto.ts#L56)

Copy:
```js
const sha512 = /[0-9a-f]{128}/
```

```ts
import { sha512 } from "https://deno.land/x/regular_expressions/src/crypto.ts";
```

| Should match | Should not match  |
|---|---|
| `cf83e1357eefb8bdf1542850d66d8007d620e4050b5715dc83f4a921d36ce9ce47d0d13c5d85f2b0ff8318d2877eec2f63b931bd47417a81a538327af927da3e` | `cf83e1357eefb8bdf1542850d66d8007d620e4050b5715dc83f4a921d36ce9ce47d0d13c5d85f2b0ff8318d2877eec2f63b931bd47417a81a538327af927da3`  |
| `ddaf35a193617abacc417349ae20413112e6fa4e89a97ea20a9eeee64b55d39a2192992a274fc1a836ba3c23a3feebbd454d4423643ce80e2a9ac94fa54ca49f` | `CF83E1357EEFB8BDF1542850D66D8007D620E4050B5715DC83F4A921D36CE9CE47D0D13C5D85F2B0FF8318D2877EEC2F63B931BD47417A81A538327AF927DA3E`  |




### **uuidV4**

Should match a UUID version 4 (RFC 4122).

From [crypto.ts](./src/crypto.ts#L71)

Copy:
```js
const uuidV4 = /[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}/
```

```ts
import { uuidV4 } from "https://deno.land/x/regular_expressions/src/crypto.ts";
```

| Should match | Should not match  |
|---|---|
| `550e8400-e29b-41d4-a716-446655440000` | `550e8400-e29b-31d4-a716-446655440000`  |
| `6ba7b810-9dad-41d4-80b5-fc0098000000` | `550e8400-e29b-41d4-c716-446655440000`  |
| `f47ac10b-58cc-4372-a567-0e02b2c3d479` | `550e8400e29b41d4a716446655440000`  |
| `91b4d142-5c28-4be2-8e5a-2b3c4d5e6f70` | `550e8400-e29b-41d4-a716-44665544000`  |
|  | `ZZZZZZZZ-ZZZZ-4ZZZ-8ZZZ-ZZZZZZZZZZZZ`  |



# auth

> At: [auth.ts](./src/auth.ts)

### **apiKeyGeneric**

Should match a generic API key format (32+ alphanumeric characters).

From [auth.ts](./src/auth.ts#L62)

Copy:
```js
const apiKeyGeneric = /[A-Za-z0-9]{32,}/
```

```ts
import { apiKeyGeneric } from "https://deno.land/x/regular_expressions/src/auth.ts";
```

| Should match | Should not match  |
|---|---|
| `abcdefghijklmnopqrstuvwxyz123456` | `short_key`  |
| `ABCDEFGHIJKLMNOPQRSTUVWXYZ012345` | `abc-def-ghi-jkl-mno-pqr-stu-vwx`  |
| `a1b2c3d4e5f6g7h8i9j0k1l2m3n4o5p6` | `1234567890123456789012345678901`  |
| `ThisIsAVeryLongApiKeyThatExceeds32Characters` | `key with spaces 1234567890abcdef`  |




### **awsAccessKey**

Should match an AWS access key ID (starts with AKIA, 20 characters).

From [auth.ts](./src/auth.ts#L4)

Copy:
```js
const awsAccessKey = /AKIA[0-9A-Z]{16}/
```

```ts
import { awsAccessKey } from "https://deno.land/x/regular_expressions/src/auth.ts";
```

| Should match | Should not match  |
|---|---|
| `AKIAIOSFODNN7EXAMPLE` | `ASIA1234567890ABCDEF`  |
| `AKIA1234567890ABCDEF` | `AKIA12345`  |
| `AKIAZ5BCD3EFGHIJ4KLM` | `akia1234567890abcdef`  |
|  | `AKIAIOSFODNN7EXAMPLEE`  |




### **githubToken**

Should match a GitHub personal access token
(ghp_, gho_, ghs_, ghr_ prefixed).

From [auth.ts](./src/auth.ts#L23)

Copy:
```js
const githubToken = /gh[posru]_[A-Za-z0-9_]{36,255}/
```

```ts
import { githubToken } from "https://deno.land/x/regular_expressions/src/auth.ts";
```

| Should match | Should not match  |
|---|---|
| `ghp_ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghij` | `ghx_ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghij`  |
| `gho_1234567890abcdefghijklmnopqrstuvwxyz` | `ghp_short`  |
| `ghs_ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghij` | `ghp_`  |
| `ghr_ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghij` | `GHP_ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghij`  |




### **slackToken**

Should match a Slack bot or user token
(xoxb-, xoxp-, xoxs-, xoxa- prefixed).

From [auth.ts](./src/auth.ts#L43)

Copy:
```js
const slackToken = /xox[bpsa]-[0-9A-Za-z-]+/
```

```ts
import { slackToken } from "https://deno.land/x/regular_expressions/src/auth.ts";
```

| Should match | Should not match  |
|---|---|
| `xoxb-not-a-real-token-000` | `xoxc-123456789`  |
| `xoxp-fake-token-for-tests-000` | `xoxb-`  |
| `xoxs-example-000` | `xoxb`  |
| `xoxa-2-example` | `XOXB-123456789`  |



# validation

> At: [validation.ts](./src/validation.ts)

### **alphabetic**

Should match a string containing only letters (a-z, A-Z).

From [validation.ts](./src/validation.ts#L70)

Copy:
```js
const alphabetic = /[a-zA-Z]+/
```

```ts
import { alphabetic } from "https://deno.land/x/regular_expressions/src/validation.ts";
```

| Should match | Should not match  |
|---|---|
| `hello` | `hello1`  |
| `Hello` | `123`  |
| `ABC` | `hello world`  |
| `a` | `hello!`  |
| `abcXYZ` |   |




### **alphanumeric**

Should match a string containing only alphanumeric characters.

From [validation.ts](./src/validation.ts#L50)

Copy:
```js
const alphanumeric = /[a-zA-Z0-9]+/
```

```ts
import { alphanumeric } from "https://deno.land/x/regular_expressions/src/validation.ts";
```

| Should match | Should not match  |
|---|---|
| `hello` | `hello world`  |
| `Hello123` | `hello!`  |
| `ABC` | `hello-world`  |
| `123` | `hello_world`  |
| `a` |   |




### **noWhitespace**

Should match a string with no whitespace characters.

From [validation.ts](./src/validation.ts#L110)

Copy:
```js
const noWhitespace = /[^\s]+/
```

```ts
import { noWhitespace } from "https://deno.land/x/regular_expressions/src/validation.ts";
```

| Should match | Should not match  |
|---|---|
| `hello` | ` `  |
| `hello-world` | `hello world`  |
| `user@example.com` | `tab\x09here`  |
| `123!@#` | `\x0a`  |
| `no_spaces_here` |   |




### **numericString**

Should match a string containing only digits (0-9).

From [validation.ts](./src/validation.ts#L90)

Copy:
```js
const numericString = /[0-9]+/
```

```ts
import { numericString } from "https://deno.land/x/regular_expressions/src/validation.ts";
```

| Should match | Should not match  |
|---|---|
| `0` | `12.34`  |
| `123` | `12a`  |
| `9999999999` | `-5`  |
| `007` | `+3`  |
|  | `1 2`  |




### **printableAscii**

Should match a string of only printable ASCII characters (32-126).

From [validation.ts](./src/validation.ts#L130)

Copy:
```js
const printableAscii = /[\x20-\x7E]+/
```

```ts
import { printableAscii } from "https://deno.land/x/regular_expressions/src/validation.ts";
```

| Should match | Should not match  |
|---|---|
| `Hello, World!` | `\x09`  |
| ` ` | `\x0a`  |
| `~` | `\x00`  |
| `abc123!@#` | `\x7f`  |
| `all printable chars` |   |




### **strongPassword**

Should match a strong password (min 8 chars with at least one
uppercase, one lowercase, one digit, and one special character).

From [validation.ts](./src/validation.ts#L29)

Copy:
```js
const strongPassword = /(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^a-zA-Z0-9]).{8,}/
```

```ts
import { strongPassword } from "https://deno.land/x/regular_expressions/src/validation.ts";
```

| Should match | Should not match  |
|---|---|
| `P@ssw0rd!` | `password`  |
| `Str0ng#Pass` | `PASSWORD1!`  |
| `Abcd1234!` | `Passw0rd`  |
| `myP@ss99` | `Pa1!`  |
|  | `12345678`  |




### **username**

Should match a valid username (3-20 chars, alphanumeric, underscore,
or dash).

From [validation.ts](./src/validation.ts#L5)

Copy:
```js
const username = /[a-zA-Z0-9][a-zA-Z0-9_-]{2,19}/
```

```ts
import { username } from "https://deno.land/x/regular_expressions/src/validation.ts";
```

| Should match | Should not match  |
|---|---|
| `john` | `ab`  |
| `user_name` | `_user`  |
| `my-user` | `-user`  |
| `abc` | `a b`  |
| `User123` | `user!name`  |
| `a1b2c3d4e5f6g7h8i9j0` | `a1b2c3d4e5f6g7h8i9j0x`  |



# env

> At: [env.ts](./src/env.ts)

### **connectionString**

Should match a generic database connection string URI
(e.g. postgres://user:pass@host:5432/db).

From [env.ts](./src/env.ts#L90)

Copy:
```js
const connectionString = /[a-z][a-z0-9+.-]*:\/\/(?:[^\s:@]+(?::[^\s:@]*)?@)?(?:[^\s:\/]+(?::\d+)?)?(?:\/[^\s?#]*)?/
```

```ts
import { connectionString } from "https://deno.land/x/regular_expressions/src/env.ts";
```

| Should match | Should not match  |
|---|---|
| `postgres://user:pass@localhost:5432/mydb` | `://missing-scheme`  |
| `mysql://root@127.0.0.1/test` | `postgres//no-colon`  |
| `redis://localhost:6379` | `just-a-string`  |
| `mongodb://admin:secret@db.example.com:27017/app` | `123://invalid`  |
| `sqlite:///path/to/db.sqlite` |   |




### **cronExpression**

Should match a 5-field cron expression
(e.g. * /5 * * * *).

From [env.ts](./src/env.ts#L69)

Copy:
```js
const cronExpression = /(?:[0-9*\/,-]+\s+){4}[0-9*\/,-]+/
```

```ts
import { cronExpression } from "https://deno.land/x/regular_expressions/src/env.ts";
```

| Should match | Should not match  |
|---|---|
| `* * * * *` | `* * * *`  |
| `0 12 * * 1-5` | `* * * * * *`  |
| `*/5 * * * *` | `abc * * * *`  |
| `0 0 1 1 *` | `hello`  |
| `30 4 1,15 * *` |   |




### **dockerImage**

Should match a Docker image reference
(e.g. nginx:latest, registry.io/org/image:v1.2.3).

From [env.ts](./src/env.ts#L47)

Copy:
```js
const dockerImage = /[a-z0-9]+(?:[._-][a-z0-9]+)*(?:\/[a-z0-9]+(?:[._-][a-z0-9]+)*)*(?::[a-zA-Z0-9][a-zA-Z0-9._-]*)?/
```

```ts
import { dockerImage } from "https://deno.land/x/regular_expressions/src/env.ts";
```

| Should match | Should not match  |
|---|---|
| `nginx:latest` | `:latest`  |
| `ubuntu:22.04` | `UPPERCASE:tag`  |
| `registry.io/org/image:v1.2.3` | `image:`  |
| `node:18-alpine` | `a//b:tag`  |
| `myapp:build-123` |   |




### **envPlaceholder**

Should match an environment variable placeholder
(e.g. ${VAR_NAME} or $VAR_NAME).

From [env.ts](./src/env.ts#L26)

Copy:
```js
const envPlaceholder = /\$\{[A-Z_][A-Z0-9_]*\}|\$[A-Z_][A-Z0-9_]*/
```

```ts
import { envPlaceholder } from "https://deno.land/x/regular_expressions/src/env.ts";
```

| Should match | Should not match  |
|---|---|
| `${HOME}` | `${lowercase}`  |
| `$HOME` | `$123`  |
| `${DATABASE_URL}` | `${}`  |
| `$NODE_ENV` | `HOME`  |
| `${A}` |   |




### **envVar**

Should match an environment variable assignment
(e.g. KEY=value or export KEY=value).

From [env.ts](./src/env.ts#L5)

Copy:
```js
const envVar = /(?:export\s+)?[A-Z][A-Z0-9_]*=[^\s]*/
```

```ts
import { envVar } from "https://deno.land/x/regular_expressions/src/env.ts";
```

| Should match | Should not match  |
|---|---|
| `FOO=bar` | `foo=bar`  |
| `DATABASE_URL=postgres://localhost/db` | `=value`  |
| `export SECRET_KEY=abc123` | `123=abc`  |
| `NODE_ENV=production` | `_KEY=val`  |
| `A=1` |   |




### **s3Uri**

Should match an S3 URI (e.g. s3://bucket/key/path).

From [env.ts](./src/env.ts#L111)

Copy:
```js
const s3Uri = /s3:\/\/[a-z0-9][a-z0-9.-]*[a-z0-9](?:\/[^\s]*)?/
```

```ts
import { s3Uri } from "https://deno.land/x/regular_expressions/src/env.ts";
```

| Should match | Should not match  |
|---|---|
| `s3://my-bucket/path/to/file.txt` | `s3://`  |
| `s3://bucket123/key` | `s3://-bucket/key`  |
| `s3://my.bucket.name/folder/` | `S3://bucket/key`  |
| `s3://data-lake/2024/01/data.parquet` | `http://bucket/key`  |



# js_eval

> At: [js_eval.ts](./src/js_eval.ts)

### **classDefinition**

Should match a js class definition

From [js_eval.ts](./src/js_eval.ts#L274)

Copy:
```js
const classDefinition = /class\s+((?!(\b(?:break|case|catch|class|const|continue|debugger|default|delete|do|else|export|extends|finally|for|function|if|import|in|instanceof|new|return|super|switch|this|throw|try|typeof|var|void|while|with|yield|implements|interface|let|package|private|protected|public|static|yield|enum|await|abstract|boolean|byte|char|double|final|float|goto|int|long|native|short|synchronized|throws|transient|volatile|null|true|false)\b))([a-zA-Z$_][a-zA-Z0-9$_]*))\s*(extends\s+((?!(\b(?:break|case|catch|class|const|continue|debugger|default|delete|do|else|export|extends|finally|for|function|if|import|in|instanceof|new|return|super|switch|this|throw|try|typeof|var|void|while|with|yield|implements|interface|let|package|private|protected|public|static|yield|enum|await|abstract|boolean|byte|char|double|final|float|goto|int|long|native|short|synchronized|throws|transient|volatile|null|true|false)\b))([a-zA-Z$_][a-zA-Z0-9$_]*)))?\s*\{.*\}/
```

```ts
import { classDefinition } from "https://deno.land/x/regular_expressions/src/js_eval.ts";
```

| Should match | Should not match  |
|---|---|
| `class A{ }` | `class 1foo{}`  |
| `class A{}` | `class foo extends 3hola{}`  |
| `class A { }` | `class A extends 1{ }`  |
| `class _ { }` | `class while {}`  |
| `class $ { }` | `class foo extends if{}`  |
| `class A extends B { }` | `classB{}`  |
| `class A extends B{ }` | `class MyClass `  |
| `class A extends B { constructor() { } }` | `class MyClass {`  |
| `class A extends B { constructor() { super(); } }` | `CLASS A {}`  |
| `class A extends B { constructor() { super(); } foo() { } }` | `class A extendsB{ }`  |
| `class A extends B { constructor() { super(); } foo() { } bar() { } }` |   |




### **functionAnonymous**

Should match a js anonymous classic function definition

From [js_eval.ts](./src/js_eval.ts#L124)

Copy:
```js
const functionAnonymous = /function(?<noName>\s*)\(.*\)\s*\{(.*)\}/
```

```ts
import { functionAnonymous } from "https://deno.land/x/regular_expressions/src/js_eval.ts";
```

| Should match | Should not match  |
|---|---|
| `function(){}` | `function name(){return 2;}`  |
| `function (...args) { }` | `func(){}`  |
| `function (a1,a2,a3) { }` | `function(a1,a2,a3)`  |
| `function() {return 1;}` |   |
| `function (){ if(true) { return 1; } }` |   |




### **functionArrow**

Should match a js arrow function definition

From [js_eval.ts](./src/js_eval.ts#L176)

Copy:
```js
const functionArrow = /([a-zA-Z0-9-$]+)|(\(.*\))\s*=>\s*(.*)/
```

```ts
import { functionArrow } from "https://deno.land/x/regular_expressions/src/js_eval.ts";
```

| Should match | Should not match  |
|---|---|
| `A => A` | `A,B => A`  |
| `() => 42` | `functionname () {  return 'hello'; }`  |
| `(a,b,c) => 42` | `function () {}`  |
| `(...args) => 42` | `function myFunction(param1, param2) {`  |
| `() => {}` |   |
| `() => { return 'hello'; }` |   |




### **functionAsync**

Should match a js async function definition

From [js_eval.ts](./src/js_eval.ts#L197)

Copy:
```js
const functionAsync = /async\s+((function(?<noName>\s*)\(.*\)\s*\{(.*)\})|(function\s+(?<name>(((?!(\b(?:break|case|catch|class|const|continue|debugger|default|delete|do|else|export|extends|finally|for|function|if|import|in|instanceof|new|return|super|switch|this|throw|try|typeof|var|void|while|with|yield|implements|interface|let|package|private|protected|public|static|yield|enum|await|abstract|boolean|byte|char|double|final|float|goto|int|long|native|short|synchronized|throws|transient|volatile|null|true|false)\b))([a-zA-Z$_][a-zA-Z0-9$_]*))))\s*\(.*\)\s*\{(.*)\})|(([a-zA-Z0-9-$]+)|(\(.*\))\s*=>\s*(.*)))/
```

```ts
import { functionAsync } from "https://deno.land/x/regular_expressions/src/js_eval.ts";
```

| Should match | Should not match  |
|---|---|
| `async function(){}` | `async func(){}`  |
| `async function named() {}` | `async functionA(a1,a2,a3)`  |
| `async function (...args) { }` |   |
| `async function (a1,a2,a3) { }` |   |
| `async function() {return 1;}` |   |
| `async function (){ if(true) { return 1; } }` |   |
| `async function name(){return 2;}` |   |
| `async () => {return 2;}` |   |




### **functionAsyncGenerator**

Should match a js async generator function. Only matches the syntax of `async function*` not any other way of creating an async generator or iterator.
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function

From [js_eval.ts](./src/js_eval.ts#L247)

Copy:
```js
const functionAsyncGenerator = /async\s+((function\*(?<noName>\s*)\(.*\)\s*\{(.*)\})|(function\*\s+(?<name>(((?!(\b(?:break|case|catch|class|const|continue|debugger|default|delete|do|else|export|extends|finally|for|function|if|import|in|instanceof|new|return|super|switch|this|throw|try|typeof|var|void|while|with|yield|implements|interface|let|package|private|protected|public|static|yield|enum|await|abstract|boolean|byte|char|double|final|float|goto|int|long|native|short|synchronized|throws|transient|volatile|null|true|false)\b))([a-zA-Z$_][a-zA-Z0-9$_]*))))\s*\(.*\)\s*\{(.*)\}))/
```

```ts
import { functionAsyncGenerator } from "https://deno.land/x/regular_expressions/src/js_eval.ts";
```

| Should match | Should not match  |
|---|---|
| `async function* (){}` | `function (){}`  |
| `async function* named() {}` | `async function (){}`  |
| `async function* (...args) { }` | `function* while() {}`  |
| `async function* named(a1,a2,a3) { yield 42; return 43; }` | `async function (){}`  |
|  | `function named(a1,a2,a3)`  |




### **functionClassic**

Should match a js classic function definition

From [js_eval.ts](./src/js_eval.ts#L144)

Copy:
```js
const functionClassic = /function\s+(?<name>(((?!(\b(?:break|case|catch|class|const|continue|debugger|default|delete|do|else|export|extends|finally|for|function|if|import|in|instanceof|new|return|super|switch|this|throw|try|typeof|var|void|while|with|yield|implements|interface|let|package|private|protected|public|static|yield|enum|await|abstract|boolean|byte|char|double|final|float|goto|int|long|native|short|synchronized|throws|transient|volatile|null|true|false)\b))([a-zA-Z$_][a-zA-Z0-9$_]*))))\s*\(.*\)\s*\{(.*)\}/
```

```ts
import { functionClassic } from "https://deno.land/x/regular_expressions/src/js_eval.ts";
```

| Should match | Should not match  |
|---|---|
| `function name(param1, param2) { }` | `function while() {}`  |
| `function name() {  }` | `function function() { }`  |
| `function name () {}` | `functionname () {  return 'hello'; }`  |
| `function name         () {}` | `function name     foo    () {}`  |
| `function name() {  return 'hello'; }` | `function () {}`  |
| `function name() {  if(true) { return 42 } }` | ` () => {}`  |
|  | `function myFunction(param1, param2) {`  |




### **functionGenerator**

Should match a js generator function definition

From [js_eval.ts](./src/js_eval.ts#L220)

Copy:
```js
const functionGenerator = /((function\*(?<noName>\s*)\(.*\)\s*\{(.*)\})|(function\*\s+(?<name>(((?!(\b(?:break|case|catch|class|const|continue|debugger|default|delete|do|else|export|extends|finally|for|function|if|import|in|instanceof|new|return|super|switch|this|throw|try|typeof|var|void|while|with|yield|implements|interface|let|package|private|protected|public|static|yield|enum|await|abstract|boolean|byte|char|double|final|float|goto|int|long|native|short|synchronized|throws|transient|volatile|null|true|false)\b))([a-zA-Z$_][a-zA-Z0-9$_]*))))\s*\(.*\)\s*\{(.*)\}))/
```

```ts
import { functionGenerator } from "https://deno.land/x/regular_expressions/src/js_eval.ts";
```

| Should match | Should not match  |
|---|---|
| `function*(){}` | `function (){}`  |
| `function* named() {}` | `async function (){}`  |
| `function* (...args) { }` | `function* while() {}`  |
|  | `async function* (){}`  |
|  | `function named(a1,a2,a3)`  |
|  | `async function* named(a1,a2,a3)`  |




### **globalScope**

Should match any global variable

From [js_eval.ts](./src/js_eval.ts#L581)

Copy:
```js
const globalScope = /Deno|queueMicrotask|dispatchEvent|addEventListener|removeEventListener|AbortSignal|AbortController|atob|btoa|clearInterval|clearTimeout|crypto|fetch|performance|setInterval|setTimeout|structuredClone|location|window|self|navigator|close|closed|alert|confirm|prompt|localStorage|sessionStorage|onload|onunload|global|clearImmediate|setImmediate|document|name|customElements|history|locationbar|menubar|personalbar|scrollbars|statusbar|toolbar|status|frames|length|top|opener|parent|frameElement|origin|external|screen|innerWidth|innerHeight|scrollX|pageXOffset|scrollY|pageYOffset|visualViewport|screenX|screenY|outerWidth|outerHeight|devicePixelRatio|clientInformation|screenLeft|screenTop|defaultStatus|defaultstatus|styleMedia|onsearch|isSecureContext|onappinstalled|onbeforeinstallprompt|indexedDB|webkitStorageInfo|onbeforexrselect|onabort|onblur|oncancel|oncanplay|oncanplaythrough|onchange|onclick|onclose|oncontextmenu|oncuechange|ondblclick|ondrag|ondragend|ondragenter|ondragleave|ondragover|ondragstart|ondrop|ondurationchange|onemptied|onended|onerror|onfocus|onformdata|oninput|oninvalid|onkeydown|onkeypress|onkeyup|onloadeddata|onloadedmetadata|onloadstart|onmousedown|onmouseenter|onmouseleave|onmousemove|onmouseout|onmouseover|onmouseup|onmousewheel|onpause|onplay|onplaying|onprogress|onratechange|onreset|onresize|onscroll|onsecuritypolicyviolation|onseeked|onseeking|onselect|onslotchange|onstalled|onsubmit|onsuspend|ontimeupdate|ontoggle|onvolumechange|onwaiting|onwebkitanimationend|onwebkitanimationiteration|onwebkitanimationstart|onwebkittransitionend|onwheel|onauxclick|ongotpointercapture|onlostpointercapture|onpointerdown|onpointermove|onpointerup|onpointercancel|onpointerover|onpointerout|onpointerenter|onpointerleave|onselectstart|onselectionchange|onanimationend|onanimationiteration|onanimationstart|ontransitionrun|ontransitionstart|ontransitionend|ontransitioncancel|onafterprint|onbeforeprint|onbeforeunload|onhashchange|onlanguagechange|onmessage|onmessageerror|onoffline|ononline|onpagehide|onpageshow|onpopstate|onrejectionhandled|onstorage|onunhandledrejection|blur|cancelAnimationFrame|cancelIdleCallback|captureEvents|createImageBitmap|find|focus|getComputedStyle|getSelection|matchMedia|moveBy|moveTo|open|postMessage|print|releaseEvents|reportError|requestAnimationFrame|requestIdleCallback|resizeBy|resizeTo|scroll|scrollBy|scrollTo|stop|webkitCancelAnimationFrame|webkitRequestAnimationFrame|chrome|caches|cookieStore|ondevicemotion|ondeviceorientation|ondeviceorientationabsolute|oncontextlost|oncontextrestored|showDirectoryPicker|showOpenFilePicker|showSaveFilePicker|originAgentCluster|trustedTypes|speechSynthesis|onpointerrawupdate|crossOriginIsolated|scheduler|openDatabase|webkitRequestFileSystem|webkitResolveLocalFileSystemURL|console/
```

```ts
import { globalScope } from "https://deno.land/x/regular_expressions/src/js_eval.ts";
```

| Should match | Should not match  |
|---|---|
| `Deno` | `DENO`  |
| `fetch` | `fETCH`  |
| `window` | `Window`  |
| `global` | `Global`  |




### **identifierNames**

Should match a valid js variable/function/class name * https://developer.mozilla.org/en-US/docs/Glossary/Identifier

From [js_eval.ts](./src/js_eval.ts#L89)

Copy:
```js
const identifierNames = /((?!(\b(?:break|case|catch|class|const|continue|debugger|default|delete|do|else|export|extends|finally|for|function|if|import|in|instanceof|new|return|super|switch|this|throw|try|typeof|var|void|while|with|yield|implements|interface|let|package|private|protected|public|static|yield|enum|await|abstract|boolean|byte|char|double|final|float|goto|int|long|native|short|synchronized|throws|transient|volatile|null|true|false)\b))([a-zA-Z$_][a-zA-Z0-9$_]*))/
```

```ts
import { identifierNames } from "https://deno.land/x/regular_expressions/src/js_eval.ts";
```

| Should match | Should not match  |
|---|---|
| `a` | `1`  |
| `Z` | `1a`  |
| `FOO` | `name with space`  |
| `a1` | `a-1a`  |
| `a_9` | `b%`  |
| `_10` | `while`  |
| `$1` | `do`  |
| `$H` | `if`  |
| `$` | `in`  |
| `whileDo` | `for`  |
| `_` | `let`  |




### **reservedWords**

Should match a js reserved word
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Lexical_grammar#keywords

From [js_eval.ts](./src/js_eval.ts#L7)

Copy:
```js
const reservedWords = /(\b(?:break|case|catch|class|const|continue|debugger|default|delete|do|else|export|extends|finally|for|function|if|import|in|instanceof|new|return|super|switch|this|throw|try|typeof|var|void|while|with|yield|implements|interface|let|package|private|protected|public|static|yield|enum|await|abstract|boolean|byte|char|double|final|float|goto|int|long|native|short|synchronized|throws|transient|volatile|null|true|false)\b)/
```

```ts
import { reservedWords } from "https://deno.land/x/regular_expressions/src/js_eval.ts";
```

| Should match | Should not match  |
|---|---|
| `break` | `BREAK`  |
| `case` | `CASE`  |
| `catch` | `CATCH`  |
| `class` | `CLASS`  |
| `const` | `CONST`  |
| `continue` | `CONTINUE`  |
| `debugger` | `DEBUGGER`  |
| `default` | `DEFAULT`  |
| `delete` | `DELETE`  |
| `do` | `DO`  |
| `else` | `ELSE`  |
| `export` | `EXPORT`  |
| `extends` | `EXTENDS`  |
| `finally` | `FINALLY`  |
| `for` | `FOR`  |
| `function` | `FUNCTION`  |
| `if` | `IF`  |
| `import` | `IMPORT`  |
| `in` | `IN`  |
| `instanceof` | `INSTANCEOF`  |
| `new` | `NEW`  |
| `return` | `RETURN`  |
| `super` | `SUPER`  |
| `switch` | `SWITCH`  |
| `this` | `THIS`  |
| `throw` | `THROW`  |
| `try` | `TRY`  |
| `typeof` | `TYPEOF`  |
| `var` | `VAR`  |
| `void` | `VOID`  |
| `while` | `WHILE`  |
| `with` | `WITH`  |
| `yield` | `YIELD`  |
| `implements` | `IMPLEMENTS`  |
| `interface` | `INTERFACE`  |
| `let` | `LET`  |
| `package` | `PACKAGE`  |
| `private` | `PRIVATE`  |
| `protected` | `PROTECTED`  |
| `public` | `PUBLIC`  |
| `static` | `STATIC`  |
| `yield` | `YIELD`  |
| `enum` | `ENUM`  |
| `await` | `AWAIT`  |
| `abstract` | `ABSTRACT`  |
| `boolean` | `BOOLEAN`  |
| `byte` | `BYTE`  |
| `char` | `CHAR`  |
| `double` | `DOUBLE`  |
| `final` | `FINAL`  |
| `float` | `FLOAT`  |
| `goto` | `GOTO`  |
| `int` | `INT`  |
| `long` | `LONG`  |
| `native` | `NATIVE`  |
| `short` | `SHORT`  |
| `synchronized` | `SYNCHRONIZED`  |
| `throws` | `THROWS`  |
| `transient` | `TRANSIENT`  |
| `volatile` | `VOLATILE`  |
| `null` | `NULL`  |
| `true` | `TRUE`  |
| `false` | `FALSE`  |



# math

> At: [math.ts](./src/math.ts)

### **coordinate**

Should match a parenthesized coordinate pair (e.g. (3, 4)).

From [math.ts](./src/math.ts#L47)

Copy:
```js
const coordinate = /\(-?(?:0|[1-9][0-9]*)(?:\.[0-9]+)?,\s*-?(?:0|[1-9][0-9]*)(?:\.[0-9]+)?\)/
```

```ts
import { coordinate } from "https://deno.land/x/regular_expressions/src/math.ts";
```

| Should match | Should not match  |
|---|---|
| `(0, 0)` | `3, 4`  |
| `(3, 4)` | `(3 4)`  |
| `(-1, 2)` | `()`  |
| `(10.5, -3.14)` | `(3,)`  |
| `(100, 200)` | `[3, 4]`  |




### **fraction**

Should match a fraction (e.g. 3/4, 1/2, -7/8).

From [math.ts](./src/math.ts#L4)

Copy:
```js
const fraction = /-?(?:0|[1-9][0-9]*)\/[1-9][0-9]*/
```

```ts
import { fraction } from "https://deno.land/x/regular_expressions/src/math.ts";
```

| Should match | Should not match  |
|---|---|
| `1/2` | `1/0`  |
| `3/4` | `/2`  |
| `-7/8` | `1/`  |
| `0/1` | `abc`  |
| `22/7` | `1.5/2`  |
| `100/3` |   |




### **mathOperator**

Should match a math operator (+, -, *, /, %, **, ^).

From [math.ts](./src/math.ts#L69)

Copy:
```js
const mathOperator = /\*\*|[+\-*\/%^]/
```

```ts
import { mathOperator } from "https://deno.land/x/regular_expressions/src/math.ts";
```

| Should match | Should not match  |
|---|---|
| `+` | `=`  |
| `-` | `&&`  |
| `*` | `\|\|`  |
| `/` | `!`  |
| `%` | `++`  |
| `**` |   |
| `^` |   |




### **numericRange**

Should match a numeric range notation (e.g. 1-10).

From [math.ts](./src/math.ts#L26)

Copy:
```js
const numericRange = /[0-9]+-[0-9]+/
```

```ts
import { numericRange } from "https://deno.land/x/regular_expressions/src/math.ts";
```

| Should match | Should not match  |
|---|---|
| `1-10` | `-10`  |
| `0-100` | `1-`  |
| `1-1` | `1..10`  |
| `100-200` | `abc`  |
| `0-9` | `1 - 10`  |



# geo

> At: [geo.ts](./src/geo.ts)

### **countryCode2**

Should match an ISO 3166-1 alpha-2 country code (e.g. US, DE).

From [geo.ts](./src/geo.ts#L139)

Copy:
```js
const countryCode2 = /[A-Z]{2}/
```

```ts
import { countryCode2 } from "https://deno.land/x/regular_expressions/src/geo.ts";
```

| Should match | Should not match  |
|---|---|
| `US` | `us`  |
| `DE` | `USA`  |
| `GB` | `1A`  |
| `JP` | `U`  |
| `FR` | `U5`  |




### **countryCode3**

Should match an ISO 3166-1 alpha-3 country code (e.g. USA, DEU).

From [geo.ts](./src/geo.ts#L160)

Copy:
```js
const countryCode3 = /[A-Z]{3}/
```

```ts
import { countryCode3 } from "https://deno.land/x/regular_expressions/src/geo.ts";
```

| Should match | Should not match  |
|---|---|
| `USA` | `usa`  |
| `DEU` | `US`  |
| `GBR` | `USAA`  |
| `JPN` | `1AB`  |
| `FRA` | `U5A`  |




### **latLng**

Should match a latitude,longitude coordinate pair.

From [geo.ts](./src/geo.ts#L51)

Copy:
```js
const latLng = /-?(?:90(?:\.0+)?|[1-8]?[0-9](?:\.[0-9]+)?),\s*-?(?:180(?:\.0+)?|(?:1[0-7][0-9]|[1-9]?[0-9])(?:\.[0-9]+)?)/
```

```ts
import { latLng } from "https://deno.land/x/regular_expressions/src/geo.ts";
```

| Should match | Should not match  |
|---|---|
| `0,0` | `91, 0`  |
| `45.123, -93.456` | `0, 181`  |
| `-90,180` | `45.123`  |
| `90, -180` | `abc, def`  |
| `37.7749, -122.4194` |   |




### **latitude**

Should match a latitude value in decimal degrees (-90 to 90).

From [geo.ts](./src/geo.ts#L4)

Copy:
```js
const latitude = /-?(?:90(?:\.0+)?|[1-8]?[0-9](?:\.[0-9]+)?)/
```

```ts
import { latitude } from "https://deno.land/x/regular_expressions/src/geo.ts";
```

| Should match | Should not match  |
|---|---|
| `0` | `91`  |
| `45.123` | `-91`  |
| `-90` | `100`  |
| `90` | `90.1`  |
| `90.0` | `-90.1`  |
| `-45.6789` |   |
| `12.3456789` |   |




### **longitude**

Should match a longitude value in decimal degrees (-180 to 180).

From [geo.ts](./src/geo.ts#L27)

Copy:
```js
const longitude = /-?(?:180(?:\.0+)?|(?:1[0-7][0-9]|[1-9]?[0-9])(?:\.[0-9]+)?)/
```

```ts
import { longitude } from "https://deno.land/x/regular_expressions/src/geo.ts";
```

| Should match | Should not match  |
|---|---|
| `0` | `181`  |
| `45.123` | `-181`  |
| `-180` | `200`  |
| `180` | `180.1`  |
| `180.0` | `-180.1`  |
| `-179.999` |   |
| `123.456789` |   |




### **zipCodeCA**

Should match a Canadian postal code (e.g. K1A 0B1).

From [geo.ts](./src/geo.ts#L117)

Copy:
```js
const zipCodeCA = /[A-CEGHJ-NPR-TVXY][0-9][A-CEGHJ-NPR-TV-Z]\s?[0-9][A-CEGHJ-NPR-TV-Z][0-9]/
```

```ts
import { zipCodeCA } from "https://deno.land/x/regular_expressions/src/geo.ts";
```

| Should match | Should not match  |
|---|---|
| `K1A 0B1` | `D1A 0B1`  |
| `V6B 3K9` | `K1A OB1`  |
| `T2P 1J9` | `12345`  |
| `M5W 1E6` | `K1A0B`  |
| `H3Z 2Y7` | `W1A 0B1`  |




### **zipCodeUK**

Should match a UK postcode (e.g. SW1A 1AA, EC1A 1BB).

From [geo.ts](./src/geo.ts#L94)

Copy:
```js
const zipCodeUK = /[A-Z]{1,2}[0-9][A-Z0-9]?\s?[0-9][A-Z]{2}/
```

```ts
import { zipCodeUK } from "https://deno.land/x/regular_expressions/src/geo.ts";
```

| Should match | Should not match  |
|---|---|
| `SW1A 1AA` | `111 1AA`  |
| `EC1A 1BB` | `AAA 1AA`  |
| `W1A 0AX` | `SW1A 1A`  |
| `M1 1AE` | `12345`  |
| `B33 8TH` | `SWIA IAA`  |
| `CR2 6XH` |   |
| `DN55 1PT` |   |




### **zipCodeUS**

Should match a US ZIP code in 5-digit or ZIP+4 format.

From [geo.ts](./src/geo.ts#L73)

Copy:
```js
const zipCodeUS = /[0-9]{5}(?:-[0-9]{4})?/
```

```ts
import { zipCodeUS } from "https://deno.land/x/regular_expressions/src/geo.ts";
```

| Should match | Should not match  |
|---|---|
| `10001` | `1234`  |
| `90210` | `123456`  |
| `00501` | `ABCDE`  |
| `10001-1234` | `10001-123`  |
| `99999-9999` | `10001-12345`  |



# social

> At: [social.ts](./src/social.ts)

### **discordSnowflake**

Should match a Discord snowflake ID (17-20 digit numeric ID).

From [social.ts](./src/social.ts#L90)

Copy:
```js
const discordSnowflake = /[0-9]{17,20}/
```

```ts
import { discordSnowflake } from "https://deno.land/x/regular_expressions/src/social.ts";
```

| Should match | Should not match  |
|---|---|
| `12345678901234567` | `1234567890123456`  |
| `84484653687267328` | `123456789012345678901`  |
| `175928847299117063` | `abcdefghijklmnopq`  |
| `12345678901234567890` | `1234567890123456a`  |




### **githubRepo**

Should match a GitHub repository reference in owner/repo format.

From [social.ts](./src/social.ts#L4)

Copy:
```js
const githubRepo = /[a-zA-Z0-9](?:[a-zA-Z0-9-]*[a-zA-Z0-9])?\/[a-zA-Z0-9._-]+/
```

```ts
import { githubRepo } from "https://deno.land/x/regular_expressions/src/social.ts";
```

| Should match | Should not match  |
|---|---|
| `facebook/react` | `facebook`  |
| `torvalds/linux` | `/react`  |
| `my-org/my-repo` | `facebook/`  |
| `user123/project.js` | `-org/repo`  |
| `a/b` | `/repo`  |




### **npmPackage**

Should match an npm package name
(scoped @scope/pkg or unscoped package-name).

From [social.ts](./src/social.ts#L67)

Copy:
```js
const npmPackage = /(?:@[a-z0-9](?:[a-z0-9._-]*[a-z0-9])?\/)?[a-z0-9](?:[a-z0-9._-]*[a-z0-9])?/
```

```ts
import { npmPackage } from "https://deno.land/x/regular_expressions/src/social.ts";
```

| Should match | Should not match  |
|---|---|
| `express` | `@/package`  |
| `lodash` | `-invalid`  |
| `@types/node` | `.hidden`  |
| `@babel/core` | `UPPERCASE`  |
| `my-package` | `@-scope/pkg`  |
| `package123` |   |




### **twitterHandle**

Should match a Twitter/X handle (1-15 chars, alphanumeric + underscore).

From [social.ts](./src/social.ts#L26)

Copy:
```js
const twitterHandle = /@[a-zA-Z_][a-zA-Z0-9_]{0,14}/
```

```ts
import { twitterHandle } from "https://deno.land/x/regular_expressions/src/social.ts";
```

| Should match | Should not match  |
|---|---|
| `@jack` | `@`  |
| `@TwitterDev` | `@123start`  |
| `@user_name` | `noatsign`  |
| `@A` | `@@double`  |
| `@user123_test` | `@-invalid`  |




### **youtubeVideoId**

Should match a YouTube video ID (11 characters, base64url).

From [social.ts](./src/social.ts#L47)

Copy:
```js
const youtubeVideoId = /[a-zA-Z0-9_-]{11}/
```

```ts
import { youtubeVideoId } from "https://deno.land/x/regular_expressions/src/social.ts";
```

| Should match | Should not match  |
|---|---|
| `dQw4w9WgXcQ` | `dQw4w9WgXc`  |
| `jNQXAC9IVRw` | `dQw4w9WgXcQQ`  |
| `9bZkp7q19f0` | `dQw4w9Wg.cQ`  |
| `kJQP7kiw5Fk` | `dQw4w9Wg cQ`  |



# number

> At: [number.ts](./src/number.ts)

### **base64**

Should match any base64 string.
https://en.wikipedia.org/wiki/Base64

From [number.ts](./src/number.ts#L218)

Copy:
```js
const base64 = /[A-Za-z0-9+/]+={0,2}/
```

```ts
import { base64 } from "https://deno.land/x/regular_expressions/src/number.ts";
```

| Should match | Should not match  |
|---|---|
| `Zm9vYmFy` | `!@#$%^&*()_+`  |
| `MTIzNDU2Nzc4OTBxd2VlcnR5dWlvcGFzZGZnaGprbPF6eGN2Ym5tUVdFRVJUWVVJT1BBU0RGR0hKS0zRWlhDVkJOTSsvfEAjfr1+rHtbXX0KIb8/W11fOjssLjw+KCkkJSZeKg==` |   |




### **number**

Should match any valid JS number but not NaN, Infinity or -Infinity.

From [number.ts](./src/number.ts#L5)

Copy:
```js
const number = /(?:[-+]?(?:0|[1-9_][0-9_]*)(?:\.[0-9_]*)?(?:[eE][-+]?[0-9]+)?)/
```

```ts
import { number } from "https://deno.land/x/regular_expressions/src/number.ts";
```

| Should match | Should not match  |
|---|---|
| `1_000_000` | `0123`  |
| `1_000.45` | `123a`  |
| `123.45` | `123e`  |
| `0.123` | `123e0.1`  |
| `1e4` | `a123`  |
| `1E4` | `a12b3`  |
| `0.123e4` | `NaN`  |
| `0.123E4` | `Infinity`  |
| `0.123e-4` |   |
| `0.123e+4` |   |
| `123` |   |
| `-123` |   |
| `+123` |   |




### **numberBigInt**

Should match any BigInt
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/BigInt

From [number.ts](./src/number.ts#L386)

Copy:
```js
const numberBigInt = /[+-]?(0|[1-9][0-9]*)n/
```

```ts
import { numberBigInt } from "https://deno.land/x/regular_expressions/src/number.ts";
```

| Should match | Should not match  |
|---|---|
| `0n` | `00n`  |
| `+1n` | `01n`  |
| `-1n` | `10`  |
| `20n` | `200`  |
| `300n` |   |
| `9999999999n` |   |




### **numberBinary**

Should match any binary number, signed or unsigned, but not integers or exponential.

From [number.ts](./src/number.ts#L185)

Copy:
```js
const numberBinary = /([+-])?0[bB][01]+/
```

```ts
import { numberBinary } from "https://deno.land/x/regular_expressions/src/number.ts";
```

| Should match | Should not match  |
|---|---|
| `0b101` | `0b0abc`  |
| `0b0` | `0babc`  |
| `+0b1` | `0`  |
| `-0b1` | `0b`  |
| `0B0` | `0b101.45`  |
| `0b00001111001` | `0b101.45e4`  |
| `0b01111000` | `0b101.45e-4`  |
|  | `0b101.45e+4`  |
|  | `123`  |
|  | `0b101.45`  |
|  | `0b101.45e4.5`  |
|  | `0b101.45e-4.5`  |
|  | `0b101.45e+4.5`  |




### **numberExponential**

Should match any exponential number.

From [number.ts](./src/number.ts#L90)

Copy:
```js
const numberExponential = /([-+]?([0-9]+))?(\.([0-9]+))?[eE]([-+]?([0-9]+))/
```

```ts
import { numberExponential } from "https://deno.land/x/regular_expressions/src/number.ts";
```

| Should match | Should not match  |
|---|---|
| `123e4` | `123.45`  |
| `0.123e4` | `.e4`  |
| `.1e4` | `0.123`  |
| `1e4` | `0.123a`  |
| `1E4` | `123`  |
| `3E2` | `1e`  |
| `3E-2` | `0.123e4.5`  |
| `12.3456e-4` | `0.123e-4.5`  |
| `0.123e-4` | `0.123e+4.5`  |
| `0.123e+4` |   |




### **numberFloat**

Should match any float number, signed or unsigned, but not integers or exponential.

From [number.ts](./src/number.ts#L62)

Copy:
```js
const numberFloat = /([-+]?([0-9]+))?\.([0-9])+/
```

```ts
import { numberFloat } from "https://deno.land/x/regular_expressions/src/number.ts";
```

| Should match | Should not match  |
|---|---|
| `123.45` | `7`  |
| `0.123` | `7.`  |
| `1.0` | `123`  |
| `0.0` | `1e4`  |
| `.9` | `0.123e4`  |
|  | `0.123e-4`  |
|  | `0.123e+4`  |
|  | `123.45.67`  |
|  | `0.123e`  |
|  | `0.123e4.5`  |
|  | `0.123e-4.5`  |
|  | `0.123e+4.5`  |




### **numberHex**

Should match any number hexadecimal, signed or unsigned

From [number.ts](./src/number.ts#L122)

Copy:
```js
const numberHex = /(([+-])?0[xX][0-9a-fA-F]+)/
```

```ts
import { numberHex } from "https://deno.land/x/regular_expressions/src/number.ts";
```

| Should match | Should not match  |
|---|---|
| `0x123` | `*0x1`  |
| `0x0` | `123`  |
| `0X1` | `0xG`  |
| `+0x1` | `0x1z`  |
| `-0x1` | `0x123.45`  |
| `0xf` | `0x123.45e4`  |
| `0xF` | `0x123.45e-4`  |
| `0xabcdef` | `0x123.45e+4`  |
| `0xabc` |   |




### **numberInteger**

Should match any number signed integer or unsigned integer.

From [number.ts](./src/number.ts#L38)

Copy:
```js
const numberInteger = /(?:[-+]?(?:0|[1-9][0-9]*))/
```

```ts
import { numberInteger } from "https://deno.land/x/regular_expressions/src/number.ts";
```

| Should match | Should not match  |
|---|---|
| `0` | `00`  |
| `123` | `000`  |
| `-999` | `123.45`  |
| `+6` | `0.123`  |
|  | `1e4`  |
|  | `0.123e4`  |
|  | `0.123e-4`  |
|  | `0.123e+4`  |




### **numberOctal**

Should match any number octal, signed or unsigned, but not integers or exponential.

From [number.ts](./src/number.ts#L151)

Copy:
```js
const numberOctal = /([+-])?(0o?[0-7]+)/
```

```ts
import { numberOctal } from "https://deno.land/x/regular_expressions/src/number.ts";
```

| Should match | Should not match  |
|---|---|
| `0123` | `0`  |
| `07` | `058`  |
| `0o51` | `0o58`  |
| `0o7` | `0O7`  |
| `+0o7` | `7`  |
| `-0o7` | `08`  |
|  | `09`  |
|  | `abc`  |
|  | `0abc`  |
|  | `123`  |
|  | `0o123.45`  |
|  | `0123.45`  |
|  | `0123.45e4`  |
|  | `0123.45e-4`  |
|  | `0123.45e+4`  |




### **romanNumeral**

Should match any roman numeral
https://en.wikipedia.org/wiki/Roman_numerals

From [number.ts](./src/number.ts#L235)

Copy:
```js
const romanNumeral = /M{0,4}(CM|CD|D?C{0,3})(XC|XL|L?X{0,3})(IX|IV|V?I{0,3})/
```

```ts
import { romanNumeral } from "https://deno.land/x/regular_expressions/src/number.ts";
```

| Should match | Should not match  |
|---|---|
| `I` | `iii`  |
| `II` | `IIV`  |
| `III` | `IIII`  |
| `IV` | `IIIII`  |
| `V` | `IIIIII`  |
| `VI` | `IIIIIII`  |
| `VII` | `lxx`  |
| `VIII` | `lxxi`  |
| `IX` | `lxxii`  |
| `X` | `lxxiii`  |
| `XI` | `lxxiv`  |
| `XII` | `lxxv`  |
| `XIII` | `lxxvi`  |
| `XIV` | `lxxvii`  |
| `XV` | `lxxviii`  |
| `XVI` | `asdsdf`  |
| `XVII` |   |
| `XVIII` |   |
| `XIX` |   |
| `XX` |   |
| `XXI` |   |
| `XXII` |   |
| `XXIII` |   |
| `XXIV` |   |
| `XXV` |   |
| `XXVI` |   |
| `XXVII` |   |
| `XXVIII` |   |
| `XXIX` |   |
| `XXX` |   |
| `XXXI` |   |
| `XXXII` |   |
| `XXXIII` |   |
| `XXXIV` |   |
| `XXXV` |   |
| `XXXVI` |   |
| `XXXVII` |   |
| `XXXVIII` |   |
| `XXXIX` |   |
| `XL` |   |
| `XLI` |   |
| `XLII` |   |
| `XLIII` |   |
| `XLIV` |   |
| `XLV` |   |
| `XLVI` |   |
| `XLVII` |   |
| `XLVIII` |   |
| `XLIX` |   |
| `L` |   |
| `LI` |   |
| `LII` |   |
| `LIII` |   |
| `LIV` |   |
| `LV` |   |
| `LVI` |   |
| `LVII` |   |
| `LVIII` |   |
| `LIX` |   |
| `LX` |   |
| `LXI` |   |
| `LXII` |   |
| `LXIII` |   |
| `LXIV` |   |
| `LXV` |   |
| `LXVI` |   |
| `LXVII` |   |
| `LXVIII` |   |
| `LXIX` |   |
| `LXX` |   |
| `LXXI` |   |
| `LXXII` |   |
| `LXXIII` |   |
| `LXXIV` |   |
| `LXXV` |   |
| `LXXVI` |   |
| `LXXVII` |   |
| `LXXVIII` |   |
| `LXXIX` |   |
| `LXXX` |   |
| `LXXXI` |   |
| `LXXXII` |   |
| `LXXXIII` |   |
| `LXXXIV` |   |
| `LXXXV` |   |
| `LXXXVI` |   |
| `LXXXVII` |   |
| `LXXXVIII` |   |
| `LXXXIX` |   |
| `C` |   |
| `CI` |   |
| `CII` |   |
| `CIII` |   |
| `CIV` |   |
| `CV` |   |
| `CVI` |   |
| `CVII` |   |
| `D` |   |
| `DI` |   |
| `DII` |   |
| `DIII` |   |
| `DIV` |   |
| `DV` |   |
| `DVI` |   |
| `DVII` |   |
| `M` |   |
| `MI` |   |
| `MII` |   |
| `MIII` |   |
| `MIV` |   |
| `MV` |   |
| `MVI` |   |
| `MVII` |   |
| `MVIII` |   |
| `MIX` |   |
| `MM` |   |
| `MMM` |   |
| `MMMM` |   |



# network

> At: [network.ts](./src/network.ts)

### **basicAuth**

Should match a Basic authentication header value (Basic followed by
base64).

From [network.ts](./src/network.ts#L160)

Copy:
```js
const basicAuth = /Basic\s+[A-Za-z0-9+\/]+=*/
```

```ts
import { basicAuth } from "https://deno.land/x/regular_expressions/src/network.ts";
```

| Should match | Should not match  |
|---|---|
| `Basic dXNlcjpwYXNz` | `basic dXNlcjpwYXNz`  |
| `Basic YWRtaW46YWRtaW4=` | `Bearer dXNlcjpwYXNz`  |
| `Basic Zm9vOmJhcg==` | `Basicabc123`  |
|  | `Basic `  |




### **bearerToken**

Should match a Bearer token authorization header value.

From [network.ts](./src/network.ts#L141)

Copy:
```js
const bearerToken = /Bearer\s+[A-Za-z0-9\-._~+\/]+=*/
```

```ts
import { bearerToken } from "https://deno.land/x/regular_expressions/src/network.ts";
```

| Should match | Should not match  |
|---|---|
| `Bearer eyJhbGciOiJIUzI1NiJ9` | `bearer abc123`  |
| `Bearer abc123def456` | `Basic abc123`  |
| `Bearer dG9rZW4=` | `Bearerabc123`  |
|  | `Bearer `  |




### **cidrBlock**

Should match an IPv4 CIDR block notation (e.g. 192.168.1.0/24).

From [network.ts](./src/network.ts#L50)

Copy:
```js
const cidrBlock = /(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\/(?:3[0-2]|[12]?[0-9])/
```

```ts
import { cidrBlock } from "https://deno.land/x/regular_expressions/src/network.ts";
```

| Should match | Should not match  |
|---|---|
| `192.168.1.0/24` | `192.168.1.0/33`  |
| `10.0.0.0/8` | `256.168.1.0/24`  |
| `172.16.0.0/12` | `192.168.1/24`  |
| `0.0.0.0/0` | `192.168.1.0`  |
| `255.255.255.255/32` |   |




### **domainName**

Should match a bare domain name without protocol.

From [network.ts](./src/network.ts#L71)

Copy:
```js
const domainName = /(?:[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?\.)+[a-zA-Z]{2,}/
```

```ts
import { domainName } from "https://deno.land/x/regular_expressions/src/network.ts";
```

| Should match | Should not match  |
|---|---|
| `example.com` | `example`  |
| `sub.example.com` | `-example.com`  |
| `my-site.org` | `example-.com`  |
| `a.co` | `example.c`  |
| `deep.nested.sub.domain.example.com` | `.example.com`  |




### **httpMethod**

Should match a standard HTTP method verb.

From [network.ts](./src/network.ts#L93)

Copy:
```js
const httpMethod = /GET|POST|PUT|DELETE|PATCH|HEAD|OPTIONS|CONNECT|TRACE/
```

```ts
import { httpMethod } from "https://deno.land/x/regular_expressions/src/network.ts";
```

| Should match | Should not match  |
|---|---|
| `GET` | `get`  |
| `POST` | `GETS`  |
| `PUT` | `PUSH`  |
| `DELETE` | `REMOVE`  |
| `PATCH` | `FETCH`  |
| `HEAD` |   |
| `OPTIONS` |   |
| `CONNECT` |   |
| `TRACE` |   |




### **httpStatusCode**

Should match an HTTP status code (100-599).

From [network.ts](./src/network.ts#L119)

Copy:
```js
const httpStatusCode = /[1-5][0-9]{2}/
```

```ts
import { httpStatusCode } from "https://deno.land/x/regular_expressions/src/network.ts";
```

| Should match | Should not match  |
|---|---|
| `100` | `600`  |
| `200` | `099`  |
| `301` | `999`  |
| `404` | `10`  |
| `500` | `1000`  |
| `599` |   |




### **macAddress**

Should match an IEEE 802 MAC address separated by colons, dashes,
or dots.

From [network.ts](./src/network.ts#L5)

Copy:
```js
const macAddress = /[0-9a-fA-F]{2}(?:[:\-][0-9a-fA-F]{2}){5}/
```

```ts
import { macAddress } from "https://deno.land/x/regular_expressions/src/network.ts";
```

| Should match | Should not match  |
|---|---|
| `00:1A:2B:3C:4D:5E` | `00:1A:2B:3C:4D`  |
| `aa:bb:cc:dd:ee:ff` | `00:1A:2B:3C:4D:5E:6F`  |
| `00-1A-2B-3C-4D-5E` | `GG:HH:II:JJ:KK:LL`  |
| `aa-bb-cc-dd-ee-ff` | `001A2B3C4D5E`  |
| `01:23:45:67:89:ab` | `00:1A:2B:3C:4D:5G`  |




### **portNumber**

Should match a valid TCP/UDP port number (0-65535).

From [network.ts](./src/network.ts#L26)

Copy:
```js
const portNumber = /(?:6553[0-5]|655[0-2][0-9]|65[0-4][0-9]{2}|6[0-4][0-9]{3}|[1-5][0-9]{4}|[1-9][0-9]{0,3}|0)/
```

```ts
import { portNumber } from "https://deno.land/x/regular_expressions/src/network.ts";
```

| Should match | Should not match  |
|---|---|
| `0` | `65536`  |
| `80` | `99999`  |
| `443` | `100000`  |
| `8080` | `-1`  |
| `65535` | `abc`  |
| `1024` |   |
| `3000` |   |



# identity

> At: [identity.ts](./src/identity.ts)

### **orcidId**

Should match an ORCID identifier in XXXX-XXXX-XXXX-XXXX format
where X is a digit and the last character can be a digit or X
(checksum).

From [identity.ts](./src/identity.ts#L31)

Copy:
```js
const orcidId = /[0-9]{4}-[0-9]{4}-[0-9]{4}-[0-9]{3}[0-9X]/
```

```ts
import { orcidId } from "https://deno.land/x/regular_expressions/src/identity.ts";
```

| Should match | Should not match  |
|---|---|
| `0000-0002-1825-0097` | `0000-0002-1825-009`  |
| `0000-0001-5109-3700` | `0000-0002-1825-00977`  |
| `0000-0002-9079-593X` | `0000-00021825-0097`  |
| `1234-5678-9012-3456` | `AAAA-BBBB-CCCC-DDDD`  |
|  | `0000:0002:1825:0097`  |




### **ssnUS**

Should match a US Social Security Number in XXX-XX-XXXX format.
Excludes invalid area numbers (000, 666, 900-999).

From [identity.ts](./src/identity.ts#L5)

Copy:
```js
const ssnUS = /(?!000|666|9[0-9]{2})[0-9]{3}-(?!00)[0-9]{2}-(?!0000)[0-9]{4}/
```

```ts
import { ssnUS } from "https://deno.land/x/regular_expressions/src/identity.ts";
```

| Should match | Should not match  |
|---|---|
| `123-45-6789` | `000-45-6789`  |
| `001-01-0001` | `666-45-6789`  |
| `899-99-9999` | `900-45-6789`  |
| `765-43-2100` | `123-00-6789`  |
| `078-05-1120` | `123-45-0000`  |
|  | `1234-56-7890`  |
|  | `123456789`  |



# markup

> At: [markup.ts](./src/markup.ts)

### **htmlComment**

Should match an HTML comment (&lt;!-- ... --&gt;).

From [markup.ts](./src/markup.ts#L30)

Copy:
```js
const htmlComment = /<!--[^]*?-->/
```

```ts
import { htmlComment } from "https://deno.land/x/regular_expressions/src/markup.ts";
```

| Should match | Should not match  |
|---|---|
| `<!-- comment -->` | `<!-- unclosed`  |
| `<!-- multi\x0aline\x0acomment -->` | `/* css comment */`  |
| `<!---->` | `// js comment`  |
| `<!-- a -->` | `<!- not a comment ->`  |




### **htmlTag**

Should match an HTML tag including attributes
(e.g. &lt;div class="foo"&gt;).

From [markup.ts](./src/markup.ts#L5)

Copy:
```js
const htmlTag = /<[a-zA-Z][a-zA-Z0-9-]*(?:\s+[a-zA-Z][\w-]*(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s>]+))?)*\s*\/?>/
```

```ts
import { htmlTag } from "https://deno.land/x/regular_expressions/src/markup.ts";
```

| Should match | Should not match  |
|---|---|
| `<div>` | `</div>`  |
| `<div class="foo">` | `< div>`  |
| `<br/>` | `<123>`  |
| `<br />` | `div`  |
| `<img src='image.png' alt='test'>` | `< >`  |
| `<input type="text" disabled>` |   |
| `<p>` |   |
| `<custom-element>` |   |




### **markdownCodeBlock**

Should match a fenced Markdown code block (triple backticks).

From [markup.ts](./src/markup.ts#L89)

Copy:
```js
const markdownCodeBlock = /```[a-zA-Z]*\n[^]*?```/
```

```ts
import { markdownCodeBlock } from "https://deno.land/x/regular_expressions/src/markup.ts";
```

| Should match | Should not match  |
|---|---|
| ````\x0acode\x0a```` | `````  |
| ````js\x0aconsole.log('hi');\x0a```` | ```code```  |
| ````python\x0aprint('hello')\x0a```` | ``inline``  |
| ````\x0aline1\x0aline2\x0a```` | ````no newline````  |




### **markdownHeading**

Should match a Markdown heading (# H1 through ###### H6).

From [markup.ts](./src/markup.ts#L49)

Copy:
```js
const markdownHeading = /#{1,6}\s+.+/
```

```ts
import { markdownHeading } from "https://deno.land/x/regular_expressions/src/markup.ts";
```

| Should match | Should not match  |
|---|---|
| `# Heading 1` | `####### Too deep`  |
| `## Heading 2` | `#NoSpace`  |
| `### Heading 3` | `Not a heading`  |
| `###### Heading 6` | `# `  |
| `# A` |   |




### **markdownLink**

Should match a Markdown link (e.g. [text](url)).

From [markup.ts](./src/markup.ts#L69)

Copy:
```js
const markdownLink = /\[[^\]]+\]\([^)]+\)/
```

```ts
import { markdownLink } from "https://deno.land/x/regular_expressions/src/markup.ts";
```

| Should match | Should not match  |
|---|---|
| `[Google](https://google.com)` | `[text]`  |
| `[click here](./page.html)` | `(url)`  |
| `[link text](http://example.com/path?q=1)` | `[text]()`  |
| `[a](b)` | `[](url)`  |
|  | `text(url)`  |



# science

> At: [science.ts](./src/science.ts)

### **chemicalFormula**

Should match a simple chemical formula
(e.g. H2O, NaCl, C6H12O6).

From [science.ts](./src/science.ts#L26)

Copy:
```js
const chemicalFormula = /[A-Z][a-z]?(?:\d+)?(?:[A-Z][a-z]?(?:\d+)?)*/
```

```ts
import { chemicalFormula } from "https://deno.land/x/regular_expressions/src/science.ts";
```

| Should match | Should not match  |
|---|---|
| `H2O` | `h2o`  |
| `NaCl` | `123`  |
| `C6H12O6` | `nacl`  |
| `CO2` | `2H`  |
| `Fe2O3` |   |
| `Ca` |   |




### **doi**

Should match a Digital Object Identifier
(e.g. 10.1000/xyz123).

From [science.ts](./src/science.ts#L5)

Copy:
```js
const doi = /10\.\d{4,9}\/[^\s]+/
```

```ts
import { doi } from "https://deno.land/x/regular_expressions/src/science.ts";
```

| Should match | Should not match  |
|---|---|
| `10.1000/xyz123` | `11.1000/xyz123`  |
| `10.1038/nphys1170` | `10.123/xyz`  |
| `10.1002/0470841559.ch1` | `10/1000/xyz`  |
| `10.1371/journal.pmed.0020124` | `doi:10.1000`  |
| `10.18637/jss.v067.i01` |   |




### **ipRange**

Should match an IP address range
(e.g. 192.168.1.1-192.168.1.255).

From [science.ts](./src/science.ts#L90)

Copy:
```js
const ipRange = /(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)-(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)/
```

```ts
import { ipRange } from "https://deno.land/x/regular_expressions/src/science.ts";
```

| Should match | Should not match  |
|---|---|
| `192.168.1.1-192.168.1.255` | `192.168.1.1`  |
| `10.0.0.0-10.255.255.255` | `192.168.1.1-`  |
| `0.0.0.0-255.255.255.255` | `256.168.1.1-192.168.1.255`  |
|  | `192.168.1-192.168.1.255`  |




### **isbn**

Should match an ISBN-13 (e.g. 978-3-16-148410-0).

From [science.ts](./src/science.ts#L47)

Copy:
```js
const isbn = /(?:978|979)[- ]?[0-9]{1,5}[- ]?[0-9]{1,7}[- ]?[0-9]{1,6}[- ]?[0-9]/
```

```ts
import { isbn } from "https://deno.land/x/regular_expressions/src/science.ts";
```

| Should match | Should not match  |
|---|---|
| `978-3-16-148410-0` | `977-3-16-148410-0`  |
| `978 0 596 52068 7` | `978`  |
| `9780596520687` | `abc-3-16-148410-0`  |
| `979-10-90636-07-1` | `1234567890`  |




### **scientificNotation**

Should match a scientific notation number
(e.g. 6.022e23, 1.6E-19).

From [science.ts](./src/science.ts#L68)

Copy:
```js
const scientificNotation = /-?(?:0|[1-9][0-9]*)(?:\.[0-9]+)?[eE][+-]?[0-9]+/
```

```ts
import { scientificNotation } from "https://deno.land/x/regular_expressions/src/science.ts";
```

| Should match | Should not match  |
|---|---|
| `6.022e23` | `6.022`  |
| `1.6E-19` | `e23`  |
| `3e8` | `1.6x10`  |
| `-2.5e10` | `3*10^8`  |
| `1.0E+5` |   |



# data

> At: [data.ts](./src/data.ts)

### **dataUri**

Should match a data URI (e.g. data:image/png;base64,iVBOR...).

From [data.ts](./src/data.ts#L130)

Copy:
```js
const dataUri = /data:[a-zA-Z0-9][a-zA-Z0-9!#$&\-^_.+]*\/[a-zA-Z0-9][a-zA-Z0-9!#$&\-^_.+]*(?:;[a-zA-Z0-9-]+=[a-zA-Z0-9-]+)*(?:;base64)?,[A-Za-z0-9+\/=]+/
```

```ts
import { dataUri } from "https://deno.land/x/regular_expressions/src/data.ts";
```

| Should match | Should not match  |
|---|---|
| `data:text/plain,Hello` | `data:`  |
| `data:text/plain;base64,SGVsbG8=` | `data:text/plain`  |
| `data:image/png;base64,iVBORw0KGgo=` | `data://not-a-data-uri`  |
| `data:application/json;charset=utf-8,eyJrZXkiOiJ2YWx1ZSJ9` | `http://example.com`  |




### **jsonBoolean**

Should match a JSON boolean value (true or false).

From [data.ts](./src/data.ts#L50)

Copy:
```js
const jsonBoolean = /true|false/
```

```ts
import { jsonBoolean } from "https://deno.land/x/regular_expressions/src/data.ts";
```

| Should match | Should not match  |
|---|---|
| `true` | `True`  |
| `false` | `FALSE`  |
|  | `yes`  |
|  | `no`  |
|  | `1`  |
|  | `0`  |




### **jsonNull**

Should match a JSON null value.

From [data.ts](./src/data.ts#L69)

Copy:
```js
const jsonNull = /null/
```

```ts
import { jsonNull } from "https://deno.land/x/regular_expressions/src/data.ts";
```

| Should match | Should not match  |
|---|---|
| `null` | `Null`  |
|  | `NULL`  |
|  | `nil`  |
|  | `undefined`  |
|  | `none`  |




### **jsonNumber**

Should match a JSON number (integer or decimal, with optional
exponent).

From [data.ts](./src/data.ts#L25)

Copy:
```js
const jsonNumber = /-?(?:0|[1-9][0-9]*)(?:\.[0-9]+)?(?:[eE][+-]?[0-9]+)?/
```

```ts
import { jsonNumber } from "https://deno.land/x/regular_expressions/src/data.ts";
```

| Should match | Should not match  |
|---|---|
| `0` | `0123`  |
| `123` | `+5`  |
| `-456` | `.5`  |
| `3.14` | `1.`  |
| `-0.5` | `NaN`  |
| `1e10` | `Infinity`  |
| `2.5E-3` |   |




### **jsonString**

Should match a JSON string value (double-quoted with escape support).

From [data.ts](./src/data.ts#L4)

Copy:
```js
const jsonString = /"(?:[^"\\]|\\.)*"/
```

```ts
import { jsonString } from "https://deno.land/x/regular_expressions/src/data.ts";
```

| Should match | Should not match  |
|---|---|
| `"hello"` | `'single quotes'`  |
| `"hello world"` | `no quotes`  |
| `"escaped \"quote\""` | `"unclosed`  |
| `"line\nbreak"` | `""extra"`  |
| `""` |   |




### **keyValuePair**

Should match a key=value or key: value pair.

From [data.ts](./src/data.ts#L85)

Copy:
```js
const keyValuePair = /[a-zA-Z_][a-zA-Z0-9_]*\s*[:=]\s*[^\s,;]+/
```

```ts
import { keyValuePair } from "https://deno.land/x/regular_expressions/src/data.ts";
```

| Should match | Should not match  |
|---|---|
| `key=value` | `=value`  |
| `name: John` | `: value`  |
| `count=42` | `123=abc`  |
| `DATABASE_URL=localhost` | `key`  |
| `debug = true` |   |




### **xmlEntity**

Should match an XML/HTML character entity
(e.g. &amp;amp;, &amp;#123;, &amp;#x1F;).

From [data.ts](./src/data.ts#L106)

Copy:
```js
const xmlEntity = /&(?:#x[0-9a-fA-F]+|#[0-9]+|[a-zA-Z][a-zA-Z0-9]*);/
```

```ts
import { xmlEntity } from "https://deno.land/x/regular_expressions/src/data.ts";
```

| Should match | Should not match  |
|---|---|
| `&amp;` | `&;`  |
| `&lt;` | `&#;`  |
| `&gt;` | `&#x;`  |
| `&#123;` | `&123;`  |
| `&#x1F600;` | `amp;`  |
| `&nbsp;` | `& amp;`  |
| `&#39;` |   |



# phone

> At: [phone.ts](./src/phone.ts)

### **phoneE164**

Should match a phone number in E.164 international format
(e.g. +15551234567).

From [phone.ts](./src/phone.ts#L5)

Copy:
```js
const phoneE164 = /\+[1-9][0-9]{6,14}/
```

```ts
import { phoneE164 } from "https://deno.land/x/regular_expressions/src/phone.ts";
```

| Should match | Should not match  |
|---|---|
| `+15551234567` | `15551234567`  |
| `+442071234567` | `+0551234567`  |
| `+861012345678` | `+123456`  |
| `+1234567` | `+1234567890123456`  |
| `+123456789012345` | `++15551234567`  |




### **phoneInternational**

Should match a generic international phone number with country code.

From [phone.ts](./src/phone.ts#L51)

Copy:
```js
const phoneInternational = /\+?[1-9][0-9]{0,2}[-.\s]?\(?[0-9]{1,4}\)?(?:[-.\s]?[0-9]{1,4}){1,5}/
```

```ts
import { phoneInternational } from "https://deno.land/x/regular_expressions/src/phone.ts";
```

| Should match | Should not match  |
|---|---|
| `+44 20 7123 4567` | `+0 123 456 7890`  |
| `+49 30 12345678` | `abcdefghij`  |
| `+81 3 1234 5678` | `++44 20 7123 4567`  |
| `+1 555 123 4567` | `+`  |
| `+33 1 23 45 67 89` |   |
| `44 20 71234567` |   |




### **phoneUS**

Should match a US/Canada phone number in common formats such as
(555) 123-4567 or 555-123-4567.

From [phone.ts](./src/phone.ts#L27)

Copy:
```js
const phoneUS = /(?:\+?1[-.\s]?)?(?:\(?[2-9][0-9]{2}\)?[-.\s]?)[2-9][0-9]{2}[-.\s]?[0-9]{4}/
```

```ts
import { phoneUS } from "https://deno.land/x/regular_expressions/src/phone.ts";
```

| Should match | Should not match  |
|---|---|
| `(555) 234-5678` | `(055) 234-5678`  |
| `555-234-5678` | `555-023-5678`  |
| `5552345678` | `12345`  |
| `1-555-234-5678` | `(555) 234-567`  |
| `+1 555 234 5678` | `+2 555 234 5678`  |
| `+1.555.234.5678` |   |
| `(555)234-5678` |   |



# currency

> At: [currency.ts](./src/currency.ts)

### **currencySymbol**

should match a currency symbol

From [currency.ts](./src/currency.ts#L6)

Copy:
```js
const currencySymbol = /[$€£¥₩₤₦₹₨₪₱]/
```

```ts
import { currencySymbol } from "https://deno.land/x/regular_expressions/src/currency.ts";
```

| Should match | Should not match  |
|---|---|
| `$` |   |
| `€` | ` `  |
| `£` | `a`  |
| `¥` | `b`  |
| `₩` | `c`  |
| `₤` | `d`  |
| `₦` | `e`  |
| `₹` | `f`  |
| `₨` | `x`  |
| `₪` | `y`  |
| `₱` | `z`  |



# case

> At: [case.ts](./src/case.ts)

### **camelCase**

Should match  camelCase string

From [case.ts](./src/case.ts#L5)

Copy:
```js
const camelCase = /((?![A-Z])[a-zA-Z0-9]+)+/
```

```ts
import { camelCase } from "https://deno.land/x/regular_expressions/src/case.ts";
```

| Should match | Should not match  |
|---|---|
| `camelCase` | `PascalCase`  |
| `camelCase2` | `kebab-case`  |
| `camelCase3` | `snake_case`  |




### **constantCase**

Should match  CONSTANT_CASE string

From [case.ts](./src/case.ts#L94)

Copy:
```js
const constantCase = /([A-Z0-9]+)(_[A-Z0-9]+)?/
```

```ts
import { constantCase } from "https://deno.land/x/regular_expressions/src/case.ts";
```

| Should match | Should not match  |
|---|---|
| `CONSTANT_CASE2` | `PascalCase`  |
| `CONSTANT` | `camelCase`  |
|  | `kebab-case`  |
|  | `snake_case`  |
|  | `CONSTANT-CASE`  |
|  | `CONSTANT_CASE_`  |
|  | `_CONSTANT_CASE`  |
|  | `CONSTANT_CAse`  |




### **kebabCase**

Should match  kebab-case string

From [case.ts](./src/case.ts#L24)

Copy:
```js
const kebabCase = /((?!-)([a-z0-9]+)(-[a-z0-9])?)+/
```

```ts
import { kebabCase } from "https://deno.land/x/regular_expressions/src/case.ts";
```

| Should match | Should not match  |
|---|---|
| `kebab-case` | `PascalCase`  |
| `kebab-case2` | `camelCase`  |
| `kebab-case3` | `no kebab case`  |
|  | `snake_case`  |
|  | `-kebab-case`  |
|  | `kebab-case-`  |
|  | `kebab--case`  |
|  | `kebab-CAse`  |
|  | `KEBAB-CASE`  |




### **pascalCase**

Should match PascalCase string

From [case.ts](./src/case.ts#L73)

Copy:
```js
const pascalCase = /([A-Z][a-z0-9]+)+/
```

```ts
import { pascalCase } from "https://deno.land/x/regular_expressions/src/case.ts";
```

| Should match | Should not match  |
|---|---|
| `PascalCase` | `PascalCAse3`  |
| `Pascal` | `PAscalCase3`  |
| `PascalCase2` | `camelCase`  |
|  | `kebab-case`  |
|  | `snake_case`  |




### **snakeCase**

Should match  snake_case string

From [case.ts](./src/case.ts#L48)

Copy:
```js
const snakeCase = /((?!_)([a-z0-9]+)(_[a-z0-9])?)+/
```

```ts
import { snakeCase } from "https://deno.land/x/regular_expressions/src/case.ts";
```

| Should match | Should not match  |
|---|---|
| `snake_case` | `PascalCase`  |
| `snake_case2` | `camelCase`  |
| `snake_case3` | `no snake case`  |
|  | `no-snake-case`  |
|  | `kebab-case`  |
|  | `_snake_case`  |
|  | `snake_case_`  |
|  | `snake__case`  |
|  | `snake_CAse`  |
|  | `SNAKE_CASE`  |



# media

> At: [media.ts](./src/media.ts)

### **aspectRatio**

Should match a display aspect ratio (e.g. 16:9, 4:3).

From [media.ts](./src/media.ts#L4)

Copy:
```js
const aspectRatio = /[1-9][0-9]*:[1-9][0-9]*/
```

```ts
import { aspectRatio } from "https://deno.land/x/regular_expressions/src/media.ts";
```

| Should match | Should not match  |
|---|---|
| `16:9` | `0:9`  |
| `4:3` | `16:0`  |
| `21:9` | `16-9`  |
| `1:1` | `:9`  |
| `32:9` | `16:`  |




### **colorName**

Should match a common CSS named color.

From [media.ts](./src/media.ts#L46)

Copy:
```js
const colorName = /red|blue|green|black|white|yellow|orange|purple|pink|gray|grey|brown|cyan|magenta|lime|navy|teal|silver|gold|indigo|violet|coral|salmon|khaki|maroon|olive|aqua|fuchsia|beige|ivory|linen|plum|orchid|peru|sienna|tan|wheat|tomato|turquoise/
```

```ts
import { colorName } from "https://deno.land/x/regular_expressions/src/media.ts";
```

| Should match | Should not match  |
|---|---|
| `red` | `Red`  |
| `blue` | `BLUE`  |
| `green` | `chartreuse`  |
| `coral` | `123`  |
| `turquoise` | `color`  |
| `navy` |   |




### **fontStack**

Should match a font stack declaration
(e.g. "Helvetica Neue", Arial, sans-serif).

From [media.ts](./src/media.ts#L69)

Copy:
```js
const fontStack = /(?:"[^"]+"|'[^']+'|[a-zA-Z-]+)(?:\s*,\s*(?:"[^"]+"|'[^']+'|[a-zA-Z-]+))+/
```

```ts
import { fontStack } from "https://deno.land/x/regular_expressions/src/media.ts";
```

| Should match | Should not match  |
|---|---|
| `"Helvetica Neue", Arial, sans-serif` | `Arial`  |
| `Georgia, serif` | `sans-serif`  |
| `'Courier New', monospace` | `,Arial`  |
| `system-ui, -apple-system, sans-serif` | `Arial,`  |




### **resolution**

Should match a screen resolution (e.g. 1920x1080, 3840x2160).

From [media.ts](./src/media.ts#L25)

Copy:
```js
const resolution = /[1-9][0-9]*x[1-9][0-9]*/
```

```ts
import { resolution } from "https://deno.land/x/regular_expressions/src/media.ts";
```

| Should match | Should not match  |
|---|---|
| `1920x1080` | `0x1080`  |
| `3840x2160` | `1920x0`  |
| `1280x720` | `1920*1080`  |
| `800x600` | `1920X1080`  |
| `7680x4320` | `1920 x 1080`  |



# language

> At: [language.ts](./src/language.ts)

### **importStatement**

Should match a JavaScript/TypeScript import statement
(e.g. import ... from "...").

From [language.ts](./src/language.ts#L47)

Copy:
```js
const importStatement = /import\s+(?:(?:\{[^}]*\}|[a-zA-Z_$][a-zA-Z0-9_$]*|\*\s+as\s+[a-zA-Z_$][a-zA-Z0-9_$]*)(?:\s*,\s*(?:\{[^}]*\}|\*\s+as\s+[a-zA-Z_$][a-zA-Z0-9_$]*))?)\s+from\s+["'][^"']+["']/
```

```ts
import { importStatement } from "https://deno.land/x/regular_expressions/src/language.ts";
```

| Should match | Should not match  |
|---|---|
| `import foo from "bar"` | `import()`  |
| `import { a, b } from 'module'` | `require("module")`  |
| `import * as utils from "./utils"` | `import`  |
| `import React, { useState } from "react"` | `from "module"`  |




### **javaAnnotation**

Should match a Java-style annotation (e.g. @Override, @Deprecated).

From [language.ts](./src/language.ts#L26)

Copy:
```js
const javaAnnotation = /@[A-Z][a-zA-Z0-9_]*/
```

```ts
import { javaAnnotation } from "https://deno.land/x/regular_expressions/src/language.ts";
```

| Should match | Should not match  |
|---|---|
| `@Override` | `@override`  |
| `@Deprecated` | `Override`  |
| `@SuppressWarnings` | `@123`  |
| `@Test` | `@@Override`  |
| `@Autowired` |   |




### **pythonDecorator**

Should match a Python decorator (e.g. @decorator or

From [language.ts](./src/language.ts#L5)

Copy:
```js
const pythonDecorator = /@[a-zA-Z_][a-zA-Z0-9_]*(?:\.[a-zA-Z_][a-zA-Z0-9_]*)*/
```

```ts
import { pythonDecorator } from "https://deno.land/x/regular_expressions/src/language.ts";
```

| Should match | Should not match  |
|---|---|
| `@property` | `decorator`  |
| `@staticmethod` | `@123`  |
| `@app.route` | `@ property`  |
| `@pytest.mark.skip` | `@@double`  |
| `@my_decorator` |   |




### **regexLiteral**

Should match a JavaScript regex literal (e.g. /pattern/flags).

From [language.ts](./src/language.ts#L87)

Copy:
```js
const regexLiteral = /\/(?:[^\/\\]|\\.)+\/[gimsuy]*/
```

```ts
import { regexLiteral } from "https://deno.land/x/regular_expressions/src/language.ts";
```

| Should match | Should not match  |
|---|---|
| `/hello/` | `//comment`  |
| `/^test$/gi` | `/single`  |
| `/foo\/bar/` | `regex`  |
| `/[a-z]+/m` | `//`  |
| `/\d+/g` |   |




### **requireStatement**

Should match a CommonJS require statement
(e.g. require("module")).

From [language.ts](./src/language.ts#L68)

Copy:
```js
const requireStatement = /require\(["'][^"']+["']\)/
```

```ts
import { requireStatement } from "https://deno.land/x/regular_expressions/src/language.ts";
```

| Should match | Should not match  |
|---|---|
| `require("fs")` | `require()`  |
| `require('path')` | `require(variable)`  |
| `require("./local-module")` | `require`  |
| `require("@scope/package")` | `import("module")`  |




### **templateLiteral**

Should match a JavaScript template literal placeholder
(e.g. ${expression}).

From [language.ts](./src/language.ts#L108)

Copy:
```js
const templateLiteral = /\$\{[^}]+\}/
```

```ts
import { templateLiteral } from "https://deno.land/x/regular_expressions/src/language.ts";
```

| Should match | Should not match  |
|---|---|
| `${name}` | `${}`  |
| `${a + b}` | `$name`  |
| `${obj.prop}` | `{name}`  |
| `${fn()}` | `${`  |
| `${arr[0]}` |   |



# version

> At: [version.ts](./src/version.ts)

### **calver**

Should match a calendar version (e.g. 2024.01.15).

From [version.ts](./src/version.ts#L4)

Copy:
```js
const calver = /(?:19|20)[0-9]{2}\.(?:0[1-9]|1[0-2])\.(?:0[1-9]|[12][0-9]|3[01])/
```

```ts
import { calver } from "https://deno.land/x/regular_expressions/src/version.ts";
```

| Should match | Should not match  |
|---|---|
| `2024.01.15` | `2024.13.01`  |
| `2023.12.31` | `2024.00.15`  |
| `2000.01.01` | `2024.01.32`  |
| `1999.06.30` | `24.01.15`  |
|  | `2024-01-15`  |




### **changelogEntry**

Should match a changelog version entry heading
(e.g. ## [1.2.3] - 2024-01-15).

From [version.ts](./src/version.ts#L47)

Copy:
```js
const changelogEntry = /## \[(?:0|[1-9][0-9]*)\.(?:0|[1-9][0-9]*)\.(?:0|[1-9][0-9]*)\] - [0-9]{4}-[0-9]{2}-[0-9]{2}/
```

```ts
import { changelogEntry } from "https://deno.land/x/regular_expressions/src/version.ts";
```

| Should match | Should not match  |
|---|---|
| `## [1.2.3] - 2024-01-15` | `# [1.2.3] - 2024-01-15`  |
| `## [0.0.1] - 2023-12-31` | `## 1.2.3 - 2024-01-15`  |
| `## [10.0.0] - 2024-06-01` | `## [1.2.3] 2024-01-15`  |
|  | `## [1.2] - 2024-01-15`  |




### **nodeVersion**

Should match a Node.js version string with v prefix
(e.g. v18.17.0).

From [version.ts](./src/version.ts#L26)

Copy:
```js
const nodeVersion = /v(?:0|[1-9][0-9]*)\.(?:0|[1-9][0-9]*)\.(?:0|[1-9][0-9]*)/
```

```ts
import { nodeVersion } from "https://deno.land/x/regular_expressions/src/version.ts";
```

| Should match | Should not match  |
|---|---|
| `v18.17.0` | `18.17.0`  |
| `v20.0.0` | `v18.17`  |
| `v0.12.7` | `v018.17.0`  |
| `v16.20.2` | `V18.17.0`  |




### **versionRange**

Should match an npm-style version range
(e.g. ^1.2.3, ~1.2.3, >=1.0.0).

From [version.ts](./src/version.ts#L67)

Copy:
```js
const versionRange = /[\^~>=<]{1,2}(?:0|[1-9][0-9]*)(?:\.(?:0|[1-9][0-9]*))*(?:-[a-zA-Z0-9._-]+)?/
```

```ts
import { versionRange } from "https://deno.land/x/regular_expressions/src/version.ts";
```

| Should match | Should not match  |
|---|---|
| `^1.2.3` | `1.2.3`  |
| `~1.2.3` | `v1.2.3`  |
| `>=1.0.0` | `*`  |
| `<2.0.0` | `latest`  |
| `>=0.5.0-beta` |   |
| `>3` |   |



# security

> At: [security.ts](./src/security.ts)

### **cveId**

Should match a CVE identifier
(e.g. CVE-2024-12345).

From [security.ts](./src/security.ts#L5)

Copy:
```js
const cveId = /CVE-[0-9]{4}-[0-9]{4,}/
```

```ts
import { cveId } from "https://deno.land/x/regular_expressions/src/security.ts";
```

| Should match | Should not match  |
|---|---|
| `CVE-2024-12345` | `CVE-2024-123`  |
| `CVE-2021-44228` | `cve-2024-12345`  |
| `CVE-2014-0160` | `CVE-24-12345`  |
| `CVE-2023-1234567` | `CVE2024-12345`  |
| `CVE-2017-5638` | `CWE-79`  |




### **cweId**

Should match a CWE identifier (e.g. CWE-79).

From [security.ts](./src/security.ts#L26)

Copy:
```js
const cweId = /CWE-[1-9][0-9]*/
```

```ts
import { cweId } from "https://deno.land/x/regular_expressions/src/security.ts";
```

| Should match | Should not match  |
|---|---|
| `CWE-79` | `CWE-0`  |
| `CWE-89` | `cwe-79`  |
| `CWE-200` | `CWE79`  |
| `CWE-1234` | `CVE-2024-1234`  |
| `CWE-22` | `CWE-`  |




### **filePermission**

Should match a Unix file permission string
(e.g. rwxr-xr-x) or octal (e.g. 755).

From [security.ts](./src/security.ts#L69)

Copy:
```js
const filePermission = /[r-][w-][xsS-][r-][w-][xsS-][r-][w-][xtT-]|[0-7]{3,4}/
```

```ts
import { filePermission } from "https://deno.land/x/regular_expressions/src/security.ts";
```

| Should match | Should not match  |
|---|---|
| `rwxr-xr-x` | `rwx`  |
| `rw-r--r--` | `rw`  |
| `rwx------` | `888`  |
| `755` | `75`  |
| `644` | `rwxrwxrw`  |
| `0755` |   |
| `---------` |   |




### **hashBang**

Should match a shebang/hashbang line
(e.g. #!/usr/bin/env node).

From [security.ts](./src/security.ts#L47)

Copy:
```js
const hashBang = /#!\/[a-zA-Z0-9._-]+(?:\/[a-zA-Z0-9._-]+)*(?:\s+[a-zA-Z0-9._-]+)*/
```

```ts
import { hashBang } from "https://deno.land/x/regular_expressions/src/security.ts";
```

| Should match | Should not match  |
|---|---|
| `#!/usr/bin/env node` | `#/bin/bash`  |
| `#!/bin/bash` | `!/bin/bash`  |
| `#!/usr/bin/python3` | `# comment`  |
| `#!/bin/sh` | `#!/`  |
| `#!/usr/bin/env deno` |   |



# email

> At: [email.ts](./src/email.ts)

### **email**

Allow IP as domain name: hello@154.145.68.12 does allow literal addresses &quot;hello, how are you?&quot;@world.com allows numeric domain names after the last &quot;.&quot; minimum 2 letters

From [email.ts](./src/email.ts#L13)

Copy:
```js
const email = /[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+/
```

```ts
import { email } from "https://deno.land/x/regular_expressions/src/email.ts";
```

| Should match | Should not match  |
|---|---|
| `juan@garn.dev` | `em\|ail@email`  |
| `email+foo@email.com` | `email&email.com`  |
| `email+112@email.com` | `hello@worl_d.com`  |
| `he_llo@worl.d.com` | `he&amp;llo@world.co1`  |
| `EMAIL@DOMAIN.COM` | `.hello@wor#.co.uk`  |
| `e.m.a.il@email.com` | `juan@@garn.dev`  |
| `email@email.uk.co` |   |
| `bar.ba@test.co.uk` |   |
| `em\|ail@email.com` |   |
| `hel.l-o@wor-ld.museum` |   |
| `h1ello@123.com` |   |
| `hello@154.145.68.12` |   |



# devops

> At: [devops.ts](./src/devops.ts)

### **dockerfileInstruction**

Should match a Dockerfile instruction keyword
(FROM, RUN, COPY, CMD, ENV, etc.).

From [devops.ts](./src/devops.ts#L70)

Copy:
```js
const dockerfileInstruction = /FROM|RUN|CMD|LABEL|MAINTAINER|EXPOSE|ENV|ADD|COPY|ENTRYPOINT|VOLUME|USER|WORKDIR|ARG|ONBUILD|STOPSIGNAL|HEALTHCHECK|SHELL/
```

```ts
import { dockerfileInstruction } from "https://deno.land/x/regular_expressions/src/devops.ts";
```

| Should match | Should not match  |
|---|---|
| `FROM` | `from`  |
| `RUN` | `INSTALL`  |
| `COPY` | `EXECUTE`  |
| `CMD` | `MOVE`  |
| `ENV` | `PRINT`  |
| `WORKDIR` |   |
| `ENTRYPOINT` |   |




### **helmTemplate**

Should match a Go/Helm template expression
(e.g. {{ .Values.property }}).

From [devops.ts](./src/devops.ts#L49)

Copy:
```js
const helmTemplate = /\{\{-?\s*[^}\s][^}]*\s*-?\}\}/
```

```ts
import { helmTemplate } from "https://deno.land/x/regular_expressions/src/devops.ts";
```

| Should match | Should not match  |
|---|---|
| `{{ .Values.image }}` | `{ .Values }`  |
| `{{- .Release.Name -}}` | `{{}`  |
| `{{ if .Values.enabled }}` | `{{ }}`  |
| `{{ include "chart.name" . }}` | `{ { .Values } }`  |
| `{{ .Chart.Version }}` |   |




### **iniSection**

Should match an INI-style section header
(e.g. [section] or [section.subsection]).

From [devops.ts](./src/devops.ts#L5)

Copy:
```js
const iniSection = /\[[a-zA-Z][a-zA-Z0-9_.-]*\]/
```

```ts
import { iniSection } from "https://deno.land/x/regular_expressions/src/devops.ts";
```

| Should match | Should not match  |
|---|---|
| `[section]` | `[]`  |
| `[database]` | `[123]`  |
| `[app.settings]` | `section`  |
| `[my-config]` | `[-invalid]`  |
| `[Section_1]` | `[[double]]`  |




### **terraformResource**

Should match a Terraform resource block header
(e.g. resource "aws_instance" "example").

From [devops.ts](./src/devops.ts#L95)

Copy:
```js
const terraformResource = /(?:resource|data|module)\s+"[a-zA-Z_][a-zA-Z0-9_]*"\s+"[a-zA-Z_][a-zA-Z0-9_]*"/
```

```ts
import { terraformResource } from "https://deno.land/x/regular_expressions/src/devops.ts";
```

| Should match | Should not match  |
|---|---|
| `resource "aws_instance" "web"` | `resource aws_instance web`  |
| `data "aws_ami" "ubuntu"` | `variable "name"`  |
| `module "vpc" "main"` | `provider "aws"`  |
| `resource "google_compute_instance" "default"` | `resource "123" "name"`  |




### **tomlKeyValue**

Should match a TOML key-value assignment
(e.g. key = "value").

From [devops.ts](./src/devops.ts#L27)

Copy:
```js
const tomlKeyValue = /[a-zA-Z_][a-zA-Z0-9_-]*\s*=\s*(?:"[^"]*"|'[^']*'|true|false|[0-9][0-9._]*)/
```

```ts
import { tomlKeyValue } from "https://deno.land/x/regular_expressions/src/devops.ts";
```

| Should match | Should not match  |
|---|---|
| `name = "TOML"` | `= value`  |
| `debug = true` | `key =`  |
| `port = 8080` | `123 = value`  |
| `title = 'example'` | `key: value`  |
| `version = 0.1` |   |



# color

> At: [color.ts](./src/color.ts)

### **color**

Should match any valid css color.

From [color.ts](./src/color.ts#L86)

Copy:
```js
const color = /(#((([0-9a-fA-F]{1}){3,4})|(([0-9a-fA-F]{2}){3,4})))|(rgba?\(\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})(\s*,\s*0?\.[0-9])?\s*\))|(hsla?\(\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})%\s*,\s*([0-9]{1,3}%)(\s*,\s*0?\.[0-9])?\s*\))/
```

```ts
import { color } from "https://deno.land/x/regular_expressions/src/color.ts";
```

| Should match | Should not match  |
|---|---|
| `#abc` | `#0ffcc00`  |
| `#ABC` | `#abcdefG`  |
| `#123` | `#FFG`  |
| `#123456` | `FFF`  |
| `#aAcCff` | `FFF`  |
| `#1234` | `$FFF`  |
| `#ffcc00` | `#12345`  |
| `#ffcc0033` | `#1234567`  |
| `#abcdefee` | `#123456789`  |
| `rgb(255,255,255)` | `#123456789a`  |
| `rgb(255,255,255,0.5)` | `#123456789ab`  |
| `rgba(255,255,255,0.1)` | `rgba(2 55,255,255)`  |
| `rgba(255,255,255)` | `rgbc(300,0,0)`  |
| `rgba( 255  ,   255     ,  255  )` | `rgb(256,25 5,255,0.5)`  |
| `rgb(999,0,0)` | `rg(256,255,255,0.5)`  |
| `hsl(0,100%,50%)` | `(256,255,255,0.5)`  |
| `hsl(0,100%,50%,0.5)` | `hsl(24,50%,200)`  |
| `hsla(0,100%,50%,0.1)` | `hsla(2 55,255,255)`  |
| `hsla(0,100%,50%)` | `hslc(300,0%,0%)`  |
| `hsla( 0  ,  100%       ,  50%  )` | `hsl(256,25 5,255,0.5)`  |
| `hsl(24,50%,200%)` | `hs(256,255,255,0.5)`  |
|  | `(256,255,255,0.5)`  |




### **colorHex**

Should match any valid css hex color. (#ffcc00,  #abc, or #ffcc0033)

From [color.ts](./src/color.ts#L4)

Copy:
```js
const colorHex = /#((([0-9a-fA-F]{1}){3,4})|(([0-9a-fA-F]{2}){3,4}))/
```

```ts
import { colorHex } from "https://deno.land/x/regular_expressions/src/color.ts";
```

| Should match | Should not match  |
|---|---|
| `#abc` | `#0ffcc00`  |
| `#ABC` | `#abcdefG`  |
| `#123` | `#FFG`  |
| `#123456` | `FFF`  |
| `#aAcCff` | `FFF`  |
| `#1234` | `$FFF`  |
| `#ffcc00` | `#12345`  |
| `#ffcc0033` | `#1234567`  |
| `#abcdefee` | `#123456789`  |
|  | `#123456789a`  |
|  | `#123456789ab`  |




### **colorHsl**

Should match any valid  css hsl color. (hsl(0,100%,50%), hsla(0,100%,50%,0.5))

From [color.ts](./src/color.ts#L61)

Copy:
```js
const colorHsl = /hsla?\(\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})%\s*,\s*([0-9]{1,3}%)(\s*,\s*0?\.[0-9])?\s*\)/
```

```ts
import { colorHsl } from "https://deno.land/x/regular_expressions/src/color.ts";
```

| Should match | Should not match  |
|---|---|
| `hsl(0,100%,50%)` | `hsl(24,50%,200)`  |
| `hsl(0,100%,50%,0.5)` | `hsla(2 55,255,255)`  |
| `hsla(0,100%,50%,0.1)` | `hslc(300,0%,0%)`  |
| `hsla(0,100%,50%)` | `hsl(256,25 5,255,0.5)`  |
| `hsla( 0  ,  100%       ,  50%  )` | `hs(256,255,255,0.5)`  |
| `hsl(24,50%,200%)` | `(256,255,255,0.5)`  |




### **colorRgb**

Should match any valid css rgb o rgba color. (rgb(255,255,255), rgba(255,255,255,0.5))

From [color.ts](./src/color.ts#L36)

Copy:
```js
const colorRgb = /rgba?\(\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})(\s*,\s*0?\.[0-9])?\s*\)/
```

```ts
import { colorRgb } from "https://deno.land/x/regular_expressions/src/color.ts";
```

| Should match | Should not match  |
|---|---|
| `rgb(255,255,255)` | `rgba(2 55,255,255)`  |
| `rgb(255,255,255,0.5)` | `rgbc(300,0,0)`  |
| `rgba(255,255,255,0.1)` | `rgb(256,25 5,255,0.5)`  |
| `rgba(255,255,255)` | `rg(256,255,255,0.5)`  |
| `rgba( 255  ,   255     ,  255  )` | `(256,255,255,0.5)`  |
| `rgb(999,0,0)` |   |



# datetime

> At: [datetime.ts](./src/datetime.ts)

### **date**

should match any date in YYYY-MM-DD format

From [datetime.ts](./src/datetime.ts#L179)

Copy:
```js
const date = /([0-9]{4})-(0[1-9]|1[0-2])-(0[1-9]|[1-2][0-9]|3[0-1])/
```

```ts
import { date } from "https://deno.land/x/regular_expressions/src/datetime.ts";
```

| Should match | Should not match  |
|---|---|
| `2022-01-01` | `2022/01/01`  |
| `3044-12-31` | `13-12-2021`  |
| `1982-01-01` | `82-12-31`  |
| `1982-12-31` | `2020-31-12`  |
| `1082-01-01` |   |
| `0082-12-31` |   |




### **dateTime**

should match any date time in `YYYY-MM-DD  hh:mm:ss` format

From [datetime.ts](./src/datetime.ts#L200)

Copy:
```js
const dateTime = /([0-9]{4})-(0[1-9]|1[0-2])-(0[1-9]|[1-2][0-9]|3[0-1]) ([0-1][0-9]|2[0-3]):([0-5][0-9]):([0-5][0-9])/
```

```ts
import { dateTime } from "https://deno.land/x/regular_expressions/src/datetime.ts";
```

| Should match | Should not match  |
|---|---|
| `2020-01-01 00:00:00` | `13-12-2021 23:59:59`  |
| `2020-12-31 23:59:59` | `82-12-31 23:59:59`  |
| `1982-01-01 00:00:00` | `2020-12-31 00:60:00`  |
| `1982-12-31 23:59:59` | `2020-12-31`  |
| `1082-01-01 00:00:00` | `00:59:00`  |
| `0082-12-31 23:59:59` |   |




### **dateTimeISO8601**

should match any date time ISO8601 in `YYYY-MM-DDThh:mm:ss` format
https://es.wikipedia.org/wiki/ISO_8601

From [datetime.ts](./src/datetime.ts#L223)

Copy:
```js
const dateTimeISO8601 = /([0-9]{4})-(0[1-9]|1[0-2])-(0[1-9]|[1-2][0-9]|3[0-1])T([0-1][0-9]|2[0-3]):([0-5][0-9]):([0-5][0-9])/
```

```ts
import { dateTimeISO8601 } from "https://deno.land/x/regular_expressions/src/datetime.ts";
```

| Should match | Should not match  |
|---|---|
| `2020-01-01T00:00:00` | `13-12-2021T23:59:59`  |
| `2020-12-31T23:59:59` | `82-12-31T23:59:59`  |
| `1982-01-01T00:00:00` | `2020-12-31T00:60:00`  |
| `1982-12-31T23:59:59` | `2020-12-31`  |
| `1082-01-01T00:00:00` | `00:59:00`  |




### **day**

should match any day number, 2 digits numbers from 01 to 31,

From [datetime.ts](./src/datetime.ts#L112)

Copy:
```js
const day = /(0[1-9]|[1-2][0-9]|3[0-1])/
```

```ts
import { day } from "https://deno.land/x/regular_expressions/src/datetime.ts";
```

| Should match | Should not match  |
|---|---|
| `01` | `00`  |
| `12` | `32`  |
| `03` | `100`  |
| `04` | `0`  |
| `05` | `2`  |
| `22` |   |
| `31` |   |




### **hour**

should match valid hours in 24h format

From [datetime.ts](./src/datetime.ts#L5)

Copy:
```js
const hour = /([0-1][0-9]|2[0-3])/
```

```ts
import { hour } from "https://deno.land/x/regular_expressions/src/datetime.ts";
```

| Should match | Should not match  |
|---|---|
| `00` | `24`  |
| `23` | `-2`  |
| `12` | `2`  |
| `15` | `0`  |
| `05` | `33`  |




### **millisecond**

should match valid milliseconds in 24h format

From [datetime.ts](./src/datetime.ts#L68)

Copy:
```js
const millisecond = /([0-9]{3})/
```

```ts
import { millisecond } from "https://deno.land/x/regular_expressions/src/datetime.ts";
```

| Should match | Should not match  |
|---|---|
| `000` | `1000`  |
| `999` | `-22`  |
| `123` | `2`  |
| `456` | `0`  |
| `789` | `33`  |




### **minute**

should match valid minutes in 24h format

From [datetime.ts](./src/datetime.ts#L27)

Copy:
```js
const minute = /([0-5][0-9])/
```

```ts
import { minute } from "https://deno.land/x/regular_expressions/src/datetime.ts";
```

| Should match | Should not match  |
|---|---|
| `00` | `60`  |
| `59` | `-2`  |
| `12` | `2`  |
| `15` | `0`  |
| `05` |   |




### **month**

should match any month number, must be 2 digits numbers

From [datetime.ts](./src/datetime.ts#L135)

Copy:
```js
const month = /(0[1-9]|1[0-2])/
```

```ts
import { month } from "https://deno.land/x/regular_expressions/src/datetime.ts";
```

| Should match | Should not match  |
|---|---|
| `01` | `13`  |
| `12` | `00`  |
| `03` | `2`  |
| `04` |   |




### **second**

should match valid seconds in 24h format

From [datetime.ts](./src/datetime.ts#L47)

Copy:
```js
const second = /([0-5][0-9])/
```

```ts
import { second } from "https://deno.land/x/regular_expressions/src/datetime.ts";
```

| Should match | Should not match  |
|---|---|
| `00` | `60`  |
| `59` | `-2`  |
| `12` | `2`  |
| `15` | `0`  |
| `05` |   |




### **time**

should match valid time in 24h format

From [datetime.ts](./src/datetime.ts#L90)

Copy:
```js
const time = /([0-1][0-9]|2[0-3]):([0-5][0-9]):([0-5][0-9])/
```

```ts
import { time } from "https://deno.land/x/regular_expressions/src/datetime.ts";
```

| Should match | Should not match  |
|---|---|
| `00:00:00` | `05:05:5`  |
| `23:59:59` | `05:5:05`  |
| `12:00:00` | `1:5:05`  |
| `15:00:00` | `24:00:00`  |
| `05:05:05` | `00:60:00`  |
|  | `00:00:60`  |




### **year**

should match any year number, must be  4 digits numbers

From [datetime.ts](./src/datetime.ts#L154)

Copy:
```js
const year = /([0-9]{4})/
```

```ts
import { year } from "https://deno.land/x/regular_expressions/src/datetime.ts";
```

| Should match | Should not match  |
|---|---|
| `2020` | `019`  |
| `1982` | `25`  |
| `1082` | `26`  |
| `3022` | `27`  |
| `2021` | `28`  |
| `2022` |   |
| `2023` |   |
| `2024` |   |



# encoding

> At: [encoding.ts](./src/encoding.ts)

### **base32**

Should match a base32-encoded string (uppercase A-Z, digits 2-7,
optional padding).

From [encoding.ts](./src/encoding.ts#L73)

Copy:
```js
const base32 = /[A-Z2-7]{2,}={0,6}/
```

```ts
import { base32 } from "https://deno.land/x/regular_expressions/src/encoding.ts";
```

| Should match | Should not match  |
|---|---|
| `JBSWY3DPEHPK3PXP` | `jbswy3dp`  |
| `MFRA====` | `A`  |
| `GEZDGNBVGY3TQOJQ` | `JBSWY89Z`  |
| `NBSWY3DP` | `12345678`  |




### **escapedString**

Should match a string containing common escape sequences
(e.g. \\n, \\t, \\\\, \\").

From [encoding.ts](./src/encoding.ts#L114)

Copy:
```js
const escapedString = /\\[nrtbfv0'"\\\/]/
```

```ts
import { escapedString } from "https://deno.land/x/regular_expressions/src/encoding.ts";
```

| Should match | Should not match  |
|---|---|
| `\n` | `\x`  |
| `\t` | `\q`  |
| `\\` | `n`  |
| `\'` | `\`  |
| `\"` |   |
| `\r` |   |
| `\0` |   |




### **hexString**

Should match a hexadecimal string with 0x prefix
(e.g. 0x1a2b3c).

From [encoding.ts](./src/encoding.ts#L93)

Copy:
```js
const hexString = /0x[0-9a-fA-F]+/
```

```ts
import { hexString } from "https://deno.land/x/regular_expressions/src/encoding.ts";
```

| Should match | Should not match  |
|---|---|
| `0x1a2b3c` | `1a2b3c`  |
| `0xFF` | `0xGHI`  |
| `0x0` | `0x`  |
| `0xDEADBEEF` | `x1234`  |
| `0x123abc` |   |




### **htmlEntity**

Should match an HTML/XML named or numeric character entity
(e.g. &amp;amp;, &amp;lt;, &amp;#39;, &amp;#x27;).

From [encoding.ts](./src/encoding.ts#L49)

Copy:
```js
const htmlEntity = /&(?:#x[0-9a-fA-F]+|#[0-9]+|[a-zA-Z][a-zA-Z0-9]*);/
```

```ts
import { htmlEntity } from "https://deno.land/x/regular_expressions/src/encoding.ts";
```

| Should match | Should not match  |
|---|---|
| `&amp;` | `&;`  |
| `&lt;` | `&#;`  |
| `&gt;` | `&#x;`  |
| `&#39;` | `&123;`  |
| `&#x27;` | `amp;`  |
| `&nbsp;` |   |
| `&#8212;` |   |




### **unicodeEscape**

Should match a JavaScript unicode escape sequence
(e.g. \\u0041, \\u{1F600}).

From [encoding.ts](./src/encoding.ts#L27)

Copy:
```js
const unicodeEscape = /\\u(?:\{[0-9a-fA-F]{1,6}\}|[0-9a-fA-F]{4})/
```

```ts
import { unicodeEscape } from "https://deno.land/x/regular_expressions/src/encoding.ts";
```

| Should match | Should not match  |
|---|---|
| `\u0041` | `\u04`  |
| `\u{1F600}` | `\u{}`  |
| `\uFFFF` | `u0041`  |
| `\u{0}` | `\UFFFF`  |
| `\u{10FFFF}` | `\u{GGGGGG}`  |




### **urlEncoded**

Should match a percent-encoded character (e.g. %20, %2F).

From [encoding.ts](./src/encoding.ts#L4)

Copy:
```js
const urlEncoded = /%[0-9a-fA-F]{2}/
```

```ts
import { urlEncoded } from "https://deno.land/x/regular_expressions/src/encoding.ts";
```

| Should match | Should not match  |
|---|---|
| `%20` | `%2`  |
| `%2F` | `%GG`  |
| `%3A` | `20`  |
| `%00` | `%%20`  |
| `%ff` | `%2g`  |
| `%7E` |   |



# container

> At: [container.ts](./src/container.ts)

### **arnAws**

Should match an AWS ARN
(e.g. arn:aws:s3:::bucket-name).

From [container.ts](./src/container.ts#L49)

Copy:
```js
const arnAws = /arn:aws[a-zA-Z-]*:[a-zA-Z0-9-]*:[a-zA-Z0-9-]*:[0-9]*:[^\s]+/
```

```ts
import { arnAws } from "https://deno.land/x/regular_expressions/src/container.ts";
```

| Should match | Should not match  |
|---|---|
| `arn:aws:s3:::my-bucket` | `arn:gcp:s3:::bucket`  |
| `arn:aws:iam::123456789012:user/johndoe` | `aws:s3:::bucket`  |
| `arn:aws:ec2:us-east-1:123456789012:instance/i-1234567890abcdef0` | `arn:aws`  |
| `arn:aws:lambda:us-west-2:123456789012:function:my-function` | `arn:aws:`  |




### **k8sLabel**

Should match a Kubernetes label selector
(e.g. app.kubernetes.io/name=my-app).

From [container.ts](./src/container.ts#L28)

Copy:
```js
const k8sLabel = /[a-zA-Z][a-zA-Z0-9_.\/-]*=[a-zA-Z0-9][a-zA-Z0-9_.-]*/
```

```ts
import { k8sLabel } from "https://deno.land/x/regular_expressions/src/container.ts";
```

| Should match | Should not match  |
|---|---|
| `app=nginx` | `=value`  |
| `app.kubernetes.io/name=my-app` | `key=`  |
| `tier=frontend` | `123=value`  |
| `env=production` | `key value`  |
| `version=v1.0` |   |




### **k8sResourceName**

Should match a Kubernetes resource reference
(e.g. deployment/my-app, pod/nginx-abc123).

From [container.ts](./src/container.ts#L5)

Copy:
```js
const k8sResourceName = /(?:pod|deployment|service|configmap|secret|ingress|daemonset|statefulset|job|cronjob|namespace|node|replicaset|pv|pvc)\/[a-z0-9][a-z0-9.-]*/
```

```ts
import { k8sResourceName } from "https://deno.land/x/regular_expressions/src/container.ts";
```

| Should match | Should not match  |
|---|---|
| `deployment/my-app` | `deploy/my-app`  |
| `pod/nginx-abc123` | `deployment/`  |
| `service/backend` | `my-app`  |
| `configmap/app-config` | `DEPLOYMENT/my-app`  |
| `secret/db-credentials` | `deployment/My-App`  |


