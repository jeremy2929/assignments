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


    console.log("Data=",JSONData[i]);

      var pieceHTML = `
        <li>
          <p>Icon: ${JSONData[i].icon}_____
          Id: ${JSONData[i].id}_____
          Label: ${JSONData[i].label}_____ </p>
        </li>
      `;
      allHTML.innerHTML += pieceHTML;
      console.log(allHTML);
             }
  });




  xhr.send();
})
