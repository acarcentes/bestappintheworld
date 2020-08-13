// 1. have to get the city input from index.html
var city = localStorage.getItem("city");
// 2. convert the city input into latitude and longitude coordinates for google maps api
// 3. convert that for google places OR maybe for another restaurant finding app
// 4. have to filter that array of places into our four different categories- breakfast, lunch, dinner, and dessert
// 5. when you click one of the filtered selections it takes you to that pages html

function getCity() {
  console.log(city);
}

getCity();

//////////////////
// GOOGLE MAPS/PLACES API KEY
//////////////////////

var googleApiKey = "AIzaSyAhBVrpWoA9FUHSfRrpiB_4OOw2Crmlw-8";

// var googleMapsUrl =
//   "https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=-33.8670522,151.1957362&radius=1500&type=restaurant&keyword=cruise&key=" +
//   googleApiKey;

// $.ajax({
//   url: googleMapsUrl,
//   method: "GET",
// }).then(function (response) {
//   console.log(response);
// });


//////////////////
// UPDATED CITY SEARCH VALUE  
//////////////////
$("#search-btn").click(function(){
  // var city = $("#search").val().trim();
  localStorage.setItem("city", city)

  location.replace("categories.html");
 
});