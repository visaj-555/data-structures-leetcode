function maxSubArray(nums) {
  let currSum = 0;
  let maxSum = nums[0];

  // to track subarray
  let start = 0,
    end = 0,
    tempStart = 0;

  for (let i = 0; i < nums.length; i++) {
    // Step 1: Decide whether to start fresh OR continue
    if (currSum + nums[i] < nums[i]) {
      currSum = nums[i];
      tempStart = i;
    } else {
      currSum += nums[i];
    }

    if (currSum > maxSum) {
      maxSum = currSum;
      start = tempStart;
      end = i;
    }
  }

  console.log(nums.slice(start, end + 1));
  return maxSum;
}

console.log(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]));
