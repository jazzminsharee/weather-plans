var city = $("#cityName").val()
var testCity = "Sacramento"
var myKey = "b7cd031e64f6a5980262c7acabdf2831"
var url = "https://api.openweathermap.org/data/2.5/weather?q=" + testCity + "&appid=" + myKey + "&units=imperial"
var forecast = "https://api.openweathermap.org/data/2.5/forecast?q=" + testCity + "&appid=" + myKey + "&units=imperial"




fetch(url)
  .then(response => response.json())
  .then(data => {
      console.log(data)
      var lat = data.coord.lat
      var lon = data.coord.lon
      var ocUrl = "https://api.openweathermap.org/data/2.5/onecall?lat=" + lat + "&lon=" + lon + "&appid=" + myKey + "&units=imperial"
      console.log(lat)
      console.log(lon)

  });

