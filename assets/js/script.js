
$(".search").on("click", function(event) {
    var city = $("#cityName").val().trim()
//var testCity = "Sacramento"
var myKey = "b7cd031e64f6a5980262c7acabdf2831"
var url = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + myKey + "&units=imperial"
var forecast = "https://api.openweathermap.org/data/2.5/forecast?q=" + city + "&appid=" + myKey + "&units=imperial"
    event.preventDefault()
    console.log(city)


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
        .then(response2 => response2.json())  
        .then(data2 => {
            console.log(data2)
            $(".temp").text("Temp: " + data2.current.temp)
            $(".wind").text("Wind: " + data2.current.wind_speed)
            $(".humidity").text("Humidity: " + data2.current.humidity)
            $(".uv").text("UV Index: " + data2.current.uvi)
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

        $(".d2-temp").text("Temp: " + data.list[9].main.temp)
        $(".d2-wind").text("Wind: " + data.list[9].wind.speed)
        $(".d2-humidity").text("Humidity: " + data.list[9].main.humidity)
        $(".d2-date").text(moment().add(2, "days").format('LLL'))

        $(".d3-temp").text("Temp: " + data.list[17].main.temp)
        $(".d3-wind").text("Wind: " + data.list[17].wind.speed)
        $(".d3-humidity").text("Humidity: " + data.list[17].main.humidity)
        $(".d3-date").text(moment().add(3, "days").format('LLL'))

        $(".d4-temp").text("Temp: " + data.list[25].main.temp)
        $(".d4-wind").text("Wind: " + data.list[25].wind.speed)
        $(".d4-humidity").text("Humidity: " + data.list[25].main.humidity)
        $(".d4-date").text(moment().add(4, "days").format('LLL'))

        $(".d5-temp").text("Temp: " + data.list[33].main.temp)
        $(".d5-wind").text("Wind: " + data.list[33].wind.speed)
        $(".d5-humidity").text("Humidity: " + data.list[33].main.humidity)
        $(".d5-date").text(moment().add(5, "days").format('LLL'))

    })

})