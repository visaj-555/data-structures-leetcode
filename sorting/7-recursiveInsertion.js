function recursiveInsertionSort(arr, n = arr.length) {
  if (n <= 1) {
    return;
  }

  recursiveInsertionSort(arr, n - 1);

  let key = arr[n - 1];
  let j = n - 2;

  while (j >= 0 && arr[j] > key) {
    arr[j + 1] = arr[j];
    j--;
  }

  arr[j + 1] = key;
}

let arr = [7, 4, 1, 5, 3];
console.log("Before:", arr);
recursiveInsertionSort(arr);
console.log("After:", arr);
