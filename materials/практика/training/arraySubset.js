// ### Является ли массив подмножеством другого массива

// Напишите функцию, которая проверяет, является ли второй массив подмножеством первого. То есть есть ли элементы второго массива в первом.

function arraySubset(source, subset) {
  if (source.length < subset.length) {
    return false;
  }

  for (let i = 0; i < subset.length; i += 1) {
    if (source.indexOf(subset[i]) === -1) {
      return false;
    }
    delete source[source.indexOf(subset[i])];
  }
  return true;
}

console.log(arraySubset([2, 1, 3], [1, 2, 3])); // -> true
console.log(arraySubset([2, 1, 1, 3], [1, 2, 3])); // -> true
console.log(arraySubset([1, 1, 1, 3], [1, 3, 3])); // -> false
console.log(arraySubset([1, 2], [1, 2, 3])); // -> false
