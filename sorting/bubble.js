function BubbleSort(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = 0; j < arr.length - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        // Swap adjacent elements
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  return arr;
}

let arr = [7, 4, 1, 5, 3];
console.log("Before:", arr);
BubbleSort(arr);
console.log("After:", arr);

function OptimizedBubbleSort(arr) {
  let n = arr.length;

  for (let i = 0; i < n - 1; i++) {
    let swapped = false;

    for (let j = 0; j < n - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        // Swap
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
        swapped = true;
      }
    }

    // If no swaps happened → array is sorted
    if (!swapped) {
      break;
    }
  }

  return arr;
}

let arr1 = [5, 1, 4, 2, 8];
let arr2 = [1, 2, 3, 4, 5]; // Already sorted

console.log("Before:", arr1);
console.log("After :", OptimizedBubbleSort(arr1));
