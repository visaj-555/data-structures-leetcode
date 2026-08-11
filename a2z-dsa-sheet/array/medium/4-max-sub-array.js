// 53. Maximum Subarray

function maxSubArray(nums) {
  let currSum = 0;
  let maxSum = nums[0];
  for (let i = 0; i < nums.length; i++) {
    currSum = Math.max(nums[i], currSum + nums[i]);
    maxSum = Math.max(maxSum, currSum);
  }

  return maxSum;
}

console.log(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4])); // 6
// Explanation: The subarray [4,-1,2,1] has the largest sum 6.

console.log(maxSubArray([1])); // 1
// Explanation: The subarray [1] has the largest sum 1.

console.log(maxSubArray([5, 4, -1, 7, 8])); // 23
// Explanation: The subarray [5,4,-1,7,8] has the largest sum 23.
