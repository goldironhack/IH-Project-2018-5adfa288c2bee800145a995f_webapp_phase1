
const API_KEY = "AIzaSyCAm3D8vgS0f6t8J8U6c3C9v4RAWa7D7fE";
var map;
var Neighborhood_Names_GIS="https://data.cityofnewyork.us/api/views/xyye-rtrs/rows.json?accessType=DOWNLOAD";
const NY_Districts_geoshapes ="https://services5.arcgis.com/GfwWNkhOj9bNBqoJ/arcgis/rest/services/nycd/FeatureServer/0/query?where=1=1&outFields=*&outSR=4326&f=geojson";


function initMap() {
  var myLatLng = {lat: 40.729266, lng: -73.996609};

  map = new google.maps.Map(document.getElementById('map'), {
    zoom: 10,
    center: myLatLng
  });

  var marker = new google.maps.Marker({
    position: myLatLng,
    map: map,
    title: 'NYU Stern School of Business, New York'
  });
}
