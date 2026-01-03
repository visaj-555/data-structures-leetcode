//  921. Minimum Add to Make Parentheses Valid

var minAddToMakeValid = function (s) {
  let open = 0;
  let add = 0;

  for (let char of s) {
    if (char === "(") {
      open++;
    } else {
      if (open > 0) {
        open--;
      } else {
        add++;
      }
    }
  }

  return add + open;
};

console.log(minAddToMakeValid("())"));
console.log(minAddToMakeValid("((("));
