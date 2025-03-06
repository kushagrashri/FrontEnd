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
      // Finding first and second largest numbers
      if (num > firstMax) {
          secondMax = firstMax;
          firstMax = num;
      } else if (num > secondMax && num !== firstMax) {
          secondMax = num;
      }

      // Finding first and second smallest numbers
      if (num < firstMin) {
          secondMin = firstMin;
          firstMin = num;
      } else if (num < secondMin && num !== firstMin) {
          secondMin = num;
      }
  }

  return { secondLargest: secondMax, secondSmallest: secondMin };
}

function findSecondLargestAndSmallestWithSorting(arr) {
  let sortedArr = [...arr].sort((a, b) => a - b);
  return { secondSmallest: sortedArr[1], secondLargest: sortedArr[sortedArr.length - 2] };
}

// Step a & b: Generate and store 10 random 3-digit numbers
let randomNumbers = generateRandomNumbers(10, 100, 999);
console.log("Generated Numbers:", randomNumbers);

// Step c: Find the 2nd largest and 2nd smallest without sorting
let resultWithoutSorting = findSecondLargestAndSmallest(randomNumbers);
console.log("Without Sorting -> Second Largest:", resultWithoutSorting.secondLargest);
console.log("Without Sorting -> Second Smallest:", resultWithoutSorting.secondSmallest);

// Step d: Sort and find the 2nd largest and 2nd smallest
let resultWithSorting = findSecondLargestAndSmallestWithSorting(randomNumbers);
console.log("With Sorting -> Sorted Array:", randomNumbers.slice().sort((a, b) => a - b));
console.log("With Sorting -> Second Largest:", resultWithSorting.secondLargest);
console.log("With Sorting -> Second Smallest:", resultWithSorting.secondSmallest);
