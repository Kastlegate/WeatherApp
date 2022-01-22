console.log("Hello World!")

async function grabWeatherApi(){
    //creating an initial city and latitude and longitude variables
    let city = 'nicholasville';
    let latitude = '';
    let longitude = '';

    //function that will grab the latitude and longitude from the current weather API
    function updateLatAndLon(lat, lon){
        latitude = lat;
        longitude = lon;
    }

    // variable to store celcius vs fahrenheit
    let unit = "imperial"
    //fetching the information from the Open Weather API and converting it to JSON
    const weather = await fetch('http://api.openweathermap.org/data/2.5/weather?q=' + city + 
    '&APPID=84a37b07c98af032cd81b74ef12a9a69&units=' + unit, {mode: 'cors'})
    const currentWeather = await weather.json();

    updateLatAndLon(currentWeather.coord.lat, currentWeather.coord.lon);

    //fetching the information from the Open Weather One Call API and converting it to JSON
    const openWeatherAllAPI = await fetch('https://api.openweathermap.org/data/2.5/onecall?lat=' + 
    latitude + '&lon=' + longitude + '&appid=84a37b07c98af032cd81b74ef12a9a69&units=' + unit, {mode: 'cors'})
    const sevenDayForecast = await openWeatherAllAPI.json();

    console.log(currentWeather);
    console.log(sevenDayForecast);
    console.log("Temp: " + currentWeather.main.temp);
    console.log("Feels Like: " + currentWeather.main.feels_like);
    console.log("Today's Low: " + currentWeather.main.temp_min);
    console.log("Humidity: " + currentWeather.main.humidity);
    console.log("Today's Weather: " + currentWeather.weather[0].main + ", " + currentWeather.weather[0].description)
    console.log("City: " + currentWeather.name + ". Country: " + currentWeather.sys.country)
    console.log("Wind: " + currentWeather.wind.speed)
    console.log("Latitude: " + latitude);
    console.log("Longitude: " + longitude);
    console.log("Tomorrow's High: " + Math.round(sevenDayForecast.daily[1].temp.max))
    console.log("Tomorrow's Low: " + Math.round(sevenDayForecast.daily[1].dt))

    let d = new Date(sevenDayForecast.daily[1].dt*1000);
    console.log(d.getDay())

}

grabWeatherApi()