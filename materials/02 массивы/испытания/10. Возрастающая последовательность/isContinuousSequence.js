//! лучшее
const isContinuousSequence = (coll) => {
  const size = coll.length;
  if (size <= 1) {
    return false;
  }

  const start = coll[0];
  for (let index = 1; index < size; index += 1) {
    if (start + index !== coll[index]) {
      return false;
    }
  }

  return true;
};

//! решение 1
function isContinuousSequence(coll) {
  if (coll.length < 2) return false;
  for (let i = 0; i < coll.length - 1; i++) {
    if (coll[i + 1] - coll[i] === 1) {
      continue;
    } else {
      return false;
    }
  }
  return true;
}

console.log(isContinuousSequence([10, 11, 12, 13]));     // true
console.log(isContinuousSequence([-5, -4, -3]));         // true

console.log(isContinuousSequence([10, 11, 12, 14, 15])); // false
console.log(isContinuousSequence([1, 2, 2, 3]));         // false
console.log(isContinuousSequence([7]));                  // false
console.log(isContinuousSequence([]));                   // false
