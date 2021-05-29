// Import API key
const AgroAPI = '76a3900f4cbeb05dbb772bb061d4046f';
const polygon01 = '609b4bd4b5d88922bc02f1ab';
let startTime = '1500336000';
let endTime = '1508976000';

// Build URL for Fetch
// http://api.agromonitoring.com/agro/1.0/image/search?start={start date}&end={end date}&polyid={ID of polygon}&appid={API key}
function buildAgroURL (api, polygonId, start, end) {
    let url = `http://api.agromonitoring.com/agro/1.0/image/search?start=${start}&end=${end}&polyid=${polygonId}&appid=${api}`;
    return url;
};

// Basic Fetch
let url1 = buildAgroURL(AgroAPI, polygon01, startTime, endTime);
// console.log("url1", url1);

fetch(url1)
    .then(function (res) {
        if (res.ok) {
           return res.json(); 
        }
        throw new Error(`Error when trying to reach AGRO API`);
    })
    .then(function (jsonObject) {
        // Parse through JSON
        let imagesArr = [];
        const agroRes = jsonObject;
        agroRes.forEach(e => {
            imagesArr.push({"Img": e.image.evi2, "Stat": e.stats.ndvi});
        });
        // console.log(agroRes);
        // console.log(imagesArr);

        imagesDiv = document.querySelector('#images');
        imagesArr.forEach(e => {
            imagesDiv.innerHTML += `<img src=${e.Img}>
                                    <p>${e.Stat}</p>`
        // TODO Needs a second Fetch to return the stats from the specific URL
        // Possibly based on event?
        });
        
    })
    .catch(function (err) {
        console.log(`Fetch error: ${err.message}`);
    })
    





