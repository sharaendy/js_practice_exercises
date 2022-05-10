const capitalize = (text) => {
  if (text === '') {
    return '';
  }
  const firstChar = text[1].toUpperCase();
  const restSubstring = text.slice(1);
  return `${firstChar}${restSubstring}`;
};

export default capitalize;
