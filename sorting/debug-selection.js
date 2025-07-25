function SelectionSort(arr) {
  console.log("Starting array:", arr);
  console.log("=====================================");

  for (let i = 0; i < arr.length; i++) {
    console.log(`\n🔄 ROUND ${i + 1}:`);
    console.log(`Looking at position ${i}, current array:`, arr);

    let min = i;
    console.log(`Starting with min at position ${min} (value: ${arr[min]})`);

    // Find the smallest in remaining array
    for (let j = i + 1; j < arr.length; j++) {
      console.log(
        `  Checking position ${j} (value: ${arr[j]}) vs current min (value: ${arr[min]})`
      );

      if (arr[j] < arr[min]) {
        min = j;
        console.log(
          `    ✅ Found smaller! New min at position ${min} (value: ${arr[min]})`
        );
      } else {
        console.log(`    ❌ Not smaller, keep current min`);
      }
    }

    // Swap if needed
    if (min !== i) {
      console.log(
        `\n🔄 SWAPPING: position ${i} (${arr[i]}) with position ${min} (${arr[min]})`
      );
      let temp = arr[i];
      arr[i] = arr[min];
      arr[min] = temp;
      console.log(`After swap:`, arr);
    } else {
      console.log(
        `\n✅ No swap needed, ${arr[i]} is already in correct position`
      );
    }

    console.log(`End of round ${i + 1}:`, arr);
    console.log("=====================================");
  }

  console.log("\n🎉 FINAL SORTED ARRAY:", arr);
  return arr;
}

// Test
let arr = [13, 46, 24, 52, 20, 9];
console.log("Before:", arr);
SelectionSort(arr);
console.log("After:", arr);
