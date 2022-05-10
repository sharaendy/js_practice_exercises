//! лучшее
const calcInPolishNotation = (array) => {
  const stack = [];
  const operators = ['*', '/', '+', '-'];

  for (const value of array) {
    if (!operators.includes(value)) {
      stack.push(value);
      continue;
    }

    const b = stack.pop();
    const a = stack.pop();
    let result;

    switch (value) {
      case '*':
        result = a * b;
        break;
      case '/':
        result = b === 0 ? null : a / b;
        break;
      case '+':
        result = a + b;
        break;
      case '-':
        result = a - b;
        break;
      default:
        break;
    }

    if (result === null) {
      return result;
    }

    stack.push(result);
  }

  return stack.pop();
};

//! решение 1
function calcInPolishNotation(coll) {
  const stack = [];
  let mathResult = 0;
  for (const item of coll) {
    if (Number.isInteger(item)) {
      stack.push(item);
    } else {
      const firstOperand = stack.pop();
      const secondOperand = stack.pop();
      switch (item) {
        case '+':
          mathResult = secondOperand + firstOperand;
          stack.push(mathResult);
          break
        case '-':
          mathResult = secondOperand - firstOperand;
          stack.push(mathResult);
          break
        case '*':
          mathResult = secondOperand * firstOperand;
          stack.push(mathResult);
          break
        case '/':
          mathResult = secondOperand / firstOperand;
          stack.push(mathResult);
          break
      }
    }
  }
  if (stack[0] === Infinity) {
    return null
  }
  return stack.pop();
}

console.log(calcInPolishNotation([1, 2, '+', 4, '*', 3, '+']));//.toBe(15);
console.log(calcInPolishNotation([1, 2, '+', 4, '*', 3, '/']));//.toBe(4);
console.log(calcInPolishNotation([7, 2, 3, '*', '-']));//.toBe(1);
console.log(calcInPolishNotation([1, 2, '+', 2, '*']));//.toBe(6);
console.log(calcInPolishNotation([1, 2, '+', 4, '*', 0, '/']));//.toBe(null);
console.log(calcInPolishNotation([3, 0, '/', 2, '+']));//.toBe(null);
console.log(calcInPolishNotation([7, 12, 2, '/', '-']));//.toBe(1);
console.log(calcInPolishNotation([8, 6, 2, '-', '/']));//.toBe(2);
