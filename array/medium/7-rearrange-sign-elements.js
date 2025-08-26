function rearrangeArray(nums) {
  let positive = new Array();
  let negative = new Array();
  let result = new Array();
  let posIndex = 0,
    negIndex = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > 0) {
      positive.push(nums[i]);
    } else {
      negative.push(nums[i]);
    }
  }

  for (let i = 0; i < nums.length; i++) {
    if (i % 2 === 0) {
      result.push(positive[posIndex++]);
    } else {
      result.push(negative[negIndex++]);
    }
  }

  return result;
}

function rearrangeArray(nums) {
  let n = nums.length;
  let result = new Array(n);

  let pos = 0; // even indices for positives
  let neg = 1; // odd indices for negatives

  for (let num of nums) {
    if (num > 0) {
      result[pos] = num;
      pos += 2;
    } else {
      result[neg] = num;
      neg += 2;
    }
  }

  return result;
}

console.log(rearrangeArray([3, 1, -2, -5, 2, -4])); // [3,-2,1,-5,2,-4]
console.log(rearrangeArray([-1, 1])); // [1,-1]
