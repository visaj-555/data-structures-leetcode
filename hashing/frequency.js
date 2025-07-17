const arr = ["apple", "banana", "apple", "orange", "banana", "apple"];

const frequency = {};

for (let item of arr) {
  if (frequency[item]) {
    frequency[item]++;
  } else {
    frequency[item] = 1;
  }
}

console.log(frequency);
