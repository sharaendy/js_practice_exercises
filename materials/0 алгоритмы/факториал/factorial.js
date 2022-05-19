//! рекурсия
const factorial = (num) => {
  console.log('num =', num);
  if (num === 1) {
    return 1;
  }
  return factorial(num - 1) * num;
};

//! рекурсия с while
const factorial2 = (num) => {
  while (num > 1) {
    return num * factorial2(num - 1);
  }
  return 1;
};

//! цикл
const factorial3 = (num) => {
  if (num <= 0) return null;

  let result = 1;
  for (let i = num; i > 1; i -= 1) {
    result *= i;
  }
  return result;
};

console.log(factorial2(3));
