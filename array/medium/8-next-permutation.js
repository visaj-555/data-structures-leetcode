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

var nextPermutation = function(nums) {
    let breakpoint = -1;
    const n = nums.length;

    // Step 1: Find breakpoint
    for (let i = n - 2; i >= 0; i--) {
        if (nums[i] < nums[i + 1]) {
            breakpoint = i;
            break;
        }
    }

    // Step 2: If no breakpoint, reverse entire array
    if (breakpoint === -1) {
        nums.reverse();
        return;
    }

    // Step 3: Find next greater element from right
    for (let i = n - 1; i > breakpoint; i--) {
        if (nums[i] > nums[breakpoint]) {
            [nums[i], nums[breakpoint]] = [nums[breakpoint], nums[i]];
            break;
        }
    }

    // Step 4: Reverse the suffix
    let left = breakpoint + 1;
    let right = n - 1;

    while (left < right) {
        [nums[left], nums[right]] = [nums[right], nums[left]];
        left++;
        right--;
    }
};
