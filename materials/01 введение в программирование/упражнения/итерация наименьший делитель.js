const smallestDivisor = (num) => {
  if (num === 1) {
    return 1;
  }

  const iter = (counter) => {
    if (num % counter === 0) {
      return counter;
    }
    return iter(counter + 1);
  };

  return iter(2);
};

console.log(smallestDivisor(1)); //1
console.log(smallestDivisor(4)); //2
console.log(smallestDivisor(8)); //2
console.log(smallestDivisor(3)); //3
console.log(smallestDivisor(9)); //3
console.log(smallestDivisor(17)); //17
console.log(smallestDivisor(15)); //3
console.log(smallestDivisor(121)); //11