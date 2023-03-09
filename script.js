//Metric 1 / Imperial 0
let toggle = 1;
const inp = document.querySelector("input");
const content = document.getElementById("content");

async function GetWeather(location){
    if(location === "") location = "Toronto";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&APPID=1cfa5bd849f95193c1f9c8085e502c01&units=metric`
    const response = await fetch(url, {mode: 'cors'});
    response.json().then(function(response){
        ParseAnswer(response);
    }).catch(function (error){
        console.log("error: "+ error);
    });
}
inp.addEventListener("keypress",(event) => {
    if(event.key === "Enter"){
        GetWeather(inp.value);
    }
    event.preventDefault();
});
function ParseAnswer(response){
    if(response.cod === "404"){
        console.log("404 Error!");
    }else{
        BuildDisplay(response.weather[0],response.main, response.visibility, response.wind, response.clouds,response.name);
    }
}
function BuildDisplay(weather, main, visibility, wind,clouds,name){
    console.log(main);
    console.log(weather);
    const display = 
    `
        <div class="day-display">
            <div class="day-row1">
                <p id="city">${name}</p>
                <p id="temp">${TempDisplay(main.temp)}</p>
            </div>
            <div class="day-row2">
                <div class="desc">
                    <div class="desc-wrapper" id="desc-1">
                        <p id="desc">${weather.description}</p>
                    </div>
                    <div class="desc-wrapper" id="desc-2">
                        <p id="feels">Feels like ${TempDisplay(main.feels_like)}</p>
                    </div>
                    <div class="desc-wrapper" id="desc-3">
                        <p id="HL">H: ${TempDisplay(main.temp_max)}</p>
                        <p id="HL">L: ${TempDisplay(main.temp_max)}</p>
                    </div>
                </div>
            </div>
            
        </div>
        <div class="week-display">

        </div>
    `;
    content.innerHTML = (display);
}

function TempDisplay(temp){
    let sign;
    if(toggle === 1){
        sign = `<span class="sign">°C</span>`;
    }else{
        sign = `<span class="sign">°F</span>`;
    }
    return `${Math.round(temp)}${sign}`;
}


GetWeather(inp.value);


