const length = (str) => str.length;
const toUpperCase = (str) => str.toUpperCase();

const bigLettersCount = (str) => {
  let i = 0;
  let result = 0;

  while (i < length(str)) {
    if (str[i] === toUpperCase(str[i]) || (str[i] === ' ')) {
      result += 1;
    }
    i += 1;
  }
  return result;
};

const compare = (first, second) => {
  const firstCount = bigLettersCount(first);
  const secondCount = bigLettersCount(second);
  if (firstCount > secondCount) {
    return 1;
  } else if (firstCount < secondCount) {
    return -1;
  } else {
    return 0;
  }
};

const greaterThan = (first, second) => (
  compare(first, second) === 1);

const lessThan = (first, second) => (
  compare(first, second) === -1);

const isEqual = (first, second) => (
  compare(first, second) === 0);

console.log(greaterThan('AD', 'ad sd')); //t
console.log(greaterThan('AD', 'Ad sd')); //f
console.log(greaterThan('az', 'ad')); //f
console.log(greaterThan('ASDF', 'QWER')); //f
console.log('_______________________________________')
console.log(lessThan('ghe df', 'dfwe r D')); //t
console.log(lessThan('az', 'ad')); //f 
console.log(lessThan('ASDF', 'QWER')); //f
console.log('_______________________________________')
console.log(isEqual('az', 'ad')); //t
console.log(isEqual('az', 'adA')); //f
console.log(isEqual('az', ' ad')); //f