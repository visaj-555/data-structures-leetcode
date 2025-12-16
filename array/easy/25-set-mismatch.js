var findDuplicateAndMissing = function (nums) {
  let n = nums.length;

  let expectedSum = (n * (n + 1)) / 2;
  let expectedSumOfSquares = (n * (n + 1) * (2 * n + 1)) / 6;

  let actualSum = 0;
  let actualSumOfSquares = 0;

  for (let num of nums) {
    actualSum += num;
    actualSumOfSquares += num * num;
  }

  let sumDifference = actualSum - expectedSum;
  let squareSumDifference = actualSumOfSquares - expectedSumOfSquares;

  let duplicate = (sumDifference + squareSumDifference / sumDifference) / 2;
  let missing = duplicate - sumDifference;

  return [duplicate, missing];
};
