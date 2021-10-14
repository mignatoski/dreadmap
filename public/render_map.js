var map = L.map('map', {
    crs: L.CRS.Simple,
    minZoom: -2
});

var bounds = [[0,0], [860,1720]];
var image = L.imageOverlay('https://cdn.vox-cdn.com/thumbor/KuX0-cMpV133FwhoxHRoQyM4QSo=/0x0:2500x1250/1720x0/filters:focal(0x0:2500x1250):format(webp):no_upscale()/cdn.vox-cdn.com/uploads/chorus_asset/file/22911417/Metroid_Dread_Artaria_map.png', bounds).addTo(map);
map.fitBounds(bounds);

map.setView([430,860], -1);

function addPoint(m) {
    var latlng = L.latLng([m.lat, m.lng]);
    var marker = L.marker(latlng).addTo(map).bindPopup(m.type);
    if (m.type == "e") {
        marker._icon.classList.add("redicon");
    }
}

var newMarkers = [];

function mapOnClick (e) {
   var m = new Object();
   console.log(e);
   m.lat = e.latlng.lat;
   m.lng = e.latlng.lng;
   m.type = "m";
   addPoint(m);
   newMarkers.push(m);
   console.log(JSON.stringify(newMarkers));
}

map.on('click', mapOnClick);

// Load markers from JSON
var request = new XMLHttpRequest();
request.open("GET", "/markers.json", false);
request.send(null)
const markers = JSON.parse(request.responseText);

// Add points to map
markers.forEach(m => {
    addPoint(m)
});

console.log(JSON.stringify(markers));
