const apiKey = "afea6b6986054a68ebb1cfe0e57dbcb0"; //https://openweathermap.org/를 참조
const formEl = document.querySelector('form');
const cityName = document.querySelector('#city-input');
const weatherData = document.querySelector('#weather-data');


formEl.addEventListener('submit',(e)=>{
  e.preventDefault();
  const cityValue = cityName.value;
  getWeatherData(cityValue);
})

async function getWeatherData(cityValue){
  try {
    const response = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${cityValue}&appid=${apiKey}&units=metric`)

    if(!response.ok){
      throw new Error("NetWork response was not ok")
    }

    const data = await response.json();

    const temperature = Math.round(data.main.temp);
    const description = data.weather[0].description;
    const icon = data.weather[0].icon;
    const details = [
      `Feels like : ${Math.round(data.main.feels_like)}°C`,
      `Humidity : ${data.main.humidity}%`,
      `Wind speed : ${Math.round(data.wind.speed*10)/10} m/s`,
    ]

    weatherData.querySelector(".icon").innerHTML = `<img src="http://openweathermap.org/img/wn/${icon}.png" alt="weather ICON">`;
    weatherData.querySelector(".temperature").textContent = `${temperature}°C`;
    weatherData.querySelector(".description").textContent = `${description}`;

    weatherData.querySelector(".details").innerHTML = details.map((detail)=>`<div>${detail}</div>`).join("");

  } catch (error) {
    // city name을 잘못 입력했을때 나타내는 메시지
    weatherData.querySelector(".icon").innerHTML ="";
    weatherData.querySelector(".temperature").textContent = "";
    weatherData.querySelector(".description").textContent = `${alert("An error happened, please try again later")}`;

    weatherData.querySelector(".details").innerHTML = "";
  }
}