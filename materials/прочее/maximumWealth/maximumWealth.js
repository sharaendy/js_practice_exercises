//! решение 1
function maximumWealth(customersAccs) {
  let greatestAcc = 0;

  function cb(prev, bills) {
    let currentSum = 0;
    for (const bill of bills) {
      currentSum += bill;
    }
    if (currentSum > prev) {
      greatestAcc = currentSum;
      return currentSum;
    }
    greatestAcc = prev;
    return prev;
  }

  customersAccs.reduce(cb, 0);
  return greatestAcc;
}

const data = [
  [1, 2, 3],
  [3, 1, 1],
  [9, 2, 1],
];

console.log(data.forEach((coll) => {
  const [...nums] = coll;
  return Math.max(nums);
}))

console.log(maximumWealth(data));
