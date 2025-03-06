import readline from "readline-sync";

// Function to compute factorial
function factorial(n) {
    if (n === 0 || n === 1) return 1; // Base case: 0! and 1! = 1
    let fact = 1;
    for (let i = 2; i <= n; i++) {
        fact *= i;
    }
    return fact;
}

// Take user input
let num = parseInt(readline.question("Enter a non-negative integer: "));

// Validate input
if (isNaN(num) || num < 0) {
    console.log("Please enter a valid non-negative integer.");
} else {
    console.log(`Factorial of ${num} is: ${factorial(num)}`);
}
