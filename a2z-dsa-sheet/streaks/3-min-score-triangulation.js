// 1039. Minimum Score Triangulation of Polygon

var minScoreTriangulation = function (values) {
  const n = values.length;
  const memo = Array.from({ length: n }, () => Array(n).fill(-1));

  function solve(i, j) {
    if (j - i < 2) return 0;

    if (memo[i][j] !== -1) return memo[i][j];

    let ans = Infinity;
    for (let k = i + 1; k < j; k++) {
      let score = values[i] * values[k] * values[j] + solve(i, k) + solve(k, j);
      ans = Math.min(ans, score);
    }

    return (memo[i][j] = ans);
  }

  return solve(0, n - 1);
};

console.log(minScoreTriangulation([1, 2, 3]));
console.log(minScoreTriangulation([3, 7, 4, 5]));
console.log(minScoreTriangulation([1, 3, 1, 4, 1, 5]));
