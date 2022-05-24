const object = { number: 10 };
const func = function fn(num) {
  return num + this.number;
};

export default function bind(obj, fn) {
  return function xxx(...args) {
    return fn.apply(obj, args);
  };
}

// console.log(bind(object, func));

const fnWithContext = bind(object, func);
console.log(fnWithContext(3)); // 13
