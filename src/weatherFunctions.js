//creating an initial city and latitude and longitude variables
let city = 'nicholasville';
let latitude = '';
let longitude = '';
// variable to store celcius vs fahrenheit
let unit = "imperial"
let degrees = 'F'

// US-KY?

// function for submitting the search form
function formSubmit(e){
    e.preventDefault();
    getUserInput();
    getWeather();
};

function callWeatherInitial()
{
    getWeather();
}

// get location from user
function getUserInput() {    
    const input = document.querySelector('input[type="text"]');
    const userInput = input.value;
    console.log(userInput)
    city = userInput;
    console.log(city);
  }

// function to grab the current weather condition
function updateCurrentWeatherCondition(weatherCondition){
    document.getElementById('currentWeather').textContent = weatherCondition;
}

//function to update the name of the city and country in the dom
function updateLocation(newCity, newCountry){
    document.getElementById('city').textContent = newCity + ", " + newCountry;
}

//function that will grab the latitude and longitude from the current weather API
function updateLatAndLon(lat, lon){
    latitude = lat;
    longitude = lon;
}

// function that updates the current temp
function updateCurrentTemp(currentTemp, feelsLike){
    document.getElementById('currentTemp').textContent = currentTemp + "°" + degrees;
}

// function that updates the feels like temp
function updateFeelsLike(feelsLike){
    document.getElementById('feelsLike').textContent = "Feels Like: " + feelsLike + "°" + degrees;
}

// function that updates the humidity
function updateHumidity(humidity){
    document.getElementById('humidity').textContent = "Humidity: " + humidity + "%";
}

// function that updates the chance of rain
function updateChanceOfRain(chanceOfRain){
    document.getElementById('chanceOfRain').textContent = "Chance of Rain: " + chanceOfRain + "%";
}

// function that updates the wind speed
function updateWind(wind){
    document.getElementById('winds').textContent = "Winds: " + wind + " mph";
}

//
async function getWeather(){
    
    //fetching the information from the Open Weather API and converting it to JSON
    const weather = await fetch('http://api.openweathermap.org/data/2.5/weather?q=' + city + 
    '&APPID=84a37b07c98af032cd81b74ef12a9a69&units=' + unit, {mode: 'cors'})
    const currentWeather = await weather.json();

    //grabs the longitude and latitude from the weather API fetch request and updates the lat and lon variables
    // to get fed into open Weather's One call API fetch below.
    updateLatAndLon(currentWeather.coord.lat, currentWeather.coord.lon);

    //fetching the information from the Open Weather One Call API and converting it to JSON
    const openWeatherAllAPI = await fetch('https://api.openweathermap.org/data/2.5/onecall?lat=' + 
    latitude + '&lon=' + longitude + '&appid=84a37b07c98af032cd81b74ef12a9a69&units=' + unit, {mode: 'cors'})
    const sevenDayForecast = await openWeatherAllAPI.json();

    updateCurrentWeatherCondition(currentWeather.weather[0].description);
    updateLocation(currentWeather.name, currentWeather.sys.country);
    updateCurrentTemp(Math.round(currentWeather.main.temp));
    updateFeelsLike(Math.round(currentWeather.main.feels_like));
    updateHumidity(currentWeather.main.humidity);
    updateChanceOfRain(sevenDayForecast.daily[0].pop);
    updateWind(Math.round(currentWeather.wind.speed));
    

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
    console.log("Chance of rain: " + sevenDayForecast.daily[0].pop);
    console.log("Tomorrow's High: " + Math.round(sevenDayForecast.daily[1].temp.max) + "°")
    console.log("Tomorrow's Low: " + Math.round(sevenDayForecast.daily[1].temp.min) + "°")

    let date = new Date(sevenDayForecast.daily[7].dt*1000);
    let day = date.toString();
    console.log(day.substring(0,3))

    // // useful for later maybe
    // let r = new Date(sevenDayForecast.daily[0].dt*1000);
    // r = r.toString();
    // let today = r.split(/(?<=^\S+)\s/);
    // console.log(today[1])

}

export {formSubmit, callWeatherInitial}