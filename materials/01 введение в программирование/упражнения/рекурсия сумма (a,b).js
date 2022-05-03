const sequenceSum = (begin, end) => {
  if (begin > end) {
    return NaN;
  } else {
    if (begin === end) {
      return end;
    }
    else {
      return begin + sequenceSum(begin + 1, end);
    }
  }
};

console.log(sequenceSum(0, 0)); //0
console.log(sequenceSum(1, 1)); //1
console.log(sequenceSum(1, 5)); //15
console.log(sequenceSum(2, 6)); //20
console.log(sequenceSum(-1, -1)); //-1
console.log(sequenceSum(-5, 4)); //-5
console.log(sequenceSum(2, 1)); //NaN
console.log(sequenceSum(1, -5)); //NaN