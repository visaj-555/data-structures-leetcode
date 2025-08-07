/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void}
 */
// function rotate(nums, k) {
//   let n = nums.length;
//   k = k % n; // Handle if k > n

//   for (let i = 0; i < k; i++) {
//     nums.unshift(nums.pop());
//   }
// }

function rotate(nums, k) {
  const n = nums.length;
  k = k % n;

  reverse(nums, 0, n - 1);
  reverse(nums, 0, k - 1);
  reverse(nums, k, n - 1);
}

function reverse(arr, start, end) {
  while (start < end) {
    [arr[start], arr[end]] = [arr[end], arr[start]];
    start++;
    end--;
  }
}

let nums = [-1, -100, 3, 99];
rotate(nums, 2);
console.log(nums);
