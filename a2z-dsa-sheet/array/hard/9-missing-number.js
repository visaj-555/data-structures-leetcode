var findMissingAndRepeating = function (nums) {
  const seen = new Set();
  let repeat = -1,
    missing = -1;

  for (let num of nums) {
    if (seen.has(num)) repeat = num;
    else seen.add(num);
  }

  for (let i = 1; i <= nums.length; i++) {
    if (!seen.has(i)) {
      missing = i;
      break;
    }
  }

  return [repeat, missing];
};

console.log(findMissingAndRepeating([3, 5, 4, 1, 1]));
console.log(findMissingAndRepeating([1, 2, 3, 6, 7, 5, 7]));
