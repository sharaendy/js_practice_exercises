//! лучшее
export default (numbers, num) => {
  if (numbers.length === 0) {
    return null;
  }

  const diffs = numbers.map((element) => Math.abs(num - element));

  return diffs.reduce((index, diff, currentIndex) => (
    diff < diffs[index] ? currentIndex : index
  ), 0);
};

//! решение 1
function findIndexOfNearest(coll, num) {
  if (coll.length === 0) return null;
  const sourceNums = coll.map((item) => Math.abs(num - item));

  const nearestNums = coll.map((item) => Math.abs(num - item));
  const sortedNums = nearestNums.sort((a, b) => a - b);
  const thisNum = sortedNums[0];
  const thisIndex = sourceNums.indexOf(thisNum);
  return thisIndex;
}


console.log(findIndexOfNearest([7, 5, 3, 2], 4));// 1
console.log(findIndexOfNearest([15, 10, 3, 4], 0));// 2
console.log(findIndexOfNearest([7, 5, 4, 4, 3], 4));// 2
console.log(findIndexOfNearest([], 2));// null