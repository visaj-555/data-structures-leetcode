function reverseString(str) {
  if (str === "") {
    return "";
  } else {
    return reverseString(str.substr(1)) + str.charAt(0);
  }
}

console.log(reverseString("Hello"));

function reverseStringDebug(str) {
  console.log("Calling with:", str);

  if (str === "") {
    console.log("Base case hit!");
    return "";
  }

  const result = reverseStringDebug(str.substr(1)) + str.charAt(0);
  console.log("Returning:", result, "for input:", str);
  return result;
}

console.log(reverseStringDebug("Hello"));
