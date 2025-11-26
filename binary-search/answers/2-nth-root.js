function NthRoot(n, m) {
  if (m === 0) return 0;
  if (m === 1) return 1;
  if (n === 1) return m;

  let low = 1;
  let high = m;

  while (low <= high) {
    let mid = Math.floor((low + high) / 2);
    let power = Math.pow(mid, n);

    if (power === m) {
      return mid;
    } else if (power < m) {
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }

  return -1;
}

console.log(NthRoot(3, 27));
console.log(NthRoot(4, 69));
console.log(NthRoot(2, 16));
console.log(NthRoot(5, 32));
