var render_map = {};

// Initialize leaflet.js
var L = require('leaflet');

// Global Variables
var mapMarkers = [];
var mapPoints = [];
var map;

// Private Functions
function load_markers(location) {
    // Load markers from JSON
    var request = new XMLHttpRequest();
    request.open("GET", "/api/markers/" + location, true);


    request.onreadystatechange = function () {
        if (request.readyState === 4 && request.status === 200) {
            mapMarkers = JSON.parse(request.responseText);

            mapMarkers.forEach(m => {
                addPoint(m)
            });

            console.log(JSON.stringify(mapMarkers));
        } else {
            console.log(this.responseText);
        }
    };


    request.send(null);
}

function addPoint(m) {
    var latlng = L.latLng([m.lat, m.lng]);
    var point = L.marker(latlng).addTo(map).bindPopup(m.type);
    if (m.type == "e") {
        point._icon.classList.add("redicon");
    }
    mapPoints.push(point);
}

function mapOnClick(e) {
    var m = new Object();
    console.log(e);
    m.lat = e.latlng.lat;
    m.lng = e.latlng.lng;
    m.type = "m";
    addPoint(m);
    mapMarkers.push(m);
    console.log(JSON.stringify(m));
}

// Exports
render_map.save_markers = (location) => {
    // Load markers from JSON
    var request = new XMLHttpRequest();
    request.open("POST", "/api/markers/" + location, true);
    request.setRequestHeader("Content-Type", "application/json");

    // Create a state change callback
    request.onreadystatechange = function () {
        if (request.readyState === 4 && request.status === 200) {
            console.log("Saved");
        }
    };
    console.log(mapMarkers);
    request.send(JSON.stringify(mapMarkers));
}

render_map.init_map = () => {
    map = L.map('map', {
        crs: L.CRS.Simple,
        minZoom: -2
    });
    var bounds = [[0, 0], [860, 1720]];
    var image = L.imageOverlay('https://cdn.vox-cdn.com/thumbor/KuX0-cMpV133FwhoxHRoQyM4QSo=/0x0:2500x1250/1720x0/filters:focal(0x0:2500x1250):format(webp):no_upscale()/cdn.vox-cdn.com/uploads/chorus_asset/file/22911417/Metroid_Dread_Artaria_map.png', bounds).addTo(map);
    map.fitBounds(bounds);

    map.setView([430, 860], -1);

    map.on('click', mapOnClick);

    // Add points to map
    load_markers("artaria");
}

module.exports = render_map;