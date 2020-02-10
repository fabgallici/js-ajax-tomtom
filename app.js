$(document).ready(init);

function init() {
  console.log('i work');

  var api_key = 'eHsDmslbcIzT8LG5Yw54AH9p2munbhhh';

  $('#get-address').on('click', function() {
    var address = $('#address').val().replace(/\s/g, "%20");
    console.log(address);

    var apartUrl = "https://api.tomtom.com/search/2/geocode/" + address + ".json?limit=1&key=" + api_key;

    $.ajax({
      url: apartUrl,
      method: "GET",
      success: function (data) {
        if (data.results) {
          console.log("data", data.results[0]);
        }
        var position = data.results[0].position;
        var lat = position.lat;
        var lon = position.lon;
        document.getElementById('output').innerHTML = 'lat: ' + lat + ' - lon: ' + lon;
        console.log('lat: ', lat, '  - lon: ', lon);
      },
      error: function (error) {
        console.log("error", error);
      }
    });
  });

}