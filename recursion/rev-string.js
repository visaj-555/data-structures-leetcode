function reverseString(str) {
  if (str === "") {
    return "";
  } else {
    return reverseString(str.substr(1)) + str.charAt(0);
  }
}

console.log(reverseString("Hello"));

// function reverseString(str) {
//   console.log("Calling with:", str);

//   if (str === "") {
//     console.log("Base case hit!");
//     return "";
//   }

//   const result = reverseString(str.substr(1)) + str.charAt(0);
//   console.log("Returning:", result, "for input:", str);
//   return result;
// }

// console.log(reverseString("Hello"));
