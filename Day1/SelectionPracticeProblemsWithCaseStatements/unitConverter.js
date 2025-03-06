import readline from "readline-sync";

// Show conversion options
console.log("Unit Conversion Menu:");
console.log("1. Feet to Inch");
console.log("2. Feet to Meter");
console.log("3. Inch to Feet");
console.log("4. Meter to Feet");

// Take user input for choice
let choice = parseInt(readline.question("Enter your choice (1-4): "));

// Take user input for the value to convert
let value = parseFloat(readline.question("Enter the value to convert: "));

// Perform conversion based on user choice
switch (choice) {
    case 1:
        console.log(`${value} Feet = ${value * 12} Inches`);
        break;
    case 2:
        console.log(`${value} Feet = ${(value * 0.3048).toFixed(4)} Meters`);
        break;
    case 3:
        console.log(`${value} Inches = ${(value / 12).toFixed(4)} Feet`);
        break;
    case 4:
        console.log(`${value} Meters = ${(value * 3.28084).toFixed(4)} Feet`);
        break;
    default:
        console.log("Invalid choice! Please enter a number between 1 and 4.");
}
