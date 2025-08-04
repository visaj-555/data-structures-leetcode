function findArmStrong(num) {
  var digits = num.toString().split("");
  var sum = 0;

  for (let i = 1; i <= digits.length; i++) {
    let armstrong = digits[i] * digits.length;
    sum = sum + armstrong;
    return sum;
  }
}

console.log(findArmStrong(153));
