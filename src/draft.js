const compose = (fn1, fn2) => (num) => fn1(fn2(num));
const f = compose(Math.sqrt, Math.abs);

console.log(f(-4)); //2

// console.log(compose((v) => v, (v) => v)(10));         // 10
// console.log(compose((v) => v + 2, (v) => v)(10));     // 12
// console.log(compose((v) => v, v => (v) - 2)(10));     // 8
// console.log(compose((v) => v ** 2, (v) => v - 2)(2)); // 0
// console.log(compose((v) => v - 2, (v) => v ** 2)(2)); // 2
