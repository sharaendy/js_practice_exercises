//! решение 1
export default function isPalindrome(str) {
  if (str.length < 2) {
    return true;
  }

  const startIndex = 0;

  const startSymbol = str[startIndex];
  const endSymbol = str[str.length - 1];

  if (startSymbol === endSymbol) {
    return isPalindrome(str.substring(startIndex + 1, str.length - 1));
  }
  return false;
}

console.log(isPalindrome('radar')); // true
console.log(isPalindrome('a')); // true
console.log(isPalindrome('abs')); // false

//! решение 2
const isPalindrome = (string) => {
  if (string.length <= 1) {
    return true;
  }

  const firstSymbol = string[0];
  const lastSymbol = string[string.length - 1];

  if (firstSymbol !== lastSymbol) {
    return false;
  }

  const stringWithoutFirstAndLastSymbols = string.substring(1, string.length - 1);

  return isPalindrome(stringWithoutFirstAndLastSymbols);
};
