function reverse(arr, i = 0) {
  let j = arr.length - 1 - i;

  if (i >= j) return; // base case: stop when left meets right

  // swap
  let temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;

  // recursive call
  reverse(arr, i + 1);
}

let myArr = [10, 20, 30, 40, 50];
reverse(myArr);
console.log(myArr); // [50, 40, 30, 20, 10]
