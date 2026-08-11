var isPalindrome = function (x) {
  let num = Math.abs(x);
  let result = 0;
  while (num !== 0) {
    let digit = num % 10;
    result = result * 10 + digit;
    num = Math.floor(num / 10);
  }

  if (result == x) {
    return true;
  } else {
    return false;
  }
};
