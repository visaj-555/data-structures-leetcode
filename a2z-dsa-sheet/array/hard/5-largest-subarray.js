function largestSubArray(arr) {
  let map = new Map();
  let sum = 0;
  let maxLen = 0;

  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];

    if (sum === 0) {
      maxLen = i + 1;
    }

    if (map.has(sum)) {
      maxLen = Math.max(maxLen, i - map.get(sum));
    } else {
      map.set(sum, i);
    }
  }

  return maxLen;
}

console.log(largestSubArray([15, -2, 2, -8, 1, 7, 10, 23]));
console.log(largestSubArray([2, 10, 4]));
