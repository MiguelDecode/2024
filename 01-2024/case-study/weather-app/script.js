const apiKey = "8b7ffdf834c34bf4d7a1659c1f450b35";

const weatherDataElement = document.getElementById("weather-data");
const inputSearch = document.getElementById("search-city");

const showError = (msg) => {
  weatherDataElement.innerHTML = `<p class="error">${msg}</p>`;
};

const getWeatherData = async (city) => {
  const urlApi = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  try {
    const res = await fetch(urlApi);

    if (!res.ok) throw new Error("Network response was not ok.");

    const json = await res.json();

    return json;
  } catch (err) {
    showError(err);
  }
};

const drawWeatherData = (data) => {
  const temperature = Math.round(data.main.temp);
  const feelTemperature = Math.round(data.main.feels_like);
  const humidity = data.main.humidity;
  const windSpeed = data.wind.speed;
  const description = data.weather[0].description;
  const icon = data.weather[0].icon;
  const name = data.name;

  console.log(data);

  const htmlElement = `
    <div class="icon">
        <img
          src="http://openweathermap.org/img/wn/${icon}.png"
          alt="Weather icon"
        />
      </div>
      <p class="temperature">${temperature}°C</p>
      <p class="name">${name}</p>
      <p class="description">${description}</p>
      <div class="details">
        <p>Feels like: <span>${feelTemperature}°C</span></p>
        <p>Humidity: <span>${humidity}%</span></p>
        <p>Wind Speed: <span>${windSpeed} m/s</span></p>
      </div>
  `;

  weatherDataElement.innerHTML = htmlElement;
};

const handleSubmit = async (event) => {
  event.preventDefault();
  const cityToSearch = inputSearch.value.trim();

  const data = await getWeatherData(cityToSearch);

  if (data) {
    drawWeatherData(data);
  } else {
    showError("No data found for your search");
  }

  inputSearch.value = "";
  inputSearch.focus();
};

document.addEventListener("submit", handleSubmit);
