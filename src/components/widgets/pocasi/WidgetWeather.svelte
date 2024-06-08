<script>

import {onMount} from "svelte";

onMount(() => {


   const dailyForecastContainer = document.getElementById('daily-forecast');
   const hourlyForecastContainer = document.getElementById('hourly-forecast');
  
  
  
   function getWeatherIcon(weather) {
    switch (weather) {
     case 'clear':
      return 'sun.png';
     case 'partly-cloudy':
      return 'partly_cloudy.png';
     case 'cloudy':
      return 'cloud.png';
     case 'rain':
      return 'rain.png';
     default:
      return 'icon_no_connection_filled.svg';
    }
   }
  
   async function fetchWeatherData() {
    const response = await fetch('https://api.open-meteo.com/v1/forecast?latitude=50.0755&longitude=14.4378&daily=temperature_2m_max,temperature_2m_min,weathercode&hourly=temperature_2m,weathercode&timezone=Europe/Prague');
    const data = await response.json();
    return data;
   }
  
   function displayDailyForecast(data) {
    dailyForecastContainer.innerHTML = '';
    for (let i = 0; i < data.daily.time.length; i++) {
     const day = data.daily.time[i];
     const maxTemp = data.daily.temperature_2m_max[i];
     const minTemp = data.daily.temperature_2m_min[i];
     const weatherCode = data.daily.weathercode[i];
     const weatherIcon = getWeatherIcon(weatherCode);
     const forecastItem = document.createElement('div');
     forecastItem.classList.add('forecast-item');
     forecastItem.innerHTML = `
      <h3>${new Date(day).toLocaleDateString('cs-CZ', { weekday: 'long' })}</h3>
      <img src="img/icons_new/${weatherIcon}" alt="Počasí">
      <p>${minTemp}°C / ${maxTemp}°C</p>
     `;
     forecastItem.addEventListener('click', () => displayHourlyForecast(i, data.hourly));
     dailyForecastContainer.appendChild(forecastItem);
    }
   }
  
   function displayHourlyForecast(dayIndex, hourlyData) {
    hourlyForecastContainer.innerHTML = '';
    const hoursInDay = 24;
    for (let i = dayIndex * hoursInDay; i < (dayIndex + 1) * hoursInDay; i++) {
     const hour = hourlyData.time[i];
     const temp = hourlyData.temperature_2m[i];
     const weatherCode = hourlyData.weathercode[i];
     const weatherIcon = getWeatherIcon(weatherCode);
     const forecastItem = document.createElement('div');

     forecastItem.innerHTML = `
<span class="forecast-item">
       <h3>${new Date(hour).getHours()}:00</h3>
       <img src="img/icons_new/${weatherIcon}" alt="Počasí">
       <p>${temp}°C</p>
</span>
     `;
     hourlyForecastContainer.appendChild(forecastItem);
    }
   }
  
   fetchWeatherData().then(data => {
    displayDailyForecast(data);
    displayHourlyForecast(0, data.hourly);
   });

});  
  
</script>


<style>
  
  .weather {
   font-family: Arial, sans-serif;
   display: flex;
   flex-direction: column;
   align-items: center;
   margin: 0;
   padding: 0;
  }
   
  .forecast-container {
   display: flex;
   flex-wrap: wrap;
   justify-content: center;
   margin: 20px 0;
  }
  
  .forecast-item {
   display: flex;
   flex-direction: column;
   align-items: center;
   margin: 5px;
   padding: 5px;
   width: 60px;
   cursor: pointer;
   text-align: center;
   font-size: 12px;
   border: 1px solid #999;
   border-radius: 10px;
   background-color: #EEE;
  }
  
  .forecast-item img {
   width: 60px;
   height: 60px;
  }
  
  .forecast-item h3, .forecast-item p {
   margin: 5px 0;
  }
  
  
</style>

<b>Počasí v Praze</b>

<div class="weather">

<div id="daily-forecast" class="forecast-container"></div>
<div id="hourly-forecast" class="forecast-container"></div>

</div>

