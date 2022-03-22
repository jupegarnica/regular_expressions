import {
    assertMatch,
    assertNotMatch,
} from "https://deno.land/std@0.129.0/testing/asserts.ts";

import * as all from "./mod.ts";

const allKeysImported = Object.keys(all);
const allImported: Record<string, RegExp | string[]> = all;

export const allRegularExpressionsImported = allKeysImported.filter((key) =>
    allImported[key] instanceof RegExp
);

for (const regexpName of allRegularExpressionsImported) {
    const regexp = allImported[regexpName] as RegExp;
    const strings_should_match =
        allImported[regexpName + "_should_match"] as string[];
    const strings_should_not_match =
        allImported[regexpName + "_should_not_match"] as string[];

    const regexExactly = new RegExp(`^(${regexp.source})$`)
    const regexNotExactly = new RegExp(`^${regexp.source}$`);
    // const regexNotExactly = new RegExp(`^(?!${regexp.source})$`);

    Deno.bench({
        name: `| ${regexpName}`.padEnd(30, " "),
        n: 1e5,
        warmup: 1e5,
        // only: regexpName.includes("functionGenerator"),
        fn: () => {
            assertMatch(strings_should_match[0], regexNotExactly);
            assertMatch(strings_should_match[0], regexp);
            assertNotMatch(strings_should_not_match[0], regexExactly);
        },
    });

}
