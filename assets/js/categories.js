// 1. have to get the city input from index.html
<<<<<<< HEAD
    // var city = localStorage.getItem("city"); 
// 2. convert the city input into latitude and longitude coordinates for google maps api
// 3. convert that for google places OR maybe for another restaurant finding app
// 4. have to filter that array of places into our four different categories- breakfast, lunch, dinner, and dessert
// 5. when you click one of the filtered selections it takes you to that pages html
$("button").on("click", function () {
=======
>>>>>>> 639252e9e5350b9bcfa62f3370ba97ee6477d915
//////////////////
// GRABBING THE CITY INPUT FROM INDEX.HTML FILE
//////////////////
var city = localStorage.getItem("city");

function getCity() {
  console.log(city);
}

<<<<<<< HEAD
var googleApiKey = "AIzaSyDnpaYK4kBtFyLgGbFCAhZZ3VrPajOTblo"
=======
getCity();
>>>>>>> 639252e9e5350b9bcfa62f3370ba97ee6477d915

// Restaurant object with properties
var restaurantObj = [
  {
    name: "",
    address: "",
    rating: "",
    locationImage: "",
    priceLevel: "",
    openNow: "",
  },
];

// Different types of restaurant arrays
var breakFastRestaurants = new Array();
var lunchRestaurants = new Array();
var dinnerRestaurants = new Array();
var dessertRestaurants = new Array();

// 2. convert the city input into latitude and longitude coordinates for google places api
//////////////////
// GEOCODING API
//////////////////////
var googleApiKey = "AIzaSyAhBVrpWoA9FUHSfRrpiB_4OOw2Crmlw-8";

var geoCodingUrl =
  "https://maps.googleapis.com/maps/api/geocode/json?address=" +
  city +
  "&key=" +
  googleApiKey;

$.ajax({
  url: geoCodingUrl,
  method: "GET",
}).then(function (response) {
  //Clear the restaurants object arrays
  breakFastRestaurants.length = 0;
  lunchRestaurants.length = 0;
  dinnerRestaurants.length = 0;
  dessertRestaurants.length = 0;

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
    "https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=" +
    lat +
    "," +
    lng +
    "&radius=1500&type=restaurant&keyword=cruise&key=" +
    googleApiKey;

  $.ajax({
    url: googlePlacesUrl,
    method: "GET",
  }).then(function (response) {
    console.log(response);

    for (var i = 0; i < response.results.length; i++) {
      var restaurant = Object.create(restaurantObj);

      if (response.results[i].name != undefined) {
        var name = response.results[i].name;
        restaurant.name = name;
        console.log(restaurant.name);
      } else {
        restaurant.name = " ";
      }

      if (response.results[i].vicinity != undefined) {
        var address = response.results[i].vicinity;
        restaurant.address = address;
        console.log(restaurant.address);
      } else {
        restaurant.address = " ";
      }

      if (response.results[i].rating != undefined) {
        var rating = response.results[i].rating;
        restaurant.rating = rating;
        console.log(restaurant.rating);
      } else {
        restaurant.rating = " ";
      }

      if (response.results[i].price_level != undefined) {
        var priceLevel = response.results[i].price_level;
        restaurant.priceLevel = priceLevel;
        console.log(restaurant.priceLevel);
      } else {
        restaurant.priceLevel = " ";
      }

      if (response.results[i].opening_hours != undefined) {
        var openNow = response.results[i].opening_hours.open_now;
        restaurant.openNow = openNow;
        console.log(restaurant.openNow);
      } else {
        restaurant.openNow = "false";
      }

      if (
        response.results[i].photos.length > 0 &&
        response.results[i].photos[0].html_attributions.length > 0
      ) {
        var locImage = response.results[i].photos[0].html_attributions[0];
        restaurant.locationImage = locImage;
        console.log(restaurant.locationImage);
      } else {
        restaurant.locationImage = " ";
      }

      for (var j = 0; j < response.results[i].types.length; j++) {
        if (response.results[i].types[j] == "bar") {
          dinnerRestaurants.push(restaurant);
          dessertRestaurants.push(restaurant);
          break;
        } else if (
          response.results[i].types[j] == "restaurant" ||
          response.results[i].types[j] == "food"
        ) {
          breakFastRestaurants.push(restaurant);
          lunchRestaurants.push(restaurant);
          break;
        }
      }
    }
  });

  $("#breakfast").on("click", function () {
    console.log("hello");
    if (breakFastRestaurants.length == 0) {
      alert(
        "There are no breakfast restaurants in the search location at " + city
      );
      return;
    }

    for (var i = 0; i < breakFastRestaurants.length; i++) {
      console.log(breakFastRestaurants[i]);
      // Create HTML components from the breatfast restaurants object array

      // breakFastRestaurants.name
      // breakFastRestaurants.address
      // breakFastRestaurants.rating
      // breatFastRestaurants.priceLevel
      // breatFastRestaurants.openNow
      // breakFastRestaurants.locationImage

      //////////////////////////////////////
    }
  });

  $("#lunch").on("click", function () {
    if (lunchRestaurants.length == 0) {
      alert("There are no lunch restaurants in the search location at " + city);
      return;
    }

    for (var i = 0; i < lunchRestaurants.length; i++) {
      console.log(lunchRestaurants[i]);
      // Create HTML components from the breatfast restaurants object array

      //////////////////////////////////////
    }
  });

  $("#dinner").on("click", function () {
    if (dinnerRestaurants.length == 0) {
      alert(
        "There are no dinner restaurants in the search location at " + city
      );
      return;
    }

    for (var i = 0; i < dinnerRestaurants.length; i++) {
      console.log(dinnerRestaurants[i]);
      // Create HTML components from the breatfast restaurants object array

      //////////////////////////////////////
    }
  });

  $("#dessert").on("click", function () {
    if (dessertRestaurants.length == 0) {
      alert(
        "There are no dessert restaurants in the search location at " + city
      );
      return;
    }

    for (var i = 0; i < dessertRestaurants.length; i++) {
      console.log(dessertRestaurants[i]);
      // Create HTML components from the breatfast restaurants object array

      //////////////////////////////////////
    }
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
$("#search").click(function () {
  var city = $("#city").val().trim();
  localStorage.setItem("city", city);

  location.replace("categories.html");
});
