import readline from "readline-sync";

// Take input from the user
let n = parseInt(readline.question("Enter the exponent value (n): "));

let power = 0; // Start exponent from 0
let value = 1; // 2^0 = 1

console.log(`Powers of 2 up to 2^${n} (or max 256):`);

while (power <= n && value <= 256) {
    console.log(`2^${power} = ${value}`);
    value *= 2;  // Multiply value by 2 (next power)
    power++;     // Increment exponent
}
