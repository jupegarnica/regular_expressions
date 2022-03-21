/**
 * Should match any url with or without http/s protocol and with or without port
 * @author Github copilot
 */
export const url =
  /((https?:)?\/\/)?(www\.)?[-a-zA-Z0-9:%._\+~#=]{2,256}\.[a-z]{2,6}(:[0-9]{1,5})?(\/[-a-zA-Z0-9:%_\+.~#?&//=]*)?/;

export const url_should_match: string[] = [
  "//ex4mpl3.com",
  "http://ex4mpl3.com",
  "http://subdomain.example.com",
  "http://sub.domain.example.com",
  "http://sub.domain.numb3rs.example.com",
  "http://example.com",
  "https://example.com",
  "http://example.com/",
  "https://example.com/",
  "http://example.com/path",
  "https://example.com/path",
  "http://example.com/path/",
  "https://example.com/path/subpath",
  "http://example.com:1234",
  "//example.com",
  "example.com",
  "example.com:80",
  "example.com/",
  "example.com/path",
  "example.com/path/",
  "//www.example.com",
  "sub-d0m4in.exampl3.com",
  "http://sub-d0m4in.exampl3.com",
  "http://example.com",
  "https://example.com:1",
  "http://example.com:80",
  "https://example.com:123",
  "https://example.com:1234",
  "https://example.com:65535",
];

export const url_should_not_match: string[] = [
  "https://example.com:123456",
  "http://example.com:123456",
  "http://example.c0m",
  "example.c0m",
  "example,com",
  "example_com",
];

/**
 * Should match any url with or without http/s protocols and port
 * @author Github copilot
 * @see https://es.wikipedia.org/wiki/Anexo:Puertos_de_red
 */

export const urlWithPort =
  /((https?:)?\/\/)?(www\.)?[-a-zA-Z0-9:%._\+~#=]{2,256}\.[a-z]{2,6}(:([0-9]{1,5}))(\/[-a-zA-Z0-9:%_\+.~#?&//=]*)?/;

export const urlWithPort_should_match: string[] = [
  "https://example.com:0",
  "http://example.com:1",
  "http://example.com:80",
  "https://example.com:123",
  "https://example.com:1234",
  "https://example.com:65535",
  "//example.com:65535",
  "example.com:65535",
];
export const urlWithPort_should_not_match: string[] = [
  "https://example.com:",
  "//example.com",
  "example.com",
];

/**
 * Should match any url with http/s protocols and with or without port
 * @author Github copilot
 */

export const urlWithProtocol =
  /(https?:\/\/)(www\.)?[-a-zA-Z0-9:%._\+~#=]{2,256}\.[a-z]{2,6}(:([0-9]{1,5}))(\/[-a-zA-Z0-9:%_\+.~#?&//=]*)?/;

export const urlWithProtocol_should_match: string[] = [
  "https://example.com:0",
  "http://example.com:1",
  "http://example.com:80",
  "https://example.com:123",
  "https://example.com:1234",
  "https://example.com:65535",
];
export const urlWithProtocol_should_not_match: string[] = [
  "//example.com:65535",
  "example.com:65535",
  "https://example.com:",
  "//example.com",
  "example.com",
];

/**
 * Should match any url hostname (no protocol, no port, no path)
 * @author Github copilot
 */
export const hostname = /[-a-zA-Z0-9:%._\+~#=]{2,256}\.[a-z]{2,6}/;

export const hostname_should_match: string[] = [
  "example.com",
  "sub.example.com",
  "www.exampl3.com",
];

export const hostname_should_not_match: string[] = [
  "example.com/",
  "example.com:1234",
  "example.com:1234/",
  "example.com/path",
  "example.com/path/",
  "//example.com",
  "http://example.com:1234",
  "https://example.com",
  "http://example.com/",
  "https://example.com/",
  "http://example.com/path",
  "https://example.com/path",
  "http://example.com/path/",
  "https://example.com/path/",
];

/**
 * Should match any uri with any protocol, for example file://, http://, https://, ftp://, chrome-extension://, chrome://, etc...
 * @see https://es.wikipedia.org/wiki/Esquema_de_URI
 * @author Github copilot
 */
export const uri =
  /([\w-.]{3,}:\/\/)(www\.)?[-a-zA-Z0-9:%._\+~#=]{2,256}\.[a-z]{2,6}(:([0-9]{1,5}))?(\/[-a-zA-Z0-9:%_\+.~#?&//=]*)?/;

export const uri_should_match: string[] = [
  "https://example.com:1234",
  "http://example.com:1234/",
  "any://example.com",
  "ftp://example.com/",
  "ftp://example.com:1234",
  "z39.50r://example.com",
  "https://example.com",
  "https://example.com/",
  "http://example.com/path",
  "https://example.com/path",
  "http://example.com/path/",
  "https://example.com/path/",
  "file://example.com",
  "file://example.com/",
  "file://example.com/path",
  "file://example.com/path/",
  "chrome-extensions://example.com/path/",
  "estrange-protocol://example.com/path/",
];

export const uri_should_not_match: string[] = [
  "//example.com",
  //  "//example.com:1234",
  "example.com",
  "example.com/",
  "example.com/path",
  "example.com/path/",
];

/**
 * Should match any ip v4 without protocol, no any mask of subnet
 * @author Github copilot
 */
export const ipv4 =
  /((25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)/;

export const ipv4_should_match: string[] = [
  "192.168.1.0",
  "192.168.1.1",
  "10.123.3.234",
  "254.254.254.254",
  "0.0.0.0",
  "255.0.0.0",
  "255.255.0.0",
  "255.255.255.0",
  "255.255.255.255",
];
export const ipv4_should_not_match: string[] = [
  "254.254.254.254.254",
  "1.1.1.1.1",
  "1.1.1",
  "192.168.A.0",
  "192.168.1.b",
  // TODO MAKE THIS WORK
  // "00.00.00.00",
];
/**
 * Should match any subnet mask
 * @see https://en.wikipedia.org/wiki/Subnetwork
 * @author Github copilot
 */

export const ipv4SubnetMask =
  /((255\.){3}(0|128|192|224|240|248|252|254|255))|((255\.){2}(0|128|192|224|240|248|252|254|255)\.0)|((255\.)(0|128|192|224|240|248|252|254|255)\.0\.0)|((255\.){1}(0|128|192|224|240|248|252|254|255)\.0\.0\.0)/;

export const ipv4SubnetMask_should_match: string[] = [
  "255.255.255.255",
  "255.255.255.0",
  "255.255.0.0",
  "255.0.0.0",
  "255.255.255.128",
  "255.255.255.192",
];

export const ipv4SubnetMask_should_not_match: string[] = [
  "255.255.255.253",
];

/**
 * Should match any ipv4 CIDR notation (subnet)
 * @see https://en.wikipedia.org/wiki/Classless_Inter-Domain_Routing
 * @author Github copilot
 */

export const ipv4CIDR =
  /(([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])\.){3}([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])(\/([0-9]|[1-2][0-9]|3[0-2]))/;
//https://regexlib.com/REDetails.aspx?regexp_id=2717
// /(([01]?\d?\d|2[0-4]\d|25[0-5])\.){3}([01]?\d?\d|2[0-4]\d|25[0-5])\/(\d{1}|[0-2]{1}\d{1}|3[0-2])/;

export const ipv4CIDR_should_match: string[] = [
  "192.168.100.1/24",
  "192.168.0.1/25",
  "192.168.254.1/26",
  "0.0.0.0/0",
  "10.120.192.2/32",
  "10.120.192.2/31",
  "10.120.192.2/30",
  "10.120.192.2/29",
  "10.120.192.2/28",
  "10.120.192.2/27",
  "10.120.192.2/26",
  "10.120.192.2/25",
  "10.120.192.0/24",
  "10.120.192.0/23",
  "10.120.192.0/22",
  "10.120.192.0/21",
  "10.120.192.0/20",
  "10.120.192.0/19",
  "10.120.192.0/18",
  "10.120.192.0/17",
  "10.120.0.0/16",
  "10.120.0.0/15",
  "10.120.0.0/14",
  "10.120.0.0/13",
  "10.120.0.0/12",
  "10.120.0.0/11",
  "10.120.0.0/10",
  "10.120.0.0/9",
  "10.0.0.0/8",
  "10.0.0.0/7",
  "10.0.0.0/6",
  "10.0.0.0/5",
  "10.0.0.0/4",
  "10.0.0.0/3",
  "10.0.0.0/2",
  "10.0.0.0/1",
];

export const ipv4CIDR_should_not_match: string[] = [
  "192.168.100.1/33",
  "0.0.0.0/90",
];

/**
 * Should match any ip v6 without protocol
 * @author Github copilot
 * @see https://es.wikipedia.org/wiki/IPv6
 */

export const ipv6 = /(?:[0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}/;
// export const ipv6 =
//   /((([0-9A-Fa-f]{1,4}:){7}[0-9A-Fa-f]{1,4})|(([0-9A-Fa-f]{1,4}:){6}:[0-9A-Fa-f]{1,4})|(([0-9A-Fa-f]{1,4}:){5}:([0-9A-Fa-f]{1,4}:)?[0-9A-Fa-f]{1,4})|(([0-9A-Fa-f]{1,4}:){4}:([0-9A-Fa-f]{1,4}:){0,2}[0-9A-Fa-f]{1,4})|(([0-9A-Fa-f]{1,4}:){3}:([0-9A-Fa-f]{1,4}:){0,3}[0-9A-Fa-f]{1,4})|(([0-9A-Fa-f]{1,4}:){2}:([0-9A-Fa-f]{1,4}:){0,4}[0-9A-Fa-f]{1,4})|(([0-9A-Fa-f]{1,4}:){6}((\b((25[0-5])|(1\d{2})|(2[0-4]\d)|(\d{1,2}))\b)\.){3}(\b((25[0-5])|(1\d{2})|(2[0-4]\d)|(\d{1,2}))\b))|(([0-9A-Fa-f]{1,4}:){0,5}:((\b((25[0-5])|(1\d{2})|(2[0-4]\d)|(\d{1,2}))\b)\.){3}(\b((25[0-5])|(1\d{2})|(2[0-4]\d)|(\d{1,2}))\b))|(::([0-9A-Fa-f]{1,4}:){0,5}((\b((25[0-5])|(1\d{2})|(2[0-4]\d)|(\d{1,2}))\b)\.){3}(\b((25[0-5])|(1\d{2})|(2[0-4]\d)|(\d{1,2}))\b))|([0-9A-Fa-f]{1,4}::([0-9A-Fa-f]{1,4}:){0,5}[0-9A-Fa-f]{1,4})|(::([0-9A-Fa-f]{1,4}:){0,6}[0-9A-Fa-f]{1,4})|(([0-9A-Fa-f]{1,4}:){1,7}:))/;

export const ipv6_should_match: string[] = [
  "2001:0db8:85a3:0000:0000:8a2e:0370:7334",
  "2001:db8:85a3:0:0:8a2e:370:7334",
  "2001:db8:85a3:8a2e:0370:7334:ff:fe00",
  "a591:dfe9:8840:aa39:f830:0224:55c8:f21b",
  // ":::::::ffff",
];
export const ipv6_should_not_match: string[] = [
  ":a591:dfe9:8840:aa39:f830:0224:55c8:f21b",
  "2001:0db8:85a3:0000:0000:8a2e:0370:7334:",
  "g591:dfe9:8840:aa39:f830:0224:55c8:f21b",
  "2001:db8:85a3:0:0:8a2e:370:7334:",
  "2001:db8:85a3:0:8a2e:370:7334:",
  "::1",
  "::ffff",
];

/**
 * Should match any private ip v4
 * @author Github copilot
 */
export const iPv4Private =
  /(?:(?:10|127)\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?))|(?:(?:169\.254|192\.168)\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?))|(?:172\.(?:1[6-9]|2[0-9]|3[01]|4[0-9]|5[0-9])\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?))/;
// /(10|127|172\.(1[6-9]|2[0-9]|3[01])|192\.168)\.(\d){1,3}\.(\d){1,3}/g;

export const iPv4Private_should_match: string[] = [
  "10.196.0.1",
  "127.196.100.1",
  "192.168.1.0",
  "192.168.123.134",
  "192.168.0.1",
];
export const iPv4Private_should_not_match: string[] = [
  "156.10.3.1",
  "127.196.300.1",
  "139.47.8.243",
];

/**
 * Should match any valid uri protocol
 * @author Github copilot
 * @see https://en.wikipedia.org/wiki/Uniform_Resource_Identifier
 * @see https://es.wikipedia.org/wiki/Esquema_de_URI
 */

export const uriProtocol =
  // /([a-z][a-z0-9+\-.]*):/;
  /((aaa)|(aaas)|(about)|(acap)|(adiumxtra)|(afp)|(aim)|(apt)|(attachment)|(aw)|(beshare)|(bitcoin)|(bolo)|(callto)|(cap)|(chrome)|(chrome-extension)|(cid)|(content)|(crid)|(cvs)|(data)|(dav)|(dict)|(dns)|(ed2k)|(facetime)|(fax)|(feed)|(file)|(finger)|(fish)|(ftp)|(geo)|(gg)|(git)|(gizmoproject)|(go)|(gopher)|(gtalk)|(h323)|(hcp)|(http)|(https)|(iax)|(icap)|(im)|(imap)|(info)|(ipp)|(irc)|(irc6)|(ircs)|(iris)|(iris.beep)|(iris\.xpc)|(iris\.xpcs)|(iris\.lws)|(itms)|(jar)|(keyparc)|(lastfm)|(ldap)|(ldaps)|(lightning)|(magnet)|(mailto)|(maps)|(market)|(message)|(mid)|(mms)|(modem)|(ms-help)|(msnim)|(msrp)|(msrps)|(mtqp)|(mumble)|(mupdate)|(mvn)|(news)|(nfs)|(nntp)|(notes)|(opaquelocktoken)|(palm)|(paparazzi)|(platform)|(pop)|(pres)|(prospero)|(proxy)|(psyc)|(query)|(res)|(resource)|(rmi)|(rsync)|(rtmp)|(rtsp)|(secondlife)|(service)|(sftp)|(sgn)|(shttp)|(sieve)|(sip)|(sips)|(skype)|(smb)|(sms)|(snmp)|(soap\.beep)|(soap\.beeps)|(soldat)|(spotify)|(ssh)|(steam)|(svn)|(tag)|(teamspeak)|(tel)|(telnet)|(tftp)|(things)|(thismessage)|(tip)|(tv)|(udp)|(unreal)|(urn)|(ut2004)|(uuid)|(vemmi)|(ventrilo)|(view-source)|(wais)|(webcal)|(ws)|(wss)|(wtai)|(wyciwyg)|(xfire)|(xmlrpc\.beep)|(xmlrpc\.beeps)|(xmpp)|(xri)|(ymsgr)|(z39\.50r)|(z39\.50s)):/;
export const uriProtocol_should_match: string[] = [
  "http:",
  "https:",
  "ftp:",
  // "ftps:",
  "ssh:",
  "irc:",
  "ircs:",
  "git:",
  "gopher:",
  "telnet:",
  "nntp:",
  "news:",
  "mailto:",
  "sftp:",
  "ldap:",
  "ldaps:",
  "webcal:",
  "xmpp:",
  "callto:",
  "ymsgr:",
  "skype:",
  "sip:",
  "sips:",
  "sms:",
  "mailto:",
  "msnim:",
  "irc:",
  "aim:",
  "gtalk:",
  "feed:",
  "sip:",
  "sips:",
  "sms:",
  "msnim:",
  "aim:",
  "gtalk:",
];
export const uriProtocol_should_not_match: string[] = [
  "http://",
  "https",
  "www.google.com",
  "ftp://ftp.is.co.za/rfc/rfc1808.txt",
];
