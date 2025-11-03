var fourSum = function (nums, target) {
  let arr = new Array();

  for (let a = 0; a < nums.length; a++) {
    for (let b = a + 1; b < nums.length; b++) {
      for (let c = b + 1; c < nums.length; c++) {
        for (let d = c + 1; d < nums.length; d++) {
          if (nums[a] + nums[b] + nums[c] + nums[d] == target) {
            arr.push(
              [nums[a], nums[b], nums[c], nums[d]].sort((a, b) => a - b)
            );
          }
        }
      }
    }
  }
  arr = arr.map(JSON.stringify);
  arr = [...new Set(arr)];
  arr = arr.map(JSON.parse);
  return arr;
};

console.log(fourSum([2, 2, 2, 2], 8));
console.log(fourSum([1, 0, -1, 0, -2, 2], 0));
