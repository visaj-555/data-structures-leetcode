function largestElement(arr) {
  let max = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  return max;
}

console.log(largestElement([20, 70, 90, 80, 20, 10]));

function largestElementwithRecursion(arr) {
  if (arr.length === 1) {
    return arr[0];
  }

  let restMax = largestElementwithRecursion(arr.slice(1));

  if (arr[0] > restMax) {
    return arr[0];
  } else {
    return restMax;
  }
}

console.log(largestElementwithRecursion([20, 70, 90, 80, 20, 10]));
