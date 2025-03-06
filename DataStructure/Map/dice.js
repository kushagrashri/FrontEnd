// Function to simulate rolling a die
function rollDie() {
  return Math.floor(Math.random() * 6) + 1; // Random number between 1 and 6
}

// Dictionary to store die roll counts
let dieRolls = { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0, 6: 0 };
let maxRolls = 10; // Stop when any number reaches 10

// Rolling the die until any number reaches 10 times
while (true) {
  let roll = rollDie();
  dieRolls[roll]++; // Increment count

  // Check if any number reached maxRolls (10)
  if (dieRolls[roll] === maxRolls) {
      break;
  }
}

let maxNumber = 1, minNumber = 1;

for (let num in dieRolls) {
    if (dieRolls[num] > dieRolls[maxNumber]) {
        maxNumber = num;
    }
    if (dieRolls[num] < dieRolls[minNumber]) {
        minNumber = num;
    }
}

// Displaying results
console.log("Final counts of dice rolls:", dieRolls);
console.log(`Number that reached 10 first: ${maxNumber}`);
console.log(`Number that was rolled the least: ${minNumber}`);
