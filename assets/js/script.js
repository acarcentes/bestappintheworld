//////////////////
// VARIABLES
//////////////////
var searchButton = $("#search-button");
var city = $(".input")

////////////////// 
// EVENT LISTENER - when the search button is pressed we're storing the city input value into local storage and then transitioning to another html page
//////////////////
$(searchButton).on("click", function(event){
    event.preventDefault();
    var city = $(".input").val().trim();
    localStorage.setItem("city", city);

    location.replace("categories.html");
});