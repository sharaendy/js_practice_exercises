//!мое решение
function getMirrorMatrix(matrix) {
  const newMatrix = [];
  for (const row of matrix) {
    const newRow = [];
    for (let i = 0; i < Math.floor(row.length) / 2; i += 1) {
      newRow.push(row[i]);
    }
    for (let j = Math.floor(row.length - 1.1) / 2; j >= 0; j -= 1) {
      newRow.push(row[j]);
    }
    newMatrix.push(newRow);
  }
  return newMatrix;
}
//!мое решение

//!эталон
const getMirrorArray = (array) => {
  const size = array.length;
  const mirrored = [];

  for (let i = 0; i < size / 2; i += 1) {
    mirrored[i] = array[i];
    mirrored[size - i - 1] = array[i];
  }

  return mirrored;
};

const getMirrorMatrix = (matrix) => {
  const mirroredMatrix = [];

  for (const row of matrix) {
    const mirroredRow = getMirrorArray(row);
    mirroredMatrix.push(mirroredRow);
  }

  return mirroredMatrix;
};
//!эталон

// console.log(getMirrorMatrix([
//   [11, 12, 13, 14],
//   [21, 22, 23, 24],
//   [31, 32, 33, 34],
//   [41, 42, 43, 44],
// ]));

console.log(getMirrorMatrix([
  [11, 12, 13, 14, 15, 16],
  [21, 22, 23, 24, 25, 26],
  [31, 32, 33, 34, 35, 36],
  [41, 42, 43, 44, 45, 46],
  [51, 52, 53, 54, 55, 56],
  [61, 62, 63, 64, 65, 66],
]));