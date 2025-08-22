// 169. Majority Element

var majorityElement = function (nums) {
  let n = nums.length;

  for (let i = 0; i < n; i++) {
    let count = 0;

    for (let j = 0; j < n; j++) {
      if (nums[i] === nums[j]) {
        count++;
      }
    }

    if (count > Math.floor(n / 2)) {
      return nums[i];
    }
  }
};

console.log(majorityElement([2, 2, 1, 1, 1, 2, 2])); // Output 2
console.log(majorityElement([8, 8, 7, 7, 7])); // Output 7
console.log(majorityElement([6, 5, 5])); // Output 5
console.log(majorityElement([1])); // Output 5
console.log(majorityElement([3, 2, 3])); // Output 3
