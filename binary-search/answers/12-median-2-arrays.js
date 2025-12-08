// 4. Median of Two Sorted Arrays

var findMedianSortedArrays = function (nums1, nums2) {
  const merged = [];
  let i = 0,
    j = 0;

  while (i < nums1.length && j < nums2.length) {
    if (nums1[i] < nums2[j]) {
      merged.push(nums1[i++]);
    } else {
      merged.push(nums2[j++]);
    }
  }

  while (i < nums1.length) merged.push(nums1[i++]);
  while (j < nums2.length) merged.push(nums2[j++]);

  const n = merged.length;
  if (n % 2 === 1) {
    return merged[Math.floor(n / 2)];
  } else {
    return (merged[n / 2 - 1] + merged[n / 2]) / 2;
  }
};

console.log(findMedianSortedArrays([1, 3], [2]));
console.log(findMedianSortedArrays([1, 2], [3, 4]));
