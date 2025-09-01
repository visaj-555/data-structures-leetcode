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

function longestConsecutiveSet(nums) {
  if (nums.length === 0) return 0;

  let numSet = new Set(nums);
  let longest = 0;

  for (let num of numSet) {
    if (!numSet.has(num - 1)) {
      let currentNum = num;
      let streak = 1;

      while (numSet.has(currentNum + 1)) {
        currentNum++;
        streak++;
      }

      longest = Math.max(longest, streak);
    }
  }

  return longest;
}

console.log(longestConsecutiveSet([100, 4, 200, 1, 3, 2]));
