function aggressiveCows(nums, k) {
  nums.sort((a, b) => a - b);

  function canPlaceCows(minDist) {
    let count = 1;
    let lastPos = nums[0];

    for (let i = 1; i < nums.length; i++) {
      if (nums[i] - lastPos >= minDist) {
        count++;
        lastPos = nums[i];
        if (count === k) return true;
      }
    }
    return false;
  }

  let left = 1;
  let right = nums[nums.length - 1] - nums[0];
  let result = 0;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);

    if (canPlaceCows(mid)) {
      result = mid;
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return result;
}

console.log(aggressiveCows([0, 3, 4, 7, 10, 9], 4));
console.log(aggressiveCows([4, 2, 1, 3, 6], 2));
