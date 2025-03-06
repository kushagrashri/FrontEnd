// Function to find numbers with repeated digits
function findRepeatedDigitNumbers() {
  let repeatedNumbers = [];

  for (let i = 10; i <= 99; i++) { // Two-digit numbers only
      let tens = Math.floor(i / 10); // Get tens place
      let ones = i % 10; // Get ones place
      
      if (tens === ones) {
          repeatedNumbers.push(i);
      }
  }

  return repeatedNumbers;
}

// Finding numbers and storing in an array
let result = findRepeatedDigitNumbers();

// Displaying the result
console.log("Numbers with repeated digits:", result);
