// ### Какая строка встречается чаще всего

// Напишите функцию, которая принимает массив строк и возвращает самую частовстречающуюся строку в этом массиве. Если таких строк несколько, то нужно вернуть первую, идя слева на право.

//! 1
function highestFrequency(array) {
  const result = array.reduce((acc, item) => {
    if (acc.hasOwnProperty(item)) {
      acc[item] = acc[item] += 1;
      return acc;
    }
    acc[item] = 1;
    return acc;
  }, {});

  let greatestValue = 0;
  let greatestKey = null;

  for (const [key, value] of Object.entries(result)) {
    if (value > greatestValue) {
      greatestKey = key;
      greatestValue = value;
    }
  }

  return greatestKey;
}

console.log(highestFrequency(['a', 'b', 'c', 'c', 'd', 'e'])); // -> c
console.log(highestFrequency(['abc', 'def', 'abc', 'def', 'abc'])); // -> abc
console.log(highestFrequency(['abc', 'def'])); // -> abc
console.log(
  highestFrequency([
    'abc',
    'abc',
    'def',
    'def',
    'def',
    'ghi',
    'ghi',
    'ghi',
    'ghi',
  ]),
); // -> ghi
