/**
 * @param {number[]} nums
 * @return {number[]}
 */
var majorityElement = function (nums) {
  const count = {};
  const threshold = Math.floor(nums.length / 3);
  const result = [];

  for (const num of nums) {
    count[num] = (count[num] || 0) + 1;
  }

  for (const num in count) {
    if (count[num] > threshold) {
      result.push(Number(num));
    }
  }

  return result;
};
