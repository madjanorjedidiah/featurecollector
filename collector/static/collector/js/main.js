//OSM tiles attribution and URL
var osmLink = '<a href="http://openstreetmap.org">OpenStreetMap</a>';
var osmURL = 'http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
var osmAttrib = '&copy; ' + osmLink;

//Carto tiles attribution and URL
var cartoLink = '<a href="http://cartodb.com/attributions">CartoDB</a>';
var cartoURL = 'http://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}.png';
var cartoAttrib = '&copy; ' + osmLink + ' &copy; ' + cartoLink;

//Stamen Toner tiles attribution and URL
var stamenURL = 'http://stamen-tiles-{s}.a.ssl.fastly.net/toner/{z}/{x}/{y}.{ext}';
var stamenAttrib = 'Map tiles by <a href="http://stamen.com">Stamen Design</a>, <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a> &mdash; Map data &copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>';

//Creation of map tiles
var osmMap = L.tileLayer(osmURL, {attribution: osmAttrib});
var cartoMap = L.tileLayer(cartoURL, {attribution: cartoAttrib});
var stamenMap = L.tileLayer(stamenURL,{
    attribution: stamenAttrib,
    subdomains: 'abcd',
    minZoom: 0,
    maxZoom: 20,
    ext: 'png'
});
var tile = L.tileLayer('http://{s}.google.com/vt/lyrs=m&x={x}&y={y}&z={z}',{
           maxZoom: 20,
           subdomains:['mt0','mt1','mt2','mt3']
})


//    initialisation of map
var map = L.map('map',{
    layers: [osmMap],
    fullscreenControl: true,
    fullscreenControlOptions: { // optional
    title:"Show me the fullscreen !",
    titleCancel:"Exit fullscreen mode",
    }
}).setView([6.053, -1], 7);


//Base layers definition and addition
var baseLayers = {
    "OSM Mapnik": osmMap,
    "Carto DarkMatter": cartoMap,
    "Stamen Toner": stamenMap,
    "Google Map": tile
};


//Add baseLayers to map as control layers
L.control.layers(baseLayers).addTo(map);






