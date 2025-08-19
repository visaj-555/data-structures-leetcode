var topKFrequent = function (nums, k) {
  let count = 0;
  let arr = [];

  for (let i = 0; i < nums.length; i++) {
    for (let j = 0; j < nums.length; j++) {
      if (nums[i] == nums[j]) {
        count++;
        arr.push(nums[i]);
      }
    }
  }

  return arr;
};
console.log(topKFrequent([1, 1, 1, 2, 2, 3], 2));
