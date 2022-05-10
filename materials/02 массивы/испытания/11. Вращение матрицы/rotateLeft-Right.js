//! лучшее
const rotate = (matrix, direction) => {
  const rowsCount = matrix.length;
  const [firstRow] = matrix;
  const columnsCount = firstRow.length;
  const rotated = [];

  for (let row = 0; row < columnsCount; row += 1) {
    rotated[row] = [];
    for (let column = 0; column < rowsCount; column += 1) {
      rotated[row][column] = direction === 'left'
        ? matrix[column][columnsCount - row - 1]
        : matrix[rowsCount - column - 1][row];
    }
  }

  return rotated;

//! решение 1
function rotateLeft(matrix) {
  const newMatrix = [];
  let newRow = [];
  let i = matrix[0].length - 1;

  do {
    for (const row of matrix) {
      newRow.push(row[i]);
    }
    i -= 1;
    newMatrix.push(newRow);
    newRow = [];
  } while (newMatrix.length < matrix[0].length);

  return newMatrix;
}

function rotateRight(matrix) {
  const newMatrix = [];
  let newRow = [];
  let i = 0;

  do {
    for (const row of matrix) {
      newRow.push(row[i]);
    }
    i += 1;
    newMatrix.push(newRow.reverse());
    newRow = [];
  } while (newMatrix.length < matrix[0].length);

  return newMatrix;
}

const matrix = [
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9, 0, 1, 2],
];


// const matrix4 = [[6], [5], [4], [3], [2], [1]];

// rotateLeft(matrix);
// console.log(rotateLeft(matrix));

// rotateRight(matrix);
const matrix2 = [
  [1, 2, 3, 4, 5, 6],
  [7, 8, 9, 0, 1, 2],
  [3, 4, 5, 6, 7, 8],
  [9, 0, 1, 2, 3, 4],
];

// const matrix3 = [
//   ['a', 'b', 'c', 'd'],
//   ['aa', 'ab', 'ac', 'ad'],
//   ['e', 'f', 'g', 'h'],
// ];

console.log(rotateRight(matrix2));
