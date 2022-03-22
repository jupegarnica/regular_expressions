## camelCase

**Should match camelCase string**

Copy or import from [case.ts](./src/case.ts#L5)

```js
const camelCase = /((?![A-Z])[a-zA-Z0-9]+)+/;
```

```ts
import { camelCase } from "https://deno.land/x/regular-expressions/src/case.ts";
```

| Should match | Should not match |
| ------------ | ---------------- |
| `camelCase`  | `PascalCase`     |
| `camelCase2` | `kebab-case`     |
| `camelCase3` | `snake_case`     |

## constantCase

**Should match CONSTANT_CASE string**

Copy or import from [case.ts](./src/case.ts#L90)

```js
const constantCase = /([A-Z0-9]+)(_[A-Z0-9]+)?/;
```

```ts
import { constantCase } from "https://deno.land/x/regular-expressions/src/case.ts";
```

| Should match     | Should not match |
| ---------------- | ---------------- |
| `CONSTANT_CASE2` | `PascalCase`     |
| `CONSTANT`       | `camelCase`      |
|                  | `kebab-case`     |
|                  | `snake_case`     |
|                  | `CONSTANT-CASE`  |
|                  | `CONSTANT_CASE_` |
|                  | `_CONSTANT_CASE` |
|                  | `CONSTANT_CAse`  |

## kebabCase

**Should match kebab-case string**

Copy or import from [case.ts](./src/case.ts#L23)

```js
const kebabCase = /((?!-)([a-z0-9]+)(-[a-z0-9])?)+/;
```

```ts
import { kebabCase } from "https://deno.land/x/regular-expressions/src/case.ts";
```

| Should match  | Should not match |
| ------------- | ---------------- |
| `kebab-case`  | `PascalCase`     |
| `kebab-case2` | `camelCase`      |
| `kebab-case3` | `no kebab case`  |
|               | `snake_case`     |
|               | `-kebab-case`    |
|               | `kebab-case-`    |
|               | `kebab--case`    |
|               | `kebab-CAse`     |
|               | `KEBAB-CASE`     |

## pascalCase

**Should match PascalCase string**

Copy or import from [case.ts](./src/case.ts#L70)

```js
const pascalCase = /([A-Z][a-z0-9]+)+/;
```

```ts
import { pascalCase } from "https://deno.land/x/regular-expressions/src/case.ts";
```

| Should match  | Should not match |
| ------------- | ---------------- |
| `PascalCase`  | `PascalCAse3`    |
| `Pascal`      | `PAscalCase3`    |
| `PascalCase2` | `camelCase`      |
|               | `kebab-case`     |
|               | `snake_case`     |

## snakeCase

**Should match snake_case string**

Copy or import from [case.ts](./src/case.ts#L46)

```js
const snakeCase = /((?!_)([a-z0-9]+)(_[a-z0-9])?)+/;
```

```ts
import { snakeCase } from "https://deno.land/x/regular-expressions/src/case.ts";
```

| Should match  | Should not match |
| ------------- | ---------------- |
| `snake_case`  | `PascalCase`     |
| `snake_case2` | `camelCase`      |
| `snake_case3` | `no snake case`  |
|               | `no-snake-case`  |
|               | `kebab-case`     |
|               | `_snake_case`    |
|               | `snake_case_`    |
|               | `snake__case`    |
|               | `snake_CAse`     |
|               | `SNAKE_CASE`     |

## hostname

**Should match any url hostname (no protocol, no port, no path)**

Copy or import from [uri.ts](./src/uri.ts#L98)

```js
const hostname = /[-a-zA-Z0-9:%._\+~#=]{2,256}\.[a-z]{2,6}/;
```

```ts
import { hostname } from "https://deno.land/x/regular-expressions/src/uri.ts";
```

| Should match      | Should not match            |
| ----------------- | --------------------------- |
| `example.com`     | `example.com/`              |
| `sub.example.com` | `example.com:1234`          |
| `www.exampl3.com` | `example.com:1234/`         |
|                   | `example.com/path`          |
|                   | `example.com/path/`         |
|                   | `//example.com`             |
|                   | `http://example.com:1234`   |
|                   | `https://example.com`       |
|                   | `http://example.com/`       |
|                   | `https://example.com/`      |
|                   | `http://example.com/path`   |
|                   | `https://example.com/path`  |
|                   | `http://example.com/path/`  |
|                   | `https://example.com/path/` |

## iPv4Private

**Should match any private ip v4**

Copy or import from [uri.ts](./src/uri.ts#L287)

```js
const iPv4Private =
  /(?:(?:10|127)\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?))|(?:(?:169\.254|192\.168)\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?))|(?:172\.(?:1[6-9]|2[0-9]|3[01]|4[0-9]|5[0-9])\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?))/;
```

```ts
import { iPv4Private } from "https://deno.land/x/regular-expressions/src/uri.ts";
```

| Should match      | Should not match |
| ----------------- | ---------------- |
| `10.196.0.1`      | `156.10.3.1`     |
| `127.196.100.1`   | `127.196.300.1`  |
| `192.168.1.0`     | `139.47.8.243`   |
| `192.168.123.134` |                  |
| `192.168.0.1`     |                  |

## ipv4

**Should match any ip v4 without protocol, no any mask of subnet**

Copy or import from [uri.ts](./src/uri.ts#L162)

```js
const ipv4 =
  /((25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)/;
```

```ts
import { ipv4 } from "https://deno.land/x/regular-expressions/src/uri.ts";
```

| Should match      | Should not match      |
| ----------------- | --------------------- |
| `192.168.1.0`     | `254.254.254.254.254` |
| `192.168.1.1`     | `1.1.1.1.1`           |
| `10.123.3.234`    | `1.1.1`               |
| `254.254.254.254` | `192.168.A.0`         |
| `0.0.0.0`         | `192.168.1.b`         |
| `255.0.0.0`       |                       |
| `255.255.0.0`     |                       |
| `255.255.255.0`   |                       |
| `255.255.255.255` |                       |

## ipv4CIDR

**Should match any ipv4 CIDR notation (subnet) *
https://en.wikipedia.org/wiki/Classless_Inter-Domain_Routing**

Copy or import from [uri.ts](./src/uri.ts#L209)

```js
const ipv4CIDR =
  /(([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])\.){3}([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])(\/([0-9]|[1-2][0-9]|3[0-2]))/;
```

```ts
import { ipv4CIDR } from "https://deno.land/x/regular-expressions/src/uri.ts";
```

| Should match       | Should not match   |
| ------------------ | ------------------ |
| `192.168.100.1/24` | `192.168.100.1/33` |
| `192.168.0.1/25`   | `0.0.0.0/90`       |
| `192.168.254.1/26` |                    |
| `0.0.0.0/0`        |                    |
| `10.120.192.2/32`  |                    |
| `10.120.192.2/31`  |                    |
| `10.120.192.2/30`  |                    |
| `10.120.192.2/29`  |                    |
| `10.120.192.2/28`  |                    |
| `10.120.192.2/27`  |                    |
| `10.120.192.2/26`  |                    |
| `10.120.192.2/25`  |                    |
| `10.120.192.0/24`  |                    |
| `10.120.192.0/23`  |                    |
| `10.120.192.0/22`  |                    |
| `10.120.192.0/21`  |                    |
| `10.120.192.0/20`  |                    |
| `10.120.192.0/19`  |                    |
| `10.120.192.0/18`  |                    |
| `10.120.192.0/17`  |                    |
| `10.120.0.0/16`    |                    |
| `10.120.0.0/15`    |                    |
| `10.120.0.0/14`    |                    |
| `10.120.0.0/13`    |                    |
| `10.120.0.0/12`    |                    |
| `10.120.0.0/11`    |                    |
| `10.120.0.0/10`    |                    |
| `10.120.0.0/9`     |                    |
| `10.0.0.0/8`       |                    |
| `10.0.0.0/7`       |                    |
| `10.0.0.0/6`       |                    |
| `10.0.0.0/5`       |                    |
| `10.0.0.0/4`       |                    |
| `10.0.0.0/3`       |                    |
| `10.0.0.0/2`       |                    |
| `10.0.0.0/1`       |                    |

## ipv4SubnetMask

**Should match any subnet mask * https://en.wikipedia.org/wiki/Subnetwork**

Copy or import from [uri.ts](./src/uri.ts#L189)

```js
const ipv4SubnetMask =
  /((255\.){3}(0|128|192|224|240|248|252|254|255))|((255\.){2}(0|128|192|224|240|248|252|254|255)\.0)|((255\.)(0|128|192|224|240|248|252|254|255)\.0\.0)|((255\.){1}(0|128|192|224|240|248|252|254|255)\.0\.0\.0)/;
```

```ts
import { ipv4SubnetMask } from "https://deno.land/x/regular-expressions/src/uri.ts";
```

| Should match      | Should not match  |
| ----------------- | ----------------- |
| `255.255.255.255` | `255.255.255.253` |
| `255.255.255.0`   |                   |
| `255.255.0.0`     |                   |
| `255.0.0.0`       |                   |
| `255.255.255.128` |                   |
| `255.255.255.192` |                   |

## ipv6

**Should match any ip v6 without protocol https://es.wikipedia.org/wiki/IPv6**

Copy or import from [uri.ts](./src/uri.ts#L263)

```js
const ipv6 = /(?:[0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}/;
```

```ts
import { ipv6 } from "https://deno.land/x/regular-expressions/src/uri.ts";
```

| Should match                              | Should not match                           |
| ----------------------------------------- | ------------------------------------------ |
| `2001:0db8:85a3:0000:0000:8a2e:0370:7334` | `:a591:dfe9:8840:aa39:f830:0224:55c8:f21b` |
| `2001:db8:85a3:0:0:8a2e:370:7334`         | `2001:0db8:85a3:0000:0000:8a2e:0370:7334:` |
| `2001:db8:85a3:8a2e:0370:7334:ff:fe00`    | `g591:dfe9:8840:aa39:f830:0224:55c8:f21b`  |
| `a591:dfe9:8840:aa39:f830:0224:55c8:f21b` | `2001:db8:85a3:0:0:8a2e:370:7334:`         |
|                                           | `2001:db8:85a3:0:8a2e:370:7334:`           |
|                                           | `::1`                                      |
|                                           | `::ffff`                                   |

## uri

**Should match any uri with any protocol, for example file://, http://,
https://, ftp://, chrome-extension://, chrome://, etc... *
https://es.wikipedia.org/wiki/Esquema_de_URI**

Copy or import from [uri.ts](./src/uri.ts#L126)

```js
const uri =
  /([\w-.]{3,}:\/\/)(www\.)?[-a-zA-Z0-9:%._\+~#=]{2,256}\.[a-z]{2,6}(:([0-9]{1,5}))?(\/[-a-zA-Z0-9:%_\+.~#?&//=]*)?/;
```

```ts
import { uri } from "https://deno.land/x/regular-expressions/src/uri.ts";
```

| Should match                            | Should not match    |
| --------------------------------------- | ------------------- |
| `https://example.com:1234`              | `//example.com`     |
| `http://example.com:1234/`              | `example.com`       |
| `any://example.com`                     | `example.com/`      |
| `ftp://example.com/`                    | `example.com/path`  |
| `ftp://example.com:1234`                | `example.com/path/` |
| `z39.50r://example.com`                 |                     |
| `https://example.com`                   |                     |
| `https://example.com/`                  |                     |
| `http://example.com/path`               |                     |
| `https://example.com/path`              |                     |
| `http://example.com/path/`              |                     |
| `https://example.com/path/`             |                     |
| `file://example.com`                    |                     |
| `file://example.com/`                   |                     |
| `file://example.com/path`               |                     |
| `file://example.com/path/`              |                     |
| `chrome-extensions://example.com/path/` |                     |
| `estrange-protocol://example.com/path/` |                     |

## uriProtocol

**Should match any valid uri protocol
https://en.wikipedia.org/wiki/Uniform_Resource_Identifier
https://es.wikipedia.org/wiki/Esquema_de_URI**

Copy or import from [uri.ts](./src/uri.ts#L310)

```js
const uriProtocol =
  /((aaa)|(aaas)|(about)|(acap)|(adiumxtra)|(afp)|(aim)|(apt)|(attachment)|(aw)|(beshare)|(bitcoin)|(bolo)|(callto)|(cap)|(chrome)|(chrome-extension)|(cid)|(content)|(crid)|(cvs)|(data)|(dav)|(dict)|(dns)|(ed2k)|(facetime)|(fax)|(feed)|(file)|(finger)|(fish)|(ftp)|(geo)|(gg)|(git)|(gizmoproject)|(go)|(gopher)|(gtalk)|(h323)|(hcp)|(http)|(https)|(iax)|(icap)|(im)|(imap)|(info)|(ipp)|(irc)|(irc6)|(ircs)|(iris)|(iris.beep)|(iris\.xpc)|(iris\.xpcs)|(iris\.lws)|(itms)|(jar)|(keyparc)|(lastfm)|(ldap)|(ldaps)|(lightning)|(magnet)|(mailto)|(maps)|(market)|(message)|(mid)|(mms)|(modem)|(ms-help)|(msnim)|(msrp)|(msrps)|(mtqp)|(mumble)|(mupdate)|(mvn)|(news)|(nfs)|(nntp)|(notes)|(opaquelocktoken)|(palm)|(paparazzi)|(platform)|(pop)|(pres)|(prospero)|(proxy)|(psyc)|(query)|(res)|(resource)|(rmi)|(rsync)|(rtmp)|(rtsp)|(secondlife)|(service)|(sftp)|(sgn)|(shttp)|(sieve)|(sip)|(sips)|(skype)|(smb)|(sms)|(snmp)|(soap\.beep)|(soap\.beeps)|(soldat)|(spotify)|(ssh)|(steam)|(svn)|(tag)|(teamspeak)|(tel)|(telnet)|(tftp)|(things)|(thismessage)|(tip)|(tv)|(udp)|(unreal)|(urn)|(ut2004)|(uuid)|(vemmi)|(ventrilo)|(view-source)|(wais)|(webcal)|(ws)|(wss)|(wtai)|(wyciwyg)|(xfire)|(xmlrpc\.beep)|(xmlrpc\.beeps)|(xmpp)|(xri)|(ymsgr)|(z39\.50r)|(z39\.50s)):/;
```

```ts
import { uriProtocol } from "https://deno.land/x/regular-expressions/src/uri.ts";
```

| Should match | Should not match                     |
| ------------ | ------------------------------------ |
| `http:`      | `http://`                            |
| `https:`     | `https`                              |
| `ftp:`       | `www.google.com`                     |
| `ssh:`       | `ftp://ftp.is.co.za/rfc/rfc1808.txt` |
| `irc:`       |                                      |
| `ircs:`      |                                      |
| `git:`       |                                      |
| `gopher:`    |                                      |
| `telnet:`    |                                      |
| `nntp:`      |                                      |
| `news:`      |                                      |
| `mailto:`    |                                      |
| `sftp:`      |                                      |
| `ldap:`      |                                      |
| `ldaps:`     |                                      |
| `webcal:`    |                                      |
| `xmpp:`      |                                      |
| `callto:`    |                                      |
| `ymsgr:`     |                                      |
| `skype:`     |                                      |
| `sip:`       |                                      |
| `sips:`      |                                      |
| `sms:`       |                                      |
| `mailto:`    |                                      |
| `msnim:`     |                                      |
| `irc:`       |                                      |
| `aim:`       |                                      |
| `gtalk:`     |                                      |
| `feed:`      |                                      |
| `sip:`       |                                      |
| `sips:`      |                                      |
| `sms:`       |                                      |
| `msnim:`     |                                      |
| `aim:`       |                                      |
| `gtalk:`     |                                      |

## url

**Should match any url with or without http/s protocol and with or without
port**

Copy or import from [uri.ts](./src/uri.ts#L4)

```js
const url =
  /((https?:)?\/\/)?(www\.)?[-a-zA-Z0-9:%._\+~#=]{2,256}\.[a-z]{2,6}(:[0-9]{1,5})?(\/[-a-zA-Z0-9:%_\+.~#?&//=]*)?/;
```

```ts
import { url } from "https://deno.land/x/regular-expressions/src/uri.ts";
```

| Should match                            | Should not match             |
| --------------------------------------- | ---------------------------- |
| `//ex4mpl3.com`                         | `https://example.com:123456` |
| `http://ex4mpl3.com`                    | `http://example.com:123456`  |
| `http://subdomain.example.com`          | `http://example.c0m`         |
| `http://sub.domain.example.com`         | `example.c0m`                |
| `http://sub.domain.numb3rs.example.com` | `example,com`                |
| `http://example.com`                    | `example_com`                |
| `https://example.com`                   |                              |
| `http://example.com/`                   |                              |
| `https://example.com/`                  |                              |
| `http://example.com/path`               |                              |
| `https://example.com/path`              |                              |
| `http://example.com/path/`              |                              |
| `https://example.com/path/subpath`      |                              |
| `http://example.com:1234`               |                              |
| `//example.com`                         |                              |
| `example.com`                           |                              |
| `example.com:80`                        |                              |
| `example.com/`                          |                              |
| `example.com/path`                      |                              |
| `example.com/path/`                     |                              |
| `//www.example.com`                     |                              |
| `sub-d0m4in.exampl3.com`                |                              |
| `http://sub-d0m4in.exampl3.com`         |                              |
| `http://example.com`                    |                              |
| `https://example.com:1`                 |                              |
| `http://example.com:80`                 |                              |
| `https://example.com:123`               |                              |
| `https://example.com:1234`              |                              |
| `https://example.com:65535`             |                              |

## urlWithPort

**Should match any url with or without http/s protocols and port
https://es.wikipedia.org/wiki/Anexo:Puertos_de_red**

Copy or import from [uri.ts](./src/uri.ts#L53)

```js
const urlWithPort =
  /((https?:)?\/\/)?(www\.)?[-a-zA-Z0-9:%._\+~#=]{2,256}\.[a-z]{2,6}(:([0-9]{1,5}))(\/[-a-zA-Z0-9:%_\+.~#?&//=]*)?/;
```

```ts
import { urlWithPort } from "https://deno.land/x/regular-expressions/src/uri.ts";
```

| Should match                | Should not match       |
| --------------------------- | ---------------------- |
| `https://example.com:0`     | `https://example.com:` |
| `http://example.com:1`      | `//example.com`        |
| `http://example.com:80`     | `example.com`          |
| `https://example.com:123`   |                        |
| `https://example.com:1234`  |                        |
| `https://example.com:65535` |                        |
| `//example.com:65535`       |                        |
| `example.com:65535`         |                        |

## urlWithProtocol

**Should match any url with http/s protocols and with or without port**

Copy or import from [uri.ts](./src/uri.ts#L76)

```js
const urlWithProtocol =
  /(https?:\/\/)(www\.)?[-a-zA-Z0-9:%._\+~#=]{2,256}\.[a-z]{2,6}(:([0-9]{1,5}))(\/[-a-zA-Z0-9:%_\+.~#?&//=]*)?/;
```

```ts
import { urlWithProtocol } from "https://deno.land/x/regular-expressions/src/uri.ts";
```

| Should match                | Should not match       |
| --------------------------- | ---------------------- |
| `https://example.com:0`     | `//example.com:65535`  |
| `http://example.com:1`      | `example.com:65535`    |
| `http://example.com:80`     | `https://example.com:` |
| `https://example.com:123`   | `//example.com`        |
| `https://example.com:1234`  | `example.com`          |
| `https://example.com:65535` |                        |

## lettersButNotH

**should match any single letter but not H.
https://www.w3.org/TR/CSS2/syndata.html#characters**

Copy or import from [example.ts](./src/example.ts#L6)

```js
const lettersButNotH = /(?![H])[a-zA-Z]/;
```

```ts
import { lettersButNotH } from "https://deno.land/x/regular-expressions/src/example.ts";
```

| Should match | Should not match |
| ------------ | ---------------- |
| `a`          | `H`              |
| `h`          | `3`              |
| `A`          | `aa`             |
| `Z`          |                  |

## email

**Allow IP as domain name: hello@154.145.68.12 does allow literal addresses
&quot;hello, how are you?&quot;@world.com allows numeric domain names after the
last &quot;.&quot; minimum 2 letters**

Copy or import from [email.ts](./src/email.ts#L12)

```js
const email =
  /[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+/;
```

```ts
import { email } from "https://deno.land/x/regular-expressions/src/email.ts";
```

| Should match            | Should not match       |
| ----------------------- | ---------------------- |
| `juan@garn.dev`         | `em\|ail@email`        |
| `email+foo@email.com`   | `email&email.com`      |
| `email+112@email.com`   | `hello@worl_d.com`     |
| `he_llo@worl.d.com`     | `he&amp;llo@world.co1` |
| `EMAIL@DOMAIN.COM`      | `.hello@wor#.co.uk`    |
| `e.m.a.il@email.com`    | `juan@@garn.dev`       |
| `email@email.uk.co`     |                        |
| `bar.ba@test.co.uk`     |                        |
| `em\|ail@email.com`     |                        |
| `hel.l-o@wor-ld.museum` |                        |
| `h1ello@123.com`        |                        |
| `hello@154.145.68.12`   |                        |

## color

**Should match any valid css color.**

Copy or import from [color.ts](./src/color.ts#L78)

```js
const color =
  /(#((([0-9a-fA-F]{1}){3,4})|(([0-9a-fA-F]{2}){3,4})))|(rgba?\(\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})(\s*,\s*0?\.[0-9])?\s*\))|(hsla?\(\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})%\s*,\s*([0-9]{1,3}%)(\s*,\s*0?\.[0-9])?\s*\))/;
```

```ts
import { color } from "https://deno.land/x/regular-expressions/src/color.ts";
```

| Should match                       | Should not match        |
| ---------------------------------- | ----------------------- |
| `#abc`                             | `#0ffcc00`              |
| `#ABC`                             | `#abcdefG`              |
| `#123`                             | `#FFG`                  |
| `#123456`                          | `FFF`                   |
| `#aAcCff`                          | `FFF`                   |
| `#1234`                            | `$FFF`                  |
| `#ffcc00`                          | `#12345`                |
| `#ffcc0033`                        | `#1234567`              |
| `#abcdefee`                        | `#123456789`            |
| `rgb(255,255,255)`                 | `#123456789a`           |
| `rgb(255,255,255,0.5)`             | `#123456789ab`          |
| `rgba(255,255,255,0.1)`            | `rgba(2 55,255,255)`    |
| `rgba(255,255,255)`                | `rgbc(300,0,0)`         |
| `rgba( 255  ,   255     ,  255  )` | `rgb(256,25 5,255,0.5)` |
| `rgb(999,0,0)`                     | `rg(256,255,255,0.5)`   |
| `hsl(0,100%,50%)`                  | `(256,255,255,0.5)`     |
| `hsl(0,100%,50%,0.5)`              | `hsl(24,50%,200)`       |
| `hsla(0,100%,50%,0.1)`             | `hsla(2 55,255,255)`    |
| `hsla(0,100%,50%)`                 | `hslc(300,0%,0%)`       |
| `hsla( 0  ,  100%       ,  50%  )` | `hsl(256,25 5,255,0.5)` |
| `hsl(24,50%,200%)`                 | `hs(256,255,255,0.5)`   |
|                                    | `(256,255,255,0.5)`     |

## colorHex

**Should match any valid css hex color. (#ffcc00, #abc, or #ffcc0033)**

Copy or import from [color.ts](./src/color.ts#L4)

```js
const colorHex = /#((([0-9a-fA-F]{1}){3,4})|(([0-9a-fA-F]{2}){3,4}))/;
```

```ts
import { colorHex } from "https://deno.land/x/regular-expressions/src/color.ts";
```

| Should match | Should not match |
| ------------ | ---------------- |
| `#abc`       | `#0ffcc00`       |
| `#ABC`       | `#abcdefG`       |
| `#123`       | `#FFG`           |
| `#123456`    | `FFF`            |
| `#aAcCff`    | `FFF`            |
| `#1234`      | `$FFF`           |
| `#ffcc00`    | `#12345`         |
| `#ffcc0033`  | `#1234567`       |
| `#abcdefee`  | `#123456789`     |
|              | `#123456789a`    |
|              | `#123456789ab`   |

## colorHsl

**Should match any valid css hsl color. (hsl(0,100%,50%),
hsla(0,100%,50%,0.5))**

Copy or import from [color.ts](./src/color.ts#L56)

```js
const colorHsl =
  /hsla?\(\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})%\s*,\s*([0-9]{1,3}%)(\s*,\s*0?\.[0-9])?\s*\)/;
```

```ts
import { colorHsl } from "https://deno.land/x/regular-expressions/src/color.ts";
```

| Should match                       | Should not match        |
| ---------------------------------- | ----------------------- |
| `hsl(0,100%,50%)`                  | `hsl(24,50%,200)`       |
| `hsl(0,100%,50%,0.5)`              | `hsla(2 55,255,255)`    |
| `hsla(0,100%,50%,0.1)`             | `hslc(300,0%,0%)`       |
| `hsla(0,100%,50%)`                 | `hsl(256,25 5,255,0.5)` |
| `hsla( 0  ,  100%       ,  50%  )` | `hs(256,255,255,0.5)`   |
| `hsl(24,50%,200%)`                 | `(256,255,255,0.5)`     |

## colorRgb

**Should match any valid css rgb o rgba color. (rgb(255,255,255),
rgba(255,255,255,0.5))**

Copy or import from [color.ts](./src/color.ts#L33)

```js
const colorRgb =
  /rgba?\(\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})(\s*,\s*0?\.[0-9])?\s*\)/;
```

```ts
import { colorRgb } from "https://deno.land/x/regular-expressions/src/color.ts";
```

| Should match                       | Should not match        |
| ---------------------------------- | ----------------------- |
| `rgb(255,255,255)`                 | `rgba(2 55,255,255)`    |
| `rgb(255,255,255,0.5)`             | `rgbc(300,0,0)`         |
| `rgba(255,255,255,0.1)`            | `rgb(256,25 5,255,0.5)` |
| `rgba(255,255,255)`                | `rg(256,255,255,0.5)`   |
| `rgba( 255  ,   255     ,  255  )` | `(256,255,255,0.5)`     |
| `rgb(999,0,0)`                     |                         |

## base64

**Should match any base64 string. https://en.wikipedia.org/wiki/Base64**

Copy or import from [number.ts](./src/number.ts#L204)

```js
const base64 = /[A-Za-z0-9+/]+={0,2}/;
```

```ts
import { base64 } from "https://deno.land/x/regular-expressions/src/number.ts";
```

| Should match                                                                                                                               | Should not match |
| ------------------------------------------------------------------------------------------------------------------------------------------ | ---------------- |
| `Zm9vYmFy`                                                                                                                                 | `!@#$%^&*()_+`   |
| `MTIzNDU2Nzc4OTBxd2VlcnR5dWlvcGFzZGZnaGprbPF6eGN2Ym5tUVdFRVJUWVVJT1BBU0RGR0hKS0zRWlhDVkJOTSsvfEAjfr1+rHtbXX0KIb8/W11fOjssLjw+KCkkJSZeKg==` |                  |

## number

**Should match any valid JS number but not NaN, Infinity or -Infinity.**

Copy or import from [number.ts](./src/number.ts#L5)

```js
const number = /(?:[-+]?(?:0|[1-9_][0-9_]*)(?:\.[0-9_]*)?(?:[eE][-+]?[0-9]+)?)/;
```

```ts
import { number } from "https://deno.land/x/regular-expressions/src/number.ts";
```

| Should match | Should not match |
| ------------ | ---------------- |
| `1_000_000`  | `0123`           |
| `1_000.45`   | `123a`           |
| `123.45`     | `123e`           |
| `0.123`      | `123e0.1`        |
| `1e4`        | `a123`           |
| `1E4`        | `a12b3`          |
| `0.123e4`    | `NaN`            |
| `0.123E4`    | `Infinity`       |
| `0.123e-4`   |                  |
| `0.123e+4`   |                  |
| `123`        |                  |
| `-123`       |                  |
| `+123`       |                  |

## numberBigInt

**Should match any BigInt
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/BigInt**

Copy or import from [number.ts](./src/number.ts#L370)

```js
const numberBigInt = /[+-]?(0|[1-9][0-9]*)n/;
```

```ts
import { numberBigInt } from "https://deno.land/x/regular-expressions/src/number.ts";
```

| Should match  | Should not match |
| ------------- | ---------------- |
| `0n`          | `00n`            |
| `+1n`         | `01n`            |
| `-1n`         | `10`             |
| `20n`         | `200`            |
| `300n`        |                  |
| `9999999999n` |                  |

## numberBinary

**Should match any binary number, signed or unsigned, but not integers or
exponential.**

Copy or import from [number.ts](./src/number.ts#L173)

```js
const numberBinary = /([+-])?0[bB][01]+/;
```

```ts
import { numberBinary } from "https://deno.land/x/regular-expressions/src/number.ts";
```

| Should match    | Should not match |
| --------------- | ---------------- |
| `0b101`         | `0b0abc`         |
| `0b0`           | `0babc`          |
| `+0b1`          | `0`              |
| `-0b1`          | `0b`             |
| `0B0`           | `0b101.45`       |
| `0b00001111001` | `0b101.45e4`     |
| `0b01111000`    | `0b101.45e-4`    |
|                 | `0b101.45e+4`    |
|                 | `123`            |
|                 | `0b101.45`       |
|                 | `0b101.45e4.5`   |
|                 | `0b101.45e-4.5`  |
|                 | `0b101.45e+4.5`  |

## numberExponential

**Should match any exponential number.**

Copy or import from [number.ts](./src/number.ts#L84)

```js
const numberExponential = /([-+]?([0-9]+))?(\.([0-9]+))?[eE]([-+]?([0-9]+))/;
```

```ts
import { numberExponential } from "https://deno.land/x/regular-expressions/src/number.ts";
```

| Should match | Should not match |
| ------------ | ---------------- |
| `123e4`      | `123.45`         |
| `0.123e4`    | `.e4`            |
| `.1e4`       | `0.123`          |
| `1e4`        | `0.123a`         |
| `1E4`        | `123`            |
| `3E2`        | `1e`             |
| `3E-2`       | `0.123e4.5`      |
| `12.3456e-4` | `0.123e-4.5`     |
| `0.123e-4`   | `0.123e+4.5`     |
| `0.123e+4`   |                  |

## numberFloat

**Should match any float number, signed or unsigned, but not integers or
exponential.**

Copy or import from [number.ts](./src/number.ts#L58)

```js
const numberFloat = /([-+]?([0-9]+))?\.([0-9])+/;
```

```ts
import { numberFloat } from "https://deno.land/x/regular-expressions/src/number.ts";
```

| Should match | Should not match |
| ------------ | ---------------- |
| `123.45`     | `7`              |
| `0.123`      | `7.`             |
| `1.0`        | `123`            |
| `0.0`        | `1e4`            |
| `.9`         | `0.123e4`        |
|              | `0.123e-4`       |
|              | `0.123e+4`       |
|              | `123.45.67`      |
|              | `0.123e`         |
|              | `0.123e4.5`      |
|              | `0.123e-4.5`     |
|              | `0.123e+4.5`     |

## numberHex

**Should match any number hexadecimal, signed or unsigned**

Copy or import from [number.ts](./src/number.ts#L114)

```js
const numberHex = /(([+-])?0[xX][0-9a-fA-F]+)/;
```

```ts
import { numberHex } from "https://deno.land/x/regular-expressions/src/number.ts";
```

| Should match | Should not match |
| ------------ | ---------------- |
| `0x123`      | `*0x1`           |
| `0x0`        | `123`            |
| `0X1`        | `0xG`            |
| `+0x1`       | `0x1z`           |
| `-0x1`       | `0x123.45`       |
| `0xf`        | `0x123.45e4`     |
| `0xF`        | `0x123.45e-4`    |
| `0xabcdef`   | `0x123.45e+4`    |
| `0xabc`      |                  |

## numberInteger

**Should match any number signed integer or unsigned integer.**

Copy or import from [number.ts](./src/number.ts#L36)

```js
const numberInteger = /(?:[-+]?(?:0|[1-9][0-9]*))/;
```

```ts
import { numberInteger } from "https://deno.land/x/regular-expressions/src/number.ts";
```

| Should match | Should not match |
| ------------ | ---------------- |
| `0`          | `00`             |
| `123`        | `000`            |
| `-999`       | `123.45`         |
| `+6`         | `0.123`          |
|              | `1e4`            |
|              | `0.123e4`        |
|              | `0.123e-4`       |
|              | `0.123e+4`       |

## numberOctal

**Should match any number octal, signed or unsigned, but not integers or
exponential.**

Copy or import from [number.ts](./src/number.ts#L141)

```js
const numberOctal = /([+-])?(0o?[0-7]+)/;
```

```ts
import { numberOctal } from "https://deno.land/x/regular-expressions/src/number.ts";
```

| Should match | Should not match |
| ------------ | ---------------- |
| `0123`       | `0`              |
| `07`         | `058`            |
| `0o51`       | `0o58`           |
| `0o7`        | `0O7`            |
| `+0o7`       | `7`              |
| `-0o7`       | `08`             |
|              | `09`             |
|              | `abc`            |
|              | `0abc`           |
|              | `123`            |
|              | `0o123.45`       |
|              | `0123.45`        |
|              | `0123.45e4`      |
|              | `0123.45e-4`     |
|              | `0123.45e+4`     |

## romanNumeral

**Should match any roman numeral https://en.wikipedia.org/wiki/Roman_numerals**

Copy or import from [number.ts](./src/number.ts#L220)

```js
const romanNumeral = /M{0,4}(CM|CD|D?C{0,3})(XC|XL|L?X{0,3})(IX|IV|V?I{0,3})/;
```

```ts
import { romanNumeral } from "https://deno.land/x/regular-expressions/src/number.ts";
```

| Should match | Should not match |
| ------------ | ---------------- |
| `I`          | `iii`            |
| `II`         | `IIV`            |
| `III`        | `IIII`           |
| `IV`         | `IIIII`          |
| `V`          | `IIIIII`         |
| `VI`         | `IIIIIII`        |
| `VII`        | `lxx`            |
| `VIII`       | `lxxi`           |
| `IX`         | `lxxii`          |
| `X`          | `lxxiii`         |
| `XI`         | `lxxiv`          |
| `XII`        | `lxxv`           |
| `XIII`       | `lxxvi`          |
| `XIV`        | `lxxvii`         |
| `XV`         | `lxxviii`        |
| `XVI`        | `asdsdf`         |
| `XVII`       |                  |
| `XVIII`      |                  |
| `XIX`        |                  |
| `XX`         |                  |
| `XXI`        |                  |
| `XXII`       |                  |
| `XXIII`      |                  |
| `XXIV`       |                  |
| `XXV`        |                  |
| `XXVI`       |                  |
| `XXVII`      |                  |
| `XXVIII`     |                  |
| `XXIX`       |                  |
| `XXX`        |                  |
| `XXXI`       |                  |
| `XXXII`      |                  |
| `XXXIII`     |                  |
| `XXXIV`      |                  |
| `XXXV`       |                  |
| `XXXVI`      |                  |
| `XXXVII`     |                  |
| `XXXVIII`    |                  |
| `XXXIX`      |                  |
| `XL`         |                  |
| `XLI`        |                  |
| `XLII`       |                  |
| `XLIII`      |                  |
| `XLIV`       |                  |
| `XLV`        |                  |
| `XLVI`       |                  |
| `XLVII`      |                  |
| `XLVIII`     |                  |
| `XLIX`       |                  |
| `L`          |                  |
| `LI`         |                  |
| `LII`        |                  |
| `LIII`       |                  |
| `LIV`        |                  |
| `LV`         |                  |
| `LVI`        |                  |
| `LVII`       |                  |
| `LVIII`      |                  |
| `LIX`        |                  |
| `LX`         |                  |
| `LXI`        |                  |
| `LXII`       |                  |
| `LXIII`      |                  |
| `LXIV`       |                  |
| `LXV`        |                  |
| `LXVI`       |                  |
| `LXVII`      |                  |
| `LXVIII`     |                  |
| `LXIX`       |                  |
| `LXX`        |                  |
| `LXXI`       |                  |
| `LXXII`      |                  |
| `LXXIII`     |                  |
| `LXXIV`      |                  |
| `LXXV`       |                  |
| `LXXVI`      |                  |
| `LXXVII`     |                  |
| `LXXVIII`    |                  |
| `LXXIX`      |                  |
| `LXXX`       |                  |
| `LXXXI`      |                  |
| `LXXXII`     |                  |
| `LXXXIII`    |                  |
| `LXXXIV`     |                  |
| `LXXXV`      |                  |
| `LXXXVI`     |                  |
| `LXXXVII`    |                  |
| `LXXXVIII`   |                  |
| `LXXXIX`     |                  |
| `C`          |                  |
| `CI`         |                  |
| `CII`        |                  |
| `CIII`       |                  |
| `CIV`        |                  |
| `CV`         |                  |
| `CVI`        |                  |
| `CVII`       |                  |
| `D`          |                  |
| `DI`         |                  |
| `DII`        |                  |
| `DIII`       |                  |
| `DIV`        |                  |
| `DV`         |                  |
| `DVI`        |                  |
| `DVII`       |                  |
| `M`          |                  |
| `MI`         |                  |
| `MII`        |                  |
| `MIII`       |                  |
| `MIV`        |                  |
| `MV`         |                  |
| `MVI`        |                  |
| `MVII`       |                  |
| `MVIII`      |                  |
| `MIX`        |                  |
| `MM`         |                  |
| `MMM`        |                  |
| `MMMM`       |                  |

## classDefinition

**Should match a js class definition**

Copy or import from [js_eval.ts](./src/js_eval.ts#L259)

```js
const classDefinition =
  /class\s+((?!(\b(?:break|case|catch|class|const|continue|debugger|default|delete|do|else|export|extends|finally|for|function|if|import|in|instanceof|new|return|super|switch|this|throw|try|typeof|var|void|while|with|yield|implements|interface|let|package|private|protected|public|static|yield|enum|await|abstract|boolean|byte|char|double|final|float|goto|int|long|native|short|synchronized|throws|transient|volatile|null|true|false)\b))([a-zA-Z$_][a-zA-Z0-9$_]*))\s*(extends\s+((?!(\b(?:break|case|catch|class|const|continue|debugger|default|delete|do|else|export|extends|finally|for|function|if|import|in|instanceof|new|return|super|switch|this|throw|try|typeof|var|void|while|with|yield|implements|interface|let|package|private|protected|public|static|yield|enum|await|abstract|boolean|byte|char|double|final|float|goto|int|long|native|short|synchronized|throws|transient|volatile|null|true|false)\b))([a-zA-Z$_][a-zA-Z0-9$_]*)))?\s*\{.*\}/;
```

```ts
import { classDefinition } from "https://deno.land/x/regular-expressions/src/js_eval.ts";
```

| Should match                                                           | Should not match            |
| ---------------------------------------------------------------------- | --------------------------- |
| `class A{ }`                                                           | `class 1foo{}`              |
| `class A{}`                                                            | `class foo extends 3hola{}` |
| `class A { }`                                                          | `class A extends 1{ }`      |
| `class _ { }`                                                          | `class while {}`            |
| `class $ { }`                                                          | `class foo extends if{}`    |
| `class A extends B { }`                                                | `classB{}`                  |
| `class A extends B{ }`                                                 | `class MyClass`             |
| `class A extends B { constructor() { } }`                              | `class MyClass {`           |
| `class A extends B { constructor() { super(); } }`                     | `CLASS A {}`                |
| `class A extends B { constructor() { super(); } foo() { } }`           | `class A extendsB{ }`       |
| `class A extends B { constructor() { super(); } foo() { } bar() { } }` |                             |

## functionAnonymous

**Should match a js anonymous classic function definition**

Copy or import from [js_eval.ts](./src/js_eval.ts#L120)

```js
const functionAnonymous = /function(?<noName>\s*)\(.*\)\s*\{(.*)\}/;
```

```ts
import { functionAnonymous } from "https://deno.land/x/regular-expressions/src/js_eval.ts";
```

| Should match                            | Should not match             |
| --------------------------------------- | ---------------------------- |
| `function(){}`                          | `function name(){return 2;}` |
| `function (...args) { }`                | `func(){}`                   |
| `function (a1,a2,a3) { }`               | `function(a1,a2,a3)`         |
| `function() {return 1;}`                |                              |
| `function (){ if(true) { return 1; } }` |                              |

## functionArrow

**Should match a js arrow function definition**

Copy or import from [js_eval.ts](./src/js_eval.ts#L168)

```js
const functionArrow = /([a-zA-Z0-9-$]+)|(\(.*\))\s*=>\s*(.*)/;
```

```ts
import { functionArrow } from "https://deno.land/x/regular-expressions/src/js_eval.ts";
```

| Should match                | Should not match                        |
| --------------------------- | --------------------------------------- |
| `A => A`                    | `A,B => A`                              |
| `() => 42`                  | `functionname () {  return 'hello'; }`  |
| `(a,b,c) => 42`             | `function () {}`                        |
| `(...args) => 42`           | `function myFunction(param1, param2) {` |
| `() => {}`                  |                                         |
| `() => { return 'hello'; }` |                                         |

## functionAsync

**Should match a js async function definition**

Copy or import from [js_eval.ts](./src/js_eval.ts#L187)

```js
const functionAsync =
  /async\s+((function(?<noName>\s*)\(.*\)\s*\{(.*)\})|(function\s+(?<name>(((?!(\b(?:break|case|catch|class|const|continue|debugger|default|delete|do|else|export|extends|finally|for|function|if|import|in|instanceof|new|return|super|switch|this|throw|try|typeof|var|void|while|with|yield|implements|interface|let|package|private|protected|public|static|yield|enum|await|abstract|boolean|byte|char|double|final|float|goto|int|long|native|short|synchronized|throws|transient|volatile|null|true|false)\b))([a-zA-Z$_][a-zA-Z0-9$_]*))))\s*\(.*\)\s*\{(.*)\})|(([a-zA-Z0-9-$]+)|(\(.*\))\s*=>\s*(.*)))/;
```

```ts
import { functionAsync } from "https://deno.land/x/regular-expressions/src/js_eval.ts";
```

| Should match                                  | Should not match            |
| --------------------------------------------- | --------------------------- |
| `async function(){}`                          | `async func(){}`            |
| `async function named() {}`                   | `async functionA(a1,a2,a3)` |
| `async function (...args) { }`                |                             |
| `async function (a1,a2,a3) { }`               |                             |
| `async function() {return 1;}`                |                             |
| `async function (){ if(true) { return 1; } }` |                             |
| `async function name(){return 2;}`            |                             |
| `async () => {return 2;}`                     |                             |

## functionAsyncGenerator

**Should match a js async generator function. Only matches the syntax of
`async function*` not any other way of creating an async generator or iterator.
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function**

Copy or import from [js_eval.ts](./src/js_eval.ts#L234)

```js
const functionAsyncGenerator =
  /async\s+((function\*(?<noName>\s*)\(.*\)\s*\{(.*)\})|(function\*\s+(?<name>(((?!(\b(?:break|case|catch|class|const|continue|debugger|default|delete|do|else|export|extends|finally|for|function|if|import|in|instanceof|new|return|super|switch|this|throw|try|typeof|var|void|while|with|yield|implements|interface|let|package|private|protected|public|static|yield|enum|await|abstract|boolean|byte|char|double|final|float|goto|int|long|native|short|synchronized|throws|transient|volatile|null|true|false)\b))([a-zA-Z$_][a-zA-Z0-9$_]*))))\s*\(.*\)\s*\{(.*)\}))/;
```

```ts
import { functionAsyncGenerator } from "https://deno.land/x/regular-expressions/src/js_eval.ts";
```

| Should match                                               | Should not match           |
| ---------------------------------------------------------- | -------------------------- |
| `async function* (){}`                                     | `function (){}`            |
| `async function* named() {}`                               | `async function (){}`      |
| `async function* (...args) { }`                            | `function* while() {}`     |
| `async function* named(a1,a2,a3) { yield 42; return 43; }` | `async function (){}`      |
|                                                            | `function named(a1,a2,a3)` |

## functionClassic

**Should match a js classic function definition**

Copy or import from [js_eval.ts](./src/js_eval.ts#L138)

```js
const functionClassic =
  /function\s+(?<name>(((?!(\b(?:break|case|catch|class|const|continue|debugger|default|delete|do|else|export|extends|finally|for|function|if|import|in|instanceof|new|return|super|switch|this|throw|try|typeof|var|void|while|with|yield|implements|interface|let|package|private|protected|public|static|yield|enum|await|abstract|boolean|byte|char|double|final|float|goto|int|long|native|short|synchronized|throws|transient|volatile|null|true|false)\b))([a-zA-Z$_][a-zA-Z0-9$_]*))))\s*\(.*\)\s*\{(.*)\}/;
```

```ts
import { functionClassic } from "https://deno.land/x/regular-expressions/src/js_eval.ts";
```

| Should match                                  | Should not match                        |
| --------------------------------------------- | --------------------------------------- |
| `function name(param1, param2) { }`           | `function while() {}`                   |
| `function name() {  }`                        | `function function() { }`               |
| `function name () {}`                         | `functionname () {  return 'hello'; }`  |
| `function name         () {}`                 | `function name     foo    () {}`        |
| `function name() {  return 'hello'; }`        | `function () {}`                        |
| `function name() {  if(true) { return 42 } }` | `() => {}`                              |
|                                               | `function myFunction(param1, param2) {` |

## functionGenerator

**Should match a js generator function definition**

Copy or import from [js_eval.ts](./src/js_eval.ts#L209)

```js
const functionGenerator =
  /((function\*(?<noName>\s*)\(.*\)\s*\{(.*)\})|(function\*\s+(?<name>(((?!(\b(?:break|case|catch|class|const|continue|debugger|default|delete|do|else|export|extends|finally|for|function|if|import|in|instanceof|new|return|super|switch|this|throw|try|typeof|var|void|while|with|yield|implements|interface|let|package|private|protected|public|static|yield|enum|await|abstract|boolean|byte|char|double|final|float|goto|int|long|native|short|synchronized|throws|transient|volatile|null|true|false)\b))([a-zA-Z$_][a-zA-Z0-9$_]*))))\s*\(.*\)\s*\{(.*)\}))/;
```

```ts
import { functionGenerator } from "https://deno.land/x/regular-expressions/src/js_eval.ts";
```

| Should match              | Should not match                  |
| ------------------------- | --------------------------------- |
| `function*(){}`           | `function (){}`                   |
| `function* named() {}`    | `async function (){}`             |
| `function* (...args) { }` | `function* while() {}`            |
|                           | `async function* (){}`            |
|                           | `function named(a1,a2,a3)`        |
|                           | `async function* named(a1,a2,a3)` |

## globalScope

**Should match any global variable**

Copy or import from [js_eval.ts](./src/js_eval.ts#L565)

```js
const globalScope =
  /Deno|queueMicrotask|dispatchEvent|addEventListener|removeEventListener|AbortSignal|AbortController|atob|btoa|clearInterval|clearTimeout|crypto|fetch|performance|setInterval|setTimeout|structuredClone|location|window|self|navigator|close|closed|alert|confirm|prompt|localStorage|sessionStorage|onload|onunload|global|clearImmediate|setImmediate|document|name|customElements|history|locationbar|menubar|personalbar|scrollbars|statusbar|toolbar|status|frames|length|top|opener|parent|frameElement|origin|external|screen|innerWidth|innerHeight|scrollX|pageXOffset|scrollY|pageYOffset|visualViewport|screenX|screenY|outerWidth|outerHeight|devicePixelRatio|clientInformation|screenLeft|screenTop|defaultStatus|defaultstatus|styleMedia|onsearch|isSecureContext|onappinstalled|onbeforeinstallprompt|indexedDB|webkitStorageInfo|onbeforexrselect|onabort|onblur|oncancel|oncanplay|oncanplaythrough|onchange|onclick|onclose|oncontextmenu|oncuechange|ondblclick|ondrag|ondragend|ondragenter|ondragleave|ondragover|ondragstart|ondrop|ondurationchange|onemptied|onended|onerror|onfocus|onformdata|oninput|oninvalid|onkeydown|onkeypress|onkeyup|onloadeddata|onloadedmetadata|onloadstart|onmousedown|onmouseenter|onmouseleave|onmousemove|onmouseout|onmouseover|onmouseup|onmousewheel|onpause|onplay|onplaying|onprogress|onratechange|onreset|onresize|onscroll|onsecuritypolicyviolation|onseeked|onseeking|onselect|onslotchange|onstalled|onsubmit|onsuspend|ontimeupdate|ontoggle|onvolumechange|onwaiting|onwebkitanimationend|onwebkitanimationiteration|onwebkitanimationstart|onwebkittransitionend|onwheel|onauxclick|ongotpointercapture|onlostpointercapture|onpointerdown|onpointermove|onpointerup|onpointercancel|onpointerover|onpointerout|onpointerenter|onpointerleave|onselectstart|onselectionchange|onanimationend|onanimationiteration|onanimationstart|ontransitionrun|ontransitionstart|ontransitionend|ontransitioncancel|onafterprint|onbeforeprint|onbeforeunload|onhashchange|onlanguagechange|onmessage|onmessageerror|onoffline|ononline|onpagehide|onpageshow|onpopstate|onrejectionhandled|onstorage|onunhandledrejection|blur|cancelAnimationFrame|cancelIdleCallback|captureEvents|createImageBitmap|find|focus|getComputedStyle|getSelection|matchMedia|moveBy|moveTo|open|postMessage|print|releaseEvents|reportError|requestAnimationFrame|requestIdleCallback|resizeBy|resizeTo|scroll|scrollBy|scrollTo|stop|webkitCancelAnimationFrame|webkitRequestAnimationFrame|chrome|caches|cookieStore|ondevicemotion|ondeviceorientation|ondeviceorientationabsolute|oncontextlost|oncontextrestored|showDirectoryPicker|showOpenFilePicker|showSaveFilePicker|originAgentCluster|trustedTypes|speechSynthesis|onpointerrawupdate|crossOriginIsolated|scheduler|openDatabase|webkitRequestFileSystem|webkitResolveLocalFileSystemURL|console/;
```

```ts
import { globalScope } from "https://deno.land/x/regular-expressions/src/js_eval.ts";
```

| Should match | Should not match |
| ------------ | ---------------- |
| `Deno`       | `DENO`           |
| `fetch`      | `fETCH`          |
| `window`     | `Window`         |
| `global`     | `Global`         |

## identifierNames

**Should match a valid js variable/function/class name *
https://developer.mozilla.org/en-US/docs/Glossary/Identifier**

Copy or import from [js_eval.ts](./src/js_eval.ts#L87)

```js
const identifierNames =
  /((?!(\b(?:break|case|catch|class|const|continue|debugger|default|delete|do|else|export|extends|finally|for|function|if|import|in|instanceof|new|return|super|switch|this|throw|try|typeof|var|void|while|with|yield|implements|interface|let|package|private|protected|public|static|yield|enum|await|abstract|boolean|byte|char|double|final|float|goto|int|long|native|short|synchronized|throws|transient|volatile|null|true|false)\b))([a-zA-Z$_][a-zA-Z0-9$_]*))/;
```

```ts
import { identifierNames } from "https://deno.land/x/regular-expressions/src/js_eval.ts";
```

| Should match | Should not match  |
| ------------ | ----------------- |
| `a`          | `1`               |
| `Z`          | `1a`              |
| `FOO`        | `name with space` |
| `a1`         | `a-1a`            |
| `a_9`        | `b%`              |
| `_10`        | `while`           |
| `$1`         | `do`              |
| `$H`         | `if`              |
| `$`          | `in`              |
| `whileDo`    | `for`             |
| `_`          | `let`             |

## reservedWords

**Should match a js reserved word
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Lexical_grammar#keywords**

Copy or import from [js_eval.ts](./src/js_eval.ts#L7)

```js
const reservedWords =
  /(\b(?:break|case|catch|class|const|continue|debugger|default|delete|do|else|export|extends|finally|for|function|if|import|in|instanceof|new|return|super|switch|this|throw|try|typeof|var|void|while|with|yield|implements|interface|let|package|private|protected|public|static|yield|enum|await|abstract|boolean|byte|char|double|final|float|goto|int|long|native|short|synchronized|throws|transient|volatile|null|true|false)\b)/;
```

```ts
import { reservedWords } from "https://deno.land/x/regular-expressions/src/js_eval.ts";
```

| Should match   | Should not match |
| -------------- | ---------------- |
| `break`        | `BREAK`          |
| `case`         | `CASE`           |
| `catch`        | `CATCH`          |
| `class`        | `CLASS`          |
| `const`        | `CONST`          |
| `continue`     | `CONTINUE`       |
| `debugger`     | `DEBUGGER`       |
| `default`      | `DEFAULT`        |
| `delete`       | `DELETE`         |
| `do`           | `DO`             |
| `else`         | `ELSE`           |
| `export`       | `EXPORT`         |
| `extends`      | `EXTENDS`        |
| `finally`      | `FINALLY`        |
| `for`          | `FOR`            |
| `function`     | `FUNCTION`       |
| `if`           | `IF`             |
| `import`       | `IMPORT`         |
| `in`           | `IN`             |
| `instanceof`   | `INSTANCEOF`     |
| `new`          | `NEW`            |
| `return`       | `RETURN`         |
| `super`        | `SUPER`          |
| `switch`       | `SWITCH`         |
| `this`         | `THIS`           |
| `throw`        | `THROW`          |
| `try`          | `TRY`            |
| `typeof`       | `TYPEOF`         |
| `var`          | `VAR`            |
| `void`         | `VOID`           |
| `while`        | `WHILE`          |
| `with`         | `WITH`           |
| `yield`        | `YIELD`          |
| `implements`   | `IMPLEMENTS`     |
| `interface`    | `INTERFACE`      |
| `let`          | `LET`            |
| `package`      | `PACKAGE`        |
| `private`      | `PRIVATE`        |
| `protected`    | `PROTECTED`      |
| `public`       | `PUBLIC`         |
| `static`       | `STATIC`         |
| `yield`        | `YIELD`          |
| `enum`         | `ENUM`           |
| `await`        | `AWAIT`          |
| `abstract`     | `ABSTRACT`       |
| `boolean`      | `BOOLEAN`        |
| `byte`         | `BYTE`           |
| `char`         | `CHAR`           |
| `double`       | `DOUBLE`         |
| `final`        | `FINAL`          |
| `float`        | `FLOAT`          |
| `goto`         | `GOTO`           |
| `int`          | `INT`            |
| `long`         | `LONG`           |
| `native`       | `NATIVE`         |
| `short`        | `SHORT`          |
| `synchronized` | `SYNCHRONIZED`   |
| `throws`       | `THROWS`         |
| `transient`    | `TRANSIENT`      |
| `volatile`     | `VOLATILE`       |
| `null`         | `NULL`           |
| `true`         | `TRUE`           |
| `false`        | `FALSE`          |
