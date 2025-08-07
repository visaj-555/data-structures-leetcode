//====================== SQUARE  ======================//

function Square(n) {
  for (let i = 1; i <= n; i++) {
    let row = "";
    for (let j = 1; j <= n; j++) {
      row += "*";
    }

    console.log(row);
  }
}

console.log("Square : ");
Square(5);

//====================== LEFT ANGLE TRIANGLE  ======================//

function LeftAngleTriangle(n) {
  for (let i = 1; i <= n; i++) {
    let row = "";
    for (let j = 1; j <= i; j++) {
      row += "*";
    }

    console.log(row);
  }
}

console.log("Left Angle Triangle : ");
LeftAngleTriangle(5);

//====================== RIGHT ANGLE TRIANGLE  ======================//

function RightAngleTriangle(n) {
  for (let i = 1; i <= n; i++) {
    let row = "";
    for (let j = 1; j <= n - i + 1; j++) {
      row += "*";
    }

    console.log(row);
  }
}

console.log("Right Angle Triangle: ");
RightAngleTriangle(5);

//====================== RIGHT ANGLE TRIANGLE SAME NUMBER  ======================//

function RightAngleRepeatNumber(n) {
  for (let i = 1; i <= n; i++) {
    let row = "";
    for (let j = 1; j <= n - i + 1; j++) {
      row += i;
    }

    console.log(row);
  }
}

console.log("Right Angle Repeatative Number : ");
RightAngleRepeatNumber(5);

//====================== LEFT ANGLE TRIANGLE SAME NUMBER  ======================//

function LeftAngleRepeatNumber(n) {
  for (let i = 1; i <= n; i++) {
    let row = "";
    for (let j = 1; j <= i; j++) {
      row += i;
    }

    console.log(row);
  }
}

console.log("Left Angle Repeatative Number  : ");
LeftAngleRepeatNumber(5);

//====================== LEFT ANGLE INCREASING  ======================//

function LeftAngleIncreasing(n) {
  for (let i = 1; i <= n; i++) {
    let row = "";
    for (let j = 1; j <= i; j++) {
      row += j;
    }

    console.log(row);
  }
}

console.log("Left Angle Increasing: ");
LeftAngleIncreasing(5);

//====================== RIGHT ANGLE DECREASING SAME NUMBER  ======================//

function RightDecreasingSameNumber(n) {
  for (let i = 1; i <= n; i++) {
    let row = "";
    for (let j = 1; j <= n - i + 1; j++) {
      row += i;
    }

    console.log(row);
  }
}

console.log("Right Angle Decreasing Repeatative : ");
RightDecreasingSameNumber(5);

//====================== RIGHT ANGLE DECREASING DIFFERENT NUMBER  ======================//

function RightDecreasing(n) {
  for (let i = 1; i <= n; i++) {
    let row = "";
    for (let j = 1; j <= n - i + 1; j++) {
      row += j;
    }

    console.log(row);
  }
}

console.log("Right Angle Decreasing : ");
RightDecreasing(5);

//====================== PYRAMID  ======================//

function Pyramid(n) {
  for (let i = 1; i <= n; i++) {
    let row = "";
    // for spaces
    for (let spaces = n; spaces >= i; spaces--) {
      row += " ";
    }
    // for stars
    for (let stars = 1; stars <= 2 * i - 1; stars++) {
      row += "*";
    }
    console.log(row);
  }
}

Pyramid(5);

//====================== DIAMOND  ======================//

function printDiamond(n) {
  for (let i = 1; i <= n; i++) {
    let row = "";

    // Add spaces before stars
    for (let j = 1; j <= n - i; j++) {
      row += " ";
    }

    // Add stars
    for (let k = 1; k <= 2 * i - 1; k++) {
      row += "*";
    }

    console.log(row);
  }

  for (let i = n - 1; i >= 1; i--) {
    let row = "";

    // Add spaces before stars
    for (let j = 1; j <= n - i; j++) {
      row += " ";
    }

    // Add stars
    for (let k = 1; k <= 2 * i - 1; k++) {
      row += "*";
    }

    console.log(row);
  }
}

console.log("Diamond Pattern:");
printDiamond(5);

//====================== HOLLOW RECTANGLE  ======================//

function HollowRectangle(n) {
  for (let i = 1; i <= n; i++) {
    let row = "";

    for (let j = 1; j <= n; j++) {
      if (i === 1 || i === n || j === 1 || j === n) {
        row += "*";
      } else {
        row += " ";
      }
    }

    console.log(row);
  }
}

console.log("Hollow Rectangle: ");
HollowRectangle(5);

//====================== HOLLOW DIAMOND  ======================//

function HollowDiamond(n) {
  let totalRows = 2 * n - 1;

  for (let i = 0; i < totalRows; i++) {
    let row = "";
    let spacesBefore = Math.abs(n - 1 - i);
    let spacesBetween = 2 * (n - 1 - spacesBefore) - 1;

    row += " ".repeat(spacesBefore);

    row += "*";

    if (spacesBetween > 0) {
      row += " ".repeat(spacesBetween) + "*";
    }

    console.log(row);
  }
}

console.log("Hollow Diamond : ");
HollowDiamond(5);

//====================== LEFT ANGLE TRIANGLE  ======================//

function printLeftTriangle(n) {
  for (let i = 1; i <= n; i++) {
    let row = "";

    // Print spaces
    for (let j = 1; j <= n - i; j++) {
      row += " ";
    }

    // Print stars
    for (let j = 1; j <= i; j++) {
      row += "*";
    }

    console.log(row);
  }
}

console.log("Left Triangle Pattern:");
printLeftTriangle(5);

//====================== HOLLOW RIGHT ANGLE TRIANGLE  ======================//

function printHollowRightTriangle(n) {
  for (let i = 1; i <= n; i++) {
    let row = "";

    for (let j = 1; j <= i; j++) {
      if (j === 1 || j === i || i === n) {
        row += "*";
      } else {
        row += " ";
      }
    }

    console.log(row);
  }
}

console.log("\nHollow Right Triangle Pattern:");
printHollowRightTriangle(5);

//====================== HOLLOW PYRAMID ======================//

function printHollowPyramid(n) {
  for (let i = 1; i <= n; i++) {
    let row = "";

    // Print leading spaces
    for (let s = 1; s <= n - i; s++) {
      row += " ";
    }

    // Print stars and spaces inside
    for (let j = 1; j <= 2 * i - 1; j++) {
      if (j === 1 || j === 2 * i - 1 || i === n) row += "*";
      else row += " ";
    }

    console.log(row);
  }
}

console.log("\nHollow Pyramid Pattern:");
printHollowPyramid(5);

//====================== PASCAL TRIANGLE ======================//

function pascalTriangle(n) {
  for (let i = 0; i < n; i++) {
    let row = "";

    for (let space = 0; space < n - i - 1; space++) {
      row += " ";
    }

    let num = 1;
    for (let j = 0; j <= i; j++) {
      row += num + " ";
      num = (num * (i - j)) / (j + 1);
    }

    console.log(row);
  }
}

console.log("Pascal's Triangle:");
pascalTriangle(5);

//====================== BINARY TOGGLE TRIANGLE ======================//

function binaryToggleTriangle(n) {
  for (let i = 1; i <= n; i++) {
    let row = "";
    let start = i % 2 === 0 ? 0 : 1;

    for (let j = 1; j <= i; j++) {
      row += start;
      start = 1 - start;
    }

    console.log(row);
  }
}

console.log("Binary Toggle Right Angle Triangle:");
binaryToggleTriangle(5);

//====================== MIRROR NUMBER TRIANGLE ======================//

function mirroredNumbersTriangle(n) {
  for (let i = 1; i <= n; i++) {
    let row = "";

    // Left Side Numbers
    for (let j = 1; j <= i; j++) row += j;

    // Middle Spaces
    for (let spaces = 1; spaces <= 2 * (n - i); spaces++) row += " ";

    // Right Side Numbers
    for (let j = i; j >= 1; j--) row += j;

    console.log(row);
  }
}

mirroredNumbersTriangle(5);

//====================== SEQUENCE NUMBER TRIANGLE ======================//

function sequentialNumbersTriangle(n) {
  let count = 1;

  for (let i = 1; i <= n; i++) {
    let row = [];

    for (let j = 1; j <= i; j++) {
      row.push(count++);
    }

    console.log(row.join(" "));
  }
}

console.log("Sequential Numbers Triangle:");
sequentialNumbersTriangle(5);

//====================== ALPHABET INCREASING TRIANGLE ======================//

function alphabetIncreasingTriangle(n) {
  for (let i = 1; i <= n; i++) {
    let row = [];
    for (let j = 0; j < i; j++) {
      row.push(String.fromCharCode(65 + j));
    }
    console.log(row.join(" "));
  }
}

console.log("Pattern 15: Alphabet Increasing Triangle");
alphabetIncreasingTriangle(5);

//====================== ALPHABET DECREASING TRIANGLE ======================//

function alphabetDecreasingTriangle(n) {
  for (let i = 0; i < n; i++) {
    let row = [];
    for (let j = 0; j < n - i; j++) {
      row.push(String.fromCharCode(65 + j));
    }
    console.log(row.join(" "));
  }
}

console.log("Pattern 16: Alphabet Decreasing Triangle");
alphabetDecreasingTriangle(5);

//====================== ALPHABET PALINDROME PYRAMID ======================//

function AlphaPalindromePyramid(n) {
  for (let i = 0; i < n; i++) {
    let row = " ".repeat(n - i - 1);
    for (let j = 0; j <= i; j++) row += String.fromCharCode(65 + j);
    for (let j = i - 1; j >= 0; j--) row += String.fromCharCode(65 + j);
    console.log(row);
  }
  console.log("Alphabet Palindrome Pyramid : ");
  AlphaPalindromePyramid(6);
}

//====================== INVERTED ALPHABET TRIANGLE ======================//

function InvertedAlphaTriangle(n) {
  for (let i = 0; i < n; i++) {
    let row = "";
    for (let j = 0; j <= i; j++) {
      row = row + String.fromCharCode(65 + n - 1 - j) + " ";
    }
    console.log(row.trim());
  }
}

console.log("Inverted Alpha Triangle : ");
InvertedAlphaTriangle(6);

//====================== DIAMOND SAND GLASS PATTERN  ======================//

function diamondSandglassPattern(n) {
  for (let i = 0; i < 2 * n - 1; i++) {
    let row = "";
    let stars = i < n ? i + 1 : 2 * n - i - 1;
    let spaces = 2 * (n - stars);

    // Add stars on the left
    for (let j = 0; j < stars; j++) {
      row = row + "*";
    }

    // Add spaces in the middle
    for (let j = 0; j < spaces; j++) {
      row = row + " ";
    }

    // Add stars on the right
    for (let j = 0; j < stars; j++) {
      row = row + "*";
    }

    console.log(row);
  }
}

console.log("Diamond Sand Glass Pattern : ");
diamondSandglassPattern(6);

//====================== NUMBER DIAMOND GRID ======================//

function numberDiamondGrid(n) {
  let size = 2 * n - 1;

  for (let i = 0; i < size; i++) {
    let row = "";
    for (let j = 0; j < size; j++) {
      row += n - Math.min(i, j, size - i - 1, size - j - 1) + " ";
    }
    console.log(row.trim());
  }
}

console.log("Number Grid Pattern : ");

numberDiamondGrid(6);

//====================== ZIGZAG PATTERN ======================//

function zigZagPattern(n) {
  for (let i = 1; i <= 3; i++) {
    // Always 3 rows
    let row = "";

    for (let j = 1; j <= n; j++) {
      if ((i + j) % 4 === 0 || (i === 2 && j % 4 === 0)) {
        row += "*";
      } else {
        row += " ";
      }
    }

    console.log(row);
  }
}

console.log("Zig Zag Pattern : ");

zigZagPattern(27);
