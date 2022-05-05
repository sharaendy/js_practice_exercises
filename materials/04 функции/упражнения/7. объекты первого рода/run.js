
//! решенеи 1
const run = (text) => {

  const takeLast = (str, n) => {
    if (str.length < n) return null;

    let result = '';
    for (let i = str.length - 1; result.length < n; i -= 1) {
      result += str[i];
    }
    return result;
  };

  return takeLast(text, 4);
};

console.log(run('hexlet')); // telx

//! решение 2
const run = (text) => {

  const takeLast = (str, length) => {
    if (str.length === 0 || str.length < length) {
      return null;
    }

    const result = [];
    for (let i = str.length - 1; result.length < length; i -= 1) {
      result.push(str[i]);
    }

    return result.join('');
  };

  return takeLast(text, 4);
};