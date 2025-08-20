var check = function (nums) {
  let count = 0;
  let n = nums.length;

  for (let i = 0; i < n - 1; i++) {
    if (nums[i] > nums[i + 1]) {
      count++;
    }
  }

  // Only check once after the loop
  if (nums[n - 1] > nums[0]) {
    count++;
  }

  return count <= 1;
};

console.log(check([3, 4, 5, 1, 2]));
