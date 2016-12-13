/*  */
document.addEventListener("DOMContentLoaded", function(){
  var allHTML = document.querySelector("[data-js='formData']");
  var xhr = new XMLHttpRequest();
  xhr.open("GET", "http://json-data.herokuapp.com/forms");
  xhr.addEventListener("load", function(e){
    var xhrData = this.response;
    var JSONData = JSON.parse(xhrData);
    var pieceHTML ="";
    for (var i = 0; i < JSONData.length; i++){
      var inputData = JSONData[i];
      if (inputData.type === 'select'){
        pieceHTML += '<select name="select">';
      /* console.log("JSONData=[]", inputData.options[2]);  */
        for (var x = 0; x < inputData.options.length; x++){
          var optionData = inputData.options[x];
          console.log("option=",optionData);
          pieceHTML += `<option value='${optionData.value}'>${optionData.label}</option>`;
        }
      }
        pieceHTML += "</select>";
        console.log(pieceHTML);
    }
      /*  console.log("this is a select",JSONData[i]); */


    /*  pieceHTML = `
          <form>
          <input Icon: ${JSONData[i].icon}
                 Id: ${JSONData[i].id}
          <label> ${JSONData[i].label} </label>
        </form>
      `; */
      allHTML.innerHTML += pieceHTML;

  });
  xhr.send();
});
