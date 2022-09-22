// ### Удаление всех повторяющихся значений в строке
// Напишите функцию, которая принимает строку и возвращает новую, в которой все дублирующиеся символы будут удалены.

//! 1 includes
function removeDupes(str) {
  let uniqChars = [];

  str.split('').forEach((item) => {
    uniqChars.includes(item) ? null : uniqChars.push(item);
  });

  return uniqChars.join('');
}

//! 2 Set
function removeDupes(str) {
  const result = new Set(str);
  return Array.from(result).join('');
}


console.log(removeDupes('abcd')) // -> 'abcd'
console.log(removeDupes('aabbccdd')) // -> 'abcd'
console.log(removeDupes('abcddbca')) // -> 'abcd'
console.log(removeDupes('abababcdcdcd')) // -> 'abcd'