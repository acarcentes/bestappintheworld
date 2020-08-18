//////////////////
// LOADER
//////////////////
var loader = document.querySelector(".loader-wrapper");

$(window).on("load", function () {
  $(loader).fadeOut("slow");
});

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
// Restaurant object with properties
//////////////////
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

console.log(restaurantObj);

//////////////////
//  Restaurant arrays
//////////////////
var breakfastRestaurants = new Array();
var lunchRestaurants = new Array();
var dinnerRestaurants = new Array();
var dessertRestaurants = new Array();

//////////////////
// Google Places API
//////////////////////
var googleApiKey = "AIzaSyAhBVrpWoA9FUHSfRrpiB_4OOw2Crmlw-8";

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

    for (var i = 0; i < restaurantResults.length; i++) {
      var restaurant = Object.create(restaurantObj);

      if (response.results[i].name != undefined) {
        var name = response.results[i].name;
        restaurant.name = name;
        console.log(name);

        localStorage.setItem("name", JSON.stringify(name));

      } else {
        restaurant.name = " ";
      }

      if (response.results[i].vicinity != undefined) {
        var address = response.results[i].vicinity;
        console.log(address);
        
      } else {
        restaurant.address = " ";
      }

      if (response.results[i].rating != undefined) {
        var rating = response.results[i].rating;
        console.log(rating);
      } else {
        restaurant.rating = " ";
      }

      if (response.results[i].price_level != undefined) {
        var priceLevel = response.results[i].price_level;
        console.log(priceLevel);
      } else {
        restaurant.priceLevel = " ";
      }

      if (response.results[i].opening_hours != undefined) {
        var openNow = response.results[i].opening_hours.open_now;
        restaurant.openNow = openNow;
        console.log(openNow);
      } else {
        restaurant.openNow = "Closed";
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
        if (
          response.results[i].types[j] == "bar" ||
          response.results[i].types[j] == "night_club" || 
          response.results[i].types[j] == "point_of_interest"

        ) {
          dinnerRestaurants.push(restaurant);

          break;

        } else if (
          response.results[i].types[j] == "restaurant" ||
          response.results[i].types[j] == "bar" ||
          response.results[i].types[j] == "food" ||
          response.results[i].types[j] == "cafe" ||
          response.results[i].types[j] == "bakery"

        ) {
          lunchRestaurants.push(restaurant);

          break;

        } else if (
          response.results[i].types[j] == "restaurant" ||
          response.results[i].types[j] == "food" ||
          response.results[i].types[j] == "cafe" ||
          response.results[i].types[j] == "store" ||
          response.results[i].types[j] == "bakery"

        ) {
          breakfastRestaurants.push(restaurant);
          lunchRestaurants.push(restaurant);
          dessertRestaurants.push(restaurant);

          break;
        }
      }
    }

    $(".cell").on("click", function () {
      var id = this.id.toString();
      googlePlaces(restaurantResults);
      // console.log(id);
    
      if(id === "Breakfast") {
    
        localStorage.setItem("id", id);
    
        // JSON.parse(localStorage.getItem("breakfastRestaurants"));
    
        for (var i = 0; i < breakfastRestaurants.length; i++) {
          console.log(breakfastRestaurants[i]);
    
          if (lunchRestaurants.length == 0) {
            alert("There are no lunch restaurants in " + city);
            return;
          }
    
        }
        location.replace("restaurants.html");
      }
    
      if(id === "Lunch") {
    
       localStorage.setItem("id", id);
    
        for (var i = 0; i < lunchRestaurants.length; i++) {
          console.log(lunchRestaurants[i]);
    
          if (lunchRestaurants.length == 0) {
            alert("There are no lunch restaurants in " + city);
            return;
          }
    
        }
    
      }
    
      if(id === "Dinner") {
    
        localStorage.setItem("id", id);
    
        for (var i = 0; i < dinnerRestaurants.length; i++) {
          console.log(dinnerRestaurants[i]);
    
          if (dinnerRestaurants.length == 0) {
            alert(
              "There are no dinner restaurants in " + city
            );
            return;
          }
    
        }
      }
    
      if(id === "Dessert") {
    
        localStorage.setItem("id", id);
    
        for (var i = 0; i < dessertRestaurants.length; i++) {
          console.log(dessertRestaurants[i]);
    
          if (dessertRestaurants.length == 0) {
            alert(
              "There are no dessert restaurants in " + city
            );
            return;
          }
      
        }
      }
    
    });
  });
}

googlePlaces();

// $(".cell").on("click", function () {
//   var id = this.id.toString();
//   googlePlaces(restaurantResults);
//   // console.log(id);

//   if(id === "Breakfast") {

//     localStorage.setItem("id", id);

//     // JSON.parse(localStorage.getItem("breakfastRestaurants"));

//     for (var i = 0; i < breakfastRestaurants.length; i++) {
//       console.log(breakfastRestaurants[i]);

//       if (lunchRestaurants.length == 0) {
//         alert("There are no lunch restaurants in " + city);
//         return;
//       }

//     }
//     location.replace("restaurants.html");
//   }

//   if(id === "Lunch") {

//    localStorage.setItem("id", id);

//     for (var i = 0; i < lunchRestaurants.length; i++) {
//       console.log(lunchRestaurants[i]);

//       if (lunchRestaurants.length == 0) {
//         alert("There are no lunch restaurants in " + city);
//         return;
//       }

//     }

//   }

//   if(id === "Dinner") {

//     localStorage.setItem("id", id);

//     for (var i = 0; i < dinnerRestaurants.length; i++) {
//       console.log(dinnerRestaurants[i]);

//       if (dinnerRestaurants.length == 0) {
//         alert(
//           "There are no dinner restaurants in " + city
//         );
//         return;
//       }

//     }
//   }

//   if(id === "Dessert") {

//     localStorage.setItem("id", id);

//     for (var i = 0; i < dessertRestaurants.length; i++) {
//       console.log(dessertRestaurants[i]);

//       if (dessertRestaurants.length == 0) {
//         alert(
//           "There are no dessert restaurants in " + city
//         );
//         return;
//       }
  
//     }
//   }

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

// localStorage.setItem("name", JSON.stringify(name));

console.log(JSON.parse(localStorage.getItem("name", name)));