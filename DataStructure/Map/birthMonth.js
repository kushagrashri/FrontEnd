// Function to generate random birth months
function generateBirthMonths(count) {
  let birthMonthMap = {}; // Dictionary to store months and individuals

  for (let i = 1; i <= count; i++) {
      let month = Math.floor(Math.random() * 12) + 1; // Random month (1-12)

      if (!birthMonthMap[month]) {
          birthMonthMap[month] = []; // Initialize array if not present
      }

      birthMonthMap[month].push(i); // Store individual ID
  }

  return birthMonthMap;
}

// Generate birth months for 50 individuals
let birthMonths = generateBirthMonths(50);

// Display the result
console.log("Individuals grouped by birth month:");
for (let month in birthMonths) {
  console.log(`Month ${month}: ${birthMonths[month]}`);
}
