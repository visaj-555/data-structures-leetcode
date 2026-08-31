// 686. Repated String Match

var repeatedStringMatch = function (a, b) {
  let repeated = a;
  let count = 1;

  while (repeated.length < b.length) {
    repeated += a;
    count++;
  }

  if (repeated.includes(b)) {
    return count;
  }

  repeated += a;
  count++;

  if (repeated.includes(b)) {
    return count;
  }

  return -1;
};

// Rabin-Karp Algorithm
var rabinKarp = function (text, pattern) {
  let base = 256;
  let mod = 1e9 + 7;

  let n = text.length;
  let m = pattern.length;

  let patternHash = 0;
  let windowHash = 0;

  // Initial hash
  for (let i = 0; i < m; i++) {
    patternHash = (patternHash * base + pattern.charCodeAt(i)) % mod;
    windowHash = (windowHash * base + text.charCodeAt(i)) % mod;
  }

  let power = 1;
  for (let i = 0; i < m - 1; i++) {
    power = (power * base) % mod;
  }

  for (let i = 0; i <= n - m; i++) {
    // Check hash match
    if (patternHash === windowHash) {
      if (text.substring(i, i + m) === pattern) {
        return true;
      }
    }

    // Rolling hash update
    if (i < n - m) {
      windowHash =
        (windowHash - ((power * text.charCodeAt(i)) % mod) + mod) % mod;
      windowHash = (windowHash * base + text.charCodeAt(i + m)) % mod;
    }
  }

  return false;
};
