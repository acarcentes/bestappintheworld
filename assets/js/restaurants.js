//////////////////
// LOADER
//////////////////
var loader = document.querySelector(".loader-wrapper");

$(window).on("load", function () {
  $(loader).fadeOut("slow");
});

// function buildQueryUrl() {
//   var geoCodingUrl =
//     "https://maps.googleapis.com/maps/api/geocode/json?address=" +
//     city +
//     "&key=" +
//     googleApiKey;

//   var googleApiKey = "AIzaSyAhBVrpWoA9FUHSfRrpiB_4OOw2Crmlw-8";

//   googleApiKey.q = $("#search").val().trim();
// }

//////////////////
// UPDATED CITY SEARCH VALUE
//////////////////
$("#search").click(function () {
  var city = $("#city").val().trim();
  localStorage.setItem("city", city);
  location.replace("categories.html");
});