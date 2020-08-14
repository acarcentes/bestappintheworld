// 1. have to get the city input from index.html
//////////////////
// GRABBING THE CITY INPUT FROM INDEX.HTML FILE
//////////////////
// var city = localStorage.getItem("city");

var lat = localStorage.getItem("lat", lat);
var lng = localStorage.getItem("lng", lng);

function getCityCor() {
  console.log(lat);
  console.log(lng)
}

getCityCor();

//////////////////
// Google Places API
//////////////////////

var googleApiKey = "AIzaSyAhBVrpWoA9FUHSfRrpiB_4OOw2Crmlw-8";

function googlePlaces(foodType) {
  var googlePlacesUrl =
"https://maps.googleapis.com/maps/api/place/nearbysearch/json?location="+lat+","+lng+"&radius=1500&type=restaurant&keyword=cruise&key="+
googleApiKey;

$.ajax({
url: googlePlacesUrl,
method: "GET",
}).then(function (response) {
  console.log(response);

  if (foodType == "breakfast") {
    console.log("yaasss");

    var breakfastArray = [
      "restaurant", "nightclub"
    ]
  }

  if (foodType == "lunch") {
    console.log("yaass")
  }

  if (foodType == "dinner") {
    console.log("yaass")
  }

  if (foodType == "dessert") {
    console.log("yaass")
  }
});
}

// if types(from data array) is equal to the breakfast array elements make a for loop if type = breakfastArray[i] then display 

$(".container").on("click", function(){
  var id = this.id.toString();
  googlePlaces(id);

  console.log(id);
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