// Add console.log to check to see if our code is working.
console.log("everything ok");

// Create map object centered around the LAX with zoom level 5
let map = L.map('mapid').setView([36.1733, -120.1794], 5);

// add a tile layer with streets to be the background of the map
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/satellite-streets-v11/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: API_KEY
})
// add greymap tile layer to the map
streets.addTo(map);

let line = [
  [33.9416, -118.4085],
  [37.6213, -122.3790]
];
L.polyline(line, {
  color: "red"
}).addTo(map);
let lines = [
  [37.6213, -122.3790],
  [40.7899, -111.9791],
  [47.4502, -122.3088]
];
L.polyline(lines, {
  color: "blue"
}).addTo(map);
