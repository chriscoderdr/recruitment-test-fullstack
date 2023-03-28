const isNotASpecialCaracter = (character: string) => {
  const re = /[a-z0-9]/gi;
  return re.test(character);
};

const capitalize = (string: string) => {
  return string.slice(0, 1).toUpperCase() + string.slice(1, string.length + 1);
};

export const charUtils = { isNotASpecialCaracter, capitalize };
