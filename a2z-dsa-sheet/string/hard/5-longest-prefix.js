var longestPrefix = function (s) {
  const n = s.length;
  const lps = Array(n).fill(0);

  let len = 0;
  let i = 1;

  while (i < n) {
    if (s[i] === s[len]) {
      len++;
      lps[i] = len;
      i++;
    } else {
      if (len !== 0) {
        len = lps[len - 1];
      } else {
        lps[i] = 0;
        i++;
      }
    }
  }

  return s.substring(0, lps[n - 1]);
};

console.log(longestPrefix("level"));
console.log(longestPrefix("ababab"));
console.log(longestPrefix("aaaa"));
console.log(longestPrefix("abc"));
console.log(longestPrefix("a"));
console.log(longestPrefix("leetcodeleet"));
