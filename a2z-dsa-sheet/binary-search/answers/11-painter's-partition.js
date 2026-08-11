function paint(A, B, C) {
  const MOD = 10000003;

  function canPaint(maxTime) {
    let painters = 1;
    let current = 0;

    for (let len of C) {
      if (len * B > maxTime) return false;

      if (current + len * B <= maxTime) {
        current += len * B;
      } else {
        painters++;
        current = len * B;
        if (painters > A) return false;
      }
    }
    return true;
  }

  let left = 0;
  let right = C.reduce((a, b) => a + b, 0) * B;
  let ans = right;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);

    if (canPaint(mid)) {
      ans = mid;
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }

  return ans % MOD;
}

console.log(paint(2, 5, [1, 10]));
console.log(paint(10, 1, [1, 8, 11, 3]));
