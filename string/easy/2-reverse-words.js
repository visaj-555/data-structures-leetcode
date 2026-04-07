// 151. Reverse Words in a String

// Brute Force :
var reverseWords = function (s) {
  let str = s.split(" ");
  let rev = [];

  for (let i = str.length - 1; i >= 0; i--) {
    if (str[i]) {
      rev.push(str[i]);
    }
  }

  return rev.join(" ");
};

// Simpler :

function reverseWords(s) {
  return s.trim().split(/\s+/).reverse().join(" ");
}

reverseWords("the sky is blue");

reverseWords("  hello world  ");

reverseWords("a good   example");
