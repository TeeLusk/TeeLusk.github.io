//Year
var date = new Date();

var currentYear = date.getFullYear().toString();
document.getElementById("year").textContent = currentYear;

//Last Updated

var lastUpdated = new Date(document.lastModified);
var lastUpdatedString = `${lastUpdated.toLocaleDateString()} ${lastUpdated.toLocaleTimeString()}`;
//For future, use momentjs

document.getElementById("updatedOn").textContent = lastUpdatedString;


//Hamburger Menu
const hambutton = document.querySelector('.ham');
const mainnav = document.querySelector('.navigation')

hambutton.addEventListener('click', () => {mainnav.classList.toggle('responsive')}, false);

// Output range selector
function outputUpdate(range) {
    document.querySelector('#severityOutput').value = range;
    
}




