import readline from "readline-sync";

console.log("Think of a number between 1 to 100, and I'll guess it!");

let low = 1, high = 100;
let magicNumber = -1;

while (low <= high) {
    let mid = Math.floor((low + high) / 2);
    let response = readline.question(`Is your number ${mid}? (yes/lower/higher): `).toLowerCase();

    if (response === "yes") {
        magicNumber = mid;
        console.log(`Great! Your magic number is ${magicNumber}.`);
        break;
    } else if (response === "lower") {
        high = mid - 1;  // Reduce search space to the lower half
    } else if (response === "higher") {
        low = mid + 1;   // Reduce search space to the upper half
    } else {
        console.log("Invalid response! Please enter 'yes', 'lower', or 'higher'.");
    }
}

if (magicNumber === -1) {
    console.log("Something went wrong. Try again!");
}
