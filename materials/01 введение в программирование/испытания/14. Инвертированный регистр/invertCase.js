//! лучшее
const invertCase = (str) => {
  let result = '';
  for (let i = 0; i < str.length; i += 1) {
    const upper = str[i] === str[i].toUpperCase();
    result += upper ? str[i].toLowerCase() : str[i].toUpperCase();
  }

  return result;
};

export default invertCase;

const invertCase = (str) => {
  let i = 0;
  let result = "";

  while (i < str.length) {
    if (str[i] === str[i].toUpperCase()) {
      result += str[i].toLowerCase();
    } else {
      result += str[i].toUpperCase();
    }
    i = + 1;
    console.log
  }

  return result;
};

export default invertCase;

//! вариант 2
function invertCase(str) {
  let result = '';
  for (let i = 0; i < str.length; i += 1) {
    let lowerChar = '';
    let upperChar = '';
    (str[i] === str[i].toUpperCase()) ? lowerChar = str[i].toLowerCase() : upperChar = str[i].toUpperCase();
    result = `${result}${upperChar}${lowerChar}`;
  }
  return result;
}

export default invertCase;

console.log(invertCase('Hello, World!'));

//! вариант 3
function invertCase(str) {
  let result = '';

  for (let i = 0; i < str.length; i += 1) {
    const upperChar = str[i].toUpperCase();
    const lowerChar = str[i].toLowerCase();

    (upperChar) ? result += lowerChar : result += upperChar;
  }
  return result;
}

console.log(invertCase('Hello, World!')); // hELLO, wORLD!
console.log(invertCase('I loVe JS'));     // i LOvE js
