// ! три варианта функции суммирования элементов массива

const { result } = require("lodash");

//  TODO через .reduce
function iter(acc, item) {
  return acc + item;
}

const sum = (coll) => coll.reduce(iter, 0);
console.log(sum([1, 2, 3, 4, 5])); // 15

// TODO цикл
function sum(coll) {
  let result = 0;
  for (const item of coll) {
    result += item;
  }
  return result;
}

console.log(sum([1, 2, 3, 4, 5])); // 15

// TODO рекурсивный метод
function sum(coll) {
  if (coll.length === 0) {
    return 0;
  }
  const current = coll.pop();
  return (current + sum(coll));
}

const arr = [1, 2, 3, 4, 5];
console.log(sum(arr)); // 15
console.log(arr); // 15
