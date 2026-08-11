function isValidAllocation(nums, m, maxPages) {
  let students = 1,
    currentSum = 0;

  for (let pages of nums) {
    currentSum += pages;

    if (currentSum > maxPages) {
      students++;
      currentSum = pages;

      if (students > m) return false;
    }
  }

  return true;
}

function bookAllocation(nums, m) {
  if (m > nums.length) return -1;
  let left = Math.max(...nums);
  let right = nums.reduce((a, b) => a + b, 0);

  let result = right;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);

    if (isValidAllocation(nums, m, mid)) {
      result = mid;
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }

  return result;
}

// Example Test Cases
console.log(bookAllocation([12, 34, 67, 90], 2)); // Output: 113
console.log(bookAllocation([25, 46, 28, 49, 24], 4)); // Output: 71
