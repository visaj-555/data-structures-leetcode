function SelectionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let min = i;

    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[min]) {
        min = j;
      }
    }

    // Swap
    let temp = arr[i];
    arr[i] = arr[min];
    arr[min] = temp;
  }

  return arr;
}

// Test
let arr = [13, 46, 24, 52, 20, 9];
console.log("Before:", arr);
SelectionSort(arr);
console.log("After:", arr);
