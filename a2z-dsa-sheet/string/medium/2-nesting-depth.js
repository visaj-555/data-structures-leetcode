// 1614. Maximum Nesting Depth of the Parentheses

var maxDepth = function (s) {
  let max = 0;
  let current = 0;

  for (let char of s) {
    if (char === "(") {
      current++;
      max = Math.max(max, current);
    } else if (char === ")") {
      current--;
    }
  }

  return max;
};
