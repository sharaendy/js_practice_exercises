//!мое решение
function bubbleSort(coll) {
  let steps = coll.length - 1;

  let swapped;

  do {
    swapped = false;
    for (let i = 0; i < steps; i += 1) {
      if (coll[i] > coll[i + 1]) {
        const temp = coll[i];
        coll[i] = coll[i + 1];
        coll[i + 1] = temp;
        swapped = true;
      }
    }
    steps -= 1;
  } while (swapped);
  return coll;
}

function uniqColl(coll) {
  let uniqInterval = [];

  for (const item of coll) {
    for (let i = item[0]; i <= item[1]; i += 1) {
      if (item[0] === item[1]) uniqInterval.push(0);
      else {
        (uniqInterval.includes(i)) ? null : uniqInterval.push(i);
      }
    }
  }
  const sortedColl = bubbleSort(uniqInterval);
  return sortedColl;
}

const sumIntervals = (coll) => {
  const deletedDub = uniqColl(coll);
  const finalColl = bubbleSort(deletedDub);

  console.log('finalColl=', finalColl);

  let startElem = finalColl[0];
  let endElem = 0;
  let result = 0;

  for (let i = 1; i <= finalColl.length - 1; i += 1) {
    if (finalColl[i + 1] - finalColl[i] !== 1 ||
      finalColl[i + 1] - finalColl[i] === NaN) {
      endElem = finalColl[i];
      result = result + (endElem - startElem);
    } else if (finalColl[i] - finalColl[i - 1] !== 1) {
      startElem = finalColl[i];
    }
    console.log('---> цикл ', i);
    console.log('startElem', startElem);
    console.log('endElem', endElem);
    console.log('result', result);
  }
  return result;
}

// console.log(sumIntervals([[5, 5]])); // 0
// console.log(sumIntervals([[7, 7], [6, 6]])); // 0
// console.log(sumIntervals([[3, 10]])); // 7
// console.log(sumIntervals([[-100, 0]])); // 100
// console.log(sumIntervals([
//   [-4, 4],
//   [1, 3],
// ])); // 8
// console.log(sumIntervals([
//   [1, 9],
//   [7, 12],
//   [3, 4],
// ])); // 11
// console.log(sumIntervals([
//   [1, 5],
//   [-30, 19],
//   [1, 7],
//   [16, 19],
//   [5, 100],
// ])); //130 

//!мое решение

//!эталон
const sumIntervals = (intervals) => {
  const values = [];
  for (const [start, end] of intervals) {
    for (let i = start; i < end; i += 1) {
      if (!values.includes(i)) {
        values.push(i);
      }
    }
  }
  return values.length;
};
//!эталон



