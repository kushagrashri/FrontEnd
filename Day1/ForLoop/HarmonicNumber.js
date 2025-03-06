import readline from "readline-sync";

// Take user input for n
let n = parseInt(readline.question("Enter a positive integer : "));

// Validate input
if (isNaN(n) || n <= 0) {
    console.log("Please enter a valid positive integer.");
} else {
    let harmonic = 0;

    for (let i = 1; i <= n; i++) {
        harmonic += 1 / i;
    }

    console.log(`The ${n}th Harmonic Number is: ${harmonic.toFixed(4)}`);
}
