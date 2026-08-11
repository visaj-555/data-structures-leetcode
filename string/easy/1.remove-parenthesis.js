// 1021. Remove Outermost Parentheses

function removeOuterParentheses(s) {
  let result = "";
  let balance = 0;

  for (let i = 0; i < s.length; i++) {
    if (s[i] === "(") {
      if (balance > 0) {
        result += "(";
      }
      balance++;
    } else {
      balance--;
      if (balance > 0) {
        result += ")";
      }
    }
  }

  return result;
}

// For of approach :

var removeOuterParentheses = function (s) {
  let ans = "";
  let depth = 0;

  for (let ch of s) {
    if (ch === "(") {
      if (depth > 0) ans += ch;
      depth++;
    } else {
      depth--;
      if (depth > 0) ans += ch;
    }
  }

  return ans;
};

console.log(removeOuterParentheses("(()())(())"));
console.log(removeOuterParentheses("(()())(())(()(()))"));
console.log(removeOuterParentheses("()()"));
