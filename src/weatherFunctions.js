//creating an initial city and latitude and longitude variables
let city = 'lexington';
let latitude = '';
let longitude = '';
// variable to store celcius vs fahrenheit
let unit = "imperial"

// function for submitting the search form
function formSubmit(e){
    e.preventDefault();
    getUserInput();
    getWeather();
};



// get location from user
function getUserInput() {    
    const input = document.querySelector('input[type="text"]');
    const userInput = input.value;
    console.log(userInput)
    city = userInput;
    console.log(city);
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

//HAS TO GO TO THE WEATHERFUNCTIONS FILE
async function getWeather(){
    
    //fetching the information from the Open Weather API and converting it to JSON
    const weather = await fetch('http://api.openweathermap.org/data/2.5/weather?q=' + city + 
    '&APPID=84a37b07c98af032cd81b74ef12a9a69&units=' + unit, {mode: 'cors'})
    const currentWeather = await weather.json();

    updateLatAndLon(currentWeather.coord.lat, currentWeather.coord.lon);

    //fetching the information from the Open Weather One Call API and converting it to JSON
    const openWeatherAllAPI = await fetch('https://api.openweathermap.org/data/2.5/onecall?lat=' + 
    latitude + '&lon=' + longitude + '&appid=84a37b07c98af032cd81b74ef12a9a69&units=' + unit, {mode: 'cors'})
    const sevenDayForecast = await openWeatherAllAPI.json();

    updateLocation(currentWeather.name, currentWeather.sys.country)

    console.log(currentWeather);
    console.log(sevenDayForecast);
    console.log("Temp: " + currentWeather.main.temp);
    console.log("Feels Like: " + currentWeather.main.feels_like);
    console.log("Today's Low: " + currentWeather.main.temp_min);
    console.log("Humidity: " + currentWeather.main.humidity);
    console.log("Today's Weather: " + currentWeather.weather[0].main + ", " + currentWeather.weather[0].description)
    console.log("City: " + currentWeather.name + ". Country: " + currentWeather.sys.country)
    // cityContainer.textContent = currentWeather.name + ', ' + currentWeather.sys.country;
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

export {formSubmit, getWeather}