// 771. Jewels and Stones

var numJewelsInStones = function (jewels, stones) {
  jewels = jewels.split("");
  let stoneStr = stones.split("");
  let count = 0;

  for (let i = 0; i < stoneStr.length; i++) {
    if (jewels.includes(stoneStr[i])) {
      count++;
    }
  }
  return count;
};

// Optimal

var numJewelsInStones = function (jewels, stones) {
  let set = new Set(jewels);
  let count = 0;

  for (let stone of stones) {
    if (set.has(stone)) {
      count++;
    }
  }
  return count;
};
