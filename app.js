//jshint version:es6

import  { weather } from "./weather.js";

document.querySelector(".weather").classList.remove("loading");
document.body.style.backgroundImage = "url('https://source.unsplash.com/1600x900/?" +  name + "')"

document.querySelector(".search button").addEventListener("click",function(){
  weather.search()
})

document.querySelector(".search-bar").addEventListener("keyup", function(event){
  if(event.key == "Enter"){
    weather.search()
  }
  

})

weather.fetchweather("Lagos");
