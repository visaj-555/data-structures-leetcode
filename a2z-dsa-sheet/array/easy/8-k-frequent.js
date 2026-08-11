// 347. Top K Frequent Elements

var topKFrequent = function (nums, k) {
  let freqMap = {};

  for (let num of nums) {
    freqMap[num] = (freqMap[num] || 0) + 1;
  }

  let sorted = Object.entries(freqMap).sort((a, b) => b[1] - a[1]);

  let result = [];
  for (let i = 0; i < k; i++) {
    result.push(Number(sorted[i][0]));
  }

  return result;
};

console.log(topKFrequent([1, 1, 1, 2, 2, 3], 2));
