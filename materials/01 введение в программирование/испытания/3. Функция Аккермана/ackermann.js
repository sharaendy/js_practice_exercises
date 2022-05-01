// !лучшее
const ackermann = (m, n) => {
  if (m === 0) {
    return n + 1;
  }
  if (n === 0) {
    return ackermann(m - 1, 1);
  }

  return ackermann(m - 1, ackermann(m, n - 1));
};

export default ackermann;

// !вариант 1
function ackermann(m, n) {
  if (m === 0) {
    return n + 1;
  } else if (m > 0 && n === 0) {
    return ackermann(m - 1, 1);
  } else if (m > 0 && n > 0) {
    return ackermann(m - 1, ackermann(m, n - 1));
  }
}

export default ackermann;

console.log(ackermann(2, 3));
