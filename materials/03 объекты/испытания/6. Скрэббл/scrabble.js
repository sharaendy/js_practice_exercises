//! лучшее
// Эту функцию можно заменить функцией countBy
// из библиотеки lodash https://lodash.com/docs/#countBy
const countByChars = (str) => {
  const chars = {};

  for (const char of str) {
    const count = _.get(chars, char, 0);
    chars[char] = count + 1;
  }

  return chars;
};

export default (str, word) => {
  const countsChars = countByChars(str);

  for (const char of word.toLowerCase()) {
    const count = _.get(countsChars, char, 0);
    if (count === 0) {
      return false;
    }
    countsChars[char] -= 1;
  }

  return true;
};

//! решение 1
function scrabble(chars, word) {
  if (chars.length < word.length) return false;

  function charCounter(str) {
    const result = {};
    for (const name of str) {
      if (Object.hasOwn(result, name)) {
        result[name.toLowerCase()] += 1;
      } else {
        result[name.toLowerCase()] = 1;
      }
    }
    return result;
  }

  function diff(charsObj, wordObj) {
    for (const key in wordObj) {
      if (wordObj[key] > charsObj[key] || charsObj[key] === undefined) {
        return false;
      }
    }
    return true;
  }

  const charsCount = charCounter(chars);
  console.log('буквы', charsCount);
  const wordCount = charCounter(word);
  console.log('слово', wordCount);
  
  return diff(charsCount, wordCount);
}

console.log(scrabble('scriptingjava', 'JavaScript')); // true
