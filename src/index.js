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

// //div for current temp group
// let currentTempGroup = document.createElement('div');
//     currentTempGroup.id = 'currentTempGroup';
//     currentTempGroup.classList.add('weatherField')
//     projectContainer.appendChild(currentTempGroup)
// //icon for temp
// let currentTempIconContainer = document.createElement('div');
//     currentTempIconContainer.id = 'currentTempIconContainer';
//     currentTempGroup.appendChild(currentTempIconContainer);
// let currentTempIcon = document.createElement('i');
//     currentTempIcon.id = 'currentTempIcon';
//     currentTempIcon.className = 'fas fa-temperature-high'
//     currentTempIconContainer.appendChild(currentTempIcon)
// div for the current temp
let currentTemp = document.createElement('div');
    currentTemp.id = 'currentTemp';
    currentTemp.textContent = '0°';
    projectContainer.appendChild(currentTemp)

//div for current feels like group
let feelsLikeGroup = document.createElement('div');
    feelsLikeGroup.id = 'feelsLikeGroup';
    feelsLikeGroup.classList.add('weatherField')
    projectContainer.appendChild(feelsLikeGroup)
//icon for feels like
let feelsLikeIconContainer = document.createElement('div');
    feelsLikeIconContainer.id = 'feelsLikeIconContainer';
    feelsLikeGroup.appendChild(feelsLikeIconContainer);
let feelsLikeIcon = document.createElement('i');
    feelsLikeIcon.id = 'feelsLikeIcon';
    feelsLikeIcon.className = 'fas fa-temperature-high'
    feelsLikeIconContainer.appendChild(feelsLikeIcon)
// div for the feels like temp
let feelsLike = document.createElement('div');
    feelsLike.id = 'feelsLike';
    feelsLike.textContent = 'Feels Like: 0°';
    feelsLikeGroup.appendChild(feelsLike)

// div for the humidity
let humidity = document.createElement('div');
    humidity.id = 'humidity';
    humidity.textContent = 'Humidity: 0%';
    projectContainer.appendChild(humidity)

// div for the current temp
let chanceOfRain = document.createElement('div');
    chanceOfRain.id = 'chanceOfRain';
    chanceOfRain.textContent = 'Chance of Rain: 0%';
    projectContainer.appendChild(chanceOfRain)

// div for the current temp
let winds = document.createElement('div');
winds.id = 'winds';
winds.textContent = 'Winds: 0 mph';
projectContainer.appendChild(winds)

// container for 7 day forecast
let forecastContainer = document.createElement('div')
forecastContainer.id = 'forecastContainer';
projectContainer.appendChild(forecastContainer);



callWeatherInitial()