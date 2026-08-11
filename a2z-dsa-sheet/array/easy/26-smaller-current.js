// Q2. How Many Numbers Are Smaller Than the Current Number

var smallerNumbersThanCurrent = function (nums) {
  let n = nums.length;
  let arr = new Array();

  for (let i = 0; i < n; i++) {
    let count = 0;
    for (let j = 0; j < n; j++) {
      if (nums[j] < nums[i]) {
        count++;
      }
    }
    arr.push(count);
  }
  return arr;
};

// Optimal Solution

var smallerNumbersThanCurrent = function (nums) {
  let freq = new Array(101).fill(0);

  // Step 1: Count frequency
  for (let num of nums) {
    freq[num]++;
  }

  // Step 2: Prefix sum
  for (let i = 1; i < 101; i++) {
    freq[i] += freq[i - 1];
  }

  // Step 3: Build result
  let result = [];
  for (let num of nums) {
    if (num === 0) {
      result.push(0);
    } else {
      result.push(freq[num - 1]);
    }
  }

  return result;
};

console.log(smallerNumbersThanCurrent([8, 1, 2, 2, 3]));
console.log(smallerNumbersThanCurrent([6, 5, 4, 8]));
console.log(smallerNumbersThanCurrent([7, 7, 7, 7]));
