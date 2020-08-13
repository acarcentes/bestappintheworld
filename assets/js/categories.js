// 1. have to get the city input from index.html
// var city = localStorage.getItem("city");
// 2. convert the city input into latitude and longitude coordinates for google maps api
// 3. convert that for google places OR maybe for another restaurant finding app
// 4. have to filter that array of places into our four different categories- breakfast, lunch, dinner, and dessert
// 5. when you click one of the filtered selections it takes you to that pages html

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


// longitude & lattitude locations
var latitude = "12.91285";
var longitude = "100.87808";

// Converts the city location into longitude and lattitude positions
function getLatLngLocations(city) {}

// Gets the list of restaurants upto 30 based on location
function getRestaurants() {
  var settings = {
    url:
      "https://tripadvisor1.p.rapidapi.com/restaurants/list-by-latlng?limit=30&currency=USD&distance=2&lunit=km&lang=en_US&latitude=" +
      latitude +
      "&longitude=" +
      longitude,
    method: "GET",
    headers: {
      "x-rapidapi-key": "569c506913msh97bb985d6e98504p1b3ad2jsnb268e32c19d8",
    },
  };

  // Ajax call back function on query response
  $.ajax(settings).done(function (response) {
    for (var i = 0; i < response.data.length; i++) {
      if (response.data[i] != undefined && response.data[i].name != undefined) {
        console.log(response.data[i].name);
      }
    }
  });
}

getLatLngLocations(city);
getRestaurants();