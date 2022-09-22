const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
//! 1-reduce
const arraySum = (coll) => coll.reduce((acc, item) => acc += item, 0);
console.log(arraySum(array));

//! 2-curcle
const arraySum = (coll) => {
  let sum = 0;
  coll.forEach((num) => sum += num);
  return sum;
};
console.log(arraySum(array));

//! 3-циклом
const arraySum = (coll) => {

};

console.log(arraySum(array));
