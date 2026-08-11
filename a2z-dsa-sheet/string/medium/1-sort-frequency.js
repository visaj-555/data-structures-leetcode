var frequencySort = function (s) {
  // Step 1: Count frequency
  const freq = {};
  for (let ch of s) {
    freq[ch] = (freq[ch] || 0) + 1;
  }

  // Step 2: Sort characters by frequency
  return Object.keys(freq)
    .sort((a, b) => freq[b] - freq[a])
    .map((ch) => ch.repeat(freq[ch]))
    .join("");
};

frequencySort("tree");
frequencySort("cccaaa");
frequencySort("Aabb");
