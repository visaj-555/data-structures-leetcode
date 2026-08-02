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

var findMedianSortedArrays = function (nums1, nums2) {
  // Always binary search on the smaller array
  if (nums1.length > nums2.length) {
    return findMedianSortedArrays(nums2, nums1);
  }

  const n1 = nums1.length;
  const n2 = nums2.length;

  let left = 0;
  let right = n1;

  while (left <= right) {
    const cut1 = Math.floor((left + right) / 2);
    const cut2 = Math.floor((n1 + n2 + 1) / 2) - cut1;

    const l1 = cut1 === 0 ? -Infinity : nums1[cut1 - 1];
    const l2 = cut2 === 0 ? -Infinity : nums2[cut2 - 1];

    const r1 = cut1 === n1 ? Infinity : nums1[cut1];
    const r2 = cut2 === n2 ? Infinity : nums2[cut2];

    // Correct Partition
    if (l1 <= r2 && l2 <= r1) {
      // Odd Length
      if ((n1 + n2) % 2 === 1) {
        return Math.max(l1, l2);
      }

      // Even Length
      return (Math.max(l1, l2) + Math.min(r1, r2)) / 2;
    }

    // Move Left
    if (l1 > r2) {
      right = cut1 - 1;
    }

    // Move Right
    else {
      left = cut1 + 1;
    }
  }
};

console.log(findMedianSortedArrays([1, 3], [2]));
console.log(findMedianSortedArrays([1, 2], [3, 4]));
