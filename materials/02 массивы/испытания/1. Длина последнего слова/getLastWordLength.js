//! мое решение
function getLastWordLength(str) {
  const strWithoutTabs = str.trim();
  const strToArr = strWithoutTabs.split(' ');
  return strToArr[strToArr.length - 1].length;
}
console.log(getLastWordLength('')); // 0
console.log(getLastWordLength('man in BlacK')); // 5
console.log(getLastWordLength('hello, world!  ')); // 6
//! мое решение

//! эталон
const getLastWordLength = (str) => {
  const words = str.trim().split(' ');
  const lastWord = words[words.length - 1];
  return lastWord.length;
};
//! эталон