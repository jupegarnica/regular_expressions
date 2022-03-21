## camelCase

Should match  camelCase string

at: [case.ts](./src/case.ts:5)

Should match:
 - camelCase
- camelCase2
- camelCase3

Should not match:
 - PascalCase
- kebab-case
- snake_case

```js
/((?![A-Z])[a-zA-Z0-9]+)+/
```

## constantCase

Should match  CONSTANT_CASE string

at: [case.ts](./src/case.ts:90)

Should match:
 - CONSTANT_CASE2
- CONSTANT

Should not match:
 - PascalCase
- camelCase
- kebab-case
- snake_case
- CONSTANT-CASE
- CONSTANT_CASE_
- _CONSTANT_CASE
- CONSTANT_CAse

```js
/([A-Z0-9]+)(_[A-Z0-9]+)?/
```

## kebabCase

Should match  kebab-case string

at: [case.ts](./src/case.ts:23)

Should match:
 - kebab-case
- kebab-case2
- kebab-case3

Should not match:
 - PascalCase
- camelCase
- no kebab case
- snake_case
- -kebab-case
- kebab-case-
- kebab--case
- kebab-CAse
- KEBAB-CASE

```js
/((?!-)([a-z0-9]+)(-[a-z0-9])?)+/
```

## pascalCase

Should match  PascalCase string

at: [case.ts](./src/case.ts:70)

Should match:
 - PascalCase
- Pascal
- PascalCase2

Should not match:
 - PascalCAse3
- PAscalCase3
- camelCase
- kebab-case
- snake_case

```js
/([A-Z][a-z0-9]+)+/
```

## snakeCase

Should match  snake_case string

at: [case.ts](./src/case.ts:46)

Should match:
 - snake_case
- snake_case2
- snake_case3

Should not match:
 - PascalCase
- camelCase
- no snake case
- no-snake-case
- kebab-case
- _snake_case
- snake_case_
- snake__case
- snake_CAse
- SNAKE_CASE

```js
/((?!_)([a-z0-9]+)(_[a-z0-9])?)+/
```

## hostname

Should match any url hostname (no protocol, no port, no path)

at: [uri.ts](./src/uri.ts:98)

Should match:
 - example.com
- sub.example.com
- www.exampl3.com

Should not match:
 - example.com/
- example.com:1234
- example.com:1234/
- example.com/path
- example.com/path/
- //example.com
- http://example.com:1234
- https://example.com
- http://example.com/
- https://example.com/
- http://example.com/path
- https://example.com/path
- http://example.com/path/
- https://example.com/path/

```js
/[-a-zA-Z0-9:%._\+~#=]{2,256}\.[a-z]{2,6}/
```

## iPv4Private

Should match any private ip v4

at: [uri.ts](./src/uri.ts:287)

Should match:
 - 10.196.0.1
- 127.196.100.1
- 192.168.1.0
- 192.168.123.134
- 192.168.0.1

Should not match:
 - 156.10.3.1
- 127.196.300.1
- 139.47.8.243

```js
/(?:(?:10|127)\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?))|(?:(?:169\.254|192\.168)\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?))|(?:172\.(?:1[6-9]|2[0-9]|3[01]|4[0-9]|5[0-9])\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?))/
```

## ipv4

Should match any ip v4 without protocol, no any mask of subnet

at: [uri.ts](./src/uri.ts:162)

Should match:
 - 192.168.1.0
- 192.168.1.1
- 10.123.3.234
- 254.254.254.254
- 0.0.0.0
- 255.0.0.0
- 255.255.0.0
- 255.255.255.0
- 255.255.255.255

Should not match:
 - 254.254.254.254.254
- 1.1.1.1.1
- 1.1.1
- 192.168.A.0
- 192.168.1.b

```js
/((25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)/
```

## ipv4CIDR

Should match any ipv4 CIDR notation (subnet) * https://en.wikipedia.org/wiki/Classless_Inter-Domain_Routing

at: [uri.ts](./src/uri.ts:209)

Should match:
 - 192.168.100.1/24
- 192.168.0.1/25
- 192.168.254.1/26
- 0.0.0.0/0
- 10.120.192.2/32
- 10.120.192.2/31
- 10.120.192.2/30
- 10.120.192.2/29
- 10.120.192.2/28
- 10.120.192.2/27
- 10.120.192.2/26
- 10.120.192.2/25
- 10.120.192.0/24
- 10.120.192.0/23
- 10.120.192.0/22
- 10.120.192.0/21
- 10.120.192.0/20
- 10.120.192.0/19
- 10.120.192.0/18
- 10.120.192.0/17
- 10.120.0.0/16
- 10.120.0.0/15
- 10.120.0.0/14
- 10.120.0.0/13
- 10.120.0.0/12
- 10.120.0.0/11
- 10.120.0.0/10
- 10.120.0.0/9
- 10.0.0.0/8
- 10.0.0.0/7
- 10.0.0.0/6
- 10.0.0.0/5
- 10.0.0.0/4
- 10.0.0.0/3
- 10.0.0.0/2
- 10.0.0.0/1

Should not match:
 - 192.168.100.1/33
- 0.0.0.0/90

```js
/(([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])\.){3}([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])(\/([0-9]|[1-2][0-9]|3[0-2]))/
```

## ipv4SubnetMask

Should match any subnet mask * https://en.wikipedia.org/wiki/Subnetwork

at: [uri.ts](./src/uri.ts:189)

Should match:
 - 255.255.255.255
- 255.255.255.0
- 255.255.0.0
- 255.0.0.0
- 255.255.255.128
- 255.255.255.192

Should not match:
 - 255.255.255.253

```js
/((255\.){3}(0|128|192|224|240|248|252|254|255))|((255\.){2}(0|128|192|224|240|248|252|254|255)\.0)|((255\.)(0|128|192|224|240|248|252|254|255)\.0\.0)|((255\.){1}(0|128|192|224|240|248|252|254|255)\.0\.0\.0)/
```

## ipv6

Should match any ip v6 without protocol
https://es.wikipedia.org/wiki/IPv6

at: [uri.ts](./src/uri.ts:263)

Should match:
 - 2001:0db8:85a3:0000:0000:8a2e:0370:7334
- 2001:db8:85a3:0:0:8a2e:370:7334
- 2001:db8:85a3:8a2e:0370:7334:ff:fe00
- a591:dfe9:8840:aa39:f830:0224:55c8:f21b

Should not match:
 - :a591:dfe9:8840:aa39:f830:0224:55c8:f21b
- 2001:0db8:85a3:0000:0000:8a2e:0370:7334:
- g591:dfe9:8840:aa39:f830:0224:55c8:f21b
- 2001:db8:85a3:0:0:8a2e:370:7334:
- 2001:db8:85a3:0:8a2e:370:7334:
- ::1
- ::ffff

```js
/(?:[0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}/
```

## uri

Should match any uri with any protocol, for example file://, http://, https://, ftp://, chrome-extension://, chrome://, etc... * https://es.wikipedia.org/wiki/Esquema_de_URI

at: [uri.ts](./src/uri.ts:126)

Should match:
 - https://example.com:1234
- http://example.com:1234/
- any://example.com
- ftp://example.com/
- ftp://example.com:1234
- z39.50r://example.com
- https://example.com
- https://example.com/
- http://example.com/path
- https://example.com/path
- http://example.com/path/
- https://example.com/path/
- file://example.com
- file://example.com/
- file://example.com/path
- file://example.com/path/
- chrome-extensions://example.com/path/
- estrange-protocol://example.com/path/

Should not match:
 - //example.com
- example.com
- example.com/
- example.com/path
- example.com/path/

```js
/([\w-.]{3,}:\/\/)(www\.)?[-a-zA-Z0-9:%._\+~#=]{2,256}\.[a-z]{2,6}(:([0-9]{1,5}))?(\/[-a-zA-Z0-9:%_\+.~#?&//=]*)?/
```

## uriProtocol

Should match any valid uri protocol
https://en.wikipedia.org/wiki/Uniform_Resource_Identifier * https://es.wikipedia.org/wiki/Esquema_de_URI

at: [uri.ts](./src/uri.ts:309)

Should match:
 - http:
- https:
- ftp:
- ssh:
- irc:
- ircs:
- git:
- gopher:
- telnet:
- nntp:
- news:
- mailto:
- sftp:
- ldap:
- ldaps:
- webcal:
- xmpp:
- callto:
- ymsgr:
- skype:
- sip:
- sips:
- sms:
- mailto:
- msnim:
- irc:
- aim:
- gtalk:
- feed:
- sip:
- sips:
- sms:
- msnim:
- aim:
- gtalk:

Should not match:
 - http://
- https
- www.google.com
- ftp://ftp.is.co.za/rfc/rfc1808.txt

```js
/((aaa)|(aaas)|(about)|(acap)|(adiumxtra)|(afp)|(aim)|(apt)|(attachment)|(aw)|(beshare)|(bitcoin)|(bolo)|(callto)|(cap)|(chrome)|(chrome-extension)|(cid)|(content)|(crid)|(cvs)|(data)|(dav)|(dict)|(dns)|(ed2k)|(facetime)|(fax)|(feed)|(file)|(finger)|(fish)|(ftp)|(geo)|(gg)|(git)|(gizmoproject)|(go)|(gopher)|(gtalk)|(h323)|(hcp)|(http)|(https)|(iax)|(icap)|(im)|(imap)|(info)|(ipp)|(irc)|(irc6)|(ircs)|(iris)|(iris.beep)|(iris\.xpc)|(iris\.xpcs)|(iris\.lws)|(itms)|(jar)|(keyparc)|(lastfm)|(ldap)|(ldaps)|(lightning)|(magnet)|(mailto)|(maps)|(market)|(message)|(mid)|(mms)|(modem)|(ms-help)|(msnim)|(msrp)|(msrps)|(mtqp)|(mumble)|(mupdate)|(mvn)|(news)|(nfs)|(nntp)|(notes)|(opaquelocktoken)|(palm)|(paparazzi)|(platform)|(pop)|(pres)|(prospero)|(proxy)|(psyc)|(query)|(res)|(resource)|(rmi)|(rsync)|(rtmp)|(rtsp)|(secondlife)|(service)|(sftp)|(sgn)|(shttp)|(sieve)|(sip)|(sips)|(skype)|(smb)|(sms)|(snmp)|(soap\.beep)|(soap\.beeps)|(soldat)|(spotify)|(ssh)|(steam)|(svn)|(tag)|(teamspeak)|(tel)|(telnet)|(tftp)|(things)|(thismessage)|(tip)|(tv)|(udp)|(unreal)|(urn)|(ut2004)|(uuid)|(vemmi)|(ventrilo)|(view-source)|(wais)|(webcal)|(ws)|(wss)|(wtai)|(wyciwyg)|(xfire)|(xmlrpc\.beep)|(xmlrpc\.beeps)|(xmpp)|(xri)|(ymsgr)|(z39\.50r)|(z39\.50s)):/
```

## url

Should match any url with or without http/s protocol and with or without port

at: [uri.ts](./src/uri.ts:4)

Should match:
 - //ex4mpl3.com
- http://ex4mpl3.com
- http://subdomain.example.com
- http://sub.domain.example.com
- http://sub.domain.numb3rs.example.com
- http://example.com
- https://example.com
- http://example.com/
- https://example.com/
- http://example.com/path
- https://example.com/path
- http://example.com/path/
- https://example.com/path/subpath
- http://example.com:1234
- //example.com
- example.com
- example.com:80
- example.com/
- example.com/path
- example.com/path/
- //www.example.com
- sub-d0m4in.exampl3.com
- http://sub-d0m4in.exampl3.com
- http://example.com
- https://example.com:1
- http://example.com:80
- https://example.com:123
- https://example.com:1234
- https://example.com:65535

Should not match:
 - https://example.com:123456
- http://example.com:123456
- http://example.c0m
- example.c0m
- example,com
- example_com

```js
/((https?:)?\/\/)?(www\.)?[-a-zA-Z0-9:%._\+~#=]{2,256}\.[a-z]{2,6}(:[0-9]{1,5})?(\/[-a-zA-Z0-9:%_\+.~#?&//=]*)?/
```

## urlWithPort

Should match any url with or without http/s protocols and port
https://es.wikipedia.org/wiki/Anexo:Puertos_de_red

at: [uri.ts](./src/uri.ts:53)

Should match:
 - https://example.com:0
- http://example.com:1
- http://example.com:80
- https://example.com:123
- https://example.com:1234
- https://example.com:65535
- //example.com:65535
- example.com:65535

Should not match:
 - https://example.com:
- //example.com
- example.com

```js
/((https?:)?\/\/)?(www\.)?[-a-zA-Z0-9:%._\+~#=]{2,256}\.[a-z]{2,6}(:([0-9]{1,5}))(\/[-a-zA-Z0-9:%_\+.~#?&//=]*)?/
```

## urlWithProtocol

Should match any url with http/s protocols and with or without port

at: [uri.ts](./src/uri.ts:76)

Should match:
 - https://example.com:0
- http://example.com:1
- http://example.com:80
- https://example.com:123
- https://example.com:1234
- https://example.com:65535

Should not match:
 - //example.com:65535
- example.com:65535
- https://example.com:
- //example.com
- example.com

```js
/(https?:\/\/)(www\.)?[-a-zA-Z0-9:%._\+~#=]{2,256}\.[a-z]{2,6}(:([0-9]{1,5}))(\/[-a-zA-Z0-9:%_\+.~#?&//=]*)?/
```

## lettersButNotH

should match any single letter but not H.
https://www.w3.org/TR/CSS2/syndata.html#characters

at: [example.ts](./src/example.ts:6)

Should match:
 - a
- h
- A
- Z

Should not match:
 - H
- 3
- aa

```js
/(?![H])[a-zA-Z]/
```

## email

Allow IP as domain name: hello@154.145.68.12 does allow literal addresses &quot;hello, how are you?&quot;@world.com allows numeric domain names after the last &quot;.&quot; minimum 2 letters

at: [email.ts](./src/email.ts:12)

Should match:
 - juan@garn.dev
- email+foo@email.com
- email+112@email.com
- he_llo@worl.d.com
- EMAIL@DOMAIN.COM
- e.m.a.il@email.com
- email@email.uk.co
- bar.ba@test.co.uk
- em|ail@email.com
- hel.l-o@wor-ld.museum
- h1ello@123.com
- hello@154.145.68.12

Should not match:
 - em|ail@email
- email&email.com
- hello@worl_d.com
- he&amp;llo@world.co1
- .hello@wor#.co.uk
- juan@@garn.dev

```js
/[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+/
```

## color

Should match any valid css color.

at: [color.ts](./src/color.ts:78)

Should match:
 - #abc
- #ABC
- #123
- #123456
- #aAcCff
- #1234
- #ffcc00
- #ffcc0033
- #abcdefee
- rgb(255,255,255)
- rgb(255,255,255,0.5)
- rgba(255,255,255,0.1)
- rgba(255,255,255)
- rgba( 255  ,   255     ,  255  )
- rgb(999,0,0)
- hsl(0,100%,50%)
- hsl(0,100%,50%,0.5)
- hsla(0,100%,50%,0.1)
- hsla(0,100%,50%)
- hsla( 0  ,  100%       ,  50%  )
- hsl(24,50%,200%)

Should not match:
 - #0ffcc00
- #abcdefG
- #FFG
- FFF
- FFF
- $FFF
- #12345
- #1234567
- #123456789
- #123456789a
- #123456789ab
- rgba(2 55,255,255)
- rgbc(300,0,0)
- rgb(256,25 5,255,0.5)
- rg(256,255,255,0.5)
- (256,255,255,0.5)
- hsl(24,50%,200)
- hsla(2 55,255,255)
- hslc(300,0%,0%)
- hsl(256,25 5,255,0.5)
- hs(256,255,255,0.5)
- (256,255,255,0.5)

```js
/(#((([0-9a-fA-F]{1}){3,4})|(([0-9a-fA-F]{2}){3,4})))|(rgba?\(\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})(\s*,\s*0?\.[0-9])?\s*\))|(hsla?\(\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})%\s*,\s*([0-9]{1,3}%)(\s*,\s*0?\.[0-9])?\s*\))/
```

## colorHex

Should match any valid css hex color. (#ffcc00,  #abc, or #ffcc0033)

at: [color.ts](./src/color.ts:4)

Should match:
 - #abc
- #ABC
- #123
- #123456
- #aAcCff
- #1234
- #ffcc00
- #ffcc0033
- #abcdefee

Should not match:
 - #0ffcc00
- #abcdefG
- #FFG
- FFF
- FFF
- $FFF
- #12345
- #1234567
- #123456789
- #123456789a
- #123456789ab

```js
/#((([0-9a-fA-F]{1}){3,4})|(([0-9a-fA-F]{2}){3,4}))/
```

## colorHsl

Should match any valid  css hsl color. (hsl(0,100%,50%), hsla(0,100%,50%,0.5))

at: [color.ts](./src/color.ts:56)

Should match:
 - hsl(0,100%,50%)
- hsl(0,100%,50%,0.5)
- hsla(0,100%,50%,0.1)
- hsla(0,100%,50%)
- hsla( 0  ,  100%       ,  50%  )
- hsl(24,50%,200%)

Should not match:
 - hsl(24,50%,200)
- hsla(2 55,255,255)
- hslc(300,0%,0%)
- hsl(256,25 5,255,0.5)
- hs(256,255,255,0.5)
- (256,255,255,0.5)

```js
/hsla?\(\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})%\s*,\s*([0-9]{1,3}%)(\s*,\s*0?\.[0-9])?\s*\)/
```

## colorRgb

Should match any valid css rgb o rgba color. (rgb(255,255,255), rgba(255,255,255,0.5))

at: [color.ts](./src/color.ts:33)

Should match:
 - rgb(255,255,255)
- rgb(255,255,255,0.5)
- rgba(255,255,255,0.1)
- rgba(255,255,255)
- rgba( 255  ,   255     ,  255  )
- rgb(999,0,0)

Should not match:
 - rgba(2 55,255,255)
- rgbc(300,0,0)
- rgb(256,25 5,255,0.5)
- rg(256,255,255,0.5)
- (256,255,255,0.5)

```js
/rgba?\(\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})(\s*,\s*0?\.[0-9])?\s*\)/
```

## base64

Should match any base64 string.
https://en.wikipedia.org/wiki/Base64

at: [number.ts](./src/number.ts:204)

Should match:
 - Zm9vYmFy
- MTIzNDU2Nzc4OTBxd2VlcnR5dWlvcGFzZGZnaGprbPF6eGN2Ym5tUVdFRVJUWVVJT1BBU0RGR0hKS0zRWlhDVkJOTSsvfEAjfr1+rHtbXX0KIb8/W11fOjssLjw+KCkkJSZeKg==

Should not match:
 - !@#$%^&*()_+

```js
/[A-Za-z0-9+/]+={0,2}/
```

## number

Should match any valid JS number but not NaN, Infinity or -Infinity.

at: [number.ts](./src/number.ts:5)

Should match:
 - 1_000_000
- 1_000.45
- 123.45
- 0.123
- 1e4
- 1E4
- 0.123e4
- 0.123E4
- 0.123e-4
- 0.123e+4
- 123
- -123
- +123

Should not match:
 - 0123
- 123a
- 123e
- 123e0.1
- a123
- a12b3
- NaN
- Infinity

```js
/(?:[-+]?(?:0|[1-9_][0-9_]*)(?:\.[0-9_]*)?(?:[eE][-+]?[0-9]+)?)/
```

## numberBigInt

Should match any BigInt
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/BigInt

at: [number.ts](./src/number.ts:370)

Should match:
 - 0n
- +1n
- -1n
- 20n
- 300n
- 9999999999n

Should not match:
 - 00n
- 01n
- 10
- 200

```js
/[+-]?(0|[1-9][0-9]*)n/
```

## numberBinary

Should match any binary number, signed or unsigned, but not integers or exponential.

at: [number.ts](./src/number.ts:173)

Should match:
 - 0b101
- 0b0
- +0b1
- -0b1
- 0B0
- 0b00001111001
- 0b01111000

Should not match:
 - 0b0abc
- 0babc
- 0
- 0b
- 0b101.45
- 0b101.45e4
- 0b101.45e-4
- 0b101.45e+4
- 123
- 0b101.45
- 0b101.45e4.5
- 0b101.45e-4.5
- 0b101.45e+4.5

```js
/([+-])?0[bB][01]+/
```

## numberExponential

Should match any exponential number.

at: [number.ts](./src/number.ts:84)

Should match:
 - 123e4
- 0.123e4
- .1e4
- 1e4
- 1E4
- 3E2
- 3E-2
- 12.3456e-4
- 0.123e-4
- 0.123e+4

Should not match:
 - 123.45
- .e4
- 0.123
- 0.123a
- 123
- 1e
- 0.123e4.5
- 0.123e-4.5
- 0.123e+4.5

```js
/([-+]?([0-9]+))?(\.([0-9]+))?[eE]([-+]?([0-9]+))/
```

## numberFloat

Should match any float number, signed or unsigned, but not integers or exponential.

at: [number.ts](./src/number.ts:58)

Should match:
 - 123.45
- 0.123
- 1.0
- 0.0
- .9

Should not match:
 - 7
- 7.
- 123
- 1e4
- 0.123e4
- 0.123e-4
- 0.123e+4
- 123.45.67
- 0.123e
- 0.123e4.5
- 0.123e-4.5
- 0.123e+4.5

```js
/([-+]?([0-9]+))?\.([0-9])+/
```

## numberHex

Should match any number hexadecimal, signed or unsigned

at: [number.ts](./src/number.ts:114)

Should match:
 - 0x123
- 0x0
- 0X1
- +0x1
- -0x1
- 0xf
- 0xF
- 0xabcdef
- 0xabc

Should not match:
 - *0x1
- 123
- 0xG
- 0x1z
- 0x123.45
- 0x123.45e4
- 0x123.45e-4
- 0x123.45e+4

```js
/(([+-])?0[xX][0-9a-fA-F]+)/
```

## numberInteger

Should match any number signed integer or unsigned integer.

at: [number.ts](./src/number.ts:36)

Should match:
 - 0
- 123
- -999
- +6

Should not match:
 - 00
- 000
- 123.45
- 0.123
- 1e4
- 0.123e4
- 0.123e-4
- 0.123e+4

```js
/(?:[-+]?(?:0|[1-9][0-9]*))/
```

## numberOctal

Should match any number octal, signed or unsigned, but not integers or exponential.

at: [number.ts](./src/number.ts:141)

Should match:
 - 0123
- 07
- 0o51
- 0o7
- +0o7
- -0o7

Should not match:
 - 0
- 058
- 0o58
- 0O7
- 7
- 08
- 09
- abc
- 0abc
- 123
- 0o123.45
- 0123.45
- 0123.45e4
- 0123.45e-4
- 0123.45e+4

```js
/([+-])?(0o?[0-7]+)/
```

## romanNumeral

Should match any roman numeral
https://en.wikipedia.org/wiki/Roman_numerals

at: [number.ts](./src/number.ts:220)

Should match:
 - I
- II
- III
- IV
- V
- VI
- VII
- VIII
- IX
- X
- XI
- XII
- XIII
- XIV
- XV
- XVI
- XVII
- XVIII
- XIX
- XX
- XXI
- XXII
- XXIII
- XXIV
- XXV
- XXVI
- XXVII
- XXVIII
- XXIX
- XXX
- XXXI
- XXXII
- XXXIII
- XXXIV
- XXXV
- XXXVI
- XXXVII
- XXXVIII
- XXXIX
- XL
- XLI
- XLII
- XLIII
- XLIV
- XLV
- XLVI
- XLVII
- XLVIII
- XLIX
- L
- LI
- LII
- LIII
- LIV
- LV
- LVI
- LVII
- LVIII
- LIX
- LX
- LXI
- LXII
- LXIII
- LXIV
- LXV
- LXVI
- LXVII
- LXVIII
- LXIX
- LXX
- LXXI
- LXXII
- LXXIII
- LXXIV
- LXXV
- LXXVI
- LXXVII
- LXXVIII
- LXXIX
- LXXX
- LXXXI
- LXXXII
- LXXXIII
- LXXXIV
- LXXXV
- LXXXVI
- LXXXVII
- LXXXVIII
- LXXXIX
- C
- CI
- CII
- CIII
- CIV
- CV
- CVI
- CVII
- D
- DI
- DII
- DIII
- DIV
- DV
- DVI
- DVII
- M
- MI
- MII
- MIII
- MIV
- MV
- MVI
- MVII
- MVIII
- MIX
- MM
- MMM
- MMMM

Should not match:
 - iii
- IIV
- IIII
- IIIII
- IIIIII
- IIIIIII
- lxx
- lxxi
- lxxii
- lxxiii
- lxxiv
- lxxv
- lxxvi
- lxxvii
- lxxviii
- asdsdf

```js
/M{0,4}(CM|CD|D?C{0,3})(XC|XL|L?X{0,3})(IX|IV|V?I{0,3})/
```

## classDefinition

Should match a js class definition

at: [js_eval.ts](./src/js_eval.ts:259)

Should match:
 - class A{ }
- class A{}
- class A { }
- class _ { }
- class $ { }
- class A extends B { }
- class A extends B{ }
- class A extends B { constructor() { } }
- class A extends B { constructor() { super(); } }
- class A extends B { constructor() { super(); } foo() { } }
- class A extends B { constructor() { super(); } foo() { } bar() { } }

Should not match:
 - class 1foo{}
- class foo extends 3hola{}
- class A extends 1{ }
- class while {}
- class foo extends if{}
- classB{}
- class MyClass 
- class MyClass {
- CLASS A {}
- class A extendsB{ }

```js
/class\s+((?!(\b(?:break|case|catch|class|const|continue|debugger|default|delete|do|else|export|extends|finally|for|function|if|import|in|instanceof|new|return|super|switch|this|throw|try|typeof|var|void|while|with|yield|implements|interface|let|package|private|protected|public|static|yield|enum|await|abstract|boolean|byte|char|double|final|float|goto|int|long|native|short|synchronized|throws|transient|volatile|null|true|false)\b))([a-zA-Z$_][a-zA-Z0-9$_]*))\s*(extends\s+((?!(\b(?:break|case|catch|class|const|continue|debugger|default|delete|do|else|export|extends|finally|for|function|if|import|in|instanceof|new|return|super|switch|this|throw|try|typeof|var|void|while|with|yield|implements|interface|let|package|private|protected|public|static|yield|enum|await|abstract|boolean|byte|char|double|final|float|goto|int|long|native|short|synchronized|throws|transient|volatile|null|true|false)\b))([a-zA-Z$_][a-zA-Z0-9$_]*)))?\s*\{.*\}/
```

## functionAnonymous

Should match a js anonymous classic function definition

at: [js_eval.ts](./src/js_eval.ts:120)

Should match:
 - function(){}
- function (...args) { }
- function (a1,a2,a3) { }
- function() {return 1;}
- function (){ if(true) { return 1; } }

Should not match:
 - function name(){return 2;}
- func(){}
- function(a1,a2,a3)

```js
/function(?<noName>\s*)\(.*\)\s*\{(.*)\}/
```

## functionArrow

Should match a js arrow function definition

at: [js_eval.ts](./src/js_eval.ts:168)

Should match:
 - A => A
- () => 42
- (a,b,c) => 42
- (...args) => 42
- () => {}
- () => { return 'hello'; }

Should not match:
 - A,B => A
- functionname () {  return 'hello'; }
- function () {}
- function myFunction(param1, param2) {

```js
/([a-zA-Z0-9-$]+)|(\(.*\))\s*=>\s*(.*)/
```

## functionAsync

Should match a js async function definition

at: [js_eval.ts](./src/js_eval.ts:187)

Should match:
 - async function(){}
- async function named() {}
- async function (...args) { }
- async function (a1,a2,a3) { }
- async function() {return 1;}
- async function (){ if(true) { return 1; } }
- async function name(){return 2;}
- async () => {return 2;}

Should not match:
 - async func(){}
- async functionA(a1,a2,a3)

```js
/async\s+((function(?<noName>\s*)\(.*\)\s*\{(.*)\})|(function\s+(?<name>(((?!(\b(?:break|case|catch|class|const|continue|debugger|default|delete|do|else|export|extends|finally|for|function|if|import|in|instanceof|new|return|super|switch|this|throw|try|typeof|var|void|while|with|yield|implements|interface|let|package|private|protected|public|static|yield|enum|await|abstract|boolean|byte|char|double|final|float|goto|int|long|native|short|synchronized|throws|transient|volatile|null|true|false)\b))([a-zA-Z$_][a-zA-Z0-9$_]*))))\s*\(.*\)\s*\{(.*)\})|(([a-zA-Z0-9-$]+)|(\(.*\))\s*=>\s*(.*)))/
```

## functionAsyncGenerator

Should match a js async generator function. Only matches the syntax of `async function*` not any other way of creating an async generator or iterator.
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function

at: [js_eval.ts](./src/js_eval.ts:234)

Should match:
 - async function* (){}
- async function* named() {}
- async function* (...args) { }
- async function* named(a1,a2,a3) { yield 42; return 43; }

Should not match:
 - function (){}
- async function (){}
- function* while() {}
- async function (){}
- function named(a1,a2,a3)

```js
/async\s+((function\*(?<noName>\s*)\(.*\)\s*\{(.*)\})|(function\*\s+(?<name>(((?!(\b(?:break|case|catch|class|const|continue|debugger|default|delete|do|else|export|extends|finally|for|function|if|import|in|instanceof|new|return|super|switch|this|throw|try|typeof|var|void|while|with|yield|implements|interface|let|package|private|protected|public|static|yield|enum|await|abstract|boolean|byte|char|double|final|float|goto|int|long|native|short|synchronized|throws|transient|volatile|null|true|false)\b))([a-zA-Z$_][a-zA-Z0-9$_]*))))\s*\(.*\)\s*\{(.*)\}))/
```

## functionClassic

Should match a js classic function definition

at: [js_eval.ts](./src/js_eval.ts:138)

Should match:
 - function name(param1, param2) { }
- function name() {  }
- function name () {}
- function name         () {}
- function name() {  return 'hello'; }
- function name() {  if(true) { return 42 } }

Should not match:
 - function while() {}
- function function() { }
- functionname () {  return 'hello'; }
- function name     foo    () {}
- function () {}
-  () => {}
- function myFunction(param1, param2) {

```js
/function\s+(?<name>(((?!(\b(?:break|case|catch|class|const|continue|debugger|default|delete|do|else|export|extends|finally|for|function|if|import|in|instanceof|new|return|super|switch|this|throw|try|typeof|var|void|while|with|yield|implements|interface|let|package|private|protected|public|static|yield|enum|await|abstract|boolean|byte|char|double|final|float|goto|int|long|native|short|synchronized|throws|transient|volatile|null|true|false)\b))([a-zA-Z$_][a-zA-Z0-9$_]*))))\s*\(.*\)\s*\{(.*)\}/
```

## functionGenerator

Should match a js generator function definition

at: [js_eval.ts](./src/js_eval.ts:209)

Should match:
 - function*(){}
- function* named() {}
- function* (...args) { }

Should not match:
 - function (){}
- async function (){}
- function* while() {}
- async function* (){}
- function named(a1,a2,a3)
- async function* named(a1,a2,a3)

```js
/((function\*(?<noName>\s*)\(.*\)\s*\{(.*)\})|(function\*\s+(?<name>(((?!(\b(?:break|case|catch|class|const|continue|debugger|default|delete|do|else|export|extends|finally|for|function|if|import|in|instanceof|new|return|super|switch|this|throw|try|typeof|var|void|while|with|yield|implements|interface|let|package|private|protected|public|static|yield|enum|await|abstract|boolean|byte|char|double|final|float|goto|int|long|native|short|synchronized|throws|transient|volatile|null|true|false)\b))([a-zA-Z$_][a-zA-Z0-9$_]*))))\s*\(.*\)\s*\{(.*)\}))/
```

## globalScope

Should match any global variable

at: [js_eval.ts](./src/js_eval.ts:565)

Should match:
 - Deno
- fetch
- window
- global

Should not match:
 - DENO
- fETCH
- Window
- Global

```js
/Deno|queueMicrotask|dispatchEvent|addEventListener|removeEventListener|AbortSignal|AbortController|atob|btoa|clearInterval|clearTimeout|crypto|fetch|performance|setInterval|setTimeout|structuredClone|location|window|self|navigator|close|closed|alert|confirm|prompt|localStorage|sessionStorage|onload|onunload|global|clearImmediate|setImmediate|document|name|customElements|history|locationbar|menubar|personalbar|scrollbars|statusbar|toolbar|status|frames|length|top|opener|parent|frameElement|origin|external|screen|innerWidth|innerHeight|scrollX|pageXOffset|scrollY|pageYOffset|visualViewport|screenX|screenY|outerWidth|outerHeight|devicePixelRatio|clientInformation|screenLeft|screenTop|defaultStatus|defaultstatus|styleMedia|onsearch|isSecureContext|onappinstalled|onbeforeinstallprompt|indexedDB|webkitStorageInfo|onbeforexrselect|onabort|onblur|oncancel|oncanplay|oncanplaythrough|onchange|onclick|onclose|oncontextmenu|oncuechange|ondblclick|ondrag|ondragend|ondragenter|ondragleave|ondragover|ondragstart|ondrop|ondurationchange|onemptied|onended|onerror|onfocus|onformdata|oninput|oninvalid|onkeydown|onkeypress|onkeyup|onloadeddata|onloadedmetadata|onloadstart|onmousedown|onmouseenter|onmouseleave|onmousemove|onmouseout|onmouseover|onmouseup|onmousewheel|onpause|onplay|onplaying|onprogress|onratechange|onreset|onresize|onscroll|onsecuritypolicyviolation|onseeked|onseeking|onselect|onslotchange|onstalled|onsubmit|onsuspend|ontimeupdate|ontoggle|onvolumechange|onwaiting|onwebkitanimationend|onwebkitanimationiteration|onwebkitanimationstart|onwebkittransitionend|onwheel|onauxclick|ongotpointercapture|onlostpointercapture|onpointerdown|onpointermove|onpointerup|onpointercancel|onpointerover|onpointerout|onpointerenter|onpointerleave|onselectstart|onselectionchange|onanimationend|onanimationiteration|onanimationstart|ontransitionrun|ontransitionstart|ontransitionend|ontransitioncancel|onafterprint|onbeforeprint|onbeforeunload|onhashchange|onlanguagechange|onmessage|onmessageerror|onoffline|ononline|onpagehide|onpageshow|onpopstate|onrejectionhandled|onstorage|onunhandledrejection|blur|cancelAnimationFrame|cancelIdleCallback|captureEvents|createImageBitmap|find|focus|getComputedStyle|getSelection|matchMedia|moveBy|moveTo|open|postMessage|print|releaseEvents|reportError|requestAnimationFrame|requestIdleCallback|resizeBy|resizeTo|scroll|scrollBy|scrollTo|stop|webkitCancelAnimationFrame|webkitRequestAnimationFrame|chrome|caches|cookieStore|ondevicemotion|ondeviceorientation|ondeviceorientationabsolute|oncontextlost|oncontextrestored|showDirectoryPicker|showOpenFilePicker|showSaveFilePicker|originAgentCluster|trustedTypes|speechSynthesis|onpointerrawupdate|crossOriginIsolated|scheduler|openDatabase|webkitRequestFileSystem|webkitResolveLocalFileSystemURL|console/
```

## identifierNames

Should match a valid js variable/function/class name * https://developer.mozilla.org/en-US/docs/Glossary/Identifier

at: [js_eval.ts](./src/js_eval.ts:87)

Should match:
 - a
- Z
- FOO
- a1
- a_9
- _10
- $1
- $H
- $
- whileDo
- _

Should not match:
 - 1
- 1a
- name with space
- a-1a
- b%
- while
- do
- if
- in
- for
- let

```js
/((?!(\b(?:break|case|catch|class|const|continue|debugger|default|delete|do|else|export|extends|finally|for|function|if|import|in|instanceof|new|return|super|switch|this|throw|try|typeof|var|void|while|with|yield|implements|interface|let|package|private|protected|public|static|yield|enum|await|abstract|boolean|byte|char|double|final|float|goto|int|long|native|short|synchronized|throws|transient|volatile|null|true|false)\b))([a-zA-Z$_][a-zA-Z0-9$_]*))/
```

## reservedWords

Should match a js reserved word
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Lexical_grammar#keywords

at: [js_eval.ts](./src/js_eval.ts:7)

Should match:
 - break
- case
- catch
- class
- const
- continue
- debugger
- default
- delete
- do
- else
- export
- extends
- finally
- for
- function
- if
- import
- in
- instanceof
- new
- return
- super
- switch
- this
- throw
- try
- typeof
- var
- void
- while
- with
- yield
- implements
- interface
- let
- package
- private
- protected
- public
- static
- yield
- enum
- await
- abstract
- boolean
- byte
- char
- double
- final
- float
- goto
- int
- long
- native
- short
- synchronized
- throws
- transient
- volatile
- null
- true
- false

Should not match:
 - BREAK
- CASE
- CATCH
- CLASS
- CONST
- CONTINUE
- DEBUGGER
- DEFAULT
- DELETE
- DO
- ELSE
- EXPORT
- EXTENDS
- FINALLY
- FOR
- FUNCTION
- IF
- IMPORT
- IN
- INSTANCEOF
- NEW
- RETURN
- SUPER
- SWITCH
- THIS
- THROW
- TRY
- TYPEOF
- VAR
- VOID
- WHILE
- WITH
- YIELD
- IMPLEMENTS
- INTERFACE
- LET
- PACKAGE
- PRIVATE
- PROTECTED
- PUBLIC
- STATIC
- YIELD
- ENUM
- AWAIT
- ABSTRACT
- BOOLEAN
- BYTE
- CHAR
- DOUBLE
- FINAL
- FLOAT
- GOTO
- INT
- LONG
- NATIVE
- SHORT
- SYNCHRONIZED
- THROWS
- TRANSIENT
- VOLATILE
- NULL
- TRUE
- FALSE

```js
/(\b(?:break|case|catch|class|const|continue|debugger|default|delete|do|else|export|extends|finally|for|function|if|import|in|instanceof|new|return|super|switch|this|throw|try|typeof|var|void|while|with|yield|implements|interface|let|package|private|protected|public|static|yield|enum|await|abstract|boolean|byte|char|double|final|float|goto|int|long|native|short|synchronized|throws|transient|volatile|null|true|false)\b)/
```

