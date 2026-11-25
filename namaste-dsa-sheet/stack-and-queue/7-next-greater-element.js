// 496. Next Greater Element I

// Easy - Using 2 For loops

var nextGreaterElement = function (nums1, nums2) {
  let nxtGrt = [];

  for (let i = 0; i < nums1.length; i++) {
    let index = nums2.indexOf(nums1[i]);
    let found = false;

    for (let j = index + 1; j < nums2.length; j++) {
      if (nums2[j] > nums1[i]) {
        nxtGrt.push(nums2[j]);
        found = true;
        break;
      }
    }

    if (!found) {
      nxtGrt.push(-1);
    }
  }

  return nxtGrt;
};

// Optimal with Map

var nextGreaterElement = function (nums1, nums2) {
  let stack = [];
  let map = new Map();

  for (let i = 0; i < nums2.length; i++) {
    while (stack.length > 0 && nums2[i] > stack[stack.length - 1]) {
      let num = stack.pop();
      map.set(num, nums2[i]);
    }

    stack.push(nums2[i]);
  }

  let result = [];

  for (let i = 0; i < nums1.length; i++) {
    result.push(map.has(nums1[i]) ? map.get(nums1[i]) : -1);
  }

  return result;
};

console.log(nextGreaterElement([4, 1, 2], [1, 3, 4, 2]));
console.log(nextGreaterElement([2, 4], [1, 2, 3, 4]));
