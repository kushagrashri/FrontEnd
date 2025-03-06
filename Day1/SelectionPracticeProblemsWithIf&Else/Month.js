import readline from "readline-sync";
let day = parseInt(readline.question("Enter day: "));
let month = parseInt(readline.question("Enter month: "));

if((month == 3 && day >= 20 && day <= 31) ||
   (month == 4 && day >= 1 && day <= 30) ||
   (month == 5 && day >= 1 && day <= 31) ||
   (month == 6 && day >= 1 && day <= 20) ){
      console.log("true");
   }else{
    console.log("false");
   }