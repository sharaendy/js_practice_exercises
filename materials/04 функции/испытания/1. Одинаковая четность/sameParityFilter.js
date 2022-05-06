//! лучший
const isEven = (num) => num % 2 === 0;

export default (arr) => {
  const firstItemParity = isEven(arr[0]);
  return arr.filter((el) => isEven(el) === firstItemParity);
};

//! вариант 1
const isEven = (num) => num % 2 === 0;
const isUneven = (num) => num % 2 !== 0;

const sameParity = (coll) => {
  if (isEven(coll[0])) {
    return coll.filter(isEven);
  } else if (isUneven(coll[0])) {
    return coll.filter(isUneven);
  }
};

console.log(sameParity([-1, 0, 1, -3, 10, -2])); // [-1, 1, -3]
console.log(sameParity([2, 0, 1, -3, 10, -2])); // [2, 0, 10, -2]
console.log(sameParity([])); // []
