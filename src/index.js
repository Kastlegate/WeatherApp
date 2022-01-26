import './style.css';
import './all.css';
import { formSubmit, callWeatherInitial } from './weatherFunctions'

// a container for the weather divs to go inside
let projectContainer = document.createElement('div');
    projectContainer.id = 'projectContainer';
    document.body.appendChild(projectContainer);

// div for the current weather condition
let currentWeather = document.createElement('div');
    currentWeather.id = "currentWeather";
    currentWeather.textContent = "Weather";
    projectContainer.appendChild(currentWeather);

// div for the city name and country
let city = document.createElement('div');
    city.id = 'city'; 
    city.textContent = 'Hi, there!'   
    projectContainer.appendChild(city);

// form for the search bar
let searchForm = document.createElement('form');
    searchForm.id = 'searchform';
    searchForm.addEventListener("submit", formSubmit)
    // searchForm.setAttribute("onsubmit", "return false")
    projectContainer.appendChild(searchForm);

// search bar for user input
let searchBar = document.createElement('input');
    searchBar.id = 'searchBar'
    searchBar.type = 'text';
    searchBar.placeholder = 'Search for a city';
    searchForm.appendChild(searchBar);
    // button for the searchBar
let searchButton = document.createElement('div');
    searchButton.id = 'searchButton';
    searchButton.addEventListener("click", formSubmit)
    searchForm.appendChild(searchButton);
    // icon for magnifyin glass
let searchIcon = document.createElement('i');
    searchIcon.id = 'searchIcon';
    searchIcon.className = 'fas fa-search';
    searchIcon.addEventListener("click", formSubmit)
    searchButton.appendChild(searchIcon);

// div for the current temp
let currentTemp = document.createElement('div');
    currentTemp.id = 'currentTemp';
    currentTemp.textContent = '0°';
    projectContainer.appendChild(currentTemp)

//div container for the current weather details
let weatherInfoContainer = document.createElement('div');
    weatherInfoContainer.id = 'weatherInfoContainer';
    projectContainer.appendChild(weatherInfoContainer)

//div for current feels like group
let feelsLikeGroup = document.createElement('div');
    feelsLikeGroup.id = 'feelsLikeGroup';
    feelsLikeGroup.classList.add('weatherField')
    weatherInfoContainer.appendChild(feelsLikeGroup)
//icon for feels like
let feelsLikeIconContainer = document.createElement('div');
    feelsLikeIconContainer.id = 'feelsLikeIconContainer';
    feelsLikeGroup.appendChild(feelsLikeIconContainer);
let feelsLikeIcon = document.createElement('i');
    feelsLikeIcon.id = 'feelsLikeIcon';
    feelsLikeIcon.textContent = " Feels Like"
    feelsLikeIcon.className = 'fas fa-temperature-high'
    feelsLikeIconContainer.appendChild(feelsLikeIcon)
// div for the feels like temp details
let feelsLike = document.createElement('div');
    feelsLike.id = 'feelsLike';
    feelsLike.textContent = '0°';
    feelsLike.classList.add('details')
    feelsLikeGroup.appendChild(feelsLike)

//div for current humidity group
let humidityGroup = document.createElement('div');
    humidityGroup.id = 'humidityGroup';
    humidityGroup.classList.add('weatherField')
    weatherInfoContainer.appendChild(humidityGroup)
//icon for feels like
let humidityIconContainer = document.createElement('div');
    humidityIconContainer.id = 'humidityIconContainer';
    humidityGroup.appendChild(humidityIconContainer);
let humidityIcon = document.createElement('i');
    humidityIcon.id = 'feelsLikeIcon';
    humidityIcon.textContent = " Humidity"
    humidityIcon.className = 'fas fa-tint'
    humidityIconContainer.appendChild(humidityIcon)
// div for the humidity details
let humidity = document.createElement('div');
    humidity.id = 'humidity';
    humidity.textContent = '0%';
    humidity.classList.add('details')
    humidityGroup.appendChild(humidity)

//div for current chance of rain group
let chanceOfRainGroup = document.createElement('div');
    chanceOfRainGroup.id = 'chanceOfRainGroup';
    chanceOfRainGroup.classList.add('weatherField')
    weatherInfoContainer.appendChild(chanceOfRainGroup)
//icon for chance of rain
let chanceOfRainIconContainer = document.createElement('div');
chanceOfRainIconContainer.id = 'chanceOfRainIconContainer';
    chanceOfRainGroup.appendChild(chanceOfRainIconContainer);
let chanceOfRainIcon = document.createElement('i');
    chanceOfRainIcon.id = 'chanceOfRainIcon';
    chanceOfRainIcon.textContent = " Chance of Rain"
    chanceOfRainIcon.className = 'fas fa-cloud-showers-heavy';
    chanceOfRainIconContainer.appendChild(chanceOfRainIcon)
// div for the current chance of rain details
let chanceOfRain = document.createElement('div');
    chanceOfRain.id = 'chanceOfRain';
    chanceOfRain.classList.add('details')
    chanceOfRain.textContent = '0%';
    chanceOfRainGroup.appendChild(chanceOfRain)

//div for current wind speed group
let windGroup = document.createElement('div');
    windGroup.id = 'windGroup';
    windGroup.classList.add('weatherField')
    weatherInfoContainer.appendChild(windGroup)
//icon for wind
let windIconContainer = document.createElement('div');
    windIconContainer.id = 'windIconContainer';
    windGroup.appendChild(windIconContainer);
let windIcon = document.createElement('i');
    windIcon.id = 'windIcon';
    windIcon.textContent = " Wind Speed"
    windIcon.className = 'fas fa-wind';
    windIconContainer.appendChild(windIcon)
// div for the wind speed
let winds = document.createElement('div');
    winds.id = 'winds';
    winds.textContent = '0 mph';
    winds.classList.add('details')
    windGroup.appendChild(winds)

// container for 7 day forecast
let forecastContainer = document.createElement('div')
    forecastContainer.id = 'forecastContainer';
    projectContainer.appendChild(forecastContainer);



callWeatherInitial()