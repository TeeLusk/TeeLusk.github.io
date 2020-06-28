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

hambutton.addEventListener('click', () => {
    mainnav.classList.toggle('responsive')
}, false);

// Output range selector
function outputUpdate(range) {
    document.querySelector('#severityOutput').value = range;

}

// FETCH Town Information

const requestURL = '../lesson9/towndata.json';

fetch(requestURL)
    .then(function (response) {
        if (response.ok) {
            return response.json();
        }
        throw new ERROR('Network response was not ok');
    })
    .then(function (jsonObject) {
        // console.log(jsonObject); // temporary checking for valid response and data parsing

        const townList = jsonObject['towns'];

        for (let i = 0; i < townList.length; i++) {
            if (townList[i].name == 'Preston' || townList[i].name == 'Soda Springs' || townList[i].name == 'Fish Haven') {
                let card = document.createElement('section');
                let article = document.createElement('article');
                let townName = document.createElement('h2');
                let image = document.createElement('img');
                let motto = document.createElement('span');
                let description1 = document.createElement('p');
                let description2 = document.createElement('p');
                let description3 = document.createElement('p');

                townName.textContent = townList[i].name;
                motto.textContent = townList[i].motto;
                description1.textContent = 'Year founded: ' + townList[i].yearFounded + '\n';
                description2.textContent = 'Current population: ' + townList[i].currentPopulation + '\n';
                description3.textContent = 'Average Rainfall: ' + townList[i].averageRainfall + ' in';
                
                console.log(townList[i].averageRainfall);

                image.setAttribute('src', townList[i].image);
                image.setAttribute('alt', townList[i].alt)

                

                article.appendChild(townName);
                article.appendChild(motto);
                article.appendChild(description1);
                article.appendChild(description2);
                article.appendChild(description3);
            
                card.appendChild(image);
                card.appendChild(article);

                document.querySelector('div.cards').appendChild(card);

            }
        }

    })
    .catch(function (error) {
        console.log('Fetch error: ', error.message);
    })