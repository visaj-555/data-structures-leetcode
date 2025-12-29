// 8. String to Integer (atoi)

var myAtoi = function (s) {
  // 1. Trim leading whitespace
  s = s.trim();

  // 2. Extract optional sign + digits
  const match = s.match(/^[-+]?\d+/);
  if (!match) return 0;

  // 3. Convert to number
  let num = Number(match[0]);

  // 4. Clamp to 32-bit signed integer range
  const INT_MIN = -(2 ** 31);
  const INT_MAX = 2 ** 31 - 1;

  return Math.min(Math.max(num, INT_MIN), INT_MAX);
};

console.log(myAtoi("42"));
console.log(myAtoi(" -042"));
console.log(myAtoi("1337c0d3"));
console.log(myAtoi("0-1"));
