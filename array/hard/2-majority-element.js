// 229. Majority Element II

// Hashmap :

var majorityElement = function (nums) {
  const count = {};
  const threshold = Math.floor(nums.length / 3);
  const result = [];

  for (const num of nums) {
    count[num] = (count[num] || 0) + 1;
  }

  for (const num in count) {
    if (count[num] > threshold) {
      result.push(Number(num));
    }
  }

  return result;
};

// Optimal : Boyer Moore Voting :

var majorityElement = function (nums) {
  let candidate1 = null;
  let candidate2 = null;
  let count1 = 0;
  let count2 = 0;

  // First Pass: Find potential candidates
  for (let num of nums) {
    if (num === candidate1) {
      count1++;
    } else if (num === candidate2) {
      count2++;
    } else if (count1 === 0) {
      candidate1 = num;
      count1 = 1;
    } else if (count2 === 0) {
      candidate2 = num;
      count2 = 1;
    } else {
      count1--;
      count2--;
    }
  }

  // Second Pass: Verify candidates
  count1 = 0;
  count2 = 0;

  for (let num of nums) {
    if (num === candidate1) {
      count1++;
    } else if (num === candidate2) {
      count2++;
    }
  }

  const result = [];
  const threshold = Math.floor(nums.length / 3);

  if (count1 > threshold) result.push(candidate1);
  if (count2 > threshold) result.push(candidate2);

  return result;
};
