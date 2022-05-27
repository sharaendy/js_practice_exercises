export default function substr(str = '', startWith = 0, len = str.length) {
  if (str === '') return '';

  let startIndex = startWith;
  let length = len;
  let endIndex = startWith + (length - 1);

  if (startIndex > str.length - 1) return '';
  if (startIndex < 0) {
    startIndex = 0;
  }

  if (length === 0) return '';
  if (length < 0) {
    length = 1;
  }

  if (endIndex > str.length - 1) {
    endIndex = str.length - 1;
  }
  if (endIndex < 0) {
    endIndex = startIndex + length - 1;
  }

  let result = '';

  for (let i = startIndex; i <= endIndex; i += 1) {
    result += str[i];
  }
  return result;
}

console.log(substr('abba', 1, -10)); // 'b'
console.log('________');
console.log(substr('')); // ''
console.log(substr('abba', 4, -10)); // ''
console.log(substr('abba', 1, 0)); // ''
console.log('________');
console.log(substr('abba', -1, -1)); // 'a'
console.log(substr('abba', 0, 1)); // 'a'
console.log(substr('abba', -10, 2)); // 'ab'
console.log(substr('abba', 1, 2)); // 'bb'
console.log(substr('abba', 1, 10)); // 'bba'
console.log(substr('abba')); // 'abba'
console.log(substr('abba', -1, 100)); // 'abba'
console.log(substr('abba', 0, 4)); // 'abba'
console.log(substr('abba', 0, 5)); // 'abba'
