// 1903. Largest Odd Number in String

var largestOddNumber = function (num) {
  for (let i = num.length - 1; i >= 0; i--) {
    if (num[i] % 2 === 1) {
      return num.substring(0, i + 1);
    }
  }
  return "";
};

largestOddNumber("52");
largestOddNumber("4206");
largestOddNumber("35427");
largestOddNumber("101");
