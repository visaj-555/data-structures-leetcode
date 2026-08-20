// 921. Minimum Add to Make Parentheses Valid

// Brute Force

var minAddToMakeValid = function (s) {
  let stack = [];
  let additions = 0;

  for (let char of s) {
    if (char === "(") {
      stack.push(char);
    } else {
      if (stack.length > 0) {
        stack.pop();
      } else {
        additions++; // need one '('
      }
    }
  }

  // remaining '(' need ')'
  return additions + stack.length;
};

// Optimal Solution

var minAddToMakeValid = function (s) {
  let openCount = 0,
    moves = 0;

  for (let c of s) {
    if (c == "(") {
      openCount++;
    } else {
      if (openCount == 0) {
        moves++;
      } else {
        openCount--;
      }
    }
  }

  return moves + openCount;
};
