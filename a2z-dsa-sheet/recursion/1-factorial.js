function factorial(n) {
  if (n === 0) {
    return 1;
  } else {
    return n * factorial(n - 1);
  }
}

console.log(factorial(5));

// function factorial(n) {
//   console.log("Calling factorial(" + n + ")");

//   if (n === 0) {
//     console.log("Reached base case, return 1");
//     return 1;
//   }

//   const result = n * factorial(n - 1);
//   console.log("Returning " + result + " for factorial(" + n + ")");
//   return result;
// }

// console.log("Final Answer:", factorial(5));
