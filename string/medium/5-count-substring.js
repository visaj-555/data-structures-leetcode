function countSubstringsWithAtMostK(s, k) {
  let count = 0;
  let start = 0;
  let charCount = {};

  for (let end = 0; end < s.length; end++) {
    charCount[s[end]] = (charCount[s[end]] || 0) + 1;

    while (Object.keys(charCount).length > k) {
      charCount[s[start]]--;
      if (charCount[s[start]] === 0) {
        delete charCount[s[start]];
      }
      start++;
    }

    count += end - start + 1;
  }

  return count;
}

function countSubstringsWithExactlyK(s, k) {
  return (
    countSubstringsWithAtMostK(s, k) - countSubstringsWithAtMostK(s, k - 1)
  );
}

console.log(countSubstringsWithExactlyK("pqpqs", 2));
console.log(countSubstringsWithExactlyK("abcbaa", 3));
