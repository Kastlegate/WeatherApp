import './style.css';
import './all.css';
import { formSubmit } from './weatherFunctions'

// a container for the weather divs to go inside
let projectContainer = document.createElement('div');
    projectContainer.id = 'projectContainer';
    document.body.appendChild(projectContainer);

// div for the current weather condition
let currentWeather = document.createElement('h3');
    currentWeather.id = "currentWeather";
    currentWeather.textContent = "";
    projectContainer.appendChild(currentWeather);

// div for the city name and country
let city = document.createElement('h1');
    city.id = 'city'; 
    city.textContent = 'Hi, there!'   
    projectContainer.appendChild(city);

// form for the search bar
let searchForm = document.createElement('form');
    searchForm.id = 'searchform';
    searchForm.addEventListener("submit", formSubmit)
    // searchForm.setAttribute("onsubmit", "return false")
    projectContainer.appendChild(searchForm);
// button for the searchBar
let searchButton = document.createElement('submit');
    searchButton.id = 'searchButton';
    searchButton.className = 'fas fa-search';
    searchButton.addEventListener("click", formSubmit)
    searchForm.appendChild(searchButton);
// search bar for user input
let searchBar = document.createElement('input');
    searchBar.type = 'text';
    searchBar.placeholder = 'Search for a city';
    searchForm.appendChild(searchBar);

// div for the current temp
let currentTemp = document.createElement('div');
    currentTemp.id = 'currentTemp';
    currentTemp.textContent = 'Current Temp: 0°';
    projectContainer.appendChild(currentTemp)

// div for the feels like temp
let feelsLike = document.createElement('div');
    feelsLike.id = 'feelsLike';
    feelsLike.textContent = 'Feels Like: 0°';
    projectContainer.appendChild(feelsLike)

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
