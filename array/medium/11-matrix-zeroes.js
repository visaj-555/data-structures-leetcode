function setZeroes(matrix) {
  const rows = matrix.length;
  if (rows === 0) {
    return;
  }
  const columns = matrix[0].length;

  const zeroRows = new Set();
  const zeroColumns = new Set();

  // First Pass: Identify all rows and columns that contain a zero
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < columns; j++) {
      if (matrix[i][j] === 0) {
        zeroRows.add(i);
        zeroColumns.add(j);
      }
    }
  }

  console.log("zeroRows : ", zeroRows);
  console.log("zeroColumns : ", zeroColumns);

  // Second Pass: Update the original matrix in-place
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < columns; j++) {
      if (zeroRows.has(i) || zeroColumns.has(j)) {
        matrix[i][j] = 0;
      }
    }
  }
}

const myMatrix = [
  [0, 1, 2, 0],
  [3, 4, 5, 2],
  [1, 3, 1, 5],
];

console.log("Matrix before function call:", myMatrix);
setZeroes(myMatrix);
console.log("Matrix after function call:", myMatrix);