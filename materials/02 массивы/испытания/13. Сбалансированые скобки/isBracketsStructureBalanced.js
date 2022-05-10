//! решение 1
function isBracketStructureBalanced(str) {
  const strToArray = str.split('');
  const leftColl = ['(', '[', '{', '<'];
  const rightColl = [')', ']', '}', '>'];
  const stack = [];

  if (rightColl.includes(strToArray[0])) return false;

  for (const item of strToArray) {
    if (leftColl.includes(item)) {
      stack.push(item);
    } else {
      const currentIndex = rightColl.indexOf(item);
      const neededIndex = leftColl.indexOf(stack[stack.length - 1]);
      if (currentIndex === neededIndex) {
        stack.pop();
      } else {
        return false;
      }
    }
  }
  return (stack.length === 0);
}

console.log(isBracketStructureBalanced('[({})]'));  // true
console.log(isBracketStructureBalanced('(>'));  // false
console.log(isBracketStructureBalanced('()'));  // true
console.log(isBracketStructureBalanced('({}[])'));  // true
console.log(isBracketStructureBalanced('{<>}}')); // false
console.log(isBracketStructureBalanced('([)]')); // false
console.log(isBracketStructureBalanced('[({<})]>'));  // false ?

//! решение 2
function isBracketStructureBalanced(str) {
  if (str === '') return true;

  const openingSymbols = ['(', '[', '{', '<'];
  const closingSymbols = [')', ']', '}', '>'];

  const strToArr = str.split('');
  const stack = [];

  for (const item of strToArr) {
    // console.log('начало цикла для =', item);
    if (openingSymbols.includes(item)) {
      stack.push(item);
    }

    else if (closingSymbols.includes(item)) {
      let indexClose = closingSymbols.indexOf(item);

      if (!stack[stack.length - 1]) {
        return false;
      }
      if (stack[stack.length - 1] === openingSymbols[indexClose]) {
        stack.pop()
      }
      else {
        stack.push(item);
      }
    }

    // console.log('стак в конце цикла', stack);
    // console.log('длина stack =', stack.length);
  }
  // console.log('финальная длина stack =', stack.length);
  return stack.length === 0;
}


//! решение 3 (лучшее)
const openingSymbols = ['(', '[', '{', '<'];
const closingSymbols = [')', ']', '}', '>'];

const isOpeningSymbol = (symbol) => openingSymbols.includes(symbol);
const getClosingSymbolFor = (symbol) => closingSymbols[openingSymbols.indexOf(symbol)];

function isBracketStructureBalanced(str) {
  const stack = [];
  for (const symbol of str) {
    console.log('цикл элемента =', symbol);
    if (isOpeningSymbol(symbol)) {
      const closingSymbol = getClosingSymbolFor(symbol);
      console.log('добавили в стек', closingSymbol);
      stack.push(closingSymbol);
    } else {
      const lastSavedSymbol = stack.pop();
      console.log('последний символ в стеке', lastSavedSymbol );
      if (symbol !== lastSavedSymbol) {
        return false;
      }
    }
  }

  return stack.length === 0;
};


console.log(isBracketStructureBalanced('()'));
console.log(isBracketStructureBalanced('[()]'));
console.log(isBracketStructureBalanced('({}[])')); //1
console.log(isBracketStructureBalanced('(<><<{[()]}>>)')); //1
console.log(isBracketStructureBalanced(''));
console.log('----');
console.log(isBracketStructureBalanced('(('));
console.log(isBracketStructureBalanced('[[()]'));
console.log(isBracketStructureBalanced('({}}[]'));
console.log(isBracketStructureBalanced('(<><<{[()]}>>>)'));
console.log(isBracketStructureBalanced('}'));
console.log(isBracketStructureBalanced('([)]'));
console.log(isBracketStructureBalanced('([))'));

