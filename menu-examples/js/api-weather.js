var currentTemp = 999;
document.addEventListener("DOMContentLoaded",function(){
  var articleElement = document.querySelector("[data-js='weatherTemp']");
  var buttonElement = document.querySelector("[data-js='buttonWeather']");
  var textElement = document.querySelector("[data-js='weatherHTML']");
  var xhr = new XMLHttpRequest();
    buttonElement.addEventListener("click",function(){
        var zipcode=textElement.value;
        var url = "http://api.openweathermap.org/data/2.5/weather?zip="+zipcode+",us&APPID=9026ccc1a8da530115ed275fb180ac36"
        xhr.open("GET",url);
        /* Listen for the Load event. The argument used is e because event is reserved keyword  */
        xhr.addEventListener("load", function(e){
            /* 'this' is equal to XHR event. xhrData will store the string of data we need */
            var xhrData = this.response;
            var string = xhrData;
            var tempPosition = string.indexOf('"temp"');
            var temp = string[tempPosition+7]+string[tempPosition+8]+string[tempPosition+9]+string[tempPosition+10]+string[tempPosition+11];
            var celTemp=eval(temp)-273.15;
            currentTemp=(celTemp.toFixed(3)*9/5) +32;
            pHTML = "<p class='outputDisplay'>"+currentTemp+" degrees Farenheit";
            pHTML+= "<p class='outputDisplay'>"+"zipcode:  "+zipcode+"</p>";
            articleElement.innerHTML += pHTML;
            pHTML = null;
            console.log("PHTML=",pHTML);
       });
       xhr.send();
   });
})
