//  75. Sort Colors

// Counting Approach :

var sortColors = function (nums) {
  let count0 = 0;
  let count1 = 0;
  let count2 = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 0) count0++;
    else if (nums[i] === 1) count1++;
    else count2++;
  }

  let idx = 0;

  while (count0--) {
    nums[idx] = 0;
    idx++;
  }

  while (count1--) {
    nums[idx] = 1;
    idx++;
  }

  while (count2--) {
    nums[idx] = 2;
    idx++;
  }
};

// Optimised Approach (Dutch National Flag Algorithm) :

function sortColors(nums) {
  let low = 0,
    mid = 0,
    high = nums.length - 1;

  while (mid <= high) {
    if (nums[mid] === 0) {
      [nums[low], nums[mid]] = [nums[mid], nums[low]];
      low++;
      mid++;
    } else if (nums[mid] === 1) {
      mid++;
    } else {
      [nums[mid], nums[high]] = [nums[high], nums[mid]];
      high--;
    }
  }
  return nums;
}

console.log(sortColors([2, 0, 2, 1, 1, 0])); // [0,0,1,1,2,2]
console.log(sortColors([2, 0, 1])); // [0,1,2]
