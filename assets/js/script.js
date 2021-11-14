var city = $("#cityName").val()
var testCity = "Sacramento"
var myKey = "b7cd031e64f6a5980262c7acabdf2831"
var url = "https://api.openweathermap.org/data/2.5/weather?q=" + testCity + "&appid=" + myKey + "&units=imperial"
var forecast = "https://api.openweathermap.org/data/2.5/forecast?q=" + testCity + "&appid=" + myKey + "&units=imperial"


$(".search").on("click", function(event) {
    event.preventDefault()



fetch(url)
  .then(response => response.json())
  .then(data => {
      console.log(data)
      var lat = data.coord.lat
      var lon = data.coord.lon
      var ocUrl = "https://api.openweathermap.org/data/2.5/onecall?lat=" + lat + "&lon=" + lon + "&appid=" + myKey + "&units=imperial"
      console.log(lat)
      console.log(lon)

    fetch(ocUrl)
        .then(response => response.json())  
        .then(data => {
            console.log(data)
            $(".temp").text("Temp: " + data.current.temp)
            $(".wind").text("Wind: " + data.current.wind_speed)
            $(".humidity").text("Humidity: " + data.current.humidity)
            $(".uv").text("UV Index: " + data.current.uvi)
            $(".date").text(moment().format('LLL'))
        })

});

fetch(forecast)
    .then(response => response.json())
    .then(data => {
        console.log(data)
        $(".d1-temp").text("Temp: " + data.list[1].main.temp)
        $(".d1-wind").text("Wind: " + data.list[1].wind.speed)
        $(".d1-humidity").text("Humidity: " + data.list[1].main.humidity)
        $(".d1-date").text(moment().add(1, "days").format('LLL'))

    })

})