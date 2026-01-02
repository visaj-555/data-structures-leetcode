// 151. Reverse Words in a String

var reverseWords = function (s) {
  let start = 0;
  let end = s.length - 1;

  // remove extra spaces from start and end
  while (start <= end && s[start] === " ") start++;
  while (end >= start && s[end] === " ") end--;

  let words = [];
  let word = "";

  // collect words one by one
  for (let i = start; i <= end; i++) {
    if (s[i] !== " ") {
      word += s[i];
    } else if (word) {
      words.push(word);
      word = "";
    }
  }

  if (word) words.push(word);

  // reverse words manually
  let result = [];
  for (let i = words.length - 1; i >= 0; i--) {
    result.push(words[i]);
  }

  return result.join(" ");
};

// Optimal :

var reverseWords = function (s) {
  return s.trim().split(/\s+/).reverse().join(" ");
};

console.log(reverseWords("the sky is blue"));
console.log(reverseWords("  hello world  "));
console.log(reverseWords("a good   example"));
console.log(reverseWords("one"));
