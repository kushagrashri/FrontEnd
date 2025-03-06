//1ft = 12 in then 42 in = ? ft
function inchesToFeet(inches) {
  return inches / 12;
}
//Rectangular Plot of 60 feet x 40 feet in meters
function feetSqToMetresSq(a,b) {
    let areaInFeet = a*b;
    return areaInFeet / 10.764;
}
//Calculate area of 25 such plots in acres
function feetSqToAcre(a) {
    return a / 43560;
}
//Calculate area of 25 such plots in acres
function calculateArea(a) {
    let areaInFeet = 60*40;
    let areaInAcres = areaInFeet / 43560;
    return areaInAcres * a;
}

console.log(inchesToFeet(42));
console.log(feetSqToMetresSq(60,40));
console.log(feetSqToAcre(2400));
console.log();
console.log(calculateArea(25));




