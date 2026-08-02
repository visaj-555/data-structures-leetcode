class Solution {
  rowWithMax1s(arr) {
    let bestRow = -1;
    let maxOnes = 0;

    function firstOne(row) {
      let left = 0;
      let right = row.length - 1;
      let ans = -1;

      while (left <= right) {
        let mid = Math.floor((left + right) / 2);

        if (row[mid] === 1) {
          ans = mid;
          right = mid - 1;
        } else {
          left = mid + 1;
        }
      }

      return ans;
    }

    for (let i = 0; i < arr.length; i++) {
      let index = firstOne(arr[i]);

      if (index === -1) continue;

      let ones = arr[i].length - index;

      if (ones > maxOnes) {
        maxOnes = ones;
        bestRow = i;
      }
    }

    return bestRow;
  }
}

const sol = new Solution();

console.log(
  sol.rowWithMax1s([
    [1, 1, 1],
    [0, 0, 1],
    [0, 0, 0],
  ]),
);

console.log(
  sol.rowWithMax1s([
    [0, 0],
    [0, 0],
  ]),
);

console.log(
  sol.rowWithMax1s([
    [0, 0, 1],
    [0, 1, 1],
    [0, 1, 1],
  ]),
);
