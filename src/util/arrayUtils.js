const isNotASpecialCaracter = (character) => {
  const re = /[a-z0-9]/gi;
  return re.test(character);
};

const sortExcludingSpecialChars = (data, reverse) => {
  const specialChars = data
    .slice()
    .map((el, index) => (isNotASpecialCaracter(el) ? null : { el, index }))
    .filter((el) => el != null);

  const nonSpecialChars = data
    .slice()
    .filter((el) => isNotASpecialCaracter(el));

  const sortedNonSpecialChars = nonSpecialChars
    .slice()
    .sort((a, b) => (reverse ? -1 : a - b));

  let finalArray = sortedNonSpecialChars.slice();

  specialChars.forEach((specialChar) => {
    finalArray.splice(specialChar.index, 0, specialChar.el);
  });

  return finalArray;
};

export const arrayUtils = { sortExcludingSpecialChars };
