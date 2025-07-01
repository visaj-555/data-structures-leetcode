function rangeofnumbers(startNum, endNum) {
  if (end < start) {
    return [];
  } else {
    const numbers = rangeofnumbers(startNum, endNum - 1);
    numbers.push(endNum);
    return numbers;
  }
}

console.log(rangeofnumbers(40, 50));
