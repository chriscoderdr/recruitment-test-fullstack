import { arrayUtils } from "../../src/app/utils/arrayUtils";
import { charUtils } from "../../src/app/utils/charUtils";

test("Test that normal array is reversed", () => {
  const data = [
    "n",
    "2",
    "a",
    "l",
    "9",
    "q",
    "47",
    "i",
    "a",
    "j",
    "b",
    "z",
    "8",
  ];
  const expectedResult = [
    "8",
    "z",
    "b",
    "j",
    "a",
    "i",
    "47",
    "q",
    "9",
    "l",
    "a",
    "2",
    "n",
  ];
  const result = arrayUtils.sortExcludingSpecialChars(data, true);
  expect(result).toEqual(expectedResult);
});

test("Test that special characters stay in place when reverting", () => {
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
  const result = arrayUtils.sortExcludingSpecialChars(data, true);
  expect(result[2]).toBe("&");
  expect(result[6]).toBe("$");
  expect(result[14]).toBe("%");
});

test("if reseve is false should sort in order", () => {
  const data = [
    "q",
    "n",
    "l",
    "a",
    "&",
    "i",
    "$",
    "47",
    "2",
    "z",
    "a",
    "b",
    "8",
    "9",
    "%",
    "j",
  ];

  const expectedResult = ['2', '47', '8', '9', 'a', 'a', 'b', 'i', 'j', 'l', 'n', 'q', 'z'];

  const result = arrayUtils.sortExcludingSpecialChars(data);

  expect(
    result
      .filter((el) => charUtils.isNotASpecialCaracter(el))
  ).toEqual(expectedResult);

  expect(result[4]).toBe('&');
  expect(result[6]).toBe('$');
  expect(result[14]).toBe('%');
});
