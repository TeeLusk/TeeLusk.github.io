import {
    buildMap, changePolygon
} from "./map.js";

// Import API key, other variables
const AgroAPI = '76a3900f4cbeb05dbb772bb061d4046f';

// TODO Replace with Get Polygon Call
const polygon01 = '609b4bd4b5d88922bc02f1ab';
const polgygon02 = '60f78e5d380af32a5a6b3cb6';
let startTime = '1500336000';
let endTime = '1508976000';


const basePolygonReq = 'http://api.agromonitoring.com/agro/1.0/polygons?appid=76a3900f4cbeb05dbb772bb061d4046f'

// Build URL for Fetch
// http://api.agromonitoring.com/agro/1.0/image/search?start={start date}&end={end date}&polyid={ID of polygon}&appid={API key}
function buildAgroURL(api, polygonId, start, end) {
    let url = `https://api.agromonitoring.com/agro/1.0/image/search?start=${start}&end=${end}&polyid=${polygonId}&appid=${api}`;
    return url;
};

// Basic Fetch
let url1 = buildAgroURL(AgroAPI, polygon01, startTime, endTime);
console.log("url1", url1);

// fetch(url1)
//     .then(function (res) {
//         if (res.ok) {
//            return res.json(); 
//         }
//         throw new Error(`Error when trying to reach AGRO API`);
//     })
//     .then(function (jsonObject) {
//         // Parse through JSON
//         let imagesArr = [];
//         const agroRes = jsonObject;
//         agroRes.forEach(e => {
//             imagesArr.push({"Img": e.image.evi2, "Stat": e.stats.ndvi});
//         });
//         // console.log(agroRes);
//         // console.log(imagesArr);

//         imagesDiv = document.querySelector('#images');
//         imagesArr.forEach(e => {
//             imagesDiv.innerHTML += `<img src=${e.Img}>
//                                     <p>${e.Stat}</p>`
//         // TODO Needs a second Fetch to return the stats from the specific URL
//         // Possibly based on event?
//         });

//     })
//     .catch(function (err) {
//         console.log(`Fetch error: ${err.message}`);
//     })


function buildPolygonList() {
    fetch(basePolygonReq)
        .then(function (res) {
            if (res.ok) {
                return res.json();
            }
            throw new Error(`Error when trying to reach AGRO API`);
        })
        .then(function (jsonObject) {
            let polygonSelect = document.querySelector('#polygonSelector');

            jsonObject.forEach(e => {
                polygonSelect.innerHTML += `<option value ='${e.id}'>${e.name}</option>`;
            })

        }).catch(function (err) {
            console.log(`Fetch error: ${err.message}`);
        })
};


function updateMap() {
    let updatedPoly = document.querySelector('#polygonSelector').value;
    
    changePolygon(updatedPoly);
}


buildPolygonList();
buildMap();

let polygonSelect = document.querySelector('#polygon-select');

document.querySelector('#polygonSelector').addEventListener('change', updateMap);

// Default Value for Date Picker
document.getElementById('datePicker').valueAsDate = new Date();


// TODO Event listeners for Select Lists
// Ex, on Polygon List Change, get currently selected polygonid, build URL and fetch
// Same for image type, but with a different URL, getting currently selected polygonid & image type, and default time

// Get Available Polygons for Select List
// Get Polygon Coordinates from AGRO API for Selected Polygon
// Plug Coordinates into Map for Marker
// Overlay Sattelite Immagery?
// 1. Get Image from AGRO API
// 2. Overlay inside marker
// Select List for Different Types of Immagery


// TODO Time selector