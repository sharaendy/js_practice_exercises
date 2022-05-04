function scrabble(chars, word) {
  if (chars.length < word.length) return false;

  function charCounter(str) {
    const result = {};
    for (const name of str) {
      if (Object.hasOwn(result, name)) {
        result[name] += 1;
      } else {
        result[name] = 1;
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
