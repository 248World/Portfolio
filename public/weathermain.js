
const API = {
  geocoding: "https://geocoding-api.open-meteo.com/v1/search",
  weather: "https://api.open-meteo.com/v1/forecast"
};

const searchbox = document.querySelector(".search-box");
const cityElement = document.querySelector(".location .city");
const dateElement = document.querySelector(".location .date");
const tempElement = document.querySelector(".current .temp");
const weatherElement = document.querySelector(".current .weather");
const hiLowElement = document.querySelector(".hi-low");

searchbox.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    getResults(searchbox.value.trim());
  }
});

async function getResults(query) {
  if (!query) {
    weatherElement.textContent = "Please enter a city name.";
    return;
  }

  weatherElement.textContent = "Loading weather...";

  try {
    // Find the city
    const geoParams = new URLSearchParams({
      name: query,
      count: "1",
      language: "en",
      format: "json"
    });

    const geoResponse = await fetch(`${API.geocoding}?${geoParams}`);

    if (!geoResponse.ok) {
      throw new Error("Could not search for this city.");
    }

    const geoData = await geoResponse.json();

    if (!geoData.results || geoData.results.length === 0) {
      throw new Error("City not found. Please try another name.");
    }

    const city = geoData.results[0];

    // Retrieve weather information
    const weatherParams = new URLSearchParams({
      latitude: city.latitude,
      longitude: city.longitude,
      current: "temperature_2m,weather_code",
      daily: "temperature_2m_max,temperature_2m_min",
      timezone: "auto",
      forecast_days: "1"
    });

    const weatherResponse = await fetch(`${API.weather}?${weatherParams}`);

    if (!weatherResponse.ok) {
      throw new Error("Could not retrieve weather information.");
    }

    const weatherData = await weatherResponse.json();

    displayResults(city, weatherData);

  } catch (error) {
    weatherElement.textContent = error.message;
    tempElement.textContent = "--";
    hiLowElement.textContent = "--";
  }
}

function displayResults(city, data) {
  cityElement.textContent =
    `${city.name}, ${city.country_code || city.country}`;

  const timezone = data.timezone || "UTC";

  dateElement.textContent = new Intl.DateTimeFormat("en", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: timezone
  }).format(new Date());

  const temperature = Math.round(data.current.temperature_2m);
  const minimum = Math.round(data.daily.temperature_2m_min[0]);
  const maximum = Math.round(data.daily.temperature_2m_max[0]);

  tempElement.innerHTML = `${temperature}<span>°C</span>`;

  weatherElement.textContent = getWeatherDescription(
    data.current.weather_code
  );

  hiLowElement.textContent = `${minimum}°C / ${maximum}°C`;
}

function getWeatherDescription(code) {
  const conditions = {
    0: "Clear sky",
    1: "Mainly clear",
    2: "Partly cloudy",
    3: "Overcast",
    45: "Fog",
    48: "Depositing rime fog",
    51: "Light drizzle",
    53: "Moderate drizzle",
    55: "Dense drizzle",
    56: "Freezing drizzle",
    57: "Heavy freezing drizzle",
    61: "Slight rain",
    63: "Moderate rain",
    65: "Heavy rain",
    66: "Light freezing rain",
    67: "Heavy freezing rain",
    71: "Slight snow",
    73: "Moderate snow",
    75: "Heavy snow",
    77: "Snow grains",
    80: "Slight rain showers",
    81: "Moderate rain showers",
    82: "Violent rain showers",
    85: "Slight snow showers",
    86: "Heavy snow showers",
    95: "Thunderstorm",
    96: "Thunderstorm with slight hail",
    99: "Thunderstorm with heavy hail"
  };

  return conditions[code] || "Unknown conditions";
}
