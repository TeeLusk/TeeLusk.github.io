// Build Map Function. Expects a polygon object
var mymap = L.map('mapid').setView([42.4557, -112.5683], 13);
export function buildMap() {


    // Lat/Long Switched from AgroAPI
    // TODO Func to switch lat/long from AgroAPI
    var arbonPolygon = L.polygon([
        [42.423558, -112.575359],
        [42.423558, -112.556305],
        [42.444899, -112.556305],
        [42.444899, -112.575359],
        [42.423558, -112.575359]
    ]).addTo(mymap);

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


    var imageUrl = "http://api.agromonitoring.com/image/1.0/000597bd000/609b4bd4b5d88922bc02f1ab?appid=76a3900f4cbeb05dbb772bb061d4046f",
        imageBounds = [
            [42.423558, -112.575359],
            [42.423558, -112.556305],
            [42.444899, -112.556305],
            [42.444899, -112.575359],
            [42.423558, -112.575359]
        ];
    L.imageOverlay(imageUrl, imageBounds).addTo(mymap);


    // TODO Image Overlay

    // Use to focus on active Polygon
    mymap.fitBounds(arbonPolygon.getBounds());

}


export function changePolygon(polygon) {
    // Remove old polygon
    if (mymap.hasLayer(polygon)) {
        mymap.removeLayer(polygon);
    }

    // Add new polygon
    polygon.addTo(mymap);
    mymap.fitBounds(polygon.getBounds());
}