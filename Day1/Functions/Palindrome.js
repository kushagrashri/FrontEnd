import readline from "readline-sync";

function isPalindrome(num) {
    let originalNum = num;
    let reversedNum = 0;

    while (num > 0) {
        let digit = num % 10;  // Get last digit
        reversedNum = reversedNum * 10 + digit; // Build reversed number
        num = Math.floor(num / 10);  // Remove last digit
    }

    return originalNum === reversedNum; // Check if original and reversed match
}

// Take two numbers as input
let num1 = parseInt(readline.question("Enter first number: "));
let num2 = parseInt(readline.question("Enter second number: "));

console.log(`${num1} is ${isPalindrome(num1) ? "" : "not "}a palindrome.`);
console.log(`${num2} is ${isPalindrome(num2) ? "" : "not "}a palindrome.`);
