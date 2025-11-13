function floorAndCeil(nums, x) {
  let left = 0;
  let right = nums.length - 1;
  let floor = -1;
  let ceil = -1;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);

    if (nums[mid] === x) {
      floor = nums[mid];
      ceil = nums[mid];
      break;
    } else if (nums[mid] < x) {
      floor = nums[mid];
      left = mid + 1;
    } else {
      ceil = nums[mid];
      right = mid - 1;
    }
  }

  console.log("floor:", floor, "ceil:", ceil);
}

floorAndCeil([3, 4, 4, 7, 8, 10], 5);
