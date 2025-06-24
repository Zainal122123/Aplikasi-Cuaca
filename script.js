const cityInput = document.getElementById("city");
const getWeatherBtn = document.getElementById("getWeather");
const weatherDisplay = document.getElementById("weather");
const locationDisplay = document.getElementById("location");
const temperatureDisplay = document.getElementById("temperature");
const descriptionDisplay = document.getElementById("description");
const iconDisplay = document.getElementById("icon");

const API_KEY = "1e1b111a2140fa7a7f0d27ddf1e9b81e";

async function getWeather(city) {
    try {
        const response = await fetch(
            `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
        );

        if (!response.ok) throw new Error("Kota tidak ditemukan!");

        const data = await response.json();

        locationDisplay.textContent = `${data.name}, ${data.sys.country}`;
        temperatureDisplay.textContent = `Suhu: ${data.main.temp}°C`;
        descriptionDisplay.textContent = data.weather[0].description;
        iconDisplay.src = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
        iconDisplay.alt = data.weather[0].description;

        weatherDisplay.classList.remove("hidden");
    } catch (error) {
        alert(error.message);
    }
}

getWeatherBtn.addEventListener("click", () => {
    const city = cityInput.value.trim();
    if (city) {
        getWeather(city);
    } else {
        alert("Harap masukkan nama kota!");
    }
});
