const AgroAPI = '76a3900f4cbeb05dbb772bb061d4046f';
let startTime = '1500336000';
let endTime = '1508976000';


// Build Map Function. Expects a polygon object
export const mymap = L.map('mapid');

let mapboxAPI = 'pk.eyJ1IjoidGVlbHVzayIsImEiOiJja3JjdXRjaGQwNTJ6MnZsajZrNjQ5dGppIn0.riOfHPNqBq9PEas7Mmca5Q';

L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    // attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    // id: 'mapbox/satellite-v9',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: mapboxAPI
}).addTo(mymap);
export function buildMap() {
    fetch('https://api.agromonitoring.com/agro/1.0/polygons?appid=76a3900f4cbeb05dbb772bb061d4046f')
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


    // Fetch polygon coordinates
    fetch(`https://api.agromonitoring.com/agro/1.0/polygons?appid=${AgroAPI}`)
        .then(function (res) {
            if (res.ok) {
                return res.json();
            }
            throw new Error(`Error when trying to reach AGRO API`);
        })
        .then(function (jsonObject) {
            // Get polygon coordinates
            let polyCoords = switchLatitiudeLongitude(jsonObject[0].geo_json.geometry.coordinates[0]);
            // Create polygon
            let polygon = L.polygon(polyCoords).addTo(mymap);


            fetch(`https://api.agromonitoring.com/agro/1.0/image/search?start=${startTime}&end=${endTime}&polyid=${jsonObject[0].id}&appid=${AgroAPI}`)
                .then(function (res) {
                    if (res.ok) {
                        return res.json();
                    }
                    throw new Error(`Error when trying to reach AGRO API`);
                })
                .then(function (jsonObject) {
                    // Image Overlay
                    let imageURL = jsonObject[0].image.truecolor;
                    L.imageOverlay(imageURL, polyCoords).addTo(mymap);

                }).catch(function (err) {
                    console.log(`Fetch error: ${err.message}`);
                })
            // // Add polygon to map
            mymap.fitBounds(polygon.getBounds());


        })
        .catch(function (err) {
            console.log(`Fetch error: ${err.message}`);
        })
}

export function switchLatitiudeLongitude(array) {
    array.forEach(e => {
        [e[0], e[1]] = [e[1], e[0]];
    })
    return array;
}


export function changeMap() {
    // Get Current Values of Fields
    let poly = document.querySelector('#polygonSelector').value;
    let imgType = document.querySelector('#imageTypeSelector').value;

    // REQ #1 - Get PolygonById for Coordinates


    // REQ #2 - Get Image by Date and Image Type

}