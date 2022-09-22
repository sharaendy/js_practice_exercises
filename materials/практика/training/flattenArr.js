// Напишите функцию, принимающая массив с вложенными массивами и распакуйте в результирующий плоский массов. В результате должны получить новый одномерный массив.

function flatten(array) {
  const flattenArr = [];

  for (const item of array) {
    if (Array.isArray(item)) {
      const array2 = flatten(item);
      for (const item2 of array2) {
        flattenArr.push(item2);
      }
    } else {
      flattenArr.push(item);
    }
  }

  return flattenArr;
}

console.log(flatten([0, [1], [[2, 3]], [[[4]]]])); // -> [0, 1, 2, 3, 4]

//! 2
const flatten = (list) => list.reduce((acc, element) => {
  return (Array.isArray(element) ? [...acc, ...flatten(element)] : [...acc, element]);  
}, []);

const list = [1, 2, [[3], 4], 5, [[6, 7], 8], 9];
console.log('final:', flatten(list));
