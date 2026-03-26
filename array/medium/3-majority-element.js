// 169. Majority Element

// Brute Force
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

// Better :

var majorityElement = function (nums) {
  let map = new Map();
  let n = nums.length;

  for (let num of nums) {
    map.set(num, (map.get(num) || 0) + 1);

    if (map.get(num) > Math.floor(n / 2)) {
      return num;
    }
  }
};

// Optimal :  Boyer - Moore Voting Alogorithm

var majorityElement = function (nums) {
  let candidate = null;
  let count = 0;

  for (let num of nums) {
    if (count === 0) {
      candidate = num;
    }

    if (num === candidate) {
      count++;
    } else {
      count--;
    }
  }

  return candidate;
};

console.log(majorityElement([2, 2, 1, 1, 1, 2, 2])); // Output 2
console.log(majorityElement([8, 8, 7, 7, 7])); // Output 7
console.log(majorityElement([6, 5, 5])); // Output 5
console.log(majorityElement([1])); // Output 5
console.log(majorityElement([3, 2, 3])); // Output 3
