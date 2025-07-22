function findHighLowFrequency(arr) {
  const freq = {};

  for (let num of arr) {
    freq[num] = (freq[num] || 0) + 1;
  }

  let maxFreq = -Infinity,
    minFreq = Infinity;
  let maxFreqElement = null,
    minFreqElement = null;

  for (let key in freq) {
    if (freq[key] > maxFreq) {
      maxFreq = freq[key];
      maxFreqElement = key;
    }

    if (freq[key] < minFreq) {
      minFreq = freq[key];
      minFreqElement = key;
    }
  }

  console.log("Highest Frequency:", maxFreqElement);
  console.log("Lowest Frequency:", minFreqElement);
}

findHighLowFrequency([30, 50, 40, 23, 100, 600, 30, 30, 23, 100, 100]);
