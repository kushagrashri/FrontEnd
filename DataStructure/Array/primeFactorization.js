import readline from "readline-sync";

// Function to get prime factors of a number
function getPrimeFactors(n) {
    let factors = [];

    // Check for number of times 2 divides n
    while (n % 2 === 0) {
        factors.push(2);
        n = n / 2;
    }

    // Check for odd prime factors from 3 to √n
    for (let i = 3; i <= Math.sqrt(n); i += 2) {
        while (n % i === 0) {
            factors.push(i);
            n = n / i;
        }
    }

    // If n is still a prime number > 2, add it to factors
    if (n > 2) {
        factors.push(n);
    }

    return factors;
}

// Taking input from user
let number = parseInt(readline.question("Enter a number: "));

// Getting prime factors
let primeFactors = getPrimeFactors(number);

// Displaying the result
console.log(`Prime factors of ${number} are:`, primeFactors);
