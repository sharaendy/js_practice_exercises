// !лучшее
const sumOfSquares = (n) => {
  let sum = 0;

  for (let i = 1; i <= n; i += 1) {
    sum += i * i;
  }

  return sum;
};

const squareOfSum = (n) => {
  let sum = 0;

  for (let i = 1; i <= n; i += 1) {
    sum += i;
  }

  return sum * sum;
};

const sumSquareDifference = (n) => squareOfSum(n) - sumOfSquares(n);

// !вариант 1
const sumSquareDifference = (n) => {
  const sumSquare = (n) => {
    if (n === 1) {
      return 1;
    } else {
      return (n ** 2) + sumSquare(n - 1);
    }
  };
  const squareSum = (n) => {
    const sum = (n) => {
      if (n === 1) {
        return 1;
      } else {
        return n + sum(n - 1);
      }
    };
    return sum(n) ** 2;
  };

  return squareSum(n) - sumSquare(n);
};

// !вариант 2
function sumSquare(n) {
  let result = 0;
  for (let i = 1; i <= n; i += 1) {
    result += i ** 2;
  }
  return result;
}

function squareSum(n) {
  let result = 0;
  for (let i = 1; i <= n; i += 1) {
    result += i;
  }
  return result ** 2;
}

function sumSquareDifference(n) {
  return squareSum(n) - sumSquare(n);
}

//! вариант 3
function sumOfSquares(n) {
  let result = 0;

  for (let i = 1; i <= n; i += 1) {
    result += i ** 2;
  }
  return result;
}

function squareOfSum(n) {
  let result = 0;

  for (let i = 1; i <= n; i += 1) {
    result += i
  }
  return result ** 2;
}

const sumSquareDifference = (n) => squareOfSum(n) - sumOfSquares(n);

console.log(sumSquareDifference(10));
