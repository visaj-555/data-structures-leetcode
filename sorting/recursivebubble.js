function RecursiveBubbleSort(arr, n) {
  if (n == 1) return;

  let count = 0;

  for (let i = 0; i < n - 1; i++) {
    if (arr[i] > arr[i + 1]) {
      let temp = arr[i];
      arr[i] = arr[i + 1];
      arr[i + 1] = temp;
      count++;
    }
  }

  if (count == 0) return;

  RecursiveBubbleSort(arr, n - 1);
}

let arr = [64, 34, 25, 12, 22, 11, 90];
console.log("Before:", arr.join(" "));

RecursiveBubbleSort(arr, arr.length);

console.log("Sorted array:");
console.log(arr.join(" "));
