import { arrayUtils } from "./util/arrayUtils";

const data = [
  "n",
  "2",
  "&",
  "a",
  "l",
  "9",
  "$",
  "q",
  "47",
  "i",
  "a",
  "j",
  "b",
  "z",
  "%",
  "8",
];

console.log(arrayUtils.sortExcludingSpecialChars(data, true));
