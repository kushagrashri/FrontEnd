import readline from "readline-sync";

// Function to compute prime factors
function primeFactors(n) {
    let factors = [];

    // Divide by 2 until n is odd
    while (n % 2 === 0) {
        factors.push(2);
        n = Math.floor(n / 2);
    }

    // Check odd numbers from 3 to sqrt(n)
    for (let i = 3; i <= Math.sqrt(n); i += 2) {
        while (n % i === 0) {
            factors.push(i);
            n = Math.floor(n / i);
        }
    }

    // If n is still greater than 2, it's a prime number itself
    if (n > 2) {
        factors.push(n);
    }

    return factors;
}

// Take user input
let num = parseInt(readline.question("Enter a positive integer: "));

// Validate input
if (isNaN(num) || num <= 0) {
    console.log("Please enter a valid positive integer.");
} else {
    let factors = primeFactors(num);
    console.log(`Prime factors of ${num} are: ${factors.join(" × ")}`);
}
