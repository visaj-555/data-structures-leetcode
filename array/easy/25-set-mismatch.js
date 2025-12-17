var findErrorNums = function (nums) {
  let n = nums.length;
  let freq = new Array(n + 1).fill(0);

  let repeated = -1;
  let missing = -1;

  // Count frequency
  for (let num of nums) {
    freq[num]++;
  }

  // Find repeated and missing
  for (let i = 1; i <= n; i++) {
    if (freq[i] === 2) repeated = i;
    if (freq[i] === 0) missing = i;
  }

  return [repeated, missing];
};

console.log(findErrorNums([1, 2, 2, 4]));
console.log(findErrorNums([1, 1]));
