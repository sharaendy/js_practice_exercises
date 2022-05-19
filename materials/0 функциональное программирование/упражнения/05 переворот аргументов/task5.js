//! функция принимает функцию и меняет местами её аргументы

function flip(fn) {
  return (a, b) => fn(b, a);
}

const sub = (a, b) => a - b;
const wop = flip((a, b) => a ** b);
const reverseSub = flip(sub);
const reverseWop = flip(wop);

// console.log(sub(5, 3)); // 2
// console.log(reverseSub(5, 3)); // -2

console.log(wop(1, 2));
console.log(reverseWop(1, 2));






  // expect(wop(1, 2)).toBe(2);
  // expect(wop(3, 2)).toBe(8);