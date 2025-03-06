import readline from "readline-sync";

// Take user input
let num = parseInt(readline.question("Enter a positive integer: "));

// Function to check if a number is prime
function isPrime(n) {
    if (n < 2) return false;  // Prime numbers are greater than 1
    for (let i = 2; i <= Math.sqrt(n); i++) {  // Loop up to √n for efficiency
        if (n % i === 0) return false;
    }
    return true;
}

// Validate input and print result
if (isNaN(num) || num <= 0) {
    console.log("Please enter a valid positive integer.");
} else {
    console.log(num + (isPrime(num) ? " is a Prime Number." : " is NOT a Prime Number."));
}
