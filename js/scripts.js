$(function() {
    $(".carousel").carousel( { interval: 2000 } );
    $("#carouselButton").on('click', function(){
        if ($("#carouselButton").children("i").hasClass("fa-pause")) {
            $(".carousel").carousel("pause");
            $("#carouselButton").children("i").removeClass("fa-pause");
            $("#carouselButton").children("i").addClass("fa-play");
        } else {
            $(".carousel").carousel("cycle");
            $("#carouselButton").children("i").removeClass("fa-play");
            $("#carouselButton").children("i").addClass("fa-pause"); 
        }
    });
    $("#reserveButton").on('click', function () {
        $("#reserveModal").modal("show");
     });
    $("#loginButton").on('click', function(){
        $('#loginModal').modal("show")
    });
});

console.log('javascript connected!');
    
const apiKey = "66c393d79ac2311fb78bfe3547c9f2f9"; //i understand this isn't secure but i wasn't able to get the object to show up if i linked it to the env file

async function fetchWeather() {

    const city = "Texas";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=imperial`;
    try {
      const response = await fetch(url);
      const data = await response.json();
      console.log(data);
      displayWeather(data)
    } catch (error) {
      console.error('There was an error!', error);
    }
  }

fetchWeather();

function displayWeather(data) {
    const weatherDiv = document.querySelector('#weather');

    const weatherIcon = document.createElement('img'); 
    weatherIcon.id = 'weather-icon';
    weatherIcon.src = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
    weatherDiv.appendChild(weatherIcon);

    const weatherTemp = document.createElement('span');
    weatherTemp.id = 'weather-temp';
    weatherTemp.textContent = data.main.temp;
    weatherDiv.appendChild(weatherTemp);

    const weatherDescription = document.createElement('span');
    weatherDescription.id = 'weather-description';
    weatherDescription.textContent = data.weather[0].description;
    weatherDiv.appendChild(weatherDescription);
}