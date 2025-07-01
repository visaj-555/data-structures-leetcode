function isPalindrome(num) {
  numStr = num.toString();
  reverseNum = numStr.split("").reverse().join("");

  if (num == reverseNum) {
    return true;
  } else {
    return false;
  }
}

console.log(isPalindrome(121));
