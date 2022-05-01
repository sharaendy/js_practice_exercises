//! лучшее
const isPerfect = (num) => {
  if (num < 6) return false;

  let sum = 0;
  const upperBorder = num / 2;

  for (let divisor = 1; divisor <= upperBorder; divisor += 1) {
    if (num % divisor === 0) sum += divisor;
  }

  return sum === num;
};

//! вариант 1
//TODO функция должна присылать False на отрицательные числа и ноль. У меня присылает, но полуилось это случайно.
function isPerfect(num) {
  let result = 1;
  for (let i = 2; i < num; i += 1) {
    result = (num % i === 0) ? result + i : result + 0;
  }
  return (result === num);
}

console.log(isPerfect(6)); //t
console.log(isPerfect(28)); //t
console.log(isPerfect(496)); //t
console.log(isPerfect(8128)); //t
console.log('----'); //t
console.log(isPerfect(-6)); //f
console.log(isPerfect(-28)); //f
console.log(isPerfect(44)); //f
console.log(isPerfect(0)); //f
console.log(isPerfect(10)); //f
console.log(isPerfect(44)); //f
