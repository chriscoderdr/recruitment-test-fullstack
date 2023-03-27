const isNotASpecialCaracter = (character) => {
  const re = /[a-z0-9]/gi;
  return re.test(character);
};

export const charUtils = { isNotASpecialCaracter };
