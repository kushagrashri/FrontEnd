let unit = process.argv[2];

if(unit == 1){
    console.log("Unit: One");
}
else if(unit == 10){
    console.log("Unit: Ten");
}
else if(unit == 100){
    console.log("Unit: Hundred");
}
else if(unit == 1000){
    console.log("Unit: Thousand");
}
else if(unit == 10000){
    console.log("Unit: Ten Thousand");
}
else if(unit == 100000){
    console.log("Unit: Lakh");
}
else if(unit == 1000000){
    console.log("Unit: Ten Lakh");
}
else{
    console.log("Invalid Input");
}