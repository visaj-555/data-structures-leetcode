function lowerBound(nums, x) {
  let left = 0;
  let right = nums.length;

  while (left < right) {
    let mid = Math.floor((left + right) / 2);

    if (nums[mid] < x) {
      left = mid + 1;
    } else {
      right = mid;
    }
  }

  return left;
}

console.log(lowerBound([1, 2, 2, 3], 2));
console.log(lowerBound([3, 5, 8, 15, 19], 9));
