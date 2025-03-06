import readline from "readline-sync";

let money = 100; // Initial money
let goal = 200;  // Winning goal
let bets = 0;    // Number of bets placed
let wins = 0;    // Number of times won

console.log("Starting with ₹100, trying to reach ₹200...");

// Continue gambling until broke or goal is reached
while (money > 0 && money < goal) {
    bets++; // Increment bet count

    let betResult = Math.random() < 0.5 ? "Lose" : "Win"; // 50% chance

    if (betResult === "Win") {
        money++;  // Win ₹1
        wins++;   // Increase win count
    } else {
        money--;  // Lose ₹1
    }

    console.log(`Bet ${bets}: ${betResult} | Current Money: ₹${money}`);
}

// Output final results
if (money === 200) {
    console.log(`You reached your goal of ₹200! Total Wins: ${wins}, Total Bets: ${bets}`);
} else {
    console.log(`You went broke! Total Wins: ${wins}, Total Bets: ${bets}`);
}
