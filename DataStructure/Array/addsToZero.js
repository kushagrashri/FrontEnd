import readline from "readline-sync";

// Function to find triplets that sum to zero
function findTriplets(arr) {
    let triplets = [];
    let n = arr.length;

    // Sort the array to make searching easier
    arr.sort((a, b) => a - b);

    for (let i = 0; i < n - 2; i++) {
        if (i > 0 && arr[i] === arr[i - 1]) continue; // Skip duplicates

        let left = i + 1, right = n - 1;

        while (left < right) {
            let sum = arr[i] + arr[left] + arr[right];

            if (sum === 0) {
                triplets.push([arr[i], arr[left], arr[right]]);
                
                // Skip duplicate values
                while (left < right && arr[left] === arr[left + 1]) left++;
                while (left < right && arr[right] === arr[right - 1]) right--;

                left++;
                right--;
            } else if (sum < 0) {
                left++; // Increase sum
            } else {
                right--; // Decrease sum
            }
        }
    }
    return triplets;
}

// Taking user input
let size = parseInt(readline.question("Enter the number of elements: "));
let arr = [];

for (let i = 0; i < size; i++) {
    arr.push(parseInt(readline.question(`Enter element ${i + 1}: `)));
}

// Finding and displaying triplets
let result = findTriplets(arr);

if (result.length > 0) {
    console.log("Triplets that sum to zero:", result);
} else {
    console.log("No triplets found that sum to zero.");
}
