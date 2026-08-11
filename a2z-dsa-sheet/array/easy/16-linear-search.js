function linearSearch(nums, target) {
  let n = nums.length;
  for (let i = 0; i < n; i++) {
    if (nums[i] === target) {
      return i;
    }
  }

  return -1;
}

console.log(linearSearch([10, 50, 20, 11, 200], 20));
