const inp = document.querySelector("input");
const btn = document.querySelector("button");
const content = document.querySelector("content");

async function GetWeather(location){
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
        BuildDisplay(response.weather[0],response.main);
    }
}
function BuildDisplay(weather, main){
    console.log(weather);
    console.log(main);
}

