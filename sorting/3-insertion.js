function InsertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    let key = arr[i];
    let j = i - 1;

    while (j >= 0 && arr[j] > key) {
      arr[j + 1] = arr[j];
      j--;
    }

    arr[j + 1] = key;
  }

  return arr;
}

let arr = [7, 4, 1, 5, 3];
console.log("Before:", arr);
InsertionSort(arr);
console.log("After:", arr);
