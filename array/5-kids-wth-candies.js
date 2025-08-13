/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
var kidsWithCandies = function (candies, extraCandies) {
  const maxCandies = Math.max(...candies);

  const result = candies.map((candy) => candy + extraCandies >= maxCandies);

  return result;
};

console.log(kidsWithCandies([2, 3, 5, 1, 3], 3));
