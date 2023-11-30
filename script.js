const apiKey="e8afa6e152f159801e4fbeb31483b9de";
const apiUrl='https://api.openweathermap.org/data/2.5/weather?units=metric&q=';
let inp=document.querySelector('#inp');
let sbtn=document.querySelector('.sbtn');
let weatherimg=document.querySelector('.weatherimg');

async function checkWeather(place){
    let res= await fetch(apiUrl+place+`&appid=${apiKey}`);
    let data=await res.json();
    console.log(data);


    const cel=document.querySelector('.cel');
    cel.innerHTML=Math.round(data.main.temp)+' °c';

    const city=document.querySelector('.city');
    city.innerHTML=data.name;

    const Humidity=document.querySelector('.Humidity');
    Humidity.innerHTML=data.main.humidity+'%';

    const wind=document.querySelector('.wind');
    wind.innerHTML=data.wind.speed+'km/h';
    if(data.weather[0].main=='Rain'){
        weatherimg.src="weather-icons/rain.png";
    }
     else if(data.weather[0].main=='Drizzle'){
        weatherimg.src="weather-icons/drizzle.png";
    }
    else if(data.weather[0].main=='Mist'){
        weatherimg.src="weather-icons/mist.png";
    }
    if(data.weather[0].main=='Clouds'){
        weatherimg.src="weather-icons/clouds.png";
    }
    if(data.weather[0].main=='Snow'){
        weatherimg.src="weather-icons/snow.png";
    }

}

sbtn.addEventListener('click',()=>{
    
    checkWeather(inp.value);
})
