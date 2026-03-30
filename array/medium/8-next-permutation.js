// 31. Next Permutation

var nextPermutation = function (nums) {
  let n = nums.length;

  // 1. BREAK → find dip
  let i = n - 2;
  while (i >= 0 && nums[i] >= nums[i + 1]) i--;

  // 2. SWAP → just bigger element
  if (i >= 0) {
    let j = n - 1;
    while (nums[j] <= nums[i]) {
      j--;
    }
    [nums[i], nums[j]] = [nums[j], nums[i]];
  }

  // 3. FIX → reverse right side
  let left = i + 1,
    right = n - 1;
  while (left < right) {
    [nums[left], nums[right]] = [nums[right], nums[left]];
    left++;
    right--;
  }
};
