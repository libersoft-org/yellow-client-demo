<script>

    import {onMount} from "svelte";

    const icons = {
         "0": 'day_clear.svg',
         "1": 'day_clear.svg',
         "2": 'day_partial_cloud.svg',
         "3": 'cloudy.svg',
        "45": 'fog.svg',
        "48": 'sleet.svg',
        "51": 'light_drizzle.svg',
        "53": 'day_rain.svg',
        "55": 'day_rain.svg',
        "56": 'sleet.svg',
        "57": 'day_rain.svg',
        "61": 'day_rain.svg',
        "63": 'day_rain.svg',
        "65": 'day_rain.svg',
        "66": 'day_rain.svg',
        "67": 'day_rain.svg',
        "71": 'day_snow.svg',
        "73": 'day_snow.svg',
        "75": 'day_snow.svg',
        "77": 'day_snow.svg',
        "80": 'day_rain.svg',
        "81": 'day_rain.svg',
        "82": 'day_rain.svg',
        "85": 'day_snow.svg',
        "86": 'day_snow.svg',
        "95": 'thunder.svg',
        "96": 'tornado.svg',
        "99": 'tornado.svg'
    }


    function getWeatherIcon(weatherCode) {
        
        return 'img/weather_icons_dovora_interactive/SVG/' + icons[weatherCode];
    }

    async function fetchWeatherData() {
        const response = await fetch('https://api.open-meteo.com/v1/forecast?latitude=50.0755&longitude=14.4378&daily=temperature_2m_max,temperature_2m_min,weathercode&hourly=temperature_2m,weathercode&timezone=Europe/Prague');
        const data = await response.json();
        return data;
    }
  

    let hourlyData = undefined;
    let dailyForecast = [];
    let hourlyForecast = [];

    function displayDailyForecast(data) {
        dailyForecast = [];
        hourlyData = data.hourly;
        console.log(data);
        for (let i = 0; i < data.daily.time.length; i++) {
            const day = data.daily.time[i];
            const maxTemp = data.daily.temperature_2m_max[i];
            const minTemp = data.daily.temperature_2m_min[i];
            const weatherCode = data.daily.weathercode[i];
            const weatherIcon = getWeatherIcon(weatherCode);
            dailyForecast.push({
                day: new Date(day).toLocaleDateString('cs-CZ', {weekday: 'long'}),
                icon: weatherIcon,
                weatherCode: weatherCode,
                minTemp: minTemp,
                maxTemp: maxTemp,
                index: i

            });
        }
    }

    function displayHourlyForecast(dayIndex) {
        hourlyForecast = [];
        const hoursInDay = 24;
        for (let i = dayIndex * hoursInDay; i < (dayIndex + 1) * hoursInDay; i++) {
            const hour = hourlyData.time[i];
            const temp = hourlyData.temperature_2m[i];
            const weatherCode = hourlyData.weathercode[i];
            const weatherIcon = getWeatherIcon(weatherCode);
            hourlyForecast.push({
                hour: new Date(hour).getHours(),
                icon: weatherIcon,
                temp: temp
            });
        }
    }



    onMount(() => {
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
        text-align: center;
        font-size: 12px;
        border: 1px solid #999;
        border-radius: 10px;
        background-color: #EEE;
    }

    .forecast-day {
        cursor: pointer;
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

  <div id="daily-forecast" class="forecast-container">
    {#each dailyForecast as forecast}
      <div class="forecast-item forecast-day" on:click={() => displayHourlyForecast(forecast.index)}>
        <h3>{forecast.day}</h3>
        <img src="{forecast.icon}" alt="Počasí"/>
        <p>{forecast.maxTemp}°C / {forecast.minTemp}°C </p>
      </div>
    {/each}
  </div>
  <div id="hourly-forecast" class="forecast-container">
    {#each hourlyForecast as forecast}
      <div class="forecast-item">
        <h3>{forecast.hour}:00</h3>
        <img src="{forecast.icon}" alt="Počasí"/>
        <p>{forecast.temp}°C</p>
      </div>
    {/each}
  </div>
</div>

