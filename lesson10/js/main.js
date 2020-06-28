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

// Current Fetch

const currentURL = 'http://api.openweathermap.org/data/2.5/weather?id=5604473&units=imperial&appid=4447a91324b56ff7dc35262e118be15a';


fetch(currentURL)
    .then(function (response) {
        if(response.ok) {
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
        let windChill = Math.floor(35.74 + 0.6215 * currentTemp - 35.75 * Math.pow(currentWindSpeed, 0.16) + 0.4275 
            * currentTemp * Math.pow(currentWindSpeed, 0.16));
        windChill = (windChill > currentTemp) ? currentTemp: windChill;

        console.log('Current:' + currentCondition);
        console.log('Temp:' + currentTemp);
        console.log('Humidity:' + currentHumidity);
        console.log('Wind Speed:' + currentWindSpeed);
        console.log('Chill:' + windChill);

        document.getElementById('condition').textContent = currentCondition;
        document.getElementById('temp').textContent = Math.round(currentTemp, 0);
        document.getElementById('humidity').textContent = currentHumidity;
        document.getElementById('windSpeed').textContent = Math.round(currentWindSpeed, 0);
        document.getElementById('windChill').textContent = Math.round(windChill, 0);


    })
    .catch(function (error) {
        console.log('Fetch error: ', error.message);   
    })




// Forecast Fetch
const abbrevDay = ['Sun', 'Mon', 'Tues', 'Wed', 'Thurs', 'Fri', 'Sat'];
const requestURL = 'https://api.openweathermap.org/data/2.5/forecast?units=imperial&id=5604473&appid=4447a91324b56ff7dc35262e118be15a';

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
            tempForecast= [];
        }
        // console.log(forecastArray);


        let forecastDays = document.querySelector('#forecastDays');
        let forecastData = document.querySelector('#forecastData');

        for (const element in forecastArray) {
            let date = new Date(forecastArray[element][0]).getDay();
            let shortDay = abbrevDay[date];
            let icon = 'https://openweathermap.org/img/w/' + forecastArray[element][2] + '.png';
            forecastDays.innerHTML += '<th>' + shortDay + '</th>';

            forecastData.innerHTML += '<td><img src=\'' + icon + '\' alt=\'Forecast Icon\'><br>'
            + Math.round(forecastArray[element][1], 1) +'&deg; F' + '</td>';
        }


        

    })
    .catch(function (error) {
        console.log('Fetch error: ', error.message);
    })


