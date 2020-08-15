function buildQueryUrl() {
  var geoCodingUrl =
    "https://maps.googleapis.com/maps/api/geocode/json?address=" +
    city +
    "&key=" +
    googleApiKey;

  var googleApiKey = "AIzaSyAhBVrpWoA9FUHSfRrpiB_4OOw2Crmlw-8";

  googleApiKey.q = $("#search").val().trim();
}
