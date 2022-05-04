//! лучшее
const fromPairs = (data) => {
  const result = {};

  for (const [key, value] of data) {
    result[key] = value;
  }

  return result;
};

export default fromPairs;

//! вариант 1
function fromPairs(coll) {
  const finalObj = {};

  for (const item of coll) {
    finalObj[`${item[0]}`] = item[1];
  }
  return finalObj;
}

console.log(fromPairs([['cat', 5], ['dog', 6], ['cat', 11]]));
// { 'cat': 11, 'dog': 6 }