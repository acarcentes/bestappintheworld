//////////////////
// LOADER
//////////////////
var loader = document.querySelector(".loader-wrapper");

$(window).on("load", function () {
  $(loader).fadeOut("slow");
});

//////////////////
//  Restaurant arrays
//////////////////
var breakfastRestaurants = new Array();
// var lunchRestaurants = new Array();
// var dinnerRestaurants = new Array();
// var dessertRestaurants = new Array();

var breakfastCategory = ["food", "cafe", "bakery"];

//////////////////
// GRABBING THE CITY AND LAT/LNG INPUT FROM LOCAL STORAGE
//////////////////
var city = localStorage.getItem("city", city);
var lat = localStorage.getItem("lat", lat);
var lng = localStorage.getItem("lng", lng);

function getCityCor() {
  console.log(city);
  console.log(lat);
  console.log(lng);
}
getCityCor();

//////////////////
// Google Places API
//////////////////////
var googleApiKey = "AIzaSyAhBVrpWoA9FUHSfRrpiB_4OOw2Crmlw-8";

var restaurantResults;
var restaurantsArray = [];

function googlePlaces() {
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

    var restaurantResults = response.results

    console.log(restaurantResults);

    // var breakfastArray = ["food"];
    // var emptyBreakfast = [];

    // restaurantsArray.push(restaurantResults);

    for (var i = 0; i < restaurantResults.length; i++) {
      var element = restaurantResults[i];
      console.log(element);

      // if(savedId == "Breakfast" && restaurantResults[i].types[0] == breakfastArray) {
      //   var wrapper = $(".wrapper");
      //   var newRow = $("<div>").addClass("row");
      //   var col = $("<div>").addClass("large-7 columns");
      //   var restNameText = $("<h3>").addClass(".restaurant-name");
      //   var rating = $("<p>")
      //   var price = $("<p>")
      //   var open = $("<p>")
      //   var img = $("<img>").addClass("image-cropper")
  
      //   restNameText.text(element.name);
      //   rating.text(element.rating);
      //   price.text(element.price_level);
      //   open.text(element.business_status);
      //   img.att("src", element.photos[0])
  
      //   $(restNameText).appendTo(col);
      //   $(rating).appendTo(col);
      //   $(price).appendTo(col);
      //   $(open).appendTo(col);
      //   $(img).appendTo(col);
      //   $(col).appendTo(newRow);
      //   $(newRow).appendTo(wrapper);
      // }

      var wrapper = $(".wrapper");
      var newRow = $("<div>").addClass("row");
      var col = $("<div>").addClass("large-7 columns");
      var restNameText = $("<h3>").addClass(".restaurant-name");
      var address = $("<p>");
      var rating = $("<p>");
      var price = $("<p>");
      var open = $("<p>");
      var img = $("<img>").addClass("icon");

      restNameText.text(element.name);
      address.text(element.vicinity);
      rating.text("Rating: " + element.rating);
      price.text(element.price_level);

      img.attr("src", element.icon);

      $(restNameText).appendTo(col);
      $(address).appendTo(col);
      $(rating).appendTo(col);
      $(price).appendTo(col);
      $(open).appendTo(col);
      $(img).appendTo(col);
      $(col).appendTo(newRow);
      $(newRow).appendTo(wrapper);

      // price level conditionals
      if (element.price_level != undefined) {
        price.text("Price level: $");
      } else if (element.price_level <= 1) {
        price.text("Price level: $");
      } else if (element.price_level <= 2) {
        price.text("Price level: $$");
      } else if (element.price_level <= 3) {
        price.text("Price level: $$$");
      } else if (element.price_level >= 4) {
        price.text("Price level: $$$$");
      } else if (element.price_level >= 5) {
        price.text("Price level: $$$$$");
      } else {
        price.text("Price level: unknown")
      }

      // open now conditionals
      if (element.opening_hours != undefined) {
        var openNow = element.opening_hours.open_now;
        open.text("Open now: " + openNow);
      } else {
        open.text("Open now: unknown");
      }
  }

    $(".cell").on("click", function () {
      var id = this.id.toString();
      console.log(id);

      if(id === "Breakfast") {
    
        localStorage.setItem("id", id);
        location.replace("restaurants.html");

      }
    
      if(id === "Lunch") {
    
        localStorage.setItem("id", id);
        location.replace("restaurants.html");

      }
    
      if(id === "Dinner") {
    
        localStorage.setItem("id", id);
        location.replace("restaurants.html");

      }
    
      if(id === "Dessert") {
    
        localStorage.setItem("id", id);
        location.replace("restaurants.html");    

      }
    });
  });
}

googlePlaces();

//////////////////
// UPDATED CITY SEARCH VALUE
//////////////////
$("#search").click(function () {
  var city = $("#city").val().trim();

  var geoCodingUrl =
    "https://maps.googleapis.com/maps/api/geocode/json?address=" +
    city +
    "&key=" +
    googleApiKey;

  $.ajax({
    url: geoCodingUrl,
    method: "GET",
  }).then(function (response) {

    var lat = response.results[0].geometry.location.lat;
    console.log(lat);

    var lng = response.results[0].geometry.location.lng;
    console.log(lng);

    localStorage.setItem("city", city);
    localStorage.setItem("lat", lat);
    localStorage.setItem("lng", lng);
    location.replace("categories.html");
  });
});