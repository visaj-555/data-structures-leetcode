function rowWithMax1s(mat) {
  let n = mat.length;
  let m = mat[0].length;
  let maxRowIndex = -1;
  let maxCount = -1;
  let j = m - 1;

  for (let i = 0; i < n; i++) {
    while (j >= 0 && mat[i][j] === 1) {
      j--;
      if (m - j - 1 > maxCount) {
        maxCount = m - j - 1;
        maxRowIndex = i;
      }
    }
  }

  return maxRowIndex;
}

console.log(
  rowWithMax1s([
    [1, 1, 1],
    [0, 0, 1],
    [0, 0, 0],
  ])
);
console.log(
  rowWithMax1s([
    [0, 0],
    [0, 0],
  ])
);
console.log(
  rowWithMax1s([
    [0, 0, 1],
    [0, 1, 1],
    [0, 1, 1],
  ])
);
