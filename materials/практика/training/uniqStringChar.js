// Напишите функцию, которая определяет уникальны ли все символы в строке. Регистр должен учитываться: ‘a’ и ‘A’ разные символы.

function isUnique(string) {
  const uniqChars = [];
  string.split('').forEach((item) => {
    if (!uniqChars.includes(item)) {
      uniqChars.push(item);
    }
  });
  return uniqChars.join('') === string;
}

console.log(isUnique('abcdef')); // -> true
console.log(isUnique('1234567')); // -> true
console.log(isUnique('abcABC')); // -> true
console.log(isUnique('abcadef')); // -> false
