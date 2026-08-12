// 3541. Find Most Frequent Vowel and Consonant

var maxFreqSum = function (s) {
    let vowels = ["a", "e", "i", "o", "u"];
    let maxVowel = 0;
    let maxConsonant = 0;
    const freq = {};

    for (let i = 0; i < s.length; i++) {
        let ch = s[i];

        freq[ch] = (freq[ch] || 0) + 1;

        if (vowels.includes(ch)) {
            maxVowel = Math.max(maxVowel, freq[ch]);
        } else {
            maxConsonant = Math.max(maxConsonant, freq[ch]);
        }
    }

    return maxVowel + maxConsonant;
};

console.log(maxFreqSum("aaaaeeeiioouu")); 
console.log(maxFreqSum("leetcode"));