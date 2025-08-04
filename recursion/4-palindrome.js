// Brute force appraoch

// function isPalindrome(num) {
//   numStr = num.toString();
//   reverseNum = numStr.split("").reverse().join("");

//   if (num == reverseNum) {
//     return true;
//   } else {
//     return false;
//   }
// }

// console.log(isPalindrome(121));

// Recursive Approach

console.log("Recursion Approach : ");

function isPalindrome(str) {
  str = str.toLowerCase().replace(/[^a-z0-9]/g, "");

  if (str.length <= 1) {
    return true;
  }

  if (str[0] !== str[str.length - 1]) {
    return false;
  }

  return isPalindrome(str.slice(1, str.length - 1));
}

console.log(isPalindrome("racecar"));
