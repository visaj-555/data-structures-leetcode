function singleNumber(nums) {
  let n = nums.length;

  for (let i = 0; i < n; i++) {
    let count = 0;

    for (let j = 0; j < n; j++) {
      if (nums[i] === nums[j]) {
        count++;
      }
    }

    if (count === 1) {
      return nums[i];
    }
  }
}

console.log(singleNumber([2, 2, 1, 1, 5, 7, 7]));
