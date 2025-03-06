import readline from "readline-sync";
function isLeapYear(year){

    if (year < 1000 || year > 9999) {
        return "Invalid Input";
    }

    if ((year % 4 == 0 && year % 100 != 0) || year % 100 == 0) {
        return year + " Leap year";
    } else {
        return year + " Not a Leap Year";
    }
}

let year = parseInt(readline.question("Enter year: "))
console.log(isLeapYear(year));