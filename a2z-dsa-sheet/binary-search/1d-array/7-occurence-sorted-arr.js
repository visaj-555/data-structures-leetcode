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

function upperBound(nums, x) {
  let left = 0;
  let right = nums.length;

  while (left < right) {
    let mid = Math.floor((left + right) / 2);

    if (nums[mid] <= x) {
      left = mid + 1;
    } else {
      right = mid;
    }
  }

  return left;
}

function countOccurrences(arr, target) {
  let first = lowerBound(arr, target);
  let last = upperBound(arr, target);

  return last - first;
}

// Test cases
console.log(countOccurrences([0, 0, 1, 1, 1, 2, 3], 1));
console.log(countOccurrences([5, 5, 5, 5, 5, 5], 5));
console.log(countOccurrences([1, 2, 3, 4, 5], 6));
