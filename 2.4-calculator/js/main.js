/* This script will handle action of each button when clicked
1. First we need to define Events for when each number button 0 - 9 is clicked, and to put the number clicked into the output window.
2.
*/
/* creat even listener to wait until html fully loaded */
document.addEventListener("DOMContentLoaded", function (){

var numberButtonElement7 = document.querySelector("[data-js='numberButton7']");
var numberButtonElement8 = document.querySelector("[data-js='numberButton8']");
var numberButtonElementClear = document.querySelector("[data-js='numberButtonClear']");
var numberButtonElementDecimal = document.querySelector("[data-js='numberButtonDecimal']");


var outputTextElement = document.querySelector("[data-js='outputText']");

numberButtonElementClear.addEventListener("click", function(){
      outputTextElement.textContent = "";
    })
numberButtonElementDecimal.addEventListener("click", function(){
      outputTextElement.textContent += ".";
    })

numberButtonElement7.addEventListener("click", function(){
      outputTextElement.textContent += this.textContent;
    })

numberButtonElement8.addEventListener("click", function(){
          outputTextElement.textContent += this.textContent;
        })



  }
)
  /* var num = numberButtonElement[numberButtonElement.textContent];

  numberButtonElement7.addEventListener("click", function(){
    outputTextElement7.textContent += numberButtonElement[num].textContent;
  })
  numberButtonElement8.addEventListener("click", function(){
    outputTextElement.textContent += numberButtonElement8.textContent;
  {)
  */

/*  numberButtonElement.addEventListener("click", function(){
    var num = numberButtonElement.this.textContent;
    console.log(num);
    outputWindowJSElement[num].textContent=this.textContent */
