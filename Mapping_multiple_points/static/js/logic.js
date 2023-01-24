// Get data from cities.js
let cityData = cities;

console.log("sup dude")
// Create the map object with a center and zoom level.
var myMap = L.map("map",{
    center: [37.6, -122.3],
    zoom: 5
});

// Coordinates for each point to be used in the polyline.
let line = [
    [33.9416, -118.4085],
    [37.6213, -122.3790],
    [40.7899, -111.9791],
    [47.4502, -122.3088]
  ];
// We create the tile layer that will be the background of our map.
// Create a polyline using the line coordinates and make the line red.
L.polyline(line, {
    color: "yellow"
  }).addTo(myMap);

var streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/satellite-streets-v11/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 12,
    accessToken: API_KEY
}).addTo(myMap);





// Loop through the cities array and create one marker for each city.
cityData.forEach(function(city) {
    console.log(city)
    L.marker(city.location)
    .bindPopup("<h2>" + city.city + ", " + city.state + "</h2> <hr> <h3>Population " + city.population + "</h3>")
  .addTo(myMap);
});

var geojsonMarkerOptions = {
    radius: (city.population<200000),
    fillColor: "yellow",
    lineweight: 4,
    
    fillOpacity: 0.8
};
