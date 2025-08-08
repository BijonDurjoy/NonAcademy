//Make a birth calculator that takes a date of birth and calculates the age in years, months, and days.

const currYear = 2025;
const currMonth = 8;
const currDay = 8;

let birthYear = prompt("Enter your birth year: ");
let birthMonth = prompt("Enter your birth month: ");
let birthDay = prompt("Enter your birth day: ");

let year = currYear - birthYear;
let month = currMonth - birthMonth;
let day = currDay - birthDay;

//Handle the neg values for month and day
if (day < 0) {
    month = month - 1;
    day = day + 30;
}

if (month < 0) {
    year = year - 1;
    month = month + 12;
}

console.log(`You are ${year} years, ${month} months, and ${day} days old.`);

document.write(`You are ${year} years, ${month} months, and ${day} days old.`);