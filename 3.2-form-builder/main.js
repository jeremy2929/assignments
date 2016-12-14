// this script sends a request to a website and receives data back in form of a multi-level array,
// which is used to define and build HTML elements to display the values of the array, using
// interpolation syntax
//
// holding javascript code until document page fully loads
document.addEventListener("DOMContentLoaded", function(){
  // declaring a variable linked to our HTML document
  var allHTML = document.querySelector("[data-js='formData']");

  var xhr = new XMLHttpRequest();
  // sending a request to this URL to get some cool data
  xhr.open("GET", "http://json-data.herokuapp.com/forms");

  xhr.addEventListener("load", function(e){
    var xhrData = this.response;
    // convert the xhrData into JSON data we can use
    var JSONData = JSON.parse(xhrData);
    // declaring variable to build HTML elements for textarea
    var textareaHTML ="";
    // declaring variable to build HTML elements for select
    var selectHTML ="";
    // declaring variable to build HTML elements for list of data
    var listHTML ="";
    // begin loop through 8 parts of top array
    for (var i = 0; i < JSONData.length; i++){
      // assign value of each array to something easer to work with
      var inputData = JSONData[i];
      // dataFlag is set true for normal values unless a 'textarea'or 'select' occurs
      var dataFlag = true;
      // if array.type value is 'textarea', then build the HTML for it
      if (inputData.type === 'textarea'){
        textareaHTML += '<textarea rows="4" cols="50">';
        textareaHTML += '</textarea>';
        dataFlag = false;
      }
      // if array.type value is 'select', then build the HTML for it
      if (inputData.type === 'select'){
        selectHTML += '<select name="select">';
        for (var x = 0; x < inputData.options.length; x++){
          var optionData = inputData.options[x];
          selectHTML += `<option value='${optionData.value}'>${optionData.label}</option>`;
        }
        selectHTML += "</select>";
        dataFlag = false;
      }
      // if no value triggered dataFlag = false, then build 'list' HTML
      if (dataFlag === true){
        listHTML += `<p>${JSONData[i].label}___`;
        listHTML += `${JSONData[i].icon}___`;
        listHTML += `${JSONData[i].id}</p>`;
      }
    }
  // add each piece built to the variable we are using to define HTML
  allHTML.innerHTML += textareaHTML;
  allHTML.innerHTML += selectHTML;
  allHTML.innerHTML += listHTML;
  });
  xhr.send();
});
