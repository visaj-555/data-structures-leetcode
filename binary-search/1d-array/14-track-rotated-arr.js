function findRotationCount(nums) {
  let left = 0;
  let right = nums.length - 1;

  if (nums[left] <= nums[right]) {
    return 0;
  }

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);

    if (nums[mid] > nums[mid + 1]) {
      return mid + 1;
    }

    if (nums[mid] < nums[mid - 1]) {
      return mid;
    }

    if (nums[mid] > nums[left]) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return 0;
}

console.log(findRotationCount([4, 5, 6, 7, 0, 1, 2, 3]));
console.log(findRotationCount([3, 4, 5, 1, 2]));
console.log(findRotationCount([1, 2, 3, 4, 5]));
