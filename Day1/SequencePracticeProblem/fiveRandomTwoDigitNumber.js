let a = [];
let sum = 0;
for (let i = 0; i < 5; i++) {
    let b = Math.floor(Math.random() * 90) + 10;
    sum += b;
    a.push(b);
}

console.log("Sum:", sum);
console.log("Average:", sum / 5);
