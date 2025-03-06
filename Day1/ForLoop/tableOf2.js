import readline from "readline-sync";

// Take user input for n
let n = parseInt(readline.question("Enter a non-negative integer : "));

// Validate input
if (isNaN(n) || n < 0) {
    console.log("Please enter a valid non-negative integer.");
} else {
    console.log(`Powers of 2 up to 2^${n}:`);
    
    for (let i = 0; i <= n; i++) {
        console.log(`2^${i} = ${Math.pow(2, i)}`);
    }
}
