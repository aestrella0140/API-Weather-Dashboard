function renderWeather() {
    re
}

function fetchWeather(query) {
    var url = "https://api.openweathermap.org/data/2.5/forecast?q=Phoenix&appid=15593bda392604e1c4329b538b0df219"
    
    fetch(url)
    .then((response) => response.json())
    .then(data =>{
        for( i=0; i < 5; i++) {
            document.getElementById("day" + (i+1) +"Min").innerHTML ="Min: " + Number(data.list[i].main.temp_min - 315.55).toFixed(1) + "°";
        }
        for( i=0; i < 5; i++) {
            document.getElementById("day" + (i+1) +"Max").innerHTML ="Max: " + Number(data.list[i].main.temp_max - 315.55).toFixed(1) + "°";
        }
        for( i=0; i < 5; i++) {
            document.getElementById("img" + (i+1)).src =" https://openweathermap.org/img/wn/" + data.list[i].weather[0].icon+".png";
        }
        
    })
}

fetchWeather();