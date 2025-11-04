function largestSubArray(nums) {
  let map = new Map();
  let maxLen = 0;
  let currSum = 0;
  let startIdx = -1;
  let endIdx = -1;

  map.set(0, -1);

  for (let i = 0; i < nums.length; i++) {
    currSum += nums[i];

    if (map.has(currSum)) {
      let len = i - map.get(currSum);
      if (len > maxLen) {
        maxLen = len;
        startIdx = map.get(currSum) + 1;
        endIdx = i;
      }
    } else {
      map.set(currSum, i);
    }
  }

  if (maxLen > 0) {
    return nums.slice(startIdx, endIdx + 1);
  }

  return [];
}

console.log(largestSubArray([15, -2, 2, -8, 1, 7, 10, 23]));

console.log(largestSubArray([2, 10, 4]));
