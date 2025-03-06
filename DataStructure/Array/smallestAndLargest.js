function generateRandomNumbers(count, min, max) {
  let numbers = [];
  for (let i = 0; i < count; i++) {
      numbers.push(Math.floor(Math.random() * (max - min + 1)) + min);
  }
  return numbers;
}

function findSecondLargestAndSmallest(arr) {
  let firstMax = -Infinity, secondMax = -Infinity;
  let firstMin = Infinity, secondMin = Infinity;

  for (let num of arr) {
      // Finding the first and second largest numbers
      if (num > firstMax) {
          secondMax = firstMax;
          firstMax = num;
      } else if (num > secondMax && num !== firstMax) {
          secondMax = num;
      }

      // Finding the first and second smallest numbers
      if (num < firstMin) {
          secondMin = firstMin;
          firstMin = num;
      } else if (num < secondMin && num !== firstMin) {
          secondMin = num;
      }
  }

  return { secondLargest: secondMax, secondSmallest: secondMin };
}

// Step a & b: Generate and store 10 random 3-digit numbers
let randomNumbers = generateRandomNumbers(10, 100, 999);
console.log("Generated Numbers:", randomNumbers);

// Step c: Find the 2nd largest and 2nd smallest
let result = findSecondLargestAndSmallest(randomNumbers);
console.log("Second Largest:", result.secondLargest);
console.log("Second Smallest:", result.secondSmallest);
