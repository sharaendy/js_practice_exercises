// !лучшее
const reverseInt = (num) => {
  const numAsStr = String(Math.abs(num));
  let reversedStr = '';

  for (let i = numAsStr.length - 1; i >= 0; i -= 1) {
    reversedStr += numAsStr[i];
  }
  const reversedModule = Number(reversedStr);

  return num < 0 ? -reversedModule : reversedModule;
};

// !вариант 1
const reverseInt = (num) => {
  let result = "";
  let i = Number(String(num).length);

  while (i > 0) {
    i -= 1;
    if (String(num)[i] === "-") {
      result = (-1) * result;
    } else if (String(num)[i] === "0") {
      result += "";
    } else {
      result += String(num)[i];
    }
  }
  return Number(result);
};

export default reverseInt;

// !вариант 2
const reverseInt = (num) => {
  const numToString = String(num);
  let result = '';
  let i;

  (numToString[0] === '-') ? i = 1 : i = 0;
  while (i < numToString.length) {
    result = `${numToString[i]}${result}`;
    i += 1;
  }
  result = Number(result);
  return (num < 0) ? -result : result;
};

export default reverseInt;

// !вариант 3
function reverseInt(num) {
  let result = '';
  const numToString = String(num);

  for (let i = numToString.length - 1; i >= 0; i -= 1) {
    if (numToString[i] === '-') {
      result += ''
    } else {
      result += numToString[i];
    }
  }
  return Number(result);
}
