const inp = document.querySelector("input");

async function GetWeather(location){
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&APPID=1cfa5bd849f95193c1f9c8085e502c01`
    const response = await fetch(url, {mode: 'cors'});
    response.json().then(function(response){
        console.log(response);
    }).catch((error) => {
        console.log("error: "+ error);
    });
}
GetWeather(inp.value);

