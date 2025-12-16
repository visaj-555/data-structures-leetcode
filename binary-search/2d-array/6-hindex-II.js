// 275. H-Index II

var hIndex = function (citations) {
  let n = citations.length;
  let left = 0,
    right = n - 1;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    let h = n - mid;

    if (citations[mid] >= h) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }

  return n - left;
};

console.log(hIndex([0, 1, 3, 5, 6]));
console.log(hIndex([1, 2, 100]));
console.log(hIndex([0, 0, 0]));
console.log(hIndex([10, 10, 10]));
