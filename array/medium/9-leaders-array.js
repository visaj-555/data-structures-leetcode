function leadersArray(nums) {
  let leaders = [];
  let n = nums.length;

  let maxFromRight = nums[n - 1];
  leaders.push(maxFromRight);

  for (let i = n - 2; i >= 0; i--) {
    if (nums[i] > maxFromRight) {
      leaders.push(nums[i]);
      maxFromRight = nums[i];
    }
  }

  leaders.reverse();

  return leaders;
}

console.log("Example 1:");
console.log(leadersArray([1, 2, 5, 3, 1, 2])); // [5, 3, 2]

console.log("Example 2:");
console.log(leadersArray([-3, 4, 5, 1, -4, -5])); // [5, 1, -4, -5]
