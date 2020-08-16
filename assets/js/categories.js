//////////////////
// LOADER
//////////////////
var loader = document.querySelector(".loader-wrapper");

$(window).on("load", function () {
  $(loader).fadeOut("slow");
});

//////////////////
// GRABBING THE CITY INPUT FROM INDEX.HTML FILE
//////////////////
var lat = localStorage.getItem("lat", lat);
var lng = localStorage.getItem("lng", lng);

function getCityCor() {
  console.log(lat);
  console.log(lng);
}
getCityCor();

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

//  Restaurant arrays
var breakFastRestaurants = new Array();
var lunchRestaurants = new Array();
var dinnerRestaurants = new Array();
var dessertRestaurants = new Array();

//////////////////
// Google Places API
//////////////////////
var googleApiKey = "AIzaSyAhBVrpWoA9FUHSfRrpiB_4OOw2Crmlw-8";

function googlePlaces(foodType) {
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

    // var results = response.results[0];
    // console.log(results);

    // var businessStatus = response.results[0].business_status;
    // console.log(businessStatus)

    // for (var i = 0; i < results.length; i++) {
    //   var restaurantLength = results[i];
    //   console.log(restaurantLength)
    // }

    // business_status: "CLOSED_TEMPORARILY"

    if (foodType == "breakfast") {

      var breakfastArray = ["restaurant", "food", "bakery", "cafe"];
    }

    if (foodType == "lunch") {

      var lunchArray = ["restaurant", "food", "establishment", "store"];

    }

    if (foodType == "dinner") {

      var dinnerArray = ["restaurant", "nightclub", "bar", "store"];
    }

    if (foodType == "dessert") {

      var dessertArray = ["restaurant", "bakery", "cafe"];

    }
  });
}

// if foodTypes(from data array) is equal to the breakfast array elements make a for loop if type = breakfastArray[i] then display

$(".cell").on("click", function () {
  var id = this.id.toString();
  googlePlaces(id);
  console.log(id);

  if(id === "breakfast") {
    // location.replace("restaurants.html");
  }

  if(id === "lunch") {
    // location.replace("restaurants.html");
  }

  if(id === "dinner") {
    // location.replace("restaurants.html");
  }

  if(id === "dessert") {
    // location.replace("restaurants.html");
  }
});

// 3. have to filter that array of places into our four different categories- breakfast, lunch, dinner, and dessert
// filter if the business is operational
// 4. when you click one of the filtered selections it takes you to the restaurant pages html

// 5. make a search bar so the user can update their city input if they want
//////////////////
// UPDATED CITY SEARCH VALUE
//////////////////
$("#search").click(function () {
  var city = $("#city").val().trim();
  localStorage.setItem("city", city);
  location.replace("categories.html");
});
