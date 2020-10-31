


function displayTemperature(response){
    
    let temperatureElement = document.querySelector ("#temperature");
    temperatureElement.innerHTML = Math.round(response.data.main.temp);
    let cityElement = document.querySelector("#city");
    cityElement.innerHTML = response.data.name;
    let skyElement = document.querySelector("#sky");
    skyElement.innerHTML = response.data.weather[0].description;
    console.log(response.data);
   let humidityElement=document.querySelector("#Humidity");
   humidityElement.innerHTML= response.data.main.humidity;
   let windElement=document.querySelector("#Wind");
    windElement.innerHTML=Math.round(response.data.wind.speed);
    let participationElement=document.querySelector("#Participation");
    participationElement.innerHTML=response.data.clouds.all;
    let iconElement= document.querySelector("#icon");
    iconElement.setAttribute("src",
     `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,"hight:50%");
celsiusTemperature = response.data.main.temp;
    }
let now = new Date();
let date = document.querySelector("#date");


let hour = now.getHours();
let minutes = now.getMinutes();
let days = ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];
let day = days[now.getDay()];

date.innerHTML = `${day} ${hour}:${minutes}`;


function search(city){
   
let apiKey="9b8aa97c4b78075b51039339e3bab971";
let apiUrl=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
axios.get(apiUrl).then(displayTemperature);
}

function handleSubmit(event){
    event.preventDefault();
    cityInputElement=document.querySelector("#city-Input");
    search(cityInputElement.value);
    console.log(cityInputElement.value);

}
function displayFahrenheitTemperature(event){
   event.preventDefault();
   let fahrenheitTemperature = (celsiusTemperature * 9) / 5 + 32;
   let temperatureElement = document.querySelector("#temperature");
   temperatureElement.innerHTML = Math.round(fahrenheitTemperature);
}

function displaycelsiusTemperature(event)
{
event.preventDefault();
let temperatureElement = document.querySelector("#temperature");
temperatureElement.innerHTML = Math.round(celsiusTemperature);
}




let form = document.querySelector("#search-form");
form.addEventListener("submit", handleSubmit);

let fahrenheitlink =document.querySelector("#fahrenheit-link");
fahrenheitlink.addEventListener("click",displayFahrenheitTemperature);

let celsiusLink =document.querySelector("#celsius-link");
celsiusLink.addEventListener("click",displaycelsiusTemperature);

search("edmonton");