/* This script will handle action of each button when clicked
1. First we need to define Events for when each number button 0 - 9 is clicked, and to put the number clicked into the output window.
2.
*/
/* creat even listener to wait until html fully loaded */
document.addEventListener("DOMContentLoaded", function (){

 var numberButtonElement=document.querySelector("[data-js='numberButton']");

 var outputWindowJSElement = document.querySelector("[data-js='outputWindowJS']");

    numberButtonElement.addEventListener("click", function(){
      outputWindowJSElement.textContent=this.textContent
      console.log(outputWindowJSElement);
    })







})
