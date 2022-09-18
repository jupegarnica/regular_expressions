const raw = String.raw;

/**
 * Should match a js reserved word
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Lexical_grammar#keywords
 */
export const reservedWords =
  /(\b(?:break|case|catch|class|const|continue|debugger|default|delete|do|else|export|extends|finally|for|function|if|import|in|instanceof|new|return|super|switch|this|throw|try|typeof|var|void|while|with|yield|implements|interface|let|package|private|protected|public|static|yield|enum|await|abstract|boolean|byte|char|double|final|float|goto|int|long|native|short|synchronized|throws|transient|volatile|null|true|false)\b)/;

export const reservedWords_description = `Should match a js reserved word\nhttps://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Lexical_grammar#keywords`;
export const reservedWords_should_match: string[] = [
  // ES5
  "break",
  "case",
  "catch",
  "class",
  "const",
  "continue",
  "debugger",
  "default",
  "delete",
  "do",
  "else",
  "export",
  "extends",
  "finally",
  "for",
  "function",
  "if",
  "import",
  "in",
  "instanceof",
  "new",
  "return",
  "super",
  "switch",
  "this",
  "throw",
  "try",
  "typeof",
  "var",
  "void",
  "while",
  "with",
  "yield",
  // ES6
  "implements",
  "interface",
  "let",
  "package",
  "private",
  "protected",
  "public",
  "static",
  "yield",
  "enum",
  // on ESM
  "await",
  // ES3 ES4
  "abstract",
  "boolean",
  "byte",
  "char",
  "double",
  "final",
  "float",
  "goto",
  "int",
  "long",
  "native",
  "short",
  "synchronized",
  "throws",
  "transient",
  "volatile",
  "null",
  "true",
  "false",
];
export const reservedWords_should_not_match: string[] = [
  ...reservedWords_should_match.map((word) => word.toUpperCase()),
];
const variableCharacters = /([a-zA-Z$_][a-zA-Z0-9$_]*)/;


/**
 * Should match a valid js variable/function/class name * https://developer.mozilla.org/en-US/docs/Glossary/Identifier
 */
export const identifierNames = new RegExp(
  `((?!${reservedWords.source})${variableCharacters.source})`,
);
export const identifierNames_description = `Should match a valid js variable/function/class name\nhttps://developer.mozilla.org/en-US/docs/Glossary/Identifier`;
export const identifierNames_should_match: string[] = [
  "a",
  "Z",
  "FOO",
  "a1",
  "a_9",
  "_10",
  "$1",
  "$H",
  "$",
  "whileDo",
  "_",
];
export const identifierNames_should_not_match: string[] = [
  "1",
  "1a",
  "name with space",
  "a-1a",
  "b%",
  "while",
  "do",
  "if",
  "in",
  "for",
  "let",
];
/**
 * Should match a js anonymous classic function definition
 */

export const functionAnonymous = /function(?<noName>\s*)\(.*\)\s*\{(.*)\}/;
export const functionAnonymous_description = `Should match a js anonymous classic function definition`;
export const functionAnonymous_should_match: string[] = [
  "function(){}",
  "function (...args) { }",
  "function (a1,a2,a3) { }",
  "function() {return 1;}",
  "function (){ if(true) { return 1; } }",
];
export const functionAnonymous_should_not_match: string[] = [
  "function name(){return 2;}",
  "func(){}",
  "function(a1,a2,a3)",
];

/**
 * Should match a js classic function definition
 */

export const functionClassic = new RegExp(
  functionAnonymous.source.replace(
    raw`(?<noName>\s*)`,
    raw`\s+(?<name>(${identifierNames.source}))\s*`,
  ),
);
export const functionClassic_description = `Should match a js classic function definition`;

export const functionClassic_should_match: string[] = [
  "function name(param1, param2) { }",
  "function name() {  }",
  "function name () {}",
  "function name         () {}",
  "function name() {  return 'hello'; }",
  "function name() {  if(true) { return 42 } }",
];
export const functionClassic_should_not_match: string[] = [
  "function while() {}",
  "function function() { }",
  "functionname () {  return 'hello'; }",
  "function name     foo    () {}",
  "function () {}",
  " () => {}",
  "function myFunction(param1, param2) {",
];

/**
 * Should match a js arrow function definition
 */

// TODO: make argumente math a valid identifier name
export const functionArrow = /([a-zA-Z0-9-$]+)|(\(.*\))\s*=>\s*(.*)/;
export const functionArrow_description = `Should match a js arrow function definition`;
export const functionArrow_should_match: string[] = [
  "A => A",
  "() => 42",
  "(a,b,c) => 42",
  "(...args) => 42",
  "() => {}",
  "() => { return 'hello'; }",
];
export const functionArrow_should_not_match: string[] = [
  "A,B => A",
  "functionname () {  return 'hello'; }",
  "function () {}",
  "function myFunction(param1, param2) {",
];

/**
 * Should match a js async function definition
 */
export const functionAsync = new RegExp(
  raw
    `async\s+((${functionAnonymous.source})|(${functionClassic.source})|(${functionArrow.source}))`,
);
export const functionAsync_description = `Should match a js async function definition`;
export const functionAsync_should_match: string[] = [
  "async function(){}",
  "async function named() {}",
  "async function (...args) { }",
  "async function (a1,a2,a3) { }",
  "async function() {return 1;}",
  "async function (){ if(true) { return 1; } }",
  "async function name(){return 2;}",
  "async () => {return 2;}",
];
export const functionAsync_should_not_match: string[] = [
  "async func(){}",
  "async functionA(a1,a2,a3)",
];

/**
 * Should match a js generator function definition
 */
export const functionGenerator = new RegExp(
  raw`((${functionAnonymous.source})|(${functionClassic.source}))`.replaceAll(
    "(function",
    raw`(function\*`,
  ),
);
export const functionGenerator_description = `Should match a js generator function definition`;

export const functionGenerator_should_match: string[] = [
  "function*(){}",
  "function* named() {}",
  "function* (...args) { }",
];
export const functionGenerator_should_not_match: string[] = [
  "function (){}",
  "async function (){}",
  "function* while() {}",
  "async function* (){}",
  "function named(a1,a2,a3)",
  "async function* named(a1,a2,a3)",
];

/**
 * Should match a js async generator function. Only matches the syntax of `async function*` not any other way of creating an async generator or iterator.
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function
 */
export const functionAsyncGenerator = new RegExp(
  raw`async\s+${functionGenerator.source}`,
);
export const functionAsyncGenerator_description = `Should match a js async generator function. Only matches the syntax of \`async function*\` not any other way of creating an async generator or iterator.\nhttps://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function`;

export const functionAsyncGenerator_should_match: string[] = [
  "async function* (){}",
  "async function* named() {}",
  "async function* (...args) { }",
  "async function* named(a1,a2,a3) { yield 42; return 43; }",
];
export const functionAsyncGenerator_should_not_match: string[] = [
  "function (){}",
  "async function (){}",
  "function* while() {}",
  "async function (){}",
  "function named(a1,a2,a3)",
];

const classDefinitionAnyName =
  /class\s+[a-zA-Z$_][a-zA-Z0-9$_]*\s*(extends\s+[a-zA-Z$_][a-zA-Z0-9$_]*)?\s*\{.*\}/;

/**
 * Should match a js class definition
 */

export const classDefinition = new RegExp(
  classDefinitionAnyName.source.replaceAll(
    raw`[a-zA-Z$_][a-zA-Z0-9$_]*`,
    raw`${identifierNames.source}`,
  ),
);
export const classDefinition_description = `Should match a js class definition`;

export const classDefinition_should_match: string[] = [
  "class A{ }",
  "class A{}",
  "class A { }",
  "class _ { }",
  "class $ { }",
  "class A extends B { }",
  "class A extends B{ }",
  "class A extends B { constructor() { } }",
  "class A extends B { constructor() { super(); } }",
  "class A extends B { constructor() { super(); } foo() { } }",
  "class A extends B { constructor() { super(); } foo() { } bar() { } }",
];
export const classDefinition_should_not_match: string[] = [
  "class 1foo{}",
  "class foo extends 3hola{}",
  "class A extends 1{ }",
  "class while {}",
  "class foo extends if{}",
  "classB{}",
  "class MyClass ",
  "class MyClass {",
  "CLASS A {}",
  "class A extendsB{ }",
];

const globalScopeDeno = [
  "Deno",
  "queueMicrotask",
  "dispatchEvent",
  "addEventListener",
  "removeEventListener",
  "AbortSignal",
  "AbortController",
  "atob",
  "btoa",
  "clearInterval",
  "clearTimeout",
  "crypto",
  "fetch",
  "performance",
  "setInterval",
  "setTimeout",
  "structuredClone",
  "location",
  "window",
  "self",
  "navigator",
  "close",
  "closed",
  "alert",
  "confirm",
  "prompt",
  "localStorage",
  "sessionStorage",
  "onload",
  "onunload",
];

const globalScopeNode = [
  "global",
  "clearInterval",
  "clearTimeout",
  "setInterval",
  "setTimeout",
  "queueMicrotask",
  "performance",
  "clearImmediate",
  "setImmediate",
  "structuredClone",
];

const globalScopeBrowser = [
  "window",
  "self",
  "document",
  "name",
  "location",
  "customElements",
  "history",
  "locationbar",
  "menubar",
  "personalbar",
  "scrollbars",
  "statusbar",
  "toolbar",
  "status",
  "closed",
  "frames",
  "length",
  "top",
  "opener",
  "parent",
  "frameElement",
  "navigator",
  "origin",
  "external",
  "screen",
  "innerWidth",
  "innerHeight",
  "scrollX",
  "pageXOffset",
  "scrollY",
  "pageYOffset",
  "visualViewport",
  "screenX",
  "screenY",
  "outerWidth",
  "outerHeight",
  "devicePixelRatio",
  "clientInformation",
  "screenLeft",
  "screenTop",
  "defaultStatus",
  "defaultstatus",
  "styleMedia",
  "onsearch",
  "isSecureContext",
  "performance",
  "onappinstalled",
  "onbeforeinstallprompt",
  "crypto",
  "indexedDB",
  "webkitStorageInfo",
  "sessionStorage",
  "localStorage",
  "onbeforexrselect",
  "onabort",
  "onblur",
  "oncancel",
  "oncanplay",
  "oncanplaythrough",
  "onchange",
  "onclick",
  "onclose",
  "oncontextmenu",
  "oncuechange",
  "ondblclick",
  "ondrag",
  "ondragend",
  "ondragenter",
  "ondragleave",
  "ondragover",
  "ondragstart",
  "ondrop",
  "ondurationchange",
  "onemptied",
  "onended",
  "onerror",
  "onfocus",
  "onformdata",
  "oninput",
  "oninvalid",
  "onkeydown",
  "onkeypress",
  "onkeyup",
  "onload",
  "onloadeddata",
  "onloadedmetadata",
  "onloadstart",
  "onmousedown",
  "onmouseenter",
  "onmouseleave",
  "onmousemove",
  "onmouseout",
  "onmouseover",
  "onmouseup",
  "onmousewheel",
  "onpause",
  "onplay",
  "onplaying",
  "onprogress",
  "onratechange",
  "onreset",
  "onresize",
  "onscroll",
  "onsecuritypolicyviolation",
  "onseeked",
  "onseeking",
  "onselect",
  "onslotchange",
  "onstalled",
  "onsubmit",
  "onsuspend",
  "ontimeupdate",
  "ontoggle",
  "onvolumechange",
  "onwaiting",
  "onwebkitanimationend",
  "onwebkitanimationiteration",
  "onwebkitanimationstart",
  "onwebkittransitionend",
  "onwheel",
  "onauxclick",
  "ongotpointercapture",
  "onlostpointercapture",
  "onpointerdown",
  "onpointermove",
  "onpointerup",
  "onpointercancel",
  "onpointerover",
  "onpointerout",
  "onpointerenter",
  "onpointerleave",
  "onselectstart",
  "onselectionchange",
  "onanimationend",
  "onanimationiteration",
  "onanimationstart",
  "ontransitionrun",
  "ontransitionstart",
  "ontransitionend",
  "ontransitioncancel",
  "onafterprint",
  "onbeforeprint",
  "onbeforeunload",
  "onhashchange",
  "onlanguagechange",
  "onmessage",
  "onmessageerror",
  "onoffline",
  "ononline",
  "onpagehide",
  "onpageshow",
  "onpopstate",
  "onrejectionhandled",
  "onstorage",
  "onunhandledrejection",
  "onunload",
  "alert",
  "atob",
  "blur",
  "btoa",
  "cancelAnimationFrame",
  "cancelIdleCallback",
  "captureEvents",
  "clearInterval",
  "clearTimeout",
  "close",
  "confirm",
  "createImageBitmap",
  "fetch",
  "find",
  "focus",
  "getComputedStyle",
  "getSelection",
  "matchMedia",
  "moveBy",
  "moveTo",
  "open",
  "postMessage",
  "print",
  "prompt",
  "queueMicrotask",
  "releaseEvents",
  "reportError",
  "requestAnimationFrame",
  "requestIdleCallback",
  "resizeBy",
  "resizeTo",
  "scroll",
  "scrollBy",
  "scrollTo",
  "setInterval",
  "setTimeout",
  "stop",
  "structuredClone",
  "webkitCancelAnimationFrame",
  "webkitRequestAnimationFrame",
  "chrome",
  "caches",
  "cookieStore",
  "ondevicemotion",
  "ondeviceorientation",
  "ondeviceorientationabsolute",
  "oncontextlost",
  "oncontextrestored",
  "showDirectoryPicker",
  "showOpenFilePicker",
  "showSaveFilePicker",
  "originAgentCluster",
  "trustedTypes",
  "speechSynthesis",
  "onpointerrawupdate",
  "crossOriginIsolated",
  "scheduler",
  "openDatabase",
  "webkitRequestFileSystem",
  "webkitResolveLocalFileSystemURL",
  "console",
];

const globalScopeAll = [
  ...new Set([...globalScopeDeno, ...globalScopeNode, ...globalScopeBrowser]),
];

/**
 * Should match any global variable
 */
export const globalScope = new RegExp(
  raw`${globalScopeAll.join("|")}`,
);
export const globalScope_description = "Should match any global variable";

export const globalScope_should_match = [
  "Deno",
  "fetch",
  "window",
  "global",
];

export const globalScope_should_not_match = [
  "DENO",
  "fETCH",
  "Window",
  "Global",
];

// TODO Work in progress
// /**
//  * Should match a js pure function. But for now, it's just a function declaration with no access to the global scope
//  * https://www.freecodecamp.org/news/what-is-a-pure-function-in-javascript-acb887375dfe/ *
//  */

// export const functionPure = new RegExp(
//     functionAsync.source
//         .replaceAll(
//             raw`async\s+`,
//             raw`(async\s+)?`
//         )
//         .replaceAll(
//             raw`function`,
//             raw`function(\*)?`,
//         )
//         // .replaceAll(
//         //     /\(\.\*\)/g,
//         //     raw`((?!${globalScope.source}).*)`
//         // )
// )
// // console.log('---------');
// // console.log(functionPure.source.replaceAll(/\(\.\*\)/g, red(raw`((?!${globalScope.source}).*)`)));
// // console.log('---------');

// export const functionPure_should_match = [
//     "async function() {}",
//     "function foo() {}",
//     "function foo() { return 1; }",
//     "async function foo() {}",
//     "function* foo() { }",
//     "async function foo() {}",
//     "function fetch () {}",
//     "function (a) {a}",
//     "(a) => {return a}",
//     "async (a) => {return a}",
//     "function foo(a, b) {}",
//     "function foo(a, b) { return a + b; }",
// ]

// export const functionPure_should_not_match = [
//     "function () ",
//     // "function (a) { console.log(a); }",
//     "function (a, b) { await  fetch('/ups') }",
//     // "function foo() { console.log('foo'); }",
//     // "function foo() { atob('foo'); }",
//     // "async function (a, b) { await  fetch('/ups') }",
// ]
