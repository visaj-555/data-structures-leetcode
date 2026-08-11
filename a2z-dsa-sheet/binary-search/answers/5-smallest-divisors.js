// 1283. Find the Smallest Divisor Given a Threshold

function getSum(nums, divisor) {
  let sum = 0;
  for (let num of nums) {
    sum += Math.ceil(num / divisor);
  }
  return sum;
}

var smallestDivisor = function (nums, threshold) {
  let left = 1;
  let right = Math.max(...nums);

  while (left < right) {
    let mid = Math.floor((left + right) / 2);

    if (getSum(nums, mid) <= threshold) {
      right = mid;
    } else {
      left = mid + 1;
    }
  }

  return left;
};

console.log(smallestDivisor([1, 2, 5, 9], 6));
console.log(smallestDivisor([44, 22, 33, 11, 1], 5));
console.log(smallestDivisor([19], 5));
