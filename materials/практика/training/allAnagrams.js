// ### Анаграммы

// Напишите функцию, которая проверяет, являются ли все элементы в массиве анаграммами друг друга.

function allAnagrams(array) {
  const reference = array[0].split('').sort().join();
  let result = true;

  array.forEach((item) => {
    if (item.split('').sort().join() !== reference) {
      result = false;
    }
  });
  return result;
}

console.log(allAnagrams(['abcd', 'bdac', 'cabd'])); // true
console.log(allAnagrams(['abcd', 'bdXc', 'cabd'])); // false
