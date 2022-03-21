import {
  assert,
  assertMatch,
  assertNotMatch,
} from "https://deno.land/std@0.129.0/testing/asserts.ts";

import * as all from "./mod.ts";

import { dim } from "https://deno.land/std@0.129.0/fmt/colors.ts";

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

  Deno.test({
    name: `-- ${regexpName} ---`,
    // only: regexpName.includes("functionGenerator"),
    fn: async (t) => {
      const step = (name: string, fn: () => void) =>
        t.step({
          name,
          fn,
          // ignore: name.includes("has"),
          sanitizeExit: false,
          sanitizeOps: false,
          sanitizeResources: false,
        });
      const steps = [];

      steps.push(
        step(
          "| with -> " + dim(`${regexpName} with _should_match strings`),
          () => assert(strings_should_match.length > 0),
        ),
      );
      steps.push(
        step(
          "| with -> " + dim(`${regexpName} with _should_not_match strings`),
          () => assert(strings_should_not_match.length > 0),
        ),
      );

      steps.push(
        step(
          "| without -> " + dim(`${regexpName} without flags`),
          () => assert(regexp.flags === ""),
        ),
      );

      const has_tests = strings_should_match.map((string) => {
        const txt = addSurroundingText(string);
        return step(
          "| has -> " + dim(`${txt} has ${regexpName}`),
          () =>
            assertMatch(
              txt,
              regexp,
            ),
        );
      });
      const is_tests = strings_should_match.map((string) =>
        step(
          "| is -> " + dim(`${string} is ${regexpName}`),
          () => assertMatch(string, new RegExp(`^${regexp.source}$`)),
        )
      );

      const is_not_tests = strings_should_not_match.map((string) =>
        step(
          "| is not -> " + dim(`${string} is not ${regexpName}`),
          () => assertNotMatch(string, new RegExp(`^(${regexp.source})$`)),
          // () => assertMatch(string, new RegExp(`(?!(${regexp.source}))`, "")),
        )
      );

      steps.push(
        ...has_tests,
        ...is_tests,
        ...is_not_tests,
      );
      await Promise.all(steps);
    },
  });
}

function addSurroundingText(string: string, length = 10): string {
  const startingText = [..."".padEnd(
    Math.floor(Math.random() * length),
    " ",
  )].map(randomLetter).join("");

  const endingText = [..."".padEnd(
    Math.floor(Math.random() * length),
    " ",
  )].map(randomLetter).join("");

  const output = `${startingText} ${string} ${endingText}`;
  return output;
}

function randomLetter(): string {
  const letters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZ abcdefghijklmnopqrstuvwxyz 123456789-_.,;:!?@#$%^&*()" +
    " ".repeat(50);
  return letters[Math.floor(Math.random() * letters.length)];
}
