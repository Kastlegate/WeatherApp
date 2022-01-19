console.log("Hello World!")

async function grabWeatherApi(){
    let city = 'nicholasville';
    const response = await fetch('http://api.openweathermap.org/data/2.5/weather?q=' + city + '&APPID=84a37b07c98af032cd81b74ef12a9a69', {mode: 'cors'})
    const newData = await response.json();
    console.log(newData);
}

grabWeatherApi()