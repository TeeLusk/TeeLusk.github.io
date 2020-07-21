//ALL PAGES
//Year
var date = new Date();
var currentYear = date.getFullYear().toString();
document.getElementById("year").textContent = currentYear;

//Last Updated
var lastUpdated = new Date(document.lastModified);
var lastUpdatedString = `${lastUpdated.toLocaleDateString()} ${lastUpdated.toLocaleTimeString()}`;
document.getElementById("updatedOn").textContent = lastUpdatedString;

//Hamburger Menu
const hambutton = document.querySelector('.ham');
const mainnav = document.querySelector('.navigation')

hambutton.addEventListener('click', () => {
    mainnav.classList.toggle('responsive')
}, false);


//---------------------------------------------------------------------
//LAZYLOADING
const images = document.querySelectorAll("img[data-src]");


function preloadImage(img) {
    const src = img.getAttribute("data-src");
    if (!src) {
        return;
    }
    img.src = src;
}


const imgOptions = {
    threshold: 1,
    rootMargin: "0px 0px 200px 0px"
};


const imgObserver = new IntersectionObserver((entries, imgObserver) => {
    entries.forEach(entry => {
        if (!entry.isIntersecting) {
            return;
        } else {
            preloadImage(entry.target);
            imgObserver.unobserve(entry.target);
        }
    })

}, imgOptions);


images.forEach(image => {
    imgObserver.observe(image);
});

//---------------------------------------------------------------------
//FORM
// Output range selector
function outputUpdate(range) {
    document.querySelector('#severityOutput').value = range;

}


//---------------------------------------------------------------------
//TOWNDATA INFO/EVENTS
// FETCH Town Information
if (document.getElementById('homepage')) { //Only run on homepage
    const townInfoURL = './js/towndata.json';

    fetch(townInfoURL)
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
};

//---------------------------------------------------------------------
if (document.getElementById('cityID')) { //Only will fetch on pges that have cityID
    //Preston, Soda, Fish Haven
    //---------------------------------------------------------------------
    //FRIDAY MESSAGE
    if (date.getDay() == 5) {
        fridayMessageSection = document.querySelector('#fridayMessageSection');
        fridayMessageSection.className = 'show';
        document.getElementById('fridayMessage').innerText =
            `Saturday = ${document.getElementById('cityName').innerText} Pancakes in the Park!  9:00 a.m. Saturday at the city park pavilion.`;
    }

    //---------------------------------------------------------------------
    // Current Conditions Fetch
    const cityID = document.getElementById('cityID').innerText;
    const currentURL = `https://api.openweathermap.org/data/2.5/weather?id=${cityID}&units=imperial&appid=4447a91324b56ff7dc35262e118be15a`;

    fetch(currentURL)
        .then(function (response) {
            if (response.ok) {
                return response.json();
            }
            throw new ERROR('Network response was not ok');
        })
        .then(function (jsonObject) {
            const weatherCurrent = jsonObject;

            let currentCondition = weatherCurrent.weather[0].main;
            let currentTemp = weatherCurrent.main.temp;
            let currentHumidity = weatherCurrent.main.humidity;
            let currentWindSpeed = weatherCurrent.wind.speed;
            let windChill = Math.floor(35.74 + 0.6215 * currentTemp - 35.75 * Math.pow(currentWindSpeed, 0.16) + 0.4275 *
                currentTemp * Math.pow(currentWindSpeed, 0.16));
            windChill = (windChill > currentTemp) ? currentTemp : windChill;

            document.getElementById('condition').textContent = currentCondition;
            document.getElementById('temp').textContent = Math.round(currentTemp, 0);
            document.getElementById('humidity').textContent = currentHumidity;
            document.getElementById('windSpeed').textContent = Math.round(currentWindSpeed, 0);
            document.getElementById('windChill').textContent = Math.round(windChill, 0);


        })
        .catch(function (error) {
            console.log('Fetch error: ', error.message);
        });




    // Forecast Fetch

    const abbrevDay = ['Sun', 'Mon', 'Tues', 'Wed', 'Thurs', 'Fri', 'Sat'];
    const requestURL = `https://api.openweathermap.org/data/2.5/forecast?id=${cityID}&units=imperial&appid=4447a91324b56ff7dc35262e118be15a`;

    fetch(requestURL)
        .then(function (response) {
            if (response.ok) {
                return response.json();
            }
            throw new ERROR('Network response was not ok');
        })
        .then(function (jsonObject) {
            const weatherForecast = jsonObject['list'];

            forecastArray = [];
            for (const element in weatherForecast) {
                // console.log(weatherForecast[element].dt_txt);
                tempForecast = [];
                if (weatherForecast[element].dt_txt.includes('18:00:00')) {
                    //console.log(weatherForecast[element].dt_txt);
                    tempForecast.push(weatherForecast[element].dt_txt);
                    tempForecast.push(weatherForecast[element].main.temp_max);
                    tempForecast.push(weatherForecast[element].weather[0].icon);
                    forecastArray.push(tempForecast);
                }
                tempForecast = [];
            }
            // console.log(forecastArray);


            let forecastDays = document.querySelector('#forecastDays');
            let forecastData = document.querySelector('#forecastData');

            //Clear extra <td> so it doesn't throw error for validation/doesn't add extra space when 
            //forecast info is inserted
            forecastData.innerHTML = '';
            forecastDays.innerHTML = '';

            for (const element in forecastArray) {
                let date = new Date(forecastArray[element][0]).getDay();
                let shortDay = abbrevDay[date];
                let icon = 'https://openweathermap.org/img/w/' + forecastArray[element][2] + '.png';
                forecastDays.innerHTML += '<th>' + shortDay + '</th>';

                forecastData.innerHTML += '<td><img src=\'' + icon + '\' alt=\'Forecast Icon\'><br>' +
                    Math.round(forecastArray[element][1], 1) + '&deg; F' + '</td>';
            }




        })
        .catch(function (error) {
            console.log('Fetch error: ', error.message);
        });


    //--------------------------------------------------------------
    //UPCOMING EVENTS

    const currentEventsURL = './js/towndata.json';
    fetch(currentEventsURL)
        .then(function (response) {
            if (response.ok) {
                return response.json();
            }
            throw new ERROR('Network response was not okay: ' + response.status);
        })
        .then(function (jsonObject) {
            const townList = jsonObject['towns'];

            cityName = document.getElementById('cityName').innerText;

            for (let i = 0; i < townList.length; i++) {
                if (townList[i].name == cityName) {
                    eventsList = document.getElementById('eventsList');
                    eventsArray = townList[i].events
                    eventsArray.forEach(element => {
                        eventsList.innerHTML += '<li>' + element + '</li>';
                    });

                };
            };

        })
        .catch(function (error) {
            console.log('Fetch error: ' + error.message);
        });
};