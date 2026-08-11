var removeDuplicates = function (nums) {
  if (nums.length === 0) return 0;

  let k = 1;
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] !== nums[i - 1]) {
      nums[k] = nums[i];
      k++;
    }
  }

  return k;
};

let nums1 = [1, 1, 2];
console.log(removeDuplicates(nums1));
console.log(nums1.slice(0, 2));
