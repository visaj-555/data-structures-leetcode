// 150. Evaluate Reverse Polish Notation

// Akshay's Solution

var evalRPN = function (tokens) {
  const stack = [];

  for (let token of tokens) {
    if (!isNaN(token)) {
      stack.push(Number(token));
    } else {
      const b = stack.pop();
      const a = stack.pop();

      if (token === "+") stack.push(a + b);
      if (token === "-") stack.push(a - b);
      if (token === "*") stack.push(a * b);
      if (token === "/") stack.push(Math.trunc(a / b));
    }
  }

  return stack.pop();
};

console.log(evalRPN(["2", "1", "+", "3", "*"]));
console.log(evalRPN(["4", "13", "5", "/", "+"]));

var evalRPN = function (tokens) {
  let stack = [];
  let result = 0;
  for (let i = 0; i < tokens.length; i++) {
    if (
      tokens[i] === "+" ||
      tokens[i] === "-" || // if (["+", "-", "/", "*"].includes(tokens[i]))
      tokens[i] === "/" ||
      tokens[i] === "*"
    ) {
      let opp = tokens[i];
      let a = stack.pop();
      let b = stack.pop();
      switch (opp) {
        case "+":
          result = b + a;
          break;
        case "-":
          result = b - a;
          break;
        case "*":
          result = b * a;
          break;
        case "/":
          result = Math.trunc(b / a);
          break;
      }
      stack.push(result);
    } else {
      stack.push(Number(tokens[i]));
    }
  }

  return stack[0];
};
