let n1 = 20;
let n2 = 40;
let temp = 0;

for (let i = 1; i <= Math.min(n1, n2); i++) {
  if (n1 % i === 0 && n2 % i === 0) {
    temp = i;
  }
}

console.log("GCD of n1 & n2 is", temp);
