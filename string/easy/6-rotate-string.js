//  796. Rotate String

var rotateString = function (s, goal) {
  if (s.length !== goal.length) return false;

  for (let shifts = 0; shifts < s.length; shifts++) {
    s = s.substring(1) + s[0];

    if (s === goal) return true;
  }

  return false;
};

console.log(rotateString("abcde", "cdeab"));
console.log(rotateString("abcde", "abced"));
