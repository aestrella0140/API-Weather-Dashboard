function getInfo() {
    const newName = document.getElementById("cityInput");
    const cityName = document.getElementById("cityName");
    cityName.innerHTML ="--"+newName.value+"--"


fetch('https://api.openweathermap.org/data/2.5/forecast?q='+newName.value+'&appid=15593bda392604e1c4329b538b0df219&units=imperial')
.then(response => response.json()) 
.then(data =>{
    console.log(data);
    for( i=0; i < 5; i++) {
        document.getElementById("day" + (i+1) +"Min").innerHTML ="Min: " + Number(data.list[i].main.temp_min ).toFixed(1) + "°";
    }
    for( i=0; i < 5; i++) {
        document.getElementById("day" + (i+1) +"Temper").innerHTML ="Actual Temperature: " + Number(data.list[i].main.temp ).toFixed(1) + "°";
    }
    for( i=0; i < 5; i++) {
        document.getElementById("day" + (i+1) +"Max").innerHTML ="Max: " + Number(data.list[i].main.temp_max ).toFixed(1) + "°";
    }
    for( i=0; i < 5; i++) {
        document.getElementById("day" + (i+1) +"Hum").innerHTML ="Humidity: " + Number(data.list[i].main.humidity ).toFixed(1) + "%";
    }
    for( i=0; i < 5; i++) {
        document.getElementById("day" + (i+1) +"Win").innerHTML ="Wind-Speed: " + Number(data.list[i].wind.speed ).toFixed(1) + "MPH";
    }
    for( i=0; i < 5; i++) {
        document.getElementById("img" + (i+1)).src =" https://openweathermap.org/img/wn/" + data.list[i].weather[0].icon+".png";
    }
})


}

const d =new Date();
const weekDay =["Sunday", "Monday", "tuesday", "wednesday", "Thursday", "Friday", "Saturday"];

function CheckDay (day) {
    if(day +d.getDay() > 6) {
        return day +d.getDay()- 7;
    }
    else{
        return day +d.getDay();
    }
}

for( i=0; i < 5; i++) {
    document.getElementById("day"+(i+1)).innerHTML = weekDay[CheckDay(i)];
}


