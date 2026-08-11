// 217. Contains Duplicate

// USING SET

var containsDuplicate = function (nums) {
  return new Set(nums).size !== nums.length;
};

// USING ARRAY

var containsDuplicate = function (nums) {
  nums.sort();

  for (let i = 0; i < nums.length - 1; i++) {
    if (nums[i] === nums[i + 1]) {
      return true;
    }
  }

  return false;
};

console.log(containsDuplicate([10, 20, 30, 40, 50]));
