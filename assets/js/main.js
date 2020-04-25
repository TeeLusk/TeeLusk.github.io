//TODO year/date modified using properties/JS
let date = new Date();

let days = 
["Sunday", 
"Monday", 
"Tuesday", 
"Wednesday", 
"Thursday", 
"Friday", 
"Saturday"];

let months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
    ];

let currentYear = date.getFullYear() + " ";
console.log(currentYear);

document.getElementById("currentYear").textContent = currentYear;