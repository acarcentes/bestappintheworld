//////////////////
// VARIABLES
//////////////////
var searchButton = $("#search-button");
// var city = $(".input")

//////////////////
// EVENT LISTENER - when the search button is pressed we're storing the city input value into local storage and then transitioning to another html page
//////////////////
$(searchButton).on("click", function (event) {
  event.preventDefault();
  var city = $(".input").val().trim();
  localStorage.setItem("city", city);

  location.replace("categories.html");

  getLatLngLocations(city);
  getRestaurants();
});

// longitude & lattitude locations
var bl_latitude = "11.847676";
var bl_longitude = "109.095887";
var tr_latitude = "12.838442";
var tr_longitude = "109.149359";

// Converts the city location into longitude and lattitude positions
function getLatLngLocations(city) {}

// Gets the list of restaurants upto 30 based on location
function getRestaurants() {
  var settings = {
    async: true,
    crossDomain: true,
    url:
      "https://tripadvisor1.p.rapidapi.com/restaurants/list-in-boundary?lunit=km&restaurant_tagcategory=10591&limit=30&currency=USD&restaurant_tagcategory_standalone=10591&lang=en_US&bl_latitude=" +
      bl_latitude +
      "&bl_longitude=" +
      bl_longitude +
      "&tr_latitude=" +
      tr_latitude +
      "&tr_longitude=" +
      tr_longitude,
    method: "GET",
    headers: {
      "x-rapidapi-host": "tripadvisor1.p.rapidapi.com",
      "x-rapidapi-key": "569c506913msh97bb985d6e98504p1b3ad2jsnb268e32c19d8",
    },
  };

  $.ajax(settings).done(function (response) {
    // console.log(response);
    for (var i = 0; i < response.data.length; i++) {
      if (response.data[i] != undefined) {
        console.log(response.data[i].name);
      }
    }
  });
}
