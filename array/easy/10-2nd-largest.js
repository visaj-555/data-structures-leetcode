function secondlargestElement(arr) {
  let largest = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > largest) {
      largest = arr[i];
    }
  }

  let secondLargest = -1;
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > secondLargest && arr[i] !== largest) {
      secondLargest = arr[i];
    }
  }
  return secondLargest;
}

console.log(secondlargestElement([20, 70, 90, 80, 20, 10]));

// optimal solution
function secondLargestElementOptimal(arr) {
  let largest = -1;
  let secondLargest = -1;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > largest) {
      secondLargest = largest;
      largest = arr[i];
    } else if (arr[i] !== largest && arr[i] > secondLargest) {
      secondLargest = arr[i];
    }
  }

  return secondLargest;
}

secondLargestElementOptimal([20, 70, 90, 80, 20, 10]);
