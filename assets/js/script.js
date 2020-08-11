// API KEY
var apiKey = "9068da564emsh698c065ea958fa5p1c6c9djsn29907d4815c5"

// EVENT LISTENER FOR SUBMIT BUTTON
$("button").on("click", function(event){
    event.preventDefault();
    var city = $(".input").val();
    localStorage.setItem("city", city)

    
    // var city = $("#city").val().trim();

    // var URL = "https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location="+city+"&appid="+apiKey;

    // $.ajax({
    //     url: URL,
    //     method: "GET"
    //   }).then(function(response) {
  
    //     console.log(response);        
    //   });
        
    // var settings = {
    //   "async": true,
    //   "crossDomain": true,
    //   "url": "https://tripadvisor1.p.rapidapi.com/restaurants/get-details?location_id=2233968&lang=en_US&currency=USD",
    //   "method": "GET",
    //   "headers": {
    //     "x-rapidapi-host": "tripadvisor1.p.rapidapi.com",
    //     "x-rapidapi-key": "9068da564emsh698c065ea958fa5p1c6c9djsn29907d4815c5"
    //   }
    // }
    
    // $.ajax(settings).done(function (response) {
    //   console.log(response);
    // });
        
})