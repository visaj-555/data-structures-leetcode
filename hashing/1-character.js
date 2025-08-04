function countCharFrequency(str) {
  const freq = {};

  for (let char of str) {
    freq[char] = (freq[char] || 0) + 1;
  }

  return freq;
}

console.log(countCharFrequency("visaj"));

// Ignoring Spaces Variation

function countAlphabetFrequency(str) {
  const freq = {};

  for (let char of str.toLowerCase()) {
    if (char >= "a" && char <= "z") {
      freq[char] = (freq[char] || 0) + 1;
    }
  }

  return freq;
}

console.log(
  countAlphabetFrequency(
    "Hello World nskdgjdshiuf kjafhiusjkbhfiusbf a fiSdgyuasfia fash"
  )
);

function getHighestAndLowestCharFreq(str) {
  const freq = {};

  // 1️⃣ Count only alphabet characters
  for (let char of str.toLowerCase()) {
    if (char >= "a" && char <= "z") {
      freq[char] = (freq[char] || 0) + 1;
    }
  }

  // 2️⃣ Find highest and lowest frequency characters
  let maxFreq = -Infinity;
  let minFreq = Infinity;
  let maxChar = "";
  let minChar = "";

  for (let char in freq) {
    if (freq[char] > maxFreq) {
      maxFreq = freq[char];
      maxChar = char;
    }

    if (freq[char] < minFreq) {
      minFreq = freq[char];
      minChar = char;
    }
  }

  return {
    frequencyMap: freq,
    highest: { char: maxChar, freq: maxFreq },
    lowest: { char: minChar, freq: minFreq },
  };
}

const result = getHighestAndLowestCharFreq("hello world!! 123");

console.log("Frequency Map:", result.frequencyMap);
console.log("Highest Frequency:", result.highest);
console.log("Lowest Frequency:", result.lowest);
