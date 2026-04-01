// 73. Set Matrix Zeroes

// Brute Force  :

var setZeroes = function (matrix) {
  let rows = matrix.length;
  let cols = matrix[0].length;

  let zeroPositions = [];

  // Step 1: Store all zero positions
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      if (matrix[i][j] === 0) {
        zeroPositions.push([i, j]);
      }
    }
  }

  // Step 2: Update rows and columns
  for (let [r, c] of zeroPositions) {
    // Set entire row to 0
    for (let j = 0; j < cols; j++) {
      matrix[r][j] = 0;
    }

    // Set entire column to 0
    for (let i = 0; i < rows; i++) {
      matrix[i][c] = 0;
    }
  }
};

// Optimal without Set :

var setZeroes = function (matrix) {
  let rows = matrix.length;
  let cols = matrix[0].length;

  let col0 = 1; // flag for first column

  // Step 1: Mark rows and columns
  for (let i = 0; i < rows; i++) {
    if (matrix[i][0] === 0) col0 = 0;

    for (let j = 1; j < cols; j++) {
      if (matrix[i][j] === 0) {
        matrix[i][0] = 0; // mark row
        matrix[0][j] = 0; // mark column
      }
    }
  }

  // Step 2: Apply marks (bottom-up)
  for (let i = rows - 1; i >= 0; i--) {
    for (let j = cols - 1; j >= 1; j--) {
      if (matrix[i][0] === 0 || matrix[0][j] === 0) {
        matrix[i][j] = 0;
      }
    }

    // Handle first column
    if (col0 === 0) {
      matrix[i][0] = 0;
    }
  }
};

// Optimal with using Set :

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

setZeroes(myMatrix);
