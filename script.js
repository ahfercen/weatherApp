//Metric 1 / Imperial 0
let toggle = 1;
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
    `
    
    `;
    content.innerHTML = (display);
}

function TempDisplay(temp){
    let sign;
    if(toggle == 1){
        sign = `<span class="sign">°C</span>`;
    }else{
        sign = `<span class="sign">°F</span>`;
    }
    return `${Math.round(temp)}${sign}`;
}


GetWeather(inp.value);


