// 493. Reverse Pairs

var reversePairs = function (nums) {
  function mergeSort(arr, low, high) {
    if (low >= high) return 0;

    let mid = Math.floor((low + high) / 2);
    let count = mergeSort(arr, low, mid) + mergeSort(arr, mid + 1, high);
    count += countPairs(arr, low, mid, high);
    merge(arr, low, mid, high);
    return count;
  }

  function countPairs(arr, low, mid, high) {
    let count = 0;
    let j = mid + 1;
    for (let i = low; i <= mid; i++) {
      while (j <= high && arr[i] > 2 * arr[j]) j++;
      count += j - (mid + 1);
    }
    return count;
  }

  function merge(arr, low, mid, high) {
    let temp = [];
    let left = low,
      right = mid + 1;
    while (left <= mid && right <= high) {
      if (arr[left] <= arr[right]) temp.push(arr[left++]);
      else temp.push(arr[right++]);
    }
    while (left <= mid) temp.push(arr[left++]);
    while (right <= high) temp.push(arr[right++]);

    for (let i = low; i <= high; i++) {
      arr[i] = temp[i - low];
    }
  }

  return mergeSort(nums, 0, nums.length - 1);
};

console.log(reversePairs([1, 3, 2, 3, 1]));
console.log(reversePairs([2, 4, 3, 5, 1]));
