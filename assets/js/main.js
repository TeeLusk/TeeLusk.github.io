//Year
var date = new Date();

var currentYear = date.getFullYear().toString();
document.getElementById("year").textContent = currentYear;

//Last Updated

var lastUpdated = new Date(document.lastModified);
var lastUpdatedString = `${lastUpdated.toLocaleDateString()} ${lastUpdated.toLocaleTimeString()}`;
//For future, use momentjs

document.getElementById("updatedOn").textContent = lastUpdatedString;