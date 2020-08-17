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

function foodAndCity() {
  var foodCategory = $("#foodCategory");
  foodCategory.text(id).css({"color": "cadetblue", "text-transform": "uppercase"});

  var location = $("#location");
  location.text(city).css({"color": "cadetblue", "text-transform": "uppercase"});

}

foodAndCity();


//////////////////
// UPDATED CITY SEARCH VALUE
//////////////////
$("#search").click(function () {
  var city = $("#city").val().trim();
  localStorage.setItem("city", city);
  location.replace("categories.html");
});