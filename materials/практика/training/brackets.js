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