// 128. Longest Consecutive Sequence

function longestConsecutive(nums) {
  if (nums.length === 0) return 0;

  nums.sort((a, b) => a - b);

  let longest = 1;
  let currentStreak = 1;

  for (let i = 1; i < nums.length; i++) {
    if (nums[i] === nums[i - 1]) {
      continue;
    }
    if (nums[i] === nums[i - 1] + 1) {
      currentStreak++;
    } else {
      currentStreak = 1;
    }
    longest = Math.max(longest, currentStreak);
  }

  return longest;
}

console.log(longestConsecutive([100, 4, 200, 1, 3, 2]));

var longestConsecutive = function (nums) {
  let set = new Set(nums);
  let longest = 0;
  for (let num of set) {
    if (!set.has(num - 1)) {
      let current = num;
      let length = 1;
      while (set.has(current + 1)) {
        current++;
        length++;
      }
      longest = Math.max(length, longest);
    }
  }

  return longest;
};

console.log(longestConsecutiveSet([100, 4, 200, 1, 3, 2]));
