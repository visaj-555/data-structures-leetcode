function countSubarraysWithXor(nums, k) {
  let map = new Map();
  let xor = 0;
  let count = 0;

  for (let num of nums) {
    xor ^= num;

    if (xor === k) count++;

    let needed = xor ^ k;
    if (map.has(needed)) count += map.get(needed);

    map.set(xor, (map.get(xor) || 0) + 1);
  }

  return count;
}

console.log(countSubarraysWithXor([4, 2, 2, 6, 4], 6));
console.log(countSubarraysWithXor([5, 6, 7, 8, 9], 5));
