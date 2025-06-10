/**
 * @param {number[]} nums
 * @return {number[]}
 */
var runningSum = function (nums) {
  let result = new Array(nums.length);
  let sum = 0;
  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];
    result[i] = sum;
  }
  return result;
};
