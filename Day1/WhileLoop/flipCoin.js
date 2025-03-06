import readline from "readline-sync";

let headsCount = 0;
let tailsCount = 0;

console.log("Flipping the coin until either Heads or Tails wins 11 times...");

while (headsCount < 11 && tailsCount < 11) {
    let flip = Math.random() < 0.5 ? "Heads" : "Tails"; // Simulates a coin flip

    if (flip === "Heads") {
        headsCount++;
    } else {
        tailsCount++;
    }

    console.log(`Flip: ${flip} | Heads: ${headsCount}, Tails: ${tailsCount}`);
}

// Declare the winner
if (headsCount === 11) {
    console.log("Heads wins 11 times!");
} else {
    console.log("Tails wins 11 times!");
}
