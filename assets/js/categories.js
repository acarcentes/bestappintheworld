// 1. have to get the city input from index.html
//////////////////
// GRABBING THE CITY INPUT FROM INDEX.HTML FILE
//////////////////
var city = localStorage.getItem("city");

function getCity() {
  console.log(city);
}

getCity();

// 2. convert the city input into latitude and longitude coordinates for google places api
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

  // Google Places API
  var googlePlacesUrl =
  "https://maps.googleapis.com/maps/api/place/nearbysearch/json?location="+lat+","+lng+"&radius=1500&type=restaurant&keyword=cruise&key="+
  googleApiKey;

  $.ajax({
  url: googlePlacesUrl,
  method: "GET",
  }).then(function (response) {
    console.log(response);
  });

  $("#breakfast").on("click", function(){
    console.log("hello");
  });
  
});

// 3. have to filter that array of places into our four different categories- breakfast, lunch, dinner, and dessert
// filter if the business is operational
  // if type of restaurant is a bar or food place it under dinner
  // if type of restaurant is food place under lunch


// 4. when you click one of the filtered selections it takes you to that pages html
// 5. make a search bar so the user can update their city input if they want
//////////////////
// UPDATED CITY SEARCH VALUE
//////////////////
$("#search").click(function(){
  var city = $("#city").val().trim();
  localStorage.setItem("city", city)

  location.replace("categories.html");

});