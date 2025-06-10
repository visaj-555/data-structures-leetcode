/**
 * @param {number[]} nums
 * @param {number} n
 * @return {number[]}
 */
var shuffle = function (nums, n) {
  let a1 = nums.slice(0, n);
  let a2 = nums.slice(n, n + nums.length);

  let result = [];

  for (let i = 0; i < n; i++) {
    result.push(a1[i]);
    result.push(a2[i]);
  }

  return result;
};
