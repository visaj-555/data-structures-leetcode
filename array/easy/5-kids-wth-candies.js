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

var kidsWithCandies = function (candies, extraCandies) {
  let max = Math.max(...candies);
  let result = new Array();

  for (let i = 0; i < candies.length; i++) {
    if (candies[i] + extraCandies >= max) {
      result.push(true);
    } else {
      result.push(false);
    }
  }

  return result;
};

console.log(kidsWithCandies([4, 2, 1, 1, 2], 1)); // [true,false,false,false,false]
console.log(kidsWithCandies([12, 1, 12], 10)); // [true,false,true]
