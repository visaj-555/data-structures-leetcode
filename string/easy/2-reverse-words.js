// 151. Reverse Words in a String

// Brute Force :

var reverseWords = function (s) {
  return s.trim().split(/\s+/).reverse().join(" ");
};

// Optimised :

var reverseWords = function (s) {
  let str = s.replace(/\s+/g, " ").trim();
  let words = str.split(" ");
  let reversed = "";

  for (let i = words.length - 1; i >= 0; i--) {
    reversed += words[i] + " ";
  }

  return reversed.trim();
};

// Simpler :

reverseWords("the sky is blue");
reverseWords("  hello world  ");
reverseWords("a good   example");
