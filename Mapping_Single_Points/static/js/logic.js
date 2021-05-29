// Add console.log to check to see if our code is working.
console.log("everything ok");

// Create map object centered around the US with zoom level 4
let map = L.map('mapid').setView([40.7, -94.5], 4);

// add a tile layer with streets to be the background of the map
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: API_KEY
})
// add greymap tile layer to the map
streets.addTo(map);
