//////////////////
// VARIABLES
//////////////////
var searchButton = $("#search-button");

//////////////////
// EVENT LISTENER - when the search button is pressed we're storing the city input value into local storage and then transitioning to another html page
//////////////////

$(searchButton).on("click", function (event) {
  event.preventDefault();
  var city = $(".input").val().trim();

  // convert the city input into latitude and longitude coordinates for google places api
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
    console.log(response);
    console.log(response.results[0].geometry.location);
    // console.log(response.results[0].geometry.location.lat);
    var lat = response.results[0].geometry.location.lat;
    console.log(lat);
    // console.log(response.results[0].geometry.location.lng);
    var lng = response.results[0].geometry.location.lng;
    console.log(lng);

    localStorage.setItem("lat", lat);
    localStorage.setItem("lng", lng);
    location.replace("categories.html");
  });

});
