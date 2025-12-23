// 1539. Kth Missing Positive Number

// Brute Force
var findKthPositive = function (arr, k) {
  let num = 1;
  let i = 0;

  while (k > 0) {
    if (i < arr.length && arr[i] === num) {
      i++;
    } else {
      k--;
      if (k === 0) return num;
    }
    num++;
  }

  return num;
};

// Optimal
var findKthPositive = function (arr, k) {
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);

    let missing = arr[mid] - (mid + 1);

    if (missing < k) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return left + k;
};

console.log(findKthPositive([2, 3, 4, 7, 11], 5));
console.log(findKthPositive([1, 2, 3, 4], 2));
