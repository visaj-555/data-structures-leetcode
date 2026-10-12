// 125. Valid Palindrome

// Simpler  : Brute Force
var isPalindrome = function (s) {
  const str = s.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();

  let rev = "";

  for (let i = str.length - 1; i >= 0; i--) {
    rev += str[i];
  }

  return rev === str;
};

// Two Pointers : 

var isPalindrome = function (s) {
  let l = 0;
  let r = s.length - 1;

  while (l < r) {
    // skip non-alphanumeric from left
    while (l < r && !/[a-z0-9]/i.test(s[l])) {
      l++;
    }

    // skip non-alphanumeric from right
    while (l < r && !/[a-z0-9]/i.test(s[r])) {
      r--;
    }

    // compare (case-insensitive)
    if (s[l].toLowerCase() !== s[r].toLowerCase()) {
      return false;
    }

    l++;
    r--;
  }

  return true;
};

// Clean Two Pointers Approach : 

var isPalindrome = function(s) {
    s = s.toLowerCase().replace(/[^a-z0-9]/g, "");

    let left = 0;
    let right = s.length - 1;

    while (left < right) {
        if (s[left] !== s[right]) {
            return false;
        }

        left++;
        right--;
    }

    return true;
};