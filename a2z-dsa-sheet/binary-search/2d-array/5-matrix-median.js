function matrixMedian(matrix) {
  const n = matrix.length;
  const m = matrix[0].length;

  let low = Infinity;
  let high = -Infinity;

  for (let i = 0; i < n; i++) {
    low = Math.min(low, matrix[i][0]);
    high = Math.max(high, matrix[i][m - 1]);
  }

  const required = Math.floor((n * m) / 2);

  while (low <= high) {
    const mid = Math.floor((low + high) / 2);
    let count = 0;

    for (let i = 0; i < n; i++) {
      count += upperBound(matrix[i], mid);
    }

    if (count <= required) {
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }

  return low;
}

function upperBound(arr, target) {
  let left = 0,
    right = arr.length;

  while (left < right) {
    const mid = Math.floor((left + right) / 2);
    if (arr[mid] <= target) left = mid + 1;
    else right = mid;
  }

  return left;
}

const matrix = [
  [1, 4, 15],
  [2, 5, 6],
  [3, 8, 11],
];

console.log(matrixMedian(matrix));
