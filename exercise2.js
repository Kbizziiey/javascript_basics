let userName = prompt("What is your name? ");
let userAge = prompt("What is your age? ");

let currentYear = Date().getFullYear();
let yearBirth = currentYear - userAge;
alert("Your name is " , userName , "and you are ", yearBirth, "years old.")