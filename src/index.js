import './style.css';
import './all.css';
import { formSubmit } from './weatherFunctions'

// a container for the weather divs to go inside
let projectContainer = document.createElement('div');
    projectContainer.id = 'projectContainer';
    document.body.appendChild(projectContainer);

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
    // searchBar.addEventListener("click", cityName)
    searchForm.appendChild(searchBar);