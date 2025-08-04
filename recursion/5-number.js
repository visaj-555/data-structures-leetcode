// Iterati Approach 1 to N

function printLoop(n) {
  for (let i = 1; i <= n; i++) {
    console.log(i);
  }
}

console.log("Using Iterative approach : ");
printLoop(5);

// Recursive Approach 1 to N

function print(n) {
  if (n <= 0) {
    return;
  } else {
    print(n - 1);
    console.log(n);
  }
}

console.log("Using Recursive approach 1 to N : ");

print(20);

// Recursive Approach 1 to N

console.log("Using Recursive approach N to 1 : ");

function print(n) {
  if (n <= 0) {
    return;
  } else {
    console.log(n);

    print(n - 1);
  }
}

print(5);
