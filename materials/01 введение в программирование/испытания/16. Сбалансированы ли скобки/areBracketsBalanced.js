//! лучшее
export default (str) => {
  let acc = 0;
  for (let i = 0; i < str.length; i += 1) {
    const symbol = str[i];
    acc = symbol === '(' ? acc + 1 : acc - 1;
    if (acc < 0) {
      return false;
    }
  }
  return acc === 0;
};


//! решение 1
function areBracketsBalanced(str) {
  if (str === '') return true;

  let counter = 0;
  for (let i = 0; i < str.length; i += 1) {
    (str[i] === '(') ? counter += 1 : counter -= 1;
    if (counter < 0) {
      return false;
    }
  }
  return (counter === 0);
}

export default areBracketsBalanced;

console.log(areBracketsBalanced('()'));
console.log(areBracketsBalanced('(())'));
console.log(areBracketsBalanced('(()((((())))))'));
console.log(areBracketsBalanced(''));
console.log(areBracketsBalanced('(())(())'));
console.log('-----')
console.log(areBracketsBalanced('(('));
console.log(areBracketsBalanced('())('));
console.log(areBracketsBalanced('((())'));
console.log(areBracketsBalanced('(())())'));
console.log(areBracketsBalanced('(()(()))))'));
console.log(areBracketsBalanced(')'));
console.log(areBracketsBalanced('())(()'));

//! решение 2
function areBracketsBalanced(str) {
  if (str[0] === ')') return false;

  let leftBracketsCount = 0;
  let rightBracketsCount = 0;

  for (let i = 0; i < str.length; i += 1) {
    if (str[i] === '(') {
      leftBracketsCount += 1;
    } else {
      rightBracketsCount += 1;
    }
  }
  return (leftBracketsCount === rightBracketsCount) ? true : false;
}

console.log(areBracketsBalanced('(())'));   // true
console.log(areBracketsBalanced('(()())')); // true
console.log(areBracketsBalanced('((())'));  // false
console.log(areBracketsBalanced(')((())'));  // false
console.log(areBracketsBalanced('(()(()))'));  // true
