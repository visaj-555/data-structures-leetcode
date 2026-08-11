// 976. Largest Perimeter Triangle

var largestPerimeter = function (nums) {
  nums.sort((a, b) => a - b);

  for (let i = nums.length - 1; i >= 2; i--) {
    let a = nums[i - 2],
      b = nums[i - 1],
      c = nums[i];
    if (a + b > c) {
      return a + b + c;
    }
  }

  return 0;
};

console.log(largestPerimeter([2, 1, 2]));
console.log(largestPerimeter([1, 2, 1, 10]));
