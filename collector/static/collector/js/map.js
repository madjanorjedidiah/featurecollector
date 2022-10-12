const structuresUrl = '/structures/'
const polesUrl = '/poles/'
const linesUrl = '/lines/'
const routesUrl = '/routes/'
const boundaryUrl = '/boundary/'
const metersUrl = '/meters/'
const regUrl = 'https://geoservicess.herokuapp.com/api/regions'
const structureSwsbnmUrl = '/structure_bnm/'
const structureSwsbwtUrl = '/structure_bwt/'



// // /// Region Layer
function highlightFeature(e) {
    var layer = e.target;

    layer.setStyle({
        weight: 2,
        color: 'red',
        dashArray: '',
        fillOpacity: 0.7,
        fillColor: '#333333',
    });

    if (!L.Browser.ie && !L.Browser.opera && !L.Browser.edge) {
        // layer.bringToFront();
    }
}

    function style() {
        return {
        weight: 1,
        color:   '#8b1818', //"#00008c", 
        opacity: 0.6, 
        fillColor: 'transparent', //'#333333',
        fillOpacity: 0.7
        }
    }

    function onEachFeature(feature, layer) {
        layer.on({
            mouseover: highlightFeature,
            mouseout:  regionresetHighlight,
            click: zoomToFeature
        });

        var popupContent = "<table id='content'><thead><tr style='background-color:#089d08; color:white;'><th> Region Properties </th></tr></thead><tbody><tr><td><strong> Region </strong>: "+ feature.properties.name +
        "</td></tr></tbody</table>";
        layer.bindPopup(popupContent);
    }

    var reg = loadPolygonAJAX(regUrl, onEachFeature, style, reg)
    reg.on('mouseover', function(e){
        e.layer.bindTooltip(e.layer.feature.properties.region).openTooltip();
    })

    function regionresetHighlight(e) {
        reg.resetStyle(e.target);
    }




//  structures here
function structures_style() {
    return {
    weight: 1,
    color:   'green', //"#00008c", 
    opacity: 1, 
    fillColor: 'green', //'#333333',
    fillOpacity: 0.7
    }
}

function structures_onEachFeature(feature, layer) {
    layer.on({
        mouseover: highlightFeature,
        mouseout:  structures_resetHighlight,
        click: zoomToFeature
    });

    var popupContent = "<table id='content'><thead><tr style='background-color:#089d08; color:white;' padding: 10px;><th> Structures Properties </th></tr></thead><tbody><tr><td> Structures : "+ feature.properties.new_str_id +
    "</td></tr><tr><td> <strong>Group</strong> : "+ feature.properties.group +
    "</td></tr><tr><td> <strong>Lm_id</strong> : "+ feature.properties.lm_id +
    "</td></tr><tr><td> <strong>Act_Code</strong> : "+ feature.properties.act_code +
    "</td></tr><tr><td> <strong>Time</strong> : "+ feature.properties.time +
    "</td></tr></tbody</table>";
    layer.bindPopup(popupContent);
}

var structures = loadPolygonAJAX(structuresUrl, structures_onEachFeature, structures_style, structures, 'check')
structures.on('mouseover', function(e){
    e.layer.bindTooltip(e.layer.feature.properties.new_str_id).openTooltip();
})
structures.bringToFront()
function structures_resetHighlight(e) {
    structures.resetStyle(e.target);
}



//  structure SWSBNM here
function structures_swsbnm_style() {
    return {
    weight: 1,
    color:   'red', //"#00008c", 
    opacity: 1, 
    fillColor: 'red', //'#333333',
    fillOpacity: 0.7
    }
}

function structures_swsbnm_onEachFeature(feature, layer) {
    layer.on({
        mouseover: highlightFeature,
        mouseout:  structures_swsbnm_resetHighlight,
        click: zoomToFeature
    });

    var popupContent = "<table id='content'><thead><tr style='background-color:#089d08; color:white;' padding: 10px;><th> Structures Properties </th></tr></thead><tbody><tr><td> Structures : "+ feature.properties.new_str_id +
    "</td></tr><tr><td> <strong>Group</strong> : "+ feature.properties.group +
    "</td></tr><tr><td> <strong>Lm_id</strong> : "+ feature.properties.lm_id +
    "</td></tr><tr><td> <strong>Act_Code</strong> : "+ feature.properties.act_code +
    "</td></tr><tr><td> <strong>Time</strong> : "+ feature.properties.time +
    "</td></tr></tbody</table>";
    layer.bindPopup(popupContent);
}

var structures_swsbnm = loadPolygonAJAX(structureSwsbnmUrl, structures_swsbnm_onEachFeature, structures_swsbnm_style, structures_swsbnm)
structures_swsbnm.on('mouseover', function(e){
    e.layer.bindTooltip(e.layer.feature.properties.new_str_id).openTooltip();
})
structures_swsbnm.bringToFront()
function structures_swsbnm_resetHighlight(e) {
    structures_swsbnm.resetStyle(e.target);
}



//  structure SWSBWT here
function structures_swsbwt_style() {
    return {
    weight: 1,
    color:   'red', //"#00008c", 
    opacity: 1, 
    fillColor: 'red', //'#333333',
    fillOpacity: 0.7
    }
}

function structures_swsbwt_onEachFeature(feature, layer) {
    layer.on({
        mouseover: highlightFeature,
        mouseout:  structures_swsbwt_resetHighlight,
        click: zoomToFeature
    });

    var popupContent = "<table id='content'><thead><tr style='background-color:#089d08; color:white;' padding: 10px;><th> Structures Properties </th></tr></thead><tbody><tr><td> Structures : "+ feature.properties.new_str_id +
    "</td></tr><tr><td> <strong>Group</strong> : "+ feature.properties.group +
    "</td></tr><tr><td> <strong>Lm_id</strong> : "+ feature.properties.lm_id +
    "</td></tr><tr><td> <strong>Act_Code</strong> : "+ feature.properties.act_code +
    "</td></tr><tr><td> <strong>Time</strong> : "+ feature.properties.time +
    "</td></tr></tbody</table>";
    layer.bindPopup(popupContent);
}

var structures_swsbwt = loadPolygonAJAX(structureSwsbwtUrl, structures_swsbwt_onEachFeature, structures_swsbwt_style, structures_swsbwt)
structures_swsbwt.on('mouseover', function(e){
    e.layer.bindTooltip(e.layer.feature.properties.new_str_id).openTooltip();
})
structures_swsbwt.bringToFront()
function structures_swsbwt_resetHighlight(e) {
    structures_swsbwt.resetStyle(e.target);
}


//  boundary here
function boundary_style() {
    return {
    weight: 1,
    color:   'yellow', //"#00008c", 
    opacity: 1, 
    fillColor: 'yellow', //'#333333',
    fillOpacity: 0.7
    }
}

function boundary_onEachFeature(feature, layer) {
    layer.on({
        mouseover: highlightFeature,
        mouseout:  boundary_resetHighlight,
        click: zoomToFeature
    });

    var popupContent = "<table id='content'><thead><tr style='background-color:#089d08; color:white;' padding: 10px;><th> Boundary Properties </th></tr></thead><tbody><tr><td> Boundary Name : "+ feature.properties.name +
    "</td></tr><tr><td> <strong> Description </strong> : "+ feature.properties.descriptio +
    "</td></tr></tbody</table>";
    layer.bindPopup(popupContent);
}

var boundary = loadPolygonAJAX(boundaryUrl, boundary_onEachFeature, boundary_style, boundary, 'check')
boundary.on('mouseover', function(e){
    e.layer.bindTooltip(e.layer.feature.properties.name).openTooltip();
})
boundary.bringToFront()
function boundary_resetHighlight(e) {
    boundary.resetStyle(e.target);
}




// //  poles here
var polesStyle = {
    color: 'white',
    radius: 8,
    opacity: 1.0,
    fillOpacity: 1.0,
    weight: 1,
    fillColor: '#660fb4',
    clickable: true
};

function polesOnEachFeature(feature, layer) {

    var popupContent = "<table id='content'><thead><tr style='background-color:#089d08; color:white;' padding: 10px;><th> Poles Properties </th></tr></thead><tbody><tr><td> Poles : "+ feature.properties.ids +
    "</td></tr><tr><td> <strong>Type of Pole </strong> : "+ feature.properties.type +
    "</td></tr><tr><td> <strong>Number of sl</strong> : "+ feature.properties.no_of_sl +
    "</td></tr></tbody</table>";
    layer.bindPopup(popupContent);
}

var poles = loadPoint(polesUrl, polesOnEachFeature, polesStyle, poles, 'check')
poles.bringToFront()



//  meters here
var metersStyle = {
    weight: 1,
    radius: 8,
    color: 'white', //"#00008c", 
    opacity: 1, 
    fillColor: '#1c79d5', //'#333333',
    fillOpacity: 1
    }

function metersOnEachFeature(feature, layer) {

    var popupContent = "<table id='content'><thead><tr style='background-color:#089d08; color:white;' padding: 10px;><th> Meter Properties </th></tr></thead><tbody><tr><td> Meter : "+ feature.properties.str_id +
    "</td></tr><tr><td> <strong> Type of Meter </strong> : "+ feature.properties.type +
    "</td></tr><tr><td> <strong> Meter Number </strong> : "+ feature.properties.meter_no +
    "</td></tr><tr><td> <strong> Phase </strong> : "+ feature.properties.phase +
    "</td></tr><tr><td> <strong> Tarrif </strong> : "+ feature.properties.tarrif +
    "</td></tr><tr><td> <strong> Act_Code </strong> : "+ feature.properties.act_code +
    "</td></tr></tbody</table>";
    layer.bindPopup(popupContent);
}

var meters = loadPoint(metersUrl, metersOnEachFeature, metersStyle, meters, 'check')
meters.bringToFront()



//  routes here
function routesStyle() {
    return {
    weight: 3,
    color:   'grey', //"#00008c", 
    opacity: 1, 
    fillColor: 'grey', //'#333333',
    fillOpacity: 1
    }
}

function routesOnEachFeature(feature, layer) {
    layer.on({
        mouseover: highlightFeature,
        mouseout:  routesresetHighlight
    });

    var popupContent = "<table id='content'><thead><tr style='background-color:#089d08; color:white;' padding: 10px;><th> Routes Properties </th></tr></thead><tbody><tr><td> Route Type : "+ feature.properties.type +
    "</td></tr></tbody</table>";
    layer.bindPopup(popupContent);
}

var routes = loadLineAJAX(routesUrl, routesStyle, routes, 'check')
routes.on('mouseover', function(e){
    e.layer.bindTooltip(e.layer.feature.properties.type).openTooltip();
})
routes.bringToFront()
function routesresetHighlight(e) {
    routes.resetStyle(e.target);
}




//  lines here
function linesStyle() {
    return {
    weight: 3,
    color:   'pink', //"#00008c", 
    opacity: 1, 
    fillColor: 'pink', //'#333333',
    fillOpacity: 1
    }
}

function linesOnEachFeature(feature, layer) {
    layer.on({
        mouseover: highlightFeature,
        mouseout:  linesresetHighlight
    });

    var popupContent = "<table id='content'><thead><tr style='background-color:#089d08; color:white;' padding: 10px;><th> Line Properties </th></tr></thead><tbody><tr><td> Line Type: "+ feature.properties.type +
    "</td></tr><tr><td> <strong>Remarks</strong> : "+ feature.properties.remarks +
    "</td></tr></tbody</table>";
    layer.bindPopup(popupContent);
}

var lines = loadLineAJAX(linesUrl, linesStyle, lines, 'check')
lines.on('mouseover', function(e){
    e.layer.bindTooltip(e.layer.feature.properties.remarks).openTooltip();
})
lines.bringToFront()
function linesresetHighlight(e) {
    lines.resetStyle(e.target);
}