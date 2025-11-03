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

var fourSum = function (nums, target) {
  const result = [];
  nums.sort((a, b) => a - b);

  for (let i = 0; i < nums.length - 3; i++) {
    if (i > 0 && nums[i] === nums[i - 1]) continue;

    for (let j = i + 1; j < nums.length - 2; j++) {
      if (j > i + 1 && nums[j] === nums[j - 1]) continue;

      let left = j + 1;
      let right = nums.length - 1;

      while (left < right) {
        const sum = nums[i] + nums[j] + nums[left] + nums[right];

        if (sum === target) {
          result.push([nums[i], nums[j], nums[left], nums[right]]);

          while (left < right && nums[left] === nums[left + 1]) left++;
          while (left < right && nums[right] === nums[right - 1]) right--;

          left++;
          right--;
        } else if (sum < target) {
          left++;
        } else {
          right--;
        }
      }
    }
  }

  return result;
};

console.log(fourSum([2, 2, 2, 2], 8));
console.log(fourSum([1, 0, -1, 0, -2, 2], 0));
