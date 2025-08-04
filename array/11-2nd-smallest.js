function findSecondSmallestAndLargest(arr) {
  if (arr.length < 2) return [-1, -1];

  let smallest = Infinity;
  let secondSmallest = Infinity;
  let largest = -Infinity;
  let secondLargest = -Infinity;

  for (let i = 0; i < arr.length; i++) {
    // let num = arr[i];

    if (arr[i] < smallest) {
      secondSmallest = smallest;
      smallest = arr[i];
    } else if (arr[i] !== smallest && arr[i] < secondSmallest) {
      secondSmallest = arr[i];
    }

    if (arr[i] > largest) {
      secondLargest = largest;
      largest = arr[i];
    } else if (arr[i] !== largest && arr[i] > secondLargest) {
      secondLargest = arr[i];
    }
  }

  if (secondSmallest === Infinity) secondSmallest = -1;
  if (secondLargest === -Infinity) secondLargest = -1;

  return [secondSmallest, secondLargest];
}
console.log(findSecondSmallestAndLargest([8, 8, 7, 6, 5]));
