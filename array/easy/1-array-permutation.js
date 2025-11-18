// 1920. Build Array from Permutation

var buildArray = function (nums) {
  let ans = new Array(nums.length);

  for (let i = 0; i < nums.length; i++) {
    ans[i] = nums[nums[i]];
  }

  return ans;
};

console.log(buildArray([0, 2, 1, 5, 3, 4]));
