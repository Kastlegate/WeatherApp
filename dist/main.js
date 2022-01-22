/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (() => {

eval("console.log(\"Hello World!\")\n\nasync function grabWeatherApi(){\n    //creating an initial city and latitude and longitude variables\n    let city = 'nicholasville';\n    let latitude = '';\n    let longitude = '';\n\n    //function that will grab the latitude and longitude from the current weather API\n    function updateLatAndLon(lat, lon){\n        latitude = lat;\n        longitude = lon;\n    }\n\n    // variable to store celcius vs fahrenheit\n    let unit = \"imperial\"\n    //fetching the information from the Open Weather API and converting it to JSON\n    const weather = await fetch('http://api.openweathermap.org/data/2.5/weather?q=' + city + \n    '&APPID=84a37b07c98af032cd81b74ef12a9a69&units=' + unit, {mode: 'cors'})\n    const currentWeather = await weather.json();\n\n    updateLatAndLon(currentWeather.coord.lat, currentWeather.coord.lon);\n\n    //fetching the information from the Open Weather One Call API and converting it to JSON\n    const openWeatherAllAPI = await fetch('https://api.openweathermap.org/data/2.5/onecall?lat=' + \n    latitude + '&lon=' + longitude + '&appid=84a37b07c98af032cd81b74ef12a9a69&units=' + unit, {mode: 'cors'})\n    const sevenDayForecast = await openWeatherAllAPI.json();\n\n    console.log(currentWeather);\n    console.log(sevenDayForecast);\n    console.log(\"Temp: \" + currentWeather.main.temp);\n    console.log(\"Feels Like: \" + currentWeather.main.feels_like);\n    console.log(\"Today's Low: \" + currentWeather.main.temp_min);\n    console.log(\"Humidity: \" + currentWeather.main.humidity);\n    console.log(\"Today's Weather: \" + currentWeather.weather[0].main + \", \" + currentWeather.weather[0].description)\n    console.log(\"City: \" + currentWeather.name + \". Country: \" + currentWeather.sys.country)\n    console.log(\"Wind: \" + currentWeather.wind.speed)\n    console.log(\"Latitude: \" + latitude);\n    console.log(\"Longitude: \" + longitude);\n    console.log(\"Tomorrow's High: \" + Math.round(sevenDayForecast.daily[1].temp.max))\n    console.log(\"Tomorrow's Low: \" + Math.round(sevenDayForecast.daily[1].dt))\n\n    let d = new Date(sevenDayForecast.daily[1].dt*1000);\n    console.log(d.getDay())\n\n}\n\ngrabWeatherApi()\n\n//# sourceURL=webpack://weatherapp/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/index.js"]();
/******/ 	
/******/ })()
;