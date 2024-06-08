document.addEventListener("DOMContentLoaded", () => {
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
    return 'unknown.png';
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
    <img src="icons/${weatherIcon}" alt="Počasí">
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
   forecastItem.classList.add('forecast-item');
   forecastItem.innerHTML = `
     <h3>${new Date(hour).getHours()}:00</h3>
     <img src="icons/${weatherIcon}" alt="Počasí">
     <p>${temp}°C</p>
   `;
   hourlyForecastContainer.appendChild(forecastItem);
  }
 }

 fetchWeatherData().then(data => {
  displayDailyForecast(data);
  displayHourlyForecast(0, data.hourly);
 });
});
