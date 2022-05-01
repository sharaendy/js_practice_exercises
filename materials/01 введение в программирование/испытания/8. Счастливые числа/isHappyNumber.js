//! лучшее
export default (num) => {
  let number = num;
  for (let i = 0; i < 10; i += 1) {
    number = sumOfSquareDigits(number);
    if (number === 1) {
      return true;
    }
  }
  return false;
};

//! вариант 1
function isHappyNumber(num) {
  if (num === 0) return false;

  let result = num;
  let i = 1;
  while (i <= 10) {
    if (sumOfSquareDigits(result) === 1) {
      return true;
    }
    result = sumOfSquareDigits(result);
    i += 1;
  }
  return false;
}

console.log(isHappyNumber(90));

//! вариант 2
function isHappyNumber(num) {
  let result = num;
  let result2 = 0;

  for (let i = 1; i <= 10; i += 1) {
    for (let z = 0; z < String(result).length; z += 1) {
      result2 += Number(String(result)[z]) ** 2;
    }
    result = result2;
    result2 = 0;
  }
  return (result === 1) ? true : false;
}

// isHappyNumber(7);
console.log(isHappyNumber(7)); //true
console.log(isHappyNumber(11));
console.log(isHappyNumber(14));
