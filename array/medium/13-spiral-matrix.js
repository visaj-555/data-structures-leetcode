// 54. Spiral Matrix

// Striver Code

function spiralOrder(matrix) {
  let res = [];

  let top = 0,
    bottom = matrix.length - 1,
    left = 0,
    right = matrix[0].length - 1;

  while (top <= bottom && left <= right) {
    // 1. Left → Right
    for (let i = left; i <= right; i++) {
      res.push(matrix[top][i]);
    }
    top++;

    // 2. Top → Bottom
    for (let i = top; i <= bottom; i++) {
      res.push(matrix[i][right]);
    }
    right--;

    // 3. Right → Left
    if (top <= bottom) {
      for (let i = right; i >= left; i--) {
        res.push(matrix[bottom][i]);
      }
      bottom--;
    }

    // 4. Bottom → Top
    if (left <= right) {
      for (let i = bottom; i >= top; i--) {
        res.push(matrix[i][left]);
      }
      left++;
    }
  }

  return res;
}

console.log(
  spiralOrder([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ]),
);
