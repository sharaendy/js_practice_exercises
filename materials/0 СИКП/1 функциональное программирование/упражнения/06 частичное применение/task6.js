const pow = (a, b) => a ** b;

// const f1 = partialApply(pow, 2);
const f2 = partialApply((a, b) => a * b, 5);

function partialApply(fn, arg) {
  return (num) => fn(num, arg);
}

// console.log(f1(1)); // 1
// console.log(f1(10)); // 100
console.log(f2(2)); // 10
console.log(f2(5)); // 25
