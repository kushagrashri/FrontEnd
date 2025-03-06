function findMinMax(){

    let numbers = [];

    for(let i = 0;i <= 5;i++){
        let randomNumber = Math.floor(Math.random()*999) + 100;

        numbers.push(randomNumber);
    }
    
    let max = Math.max(...numbers);
    let min = Math.min(...numbers);

    console.log("Array: ",numbers);
    console.log("Maximum: ",max);
    console.log("Minimum: ",min);

}

findMinMax();