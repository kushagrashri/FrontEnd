import readline from "readline-sync";

// Function to check if a number is prime
function isPrime(n) {
    if (n < 2) return false;
    for (let i = 2; i <= Math.sqrt(n); i++) { // Check divisibility up to √n
        if (n % i === 0) return false;
    }
    return true;
}

// Take user input for range
let start = parseInt(readline.question("Enter the start of the range: "));
let end = parseInt(readline.question("Enter the end of the range: "));

// Validate input
if (isNaN(start) || isNaN(end) || start <= 0 || end <= 0 || start > end) {
    console.log("Please enter a valid positive range (start should be ≤ end).");
} else {
    console.log(`Prime numbers between ${start} and ${end} are:`);
    for (let num = start; num <= end; num++) {
        if (isPrime(num)) {
            process.stdout.write(num + " "); // Print in a single line
        }
    }
     // New line after printing all primes
    console.log();
  }
