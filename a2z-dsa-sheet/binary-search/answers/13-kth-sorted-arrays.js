function kthElement(a, b, k) {
  const m = a.length;
  const n = b.length;

  if (m > n) return kthElement(b, a, k);

  let low = Math.max(0, k - n);
  let high = Math.min(k, m);

  while (low <= high) {
    const cutA = Math.floor((low + high) / 2);
    const cutB = k - cutA;

    const leftA = cutA === 0 ? -Infinity : a[cutA - 1];
    const leftB = cutB === 0 ? -Infinity : b[cutB - 1];

    const rightA = cutA === m ? Infinity : a[cutA];
    const rightB = cutB === n ? Infinity : b[cutB];

    if (leftA <= rightB && leftB <= rightA) {
      return Math.max(leftA, leftB);
    } else if (leftA > rightB) {
      high = cutA - 1;
    } else {
      low = cutA + 1;
    }
  }
}

console.log(kthElement([2, 3, 6, 7, 9], [1, 4, 8, 10], 5));

console.log(
  kthElement([100, 112, 256, 349, 770], [72, 86, 113, 119, 265, 445, 892], 7)
);
