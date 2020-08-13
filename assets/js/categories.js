// 1. have to get the city input from index.html
var city = localStorage.getItem("city");

function getCity() {
  console.log(city);
}

getCity();

// 2. convert the city input into latitude and longitude coordinates for google maps api
//////////////////
// GEOCODING API
//////////////////////
var googleApiKey = "AIzaSyAhBVrpWoA9FUHSfRrpiB_4OOw2Crmlw-8";

var geoCodingUrl = "https://maps.googleapis.com/maps/api/geocode/json?address="+city+"&key="+googleApiKey

$.ajax({
  url: geoCodingUrl,
  method: "GET",
}).then(function (response) {
  console.log(response);
  console.log(response.results[0].geometry.location);
  // console.log(response.results[0].geometry.location.lat);
  var lat = response.results[0].geometry.location.lat;
  console.log(lat);
  // console.log(response.results[0].geometry.location.lng);
  var lng = response.results[0].geometry.location.lng;
  console.log(lng);

});

// 3. convert that for google places OR maybe for another restaurant finding app
// 4. have to filter that array of places into our four different categories- breakfast, lunch, dinner, and dessert
// 5. when you click one of the filtered selections it takes you to that pages html

// var googlePlacesUrl =
//   "https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=-33.8670522,151.1957362&radius=1500&type=restaurant&keyword=cruise&key=" +
//   googleApiKey;

// $.ajax({
//   url: googlePlacesUrl,
//   method: "GET",
// }).then(function (response) {
//   console.log(response);
// });


// 6. make a search bar so the user can update their city input if they want
//////////////////
// UPDATED CITY SEARCH VALUE  
//////////////////
$("#search").click(function(){
  var city = $("#city").val().trim();
  localStorage.setItem("city", city)

  location.replace("categories.html");

});