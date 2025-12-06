// 410. Split Array Largest Sum

function canSplit(nums, k, maxSum) {
  let parts = 1;
  let curr = 0;
  for (let num of nums) {
    if (curr + num > maxSum) {
      parts++;
      curr = num;
      if (parts > k) return false;
    } else {
      curr += num;
    }
  }
  return true;
}

function splitArray(nums, k) {
  let low = Math.max(...nums);
  let high = nums.reduce((a, b) => a + b, 0);
  let ans = high;

  while (low <= high) {
    let mid = Math.floor((low + high) / 2);
    if (canSplit(nums, k, mid)) {
      ans = mid;
      high = mid - 1;
    } else {
      low = mid + 1;
    }
  }
  return ans;
}

console.log(splitArray([7, 2, 5, 10, 8], 2));
console.log(splitArray([1, 2, 3, 4, 5], 2));
