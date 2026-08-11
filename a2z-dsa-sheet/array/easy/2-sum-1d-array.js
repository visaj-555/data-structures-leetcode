// 1480. Running Sum of 1d Array

var runningSum = function (nums) {
  let result = new Array(nums.length);
  let sum = 0;
  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];
    result[i] = sum;
  }
  return result;
};

console.log(runningSum([0, 2, 1, 5, 3, 4])); // [ 0, 2, 3, 8, 11, 15 ]
