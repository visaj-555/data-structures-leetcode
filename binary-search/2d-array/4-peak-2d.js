function findPeakGrid(mat) {
  let rows = mat.length;
  let cols = mat[0].length;

  let start = 0;
  let end = cols - 1;

  while (start <= end) {
    let midCol = Math.floor((start + end) / 2);

    // find the row with max value in this column
    let maxRow = 0;
    for (let i = 0; i < rows; i++) {
      if (mat[i][midCol] > mat[maxRow][midCol]) {
        maxRow = i;
      }
    }

    let left = midCol > 0 ? mat[maxRow][midCol - 1] : -1;
    let right = midCol < cols - 1 ? mat[maxRow][midCol + 1] : -1;

    // check if it's a peak
    if (mat[maxRow][midCol] > left && mat[maxRow][midCol] > right) {
      return [maxRow, midCol];
    }

    // move towards the bigger side
    if (right > mat[maxRow][midCol]) {
      start = midCol + 1;
    } else {
      end = midCol - 1;
    }
  }
}

let mat1 = [
  [1, 4],
  [3, 2],
];

let mat2 = [
  [10, 20, 15],
  [21, 30, 14],
  [7, 16, 32],
];

console.log(findPeakGrid(mat1));
console.log(findPeakGrid(mat2));
