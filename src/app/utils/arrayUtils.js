import { charUtils } from "./charUtils";

const sortExcludingSpecialChars = (data, reverse = false) => {
  const specialChars = data
    .slice()
    .map((el, index) =>
      charUtils.isNotASpecialCaracter(el) ? null : { el, index }
    )
    .filter((el) => el != null);

  const nonSpecialChars = data
    .slice()
    .filter((el) => charUtils.isNotASpecialCaracter(el));

  const sortedNonSpecialChars = reverse
    ? nonSpecialChars.slice().sort((_a, _b) => -1)
    : nonSpecialChars.slice().sort();

  let finalArray = sortedNonSpecialChars.slice();

  specialChars.forEach((specialChar) => {
    finalArray.splice(specialChar.index, 0, specialChar.el);
  });

  return finalArray;
};

export const arrayUtils = { sortExcludingSpecialChars };
