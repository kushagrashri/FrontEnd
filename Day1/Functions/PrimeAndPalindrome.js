import readline from "readline-sync";

// Function to check if a number is prime
function isPrime(num) {
    if (num < 2) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }
    return true;
}

// Function to get the palindrome of a number
function getPalindrome(num) {
    let reversedNum = 0;
    let originalNum = num;
    while (num > 0) {
        let digit = num % 10;
        reversedNum = reversedNum * 10 + digit;
        num = Math.floor(num / 10);
    }
    return reversedNum;
}

// Taking input from user
let number = parseInt(readline.question("Enter a number: "));

// Checking if the number is prime
if (isPrime(number)) {
    console.log(`${number} is a prime number.`);
    
    // Getting the palindrome of the number
    let palindrome = getPalindrome(number);
    console.log(`Palindrome of ${number} is ${palindrome}.`);
    
    // Checking if the palindrome is also prime
    if (isPrime(palindrome)) {
        console.log(`The palindrome ${palindrome} is also a prime number.`);
    } else {
        console.log(`The palindrome ${palindrome} is NOT a prime number.`);
    }
} else {
    console.log(`${number} is NOT a prime number.`);
}
