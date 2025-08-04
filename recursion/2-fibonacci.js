// Recursive Approach

function fib(n) {
  if (n <= 1) return n;
  return fib(n - 1) + fib(n - 2);
}

// Space Iterative Approach

function fib(n) {
  if (n === 0) return 0;
  if (n === 1 || n === 2) return 1;

  let a = 1;
  let b = 1;
  for (let i = 3; i <= n; i++) {
    let c = a + b;
    a = b;
    b = c;
  }
  return b;
}
