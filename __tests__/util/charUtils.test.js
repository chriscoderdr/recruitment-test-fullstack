import { charUtils } from "../../src/app/utils/charUtils";

test("Any alphanumeric character must return true", () => {
  const alphaNumericChars = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "v",
    "y",
    "z",
  ];
  alphaNumericChars.forEach((el) => {
    expect(charUtils.isNotASpecialCaracter(el)).toBeTruthy();
  });
});

test("Non alpha numeric characters must return false", () => {
  const nonExtensiveNonAlphaChars = [
    "!",
    "@",
    "#",
    "$",
    "%",
    "^",
    "&",
    "*",
    "(",
    ")",
    "-",
    "_",
    "+",
    "=",
    "[",
    "]",
    "{",
    "}",
    ":",
    "'",
    ";",
    '"',
    "<",
    ",",
    ">",
    ".",
    "/",
    "?",
  ];
  nonExtensiveNonAlphaChars.forEach((el) => {
    expect(charUtils.isNotASpecialCaracter(el)).toBeFalsy();
  });
});
