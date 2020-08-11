//////////////////
// GOOGLE MAPS/PLACES API KEY
////////////////////// 

alert("hello");

var googleApiKey = "AIzaSyAhBVrpWoA9FUHSfRrpiB_4OOw2Crmlw-8"

var googleMapsUrl = "https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=-33.8670522,151.1957362&radius=1500&type=restaurant&keyword=cruise&key="+googleApiKey


$.ajax({
    url: googleMapsUrl,
    method: "GET"
  }).then(function(response) {

    console.log(response);        
  })