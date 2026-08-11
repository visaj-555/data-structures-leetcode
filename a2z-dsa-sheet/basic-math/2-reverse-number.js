var reverse = function (x) {
  let result = 0;
  let num = Math.abs(x);

  while (num !== 0) {
    let digit = num % 10;
    result = result * 10 + digit;
    num = Math.floor(num / 10);
  }

  if (x < 0) result = -result;

  if (result < -2147483648 || result > 2147483647) {
    return 0;
  }

  return result;
};

console.log(reverse(123));
