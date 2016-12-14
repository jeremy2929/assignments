/*  */
document.addEventListener("DOMContentLoaded", function(){
  var allHTML = document.querySelector("[data-js='formData']");
  var xhr = new XMLHttpRequest();
  xhr.open("GET", "http://json-data.herokuapp.com/forms");
  xhr.addEventListener("load", function(e){
    var xhrData = this.response;
    var JSONData = JSON.parse(xhrData);

    var textareaHTML ="";
    var selectHTML ="";
    var listHTML ="";
    for (var i = 0; i < JSONData.length; i++){
      var inputData = JSONData[i];
      // dataFlag is
      var dataFlag = true;
      if (inputData.type === 'textarea'){
        textareaHTML += '<textarea rows="4" cols="50">';
        textareaHTML += '</textarea>';
        dataFlag = false;
      }
      if (inputData.type === 'select'){
        selectHTML += '<select name="select">';
        for (var x = 0; x < inputData.options.length; x++){
          var optionData = inputData.options[x];
          selectHTML += `<option value='${optionData.value}'>${optionData.label}</option>`;
        }
        selectHTML += "</select>";
        dataFlag = false;
      }
      if (dataFlag === true){
        listHTML += `<p>${JSONData[i].id}"---"`;
        listHTML += `${JSONData[i].icon}"---"`;
        listHTML += `${JSONData[i].label}"---"</p>`;
      }
    }

  allHTML.innerHTML += textareaHTML;
  allHTML.innerHTML += selectHTML;
  allHTML.innerHTML += listHTML;
  });
  xhr.send();
});
