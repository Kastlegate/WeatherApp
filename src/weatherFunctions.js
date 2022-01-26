//creating an initial city and latitude and longitude variables
let city = 'nicholasville';
let latitude = '';
let longitude = '';
// variable to store celcius vs fahrenheit
let unit = "imperial"
let degrees = 'F'
let speedType = 'mph';

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

function checkSpeed(){
    
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
    document.getElementById('feelsLike').textContent = feelsLike + "°" + degrees;
}

// function that updates the humidity
function updateHumidity(humidity){
    document.getElementById('humidity').textContent = humidity + "%";
}

// function that updates the chance of rain
function updateChanceOfRain(chanceOfRain){
    document.getElementById('chanceOfRain').textContent = chanceOfRain + "%";
}

// function that updates the wind speed
function updateWind(wind){
    document.getElementById('winds').textContent = wind + " " + speedType;
}

// function to change the weather icon
function selectWeatherIcon(weatherCode){
    console.log('initial code: ' + weatherCode)
    let weatherCondition = '';
    // check for id 800 clear skies
    if (weatherCode === 800){
         weatherCondition = '800';
         console.log("800 type " + weatherCondition)
    }

    else{
         weatherCondition = weatherCode.toString().substring(0, 1);
    }
    // variable for the icon
    let icon = '';
    switch (weatherCondition){
 
        case '2':
            console.log('thunderstorm');
            icon = 'fas fa-poo-storm'
            return icon;
            break;

        case '3':
            console.log('drizzle');
            icon = 'fas fa-cloud-rain'
            return icon;
            break;

        case '5':
            console.log('rain');
            icon = 'fas fa-cloud-showers-heavy'
            return icon;
            break;
        case '6':
            console.log('snow');
            icon = 'far fa-snowflake'
            return icon;
            break;

        case '7':
            console.log('atmosphere');
            icon = 'fas fa-smog'
            return icon;
            break;
        case '8':
            console.log('clouds');
            icon = 'fas fa-cloud';
            return icon;            
            break;
        case '800':
            console.log('clearSkies');
            icon = 'fas fa-sun';
            return icon;            
            break;
        
        
        default:
            console.log("broken ")
    }
}

// function to create the daily forecast
async function dailyForecast (dailyInfo){
    let forecastContainer = document.getElementById('forecastContainer');
    //resets the forecast div
    forecastContainer.textContent = '';
    let i = 1;
    //going through the daily forecast and creating elements for each day
    dailyInfo.slice(1).forEach(element => {
        let date = new Date(element.dt*1000);
        let day = date.toString();
        // console.log(day.substring(0,3))

        // div container for each day in the forcast
        let foreCastItem = document.createElement('div');
        forecastContainer.appendChild(foreCastItem);

         // icon for each days forecast
         let forecastDay = document.createElement('div');
         forecastDay.textContent = day.substring(0,3) + " ";
         forecastDay.classList.add('forecastDay');
         foreCastItem.appendChild(forecastDay)

        // icon for each days forecast
        let forecastIcon = document.createElement('i');
        // forecastIcon.textContent = element.weather[0].description
        forecastIcon.className = selectWeatherIcon(element.weather[0].id);
        forecastDay.appendChild(forecastIcon)
        // div for the daily weather details
        let forecastDetails = document.createElement('div');
        forecastDetails.textContent = element.weather[0].description;
        forecastDetails.classList.add('forecastDetails')
        foreCastItem.appendChild(forecastDetails)
        // div for the daily high
        let forecastTempHigh = document.createElement('div');
        forecastTempHigh.textContent = Math.round(element.temp.max) + degrees;
        forecastTempHigh.classList.add('forecastTempHigh')
        foreCastItem.appendChild(forecastTempHigh)
        // div for the daily low
        let forecastTempLow = document.createElement('div');
        forecastTempLow.textContent = Math.round(element.temp.min) + degrees;
        forecastTempLow.classList.add('forecastTempLow')
        foreCastItem.appendChild(forecastTempLow)

        selectWeatherIcon(element.weather[0].id)   
    

        i++

    });


}


async function getWeather(){
    
    //fetching the information from the Open Weather API and converting it to JSON
    const weather = await fetch('https://api.openweathermap.org/data/2.5/weather?q=' + city + 
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
    dailyForecast(sevenDayForecast.daily);
    // console.log(sevenDayForecast.alerts[0].description);

    let date = new Date(sevenDayForecast.daily[7].dt*1000);
    let day = date.toString();
    console.log(day)

    // // useful for later maybe
    // let r = new Date(sevenDayForecast.daily[0].dt*1000);
    // r = r.toString();
    // let today = r.split(/(?<=^\S+)\s/);
    // console.log(today[1])

}

export {formSubmit, callWeatherInitial}