const apiKey = "eacd182f61f1ad1c4f1ddf4247310757";
const urlApi = `https://api.openweathermap.org/data/2.5/weather?units=metric&q=`;

let cityName = document.querySelector(".city");
let temprature = document.querySelector(".temp");
let humidity = document.querySelector(".humidity");
let windSpeed = document.querySelector(".wind");
const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
let weatherIcon = document.querySelector(".weather-icon");
let showDisplay = document.querySelector(".weather");
let showError = document.querySelector(".error");

let checkWeather = async (city) => {
        
    try {
    const response = await fetch(urlApi + city + `&appid=${apiKey}`);
  if (response.status == "404") {
    showError.style.display = "block";
  }
  let data = await response.json();
  cityName.innerHTML = data.name;
  temprature.innerHTML = Math.round(data.main.temp) + "°C";
  humidity.innerHTML = data.main.humidity + "%";
  windSpeed.innerHTML = data.wind.speed + " km/h";

  if (data.weather[0].main == "Clouds") {
    weatherIcon.src = "images/clouds.png";
  } else if (data.weather[0].main == "Clear") {
    weatherIcon.src = "images/clear.png";
  } else if (data.weather[0].main == "Rain") {
    weatherIcon.src = "images/clear.png";
  } else if (data.weather[0].main == "Drizzle") {
    weatherIcon.src = "images/drizzle.png";
  } else if (data.weather[0].main == "Mist") {
    weatherIcon.src = "images/mist.png";
  } else if (data.weather[0].main == "Haze") {
    weatherIcon.src = "images/haze.png";
  }
  showDisplay.style.display = "block";
}catch (error) {
        console.log(error);
}
};

searchBtn.addEventListener("click", () => {
  checkWeather(searchBox.value);
}); 
