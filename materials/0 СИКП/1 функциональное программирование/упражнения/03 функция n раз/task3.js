//! рекурсия
function apply(count, fn, value) {
  if (count === 0) return value;
  return apply(count - 1, fn, fn(value));
}

console.log(apply(1, Math.sqrt, 4)); // 2
console.log(apply(0, Math.sqrt, 4)); // 4

console.log(apply(2, Math.sqrt, 16)); // 2
console.log(apply(3, Math.sqrt, 256)); // 2

console.log(apply(1, (v) => v ** 2, 3)); // 9
console.log(apply(5, (v) => v + 10, 3)); // 53

// ! цикл
function apply(count, fn, value) {
  if (count === 0) return value;
  let result = fn(value);
  while (count > 1) {
    result = fn(result);
    count -= 1;
  }
  return result;
}