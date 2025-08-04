function isPrime(n) {
  if (n % 1 === 0 && n % 2 !== 0) {
    return "Prime number";
  } else {
    return "Not Prime number";
  }
}

console.log(isPrime(20));
