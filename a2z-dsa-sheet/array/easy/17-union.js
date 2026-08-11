function Intersection(nums1, nums2) {
  let nums3 = [];

  for (let i = 0; i < nums1.length; i++) {
    for (let j = 0; j < nums2.length; j++) {
      if (nums1[i] == nums2[j]) {
        nums3.push(nums1[i]);
      }
    }
  }
  return nums3;
}

console.log(
  Intersection(
    [20, 30, 40, 10, 50, 100, 3000, 40000],
    [10, 20, 30, 50, 40, 90, 50000, 60000]
  )
);
