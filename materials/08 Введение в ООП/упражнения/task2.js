//! решение 1
const object = { number: 10 };
const func = function fn(num) {
  return num + this.number;
};

export default function bind(obj, fn) {
  return function xxx(args) {
    return fn.call(obj, args);
  };
}

// console.log(bind(object, func));

const fnWithContext = bind(object, func);
console.log(fnWithContext(3)); // 13


//! решение 2
export default (context, fn) => (...args) => fn.apply(context, args);

//ToDO или так (оно же)
const bind = function (context, fn) {
  return function (...args) { // упаковка входных данных в массив
    return fn.apply(context, args);
  };
};
