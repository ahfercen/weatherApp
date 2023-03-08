const inp = document.querySelector("input");
const btn = document.querySelector("button");
const content = document.getElementById("content");

async function GetWeather(location){
    if(location == "") location = "Toronto";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&APPID=1cfa5bd849f95193c1f9c8085e502c01`
    const response = await fetch(url, {mode: 'cors'});
    response.json().then(function(response){
        ParseAnswer(response);
    }).catch((error) => {
        console.log("error: "+ error);
    });
}
GetWeather(inp.value);

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
        <h1>${name}</h1>
        <div class="info>
            <h3>${weather.description}</h3>
        </div>
    </div>
    `;
    console.log(weather)

    content.innerHTML = (display);
}


