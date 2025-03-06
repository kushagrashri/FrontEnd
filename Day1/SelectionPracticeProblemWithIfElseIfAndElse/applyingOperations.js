let a = process.argv[2];
let b = process.argv[3];
let c = process.argv[4];

let operation1 = a + b * c;
let operation2 = a % b + c;
let operation3 = c + a / b;
let operation4 = a * b + c;

let max = operation1;
let max2 = operation2;
let max3 = operation3;
let max4 = operation4;
if (max < max2) {
    max = max2;
}
if (max < max3) {
    max = max3;
}
if (max < max4) {
    max = max4;
}
console.log("Maximum Value: " + max);

let min = operation1;
let min2 = operation2;
let min3 = operation3;
let min4 = operation4;
if (min > min2) {
    min = min2;
}
if (min > min3) {
    min = min3;
    }
if (min > min4) {
    min = min4;
}
console.log("Minimum Value: " + min);