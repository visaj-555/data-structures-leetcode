// 1283. Find the Smallest Divisor Given a Threshold

var smallestDivisor = function (nums, threshold) {
  const calculateSum = (divisor) => {
    return nums.reduce((sum, num) => {
      return sum + Math.ceil(num / divisor);
    }, 0);
  };

  let left = 1;
  let right = Math.max(...nums);
  let result = right;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    let sum = calculateSum(mid);

    if (sum <= threshold) {
      result = mid;
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }

  return result;
};

console.log(smallestDivisor([1, 2, 5, 9], 6));
console.log(smallestDivisor([44, 22, 33, 11, 1], 5));
console.log(smallestDivisor([19], 5));
