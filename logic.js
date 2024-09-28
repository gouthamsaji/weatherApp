const weatherCondition = data.weather[0].main.toLowerCase();

function changeBackgroundImage(condition){
    switch(condition){
        case 'clear':
        case 'sunny': document.getElementById('weatherApp').style.backgroundImage = "url('./assets/sunny.jpg')";
            break;
        case 'rain':
        case 'drizzle': document.getElementById('weatherApp').style.backgroundImage = "url('./assets/rainy.jpg')";
            break;
        case 'haze': document.getElementById('weatherApp').style.backgroundImage = "url('./assets/haze.webp')";
            break;
        case 'mist': document.getElementById('weatherApp').style.backgroundImage = "url('./assets/mist.jpg')";
            break;
        case 'clouds':
            document.getElementById('weatherApp').style.backgroundImage = "url('./assets/storm-clouds.jpg')";
            break;
        case 'snow':
            document.body.style.backgroundImage = "url('./assets/snowy.jpg')";
            break;
        default:
            document.body.style.backgroundImage = "url('./assets/default.jpg')";
    }
}

function citySearch(cityName){
    console.log(cityName)
    document.getElementById('welcomeMessage').style.display='none';
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=5fe36b192ffd1c36dffb6752bc1722b2`).then((result)=>{
        result.json().then((data)=>{
            console.log(data)
            console.log(data.weather[0])
            changeBackgroundImage(data.weather[0].main.toLowerCase());
            document.getElementById('weatherTitle').innerHTML = `${data.weather[0].main}`;
            document.getElementById('weatherDescription').innerHTML = `${data.weather[0].description}`;
            document.getElementById('temperature').innerHTML = `Temperature: ${Math.floor(data.main.temp - 273.15)}°C`;
            document.getElementById('feelsLike').innerHTML = `Feels like: ${Math.floor(data.main.feels_like - 273.15)}°C`;
            document.getElementById('minTemp').innerHTML = `Min Temp: ${Math.floor(data.main.temp_min - 273.15)}°C`;
            document.getElementById('maxTemp').innerHTML = `Max Temp: ${Math.floor(data.main.temp_max - 273.15)}°C`;
            document.getElementById('pressure').innerHTML = `Pressure: ${data.main.pressure} hPa`;
            document.getElementById('humidity').innerHTML = `Humidity: ${data.main.humidity} %`;

        })
    }).catch((err)=>{
        console.log(err)
    })
}
