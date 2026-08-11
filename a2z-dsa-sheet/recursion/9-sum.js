function sumTo(n) {
  if (n <= 1) {
    return 1;
  } else {
    return n + sumTo(n - 1);
  }
}

console.log(sumTo(5));

// Call Stack Explanation

function sumTo(n) {
  console.log("Calling sumTo(" + n + ")");

  if (n <= 1) {
    console.log("Reached base case: return 1");
    return 1;
  }

  const result = n + sumTo(n - 1);
  console.log("Returning: " + result + " from sumTo(" + n + ")");
  return result;
}

console.log("Final Answer:", sumTo(5));
