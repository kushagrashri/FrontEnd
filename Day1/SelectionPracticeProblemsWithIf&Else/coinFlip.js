function flipCoin(){

    let randomNumber = Math.random();

    if (randomNumber < 0.5) {
        return "Head";
    } else{
        return "Tails";
    }

}
console.log("Coin flipped is: ",flipCoin());