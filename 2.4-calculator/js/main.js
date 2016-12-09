/* This script will handle action of each button when clicked
1. First we need to define Events for when each number button 0 - 9 is clicked, and to put the number clicked into the output window.
2.
*/
/* creat even listener to wait until html fully loaded */
document.addEventListener("DOMContentLoaded", function (){

  /* declaring all variables to reference each button defined in HTML */
var numberButtonElement0 = document.querySelector("[data-js='numberButton0']");
var numberButtonElement1 = document.querySelector("[data-js='numberButton1']");
var numberButtonElement2 = document.querySelector("[data-js='numberButton2']");
var numberButtonElement3 = document.querySelector("[data-js='numberButton3']");
var numberButtonElement4 = document.querySelector("[data-js='numberButton4']");
var numberButtonElement5 = document.querySelector("[data-js='numberButton5']");
var numberButtonElement6 = document.querySelector("[data-js='numberButton6']");
var numberButtonElement7 = document.querySelector("[data-js='numberButton7']");
var numberButtonElement8 = document.querySelector("[data-js='numberButton8']");
var numberButtonElement9 = document.querySelector("[data-js='numberButton9']");
var numberButtonElementClear = document.querySelector("[data-js='numberButtonClear']");
var numberButtonElementDecimal = document.querySelector("[data-js='numberButtonDecimal']");
var numberButtonElementAddition = document.querySelector("[data-js='numberButtonAddition']");
var numberButtonElementSubtract = document.querySelector("[data-js='numberButtonSubtract']");
var numberButtonElementMultiply = document.querySelector("[data-js='numberButtonMultiply']");
var numberButtonElementDivide = document.querySelector("[data-js='numberButtonDivide']");
var numberButtonElementEqual = document.querySelector("[data-js='numberButtonEqual']");

var outputTextElement = document.querySelector("[data-js='outputText']");

  numberButtonElementClear.addEventListener("click", function(){
    outputTextElement.textContent = "";
  });
  numberButtonElementDecimal.addEventListener("click", function(){
    outputTextElement.textContent += numberButtonElementDecimal.textContent;
  });
  numberButtonElementAddition.addEventListener("click", function(){
    outputTextElement.textContent += numberButtonElementAddition.textContent;
  });
  numberButtonElementSubtract.addEventListener("click", function(){
    outputTextElement.textContent += numberButtonElementSubtract.textContent;
  });
  numberButtonElementMultiply.addEventListener("click", function(){
    outputTextElement.textContent += numberButtonElementMultiply.textContent;
  });
  numberButtonElementDivide.addEventListener("click", function(){
    outputTextElement.textContent += numberButtonElementDivide.textContent;
  });

  numberButtonElement0.addEventListener("click", function(){
    outputTextElement.textContent += numberButtonElement0.textContent;
  });
  numberButtonElement1.addEventListener("click", function(){
    outputTextElement.textContent += numberButtonElement1.textContent;
  });
  numberButtonElement2.addEventListener("click", function(){
    outputTextElement.textContent += numberButtonElement2.textContent;
  });
  numberButtonElement3.addEventListener("click", function(){
    outputTextElement.textContent += numberButtonElement3.textContent;
  });
  numberButtonElement4.addEventListener("click", function(){
    outputTextElement.textContent += numberButtonElement4.textContent;
  });
  numberButtonElement5.addEventListener("click", function(){
    outputTextElement.textContent += numberButtonElement5.textContent;
  });
  numberButtonElement6.addEventListener("click", function(){
    outputTextElement.textContent += numberButtonElement6.textContent;
  });
  numberButtonElement7.addEventListener("click", function(){
    outputTextElement.textContent += numberButtonElement7.textContent;
  });
  numberButtonElement8.addEventListener("click", function(){
    outputTextElement.textContent += numberButtonElement8.textContent;
  });
  numberButtonElement9.addEventListener("click", function(){
    outputTextElement.textContent += numberButtonElement9.textContent;
  });


/* using the Eval function to convert the entire string into a numberic expression to produce the answer */
numberButtonElementEqual.addEventListener("click", function(){
          var answer = eval(outputTextElement.textContent);
          outputTextElement.textContent = answer.toFixed(3);

  });

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
