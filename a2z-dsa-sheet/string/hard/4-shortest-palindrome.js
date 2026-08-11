// 214. Shortest Palindrome

var shortestPalindrome = function (s) {
  let i = 0;

  for (let j = s.length - 1; j >= 0; j--) {
    if (s[i] === s[j]) {
      i++;
    }
  }

  if (i === s.length) return s;

  let suffix = s.slice(i);
  let prefix = suffix.split("").reverse().join("");

  return prefix + shortestPalindrome(s.slice(0, i)) + suffix;
};

console.log(shortestPalindrome("aacecaaa"));
console.log(shortestPalindrome("abcd"));
console.log(shortestPalindrome(""));
console.log(shortestPalindrome("a"));
