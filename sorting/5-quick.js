// If array length <= 1, return it -- done
// Pick last element as pivot -- done
// Put smaller values left, larger right -- loop I will need , to placed values I need compare and insert so I will use push
// Recursively sort both sides
// Return left + pivot + right

function quickSort(arr) {
  if (arr.length <= 1) {
    return arr;
  }

  let pivot = arr[arr.length - 1];
  let left = [];
  let right = [];

  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] <= pivot) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }

  return [...quickSort(left), pivot, ...quickSort(right)];
}

console.log(quickSort([5, 2, 8, 1, 3]));
