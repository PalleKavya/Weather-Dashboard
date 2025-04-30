const API_KEY = "YOUR_API_KEY_HERE"; // Replace with your OpenWeatherMap API key

$(document).ready(() => {
  $("#searchBtn").click(() => {
    const city = $("#cityInput").val().trim();
    $("#errorMsg").addClass("d-none");
    $("#weatherResult").addClass("d-none");

    if (city === "") {
      $("#errorMsg").text("Please enter a city name.").removeClass("d-none");
      return;
    }

    const url = https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric;

    $.getJSON(url)
      .done((data) => {
        $("#cityName").text(data.name);
        $("#temperature").text(data.main.temp);
        $("#humidity").text(data.main.humidity);
        $("#conditions").text(data.weather[0].description);
        $("#weatherResult").removeClass("d-none");
      })
      .fail(() => {
        $("#errorMsg").text("City not found. Please try again.").removeClass("d-none");
      });
  });
});