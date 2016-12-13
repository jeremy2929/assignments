/*  */
document.addEventListener("DOMContentLoaded", function(){
  var formDataElement = document.querySelector("[data-js='formData']");
  var xhr = new XMLHttpRequest();
  xhr.open("GET", "http://json-data.herokuapp.com/forms");

  xhr.addEventListener("load", function(e){
    var xhrData = this.response;
    var JSONData = JSON.parse(xhrData);
    for (var i = 0; i < JSONData.length; i++){


    console.log("Data=",JSONData[i]);

    }
  });




  xhr.send();
})
