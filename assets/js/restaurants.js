//////////////////
// LOADER
//////////////////
var loader = document.querySelector(".loader-wrapper");

$(window).on("load", function () {
  $(loader).fadeOut("slow");
});

//////////////////
// GET FOOD CATEGORY AND CITY SEARCH VALUE
//////////////////
var id = localStorage.getItem("id", id);
var city = localStorage.getItem("city", city);
// var name = localStorage.getItem("name", name);


function foodAndCity() {
 
  var foodCategory = $("#foodCategory");
  foodCategory.text(id).css({"color": "cadetblue", "text-transform": "uppercase"});

  var location = $("#location");
  location.text(city).css({"color": "cadetblue", "text-transform": "uppercase"});

}

foodAndCity();

// //////////////////
// // UPDATED CITY SEARCH VALUE
// //////////////////
// $("#search").click(function () {
//   var city = $("#city").val().trim();
//   localStorage.setItem("city", city);
//   location.replace("categories.html");
// });

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
