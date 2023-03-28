import { charUtils } from "./charUtils";

type SpecialChar = {
  index: number;
  el: string;
};

const sortExcludingSpecialChars = (data: string[], reverse = false) => {
  const specialChars: SpecialChar[] = data
    .slice()
    .map((el: string, index: number) =>
      charUtils.isNotASpecialCaracter(el) ? null : { el, index }
    )
    .filter((el: any) => el != null) as SpecialChar[];

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
