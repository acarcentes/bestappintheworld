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
  
});

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
