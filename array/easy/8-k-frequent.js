var topKFrequent = function (nums, k) {
  // Step 1: Count frequencies
  let freqMap = {};

  for (let num of nums) {
    freqMap[num] = (freqMap[num] || 0) + 1;
  }

  // Step 2: Convert map to array and sort by frequency
  let sorted = Object.entries(freqMap).sort((a, b) => b[1] - a[1]);

  // Step 3: Extract the top k elements (just the numbers, not frequencies)
  let result = [];
  for (let i = 0; i < k; i++) {
    result.push(Number(sorted[i][0]));
  }

  return result;
};

// Example usage:
console.log(topKFrequent([1, 1, 1, 2, 2, 3], 2)); // Output: [1, 2]

// DEBUGGING :

// var topKFrequent = function (nums, k) {
//   console.log("Input nums:", nums);
//   console.log("K:", k);

//   // Step 1: Count frequencies
//   let freqMap = {};
//   for (let num of nums) {
//     freqMap[num] = (freqMap[num] || 0) + 1;
//     console.log(`Counting: ${num} ➝`, freqMap);
//   }

//   console.log("\nFinal Frequency Map:", freqMap);

//   // Step 2: Convert map to array and sort by frequency
//   let entries = Object.entries(freqMap);
//   console.log("\nEntries before sorting:", entries);

//   let sorted = entries.sort((a, b) => b[1] - a[1]);
//   console.log("Entries after sorting by frequency:", sorted);

//   // Step 3: Extract top K elements
//   let result = [];
//   for (let i = 0; i < k; i++) {
//     let numStr = sorted[i][0];
//     let frequency = sorted[i][1];
//     console.log(
//       `\nPicking #${i + 1}: Number = ${numStr}, Frequency = ${frequency}`
//     );
//     result.push(Number(numStr));
//   }

//   console.log("\nTop K Frequent Elements:", result);
//   return result;
// };

// // Test the function
// topKFrequent([1, 1, 1, 2, 2, 3], 2);
