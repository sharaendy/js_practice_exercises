/* eslint-disable */
const input = {
  ' ': [5],
  d: [10],
  e: [1],
  H: [0],
  l: [2, 3, 9],
  o: [4, 7],
  r: [8],
  w: [6],
};

function buildString(obj) {
  const result = [];

  for (const [key, value] of Object.entries(obj)) {
    if (value.length > 1) {
      value.forEach(item => result[item] = key);
    } else if (value.length === 1) {
      result[value[0]] = key;
    }
  }
  return result.join('');
}

console.log(buildString(input));
