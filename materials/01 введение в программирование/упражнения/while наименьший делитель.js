const smallestDivisor = (num) => {
  if (num < 1) {
    return NaN;
  }
  else if (num === 1) {
    return 1;
  }

  let i = 2;
  while (i <= num) {
    if (num % i === 0) {
      return i;
    }
    i += 1;
  }
  return i;
};

console.log(smallestDivisor(-3)); //NaN
console.log(smallestDivisor(0)); //NaN
console.log(smallestDivisor(1)); //1
console.log(smallestDivisor(4)); //2
console.log(smallestDivisor(121)); //11
console.log(smallestDivisor(3)); //3
console.log(smallestDivisor(8)); //2
console.log(smallestDivisor(9)); //3
console.log(smallestDivisor(17)); //17
console.log(smallestDivisor(15)); //3