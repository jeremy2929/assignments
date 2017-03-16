// This script will use zipcode given by user to call openweather.org API data for current conditions
// set currentTemp to odd number to indicate error
var currentTemp = 999;
document.addEventListener("DOMContentLoaded",function(){
  // element to add using .innerHTML
  var articleElement = document.querySelector("[data-js='weatherTemp']");
  // element to create a click event
  var buttonElement = document.querySelector("[data-js='buttonWeather']");
  // element to show output
  var textElement = document.querySelector("[data-js='weatherHTML']");
  // variable for request from servers
  var xhr = new XMLHttpRequest();
    buttonElement.addEventListener("click",function(){
        var pHTML="";

        // assign zipcode entered to variable
        var zipcode=textElement.value;
        // build a URL to API server using zipcode

        var url =  "https://api.nasa.gov/planetary/apod?api_key=0Q6BnoGKV0whkEatPySH5Z0cVZpGHTRCLnwB7mrt"
        // open URL for API server
        xhr.open("GET",url);
        // Listen for the Load event. The argument used is e because event is reserved keyword
        xhr.addEventListener("load", function(e){
            // 'this' is equal to XHR event. xhrData will store the string of data we need
            var xhrData = this.response;
            console.log(xhrData);
            // assign data to a variable
            var string = xhrData;
            // find position of keyword 'sunrise' time in data string
            var sunrisePosition = string.indexOf('"sunrise"');
            // grab sunrise time (10 digit format) starting 10 positions past 'sunrise'
            var sunriseRaw = string[sunrisePosition+10]+string[sunrisePosition+11]+string[sunrisePosition+12]+string[sunrisePosition+13]+string[sunrisePosition+14]+string[sunrisePosition+15]+string[sunrisePosition+16]+string[sunrisePosition+17]+string[sunrisePosition+18]+string[sunrisePosition+19];
            // find position of keyword 'sunset' time in data string
            var sunsetPosition = string.indexOf('"sunset"');
            // grab sunrise time (10 digit format) starting 9 positions past 'sunrise'
            var sunsetRaw = +string[sunsetPosition+9]+string[sunsetPosition+10]+string[sunsetPosition+11]+string[sunsetPosition+12]+string[sunsetPosition+13]+string[sunsetPosition+14]+string[sunsetPosition+15]+string[sunsetPosition+16]+string[sunsetPosition+17]+string[sunsetPosition+18];
            // find position of keyword 'temp' for current temperature
            var tempPosition = string.indexOf('"temp"');
            // grab current temp data (Kelvin) 7 positions past 'temp'
            var temp = string[tempPosition+7]+string[tempPosition+8]+string[tempPosition+9];
            // took the decimals out bcuz sometimes not pesent --->+string[tempPosition+10]+string[tempPosition+11];
            // convert temp data to numeric and subtract 273 for conversion to Celsius.
            var celTemp=eval(temp)-273.15;
            // convert temp data to Farenheit
            holdTemp=(celTemp*9/5) +32;
            // restrict value to 3 decimals only
            currentTemp = holdTemp.toFixed(3);
            // add temp date to HTML element for output
            pHTML = "<p class='outputDisplay' id='data'>"+currentTemp+" degrees Farenheit";
            pHTML+= "<p class='outputDisplay' id='data'>"+"zipcode:  "+zipcode+"</p>";
            // inserting the output element into HTML
            articleElement.innerHTML += pHTML;
            pHTML = "";
            // creating new API request to convert sunrise time to zulu time
              var xhr = new XMLHttpRequest();
              // sending the raw sunrise data to API
              var url = "https://helloacm.com/api/unix-timestamp-converter/?cached&s="+sunriseRaw;
              xhr.open("GET",url);
              xhr.addEventListener("load", function(e){
                 // assign data (zulu time) from API to a string
                 var sunriseString = this.response;
                 console.log(sunriseString);
                 // split the string (zulu time) into an array
                 sunriseArray=sunriseString.split("");
                 // grab the hour digits from the string (zulu)
                 hourString = sunriseArray[12]+sunriseArray[13];
                 // convert the two digit string into a numeric
                 hourNumeric = eval(hourString);
                 // add 6 to zulu hour to get Central Standard Time PM
                 sunRisehour = hourNumeric+6;
                 // grab the minute digits from the string (zulu)
                 sunRiseminutes = sunriseArray[15]+sunriseArray[16];
                 // build the HTML to display output
                 pHTML = "<p class='outputDisplay'>Sunrise:  "+sunRisehour+":"+sunRiseminutes+"am";
                 // inserting the output element into HTML
                 articleElement.innerHTML += pHTML;
               });  // closing load event for sunrise time conversion request
              // send the request to API
              xhr.send();

            // creating new API request to conver sunrise time to zulu time
            var xhr = new XMLHttpRequest();
            // sending the raw sunrise data to API
            var url = "https://helloacm.com/api/unix-timestamp-converter/?cached&s="+sunsetRaw;
            xhr.open("GET",url);
            xhr.addEventListener("load", function(e){
               // assign data (zulu time) from API to a string
               var sunsetString = this.response;
               console.log(sunsetString);
               // split the string (zulu time) into an array
               sunsetArray=sunsetString.split("");
               // grab the hour digits from the string (zulu)
               hourString = sunsetArray[12]+sunsetArray[13];
               // convert the two digit string into a numeric
               hourNumeric = eval(hourString);
               // subtract 6 to zulu hour to get Central Standard Time AM
               sunSethour = hourNumeric-6;
               // grab the minute digits from the string (zulu)
               sunSetminutes = sunsetArray[15]+sunsetArray[16];
               // build the HTML to display output
               pHTML+= "<p class='outputDisplay'>"+"Sunset:  "+sunSethour+":"+sunSetminutes+"pm";
               // inserting the output element into HTML
               articleElement.innerHTML += pHTML;
            });  // closing load event for sunset time conversion request
            // send the request to API
            xhr.send();
         }); // closing load event for all weather data from openweather
         // send the request to API
          xhr.send();
       });  // closing click event for zip code button
})
