function updateWeather(response) {
  let temperatureElement = document.querySelector("#temp");
  temperature = response.data.temperature.current;
  let cityElement = document.querySelector("#city");
  let descriptionElement = document.querySelector("#description");
  let humidityElement = document.querySelector("#humidity");
  let windElement = document.querySelector("#wind");
  let timeElement = document.querySelector("#time");
  let date = new Date(response.data.time * 1000);

  descriptionElement.innerHTML = response.data.condition.description;
  cityElement.innerHTML = response.data.city;
  temperatureElement.innerHTML = Math.round(temperature);
  humidityElement.innerHTML = response.data.temperature.humidity;
  windElement.innerHTML = response.data.wind.speed;
  timeElement.innerHTML = formatDate(date);

  console.log(response.data);
}
function formatDate(date) {
  let hours = date.getHours();
  let minutes = date.getMinutes();

  let days = ["Sun", "Mon", "Tue", "Wed", "Thur", "Fri", "Sat"];
  let day = days[date.getDay()];
  return `${day}, ${hours}:${minutes}`;
}

function searchCity(city) {
  let apiKey = "943a3ddbo20b374aff624c0t29d891a1";
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units`;
  axios.get(apiUrl).then(updateWeather);
}

function handleSearchSubmit(event) {
  event.preventDefault();
  let submitBox = document.querySelector("#searchbox");

  searchCity(submitBox.value);
}

let formtypeElement = document.querySelector("#form-type");
formtypeElement.addEventListener("submit", handleSearchSubmit);
searchCity("lisbon");
