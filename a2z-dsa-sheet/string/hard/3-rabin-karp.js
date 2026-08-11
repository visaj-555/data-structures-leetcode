// 686. Repeated String Match

var repeatedStringMatch = function (a, b) {
  let repeated = a;
  let count = 1;

  while (repeated.length < b.length) {
    repeated += a;
    count++;
  }

  if (repeated.includes(b)) return count;
  if ((repeated + a).includes(b)) return count + 1;

  return -1;
};

console.log(repeatedStringMatch("abcd", "cdabcdab"));
console.log(repeatedStringMatch("a", "aa"));
