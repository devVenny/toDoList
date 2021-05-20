'use strict'

const weather = document.querySelector(".js-weather");
const API_KEY = "091dae33e14b9ff632dfadae805d202e";
const COORDS = "coords";


function saveCoords(coordsObj){
    localStorage.setItem(COORDS, JSON.stringify(coordsObj));
    }


function getWeather(lat, lon){
    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`)
    .then(function(response){
        return response.json()
    }).then(function(json){
        const location = json.name;
        const temperature = json.main.temp;
        weather.textContent = `I'm in ${location}. @${temperature}`;
    })
}

function handleGeoSuccess(position){
   const latitude = position.coords.latitude;
   const longitude = position.coords.longitude;
  const coordsObj = {
      latitude : latitude,
      longitude : longitude
  }
  saveCoords(coordsObj);
  getWeather(latitude, longitude);
}

function handleGeoError(){
    alert("Can't access your geo location.")
}

function askForCoords(){
    navigator.geolocation.getCurrentPosition(handleGeoSuccess, handleGeoError);
}


function loadCoords(){
    const loadedCoords = localStorage.getItem(COORDS);
    if(loadedCoords === null){
        askForCoords()
    }else{
const parsedCoords = JSON.parse(loadedCoords);
getWeather(parsedCoords.latitude, parsedCoords.longitude);
    }
}


function init(){
    loadCoords();
} 
init()