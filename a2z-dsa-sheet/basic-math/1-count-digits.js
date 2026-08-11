function countDigits(number) {
  numStr = number.toString();
  numLength = numStr.length;

  let count = 0;

  for (let i = 0; i < numStr.length; i++) {
    count++;
  }

  console.log("Count Digits : ", count);
}

countDigits(12345);
