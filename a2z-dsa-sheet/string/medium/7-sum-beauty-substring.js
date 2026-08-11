// 1781. Sum of Beauty of All Substrings

var beautySum = function (s) {
  let ans = 0;
  let n = s.length;

  for (let i = 0; i < n; i++) {
    let freq = new Array(26).fill(0);

    for (let j = i; j < n; j++) {
      let idx = s.charCodeAt(j) - 97;
      freq[idx]++;

      let min = Infinity;
      let max = 0;

      for (let k = 0; k < 26; k++) {
        if (freq[k] > 0) {
          min = Math.min(min, freq[k]);
          max = Math.max(max, freq[k]);
        }
      }

      ans += max - min;
    }
  }

  return ans;
};

console.log(beautySum("aabcb"));
console.log(beautySum("aabcbaa"));
