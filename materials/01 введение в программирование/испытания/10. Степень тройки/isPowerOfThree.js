//! лучшее
export default (num) => {
  let current = 1;
  while (current < num) {
    current *= 3;
  }

  return current === num;
};

//! вариант 1
function isPowerOfThree(num) {
  if (num === 0) return false;
  let degree = 0;
  while (degree <= 10) {
    const result = 3 ** degree;
    const final = (result === num) ? true : degree += 1;

    if (final === true) { return true; }
    isPowerOfThree(result);
  }
  return false;
}

//! вариант 2
function isPowerOfThree(num) {
  for (let i = 0; i < 10; i += 1) {
    if (3 ** i === num) {
      return true;
    }
  }
  return false;
}

console.log(isPowerOfThree(1));
console.log(isPowerOfThree(3));
console.log(isPowerOfThree(9));
console.log(isPowerOfThree(27));
console.log(isPowerOfThree(81));
console.log(isPowerOfThree(243));
console.log('----');
console.log(isPowerOfThree(0));
console.log(isPowerOfThree(2));
console.log(isPowerOfThree(12));
console.log(isPowerOfThree(16));
console.log(isPowerOfThree(28));
console.log(isPowerOfThree(90));
