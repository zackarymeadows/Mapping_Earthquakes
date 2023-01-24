console.log("sup dude")
// Create the map object with a center and zoom level.
var myMap = L.map("map",{
    center: [40.7, -94.5],
    zoom: 3
});

// We create the tile layer that will be the background of our map.

var streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/dark-v10/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 12,
    accessToken: API_KEY
}).addTo(myMap);



// //  Add a marker to the map for Los Angeles, California.
// let marker = L.marker([34.0522, -118.2437]).addTo(myMap);

L.circleMarker([34.0522, -118.2437], {
    radius: 100,
    color: 'black'
 }).addTo(myMap);



