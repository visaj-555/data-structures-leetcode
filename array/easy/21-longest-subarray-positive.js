function longestSubArraywithPositive(nums, k) {
  let n = nums.length;
  let maxLength = 0;

  for (let i = 0; i < n; i++) {
    let sum = 0;

    for (let j = i; j < n; j++) {
      sum += nums[j];

      if (sum === k) {
        maxLength = Math.max(maxLength, j - i + 1);
      }
    }
  }

  return maxLength;
}

console.log(longestSubArraywithPositive([10, 5, 2, 7, 1, 9], 15)); // 4
console.log(longestSubArraywithPositive([-3, 2, 1], 6)); // 0
