const inp = document.querySelector("input");
const btn = document.querySelector("button");
const content = document.getElementById("content");

async function GetWeather(location){
    if(location == "") location = "Toronto";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&APPID=1cfa5bd849f95193c1f9c8085e502c01&units=metric`
    const response = await fetch(url, {mode: 'cors'});
    response.json().then(function(response){
        ParseAnswer(response);
    }).catch(function (error){
        console.log("error: "+ error);
    });
}
btn.addEventListener("click",() => {
    GetWeather(inp.value);
});

function ParseAnswer(response){
    if(response.cod == "404"){
        console.log("404 Error!");
    }else{
        BuildDisplay(response.weather[0],response.main, response.visibility, response.wind, response.clouds,response.name);
    }
}
function BuildDisplay(weather, main, visibility, wind,clouds,name){

    const display = 
    `<div class="display">
        <div class="top-info">
            <h1>${name}</h1>
            <div class="main-info">
                <p>${weather.description}</p>
                <div class="temp-info">
                    <p id="degree">${Math.round(main.temp)}</p>
                    <p>feels like ${Math.round(main.feels_like)}</p>
                </div>
            </div>
        </div>
        <div class="extra-info">
                <p>H: ${Math.round(main.temp_min)}</p>
                <p>L: ${Math.round(main.temp_max)}</p>
        </div>
    </div>
    `;
    content.innerHTML = (display);
}




GetWeather(inp.value);


