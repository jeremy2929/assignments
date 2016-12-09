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

/* defining variable for output window */
  var outputTextElement = document.querySelector("[data-js='outputText']");


  /* CLEAR function- Sets the string variable of output window to null*/
  numberButtonElementClear.addEventListener("click", function(){
    outputTextElement.textContent = "";
  });
  /* Operands functions- As each button is clicked, the text content of the button is concatenated to the output string*/
  numberButtonElementDecimal.addEventListener("click", function(){
    outputTextElement.textContent += ".";
  });
  numberButtonElementAddition.addEventListener("click", function(){
    outputTextElement.textContent += "+";
  });
  numberButtonElementSubtract.addEventListener("click", function(){
    outputTextElement.textContent += "-";
  });
  numberButtonElementMultiply.addEventListener("click", function(){
    outputTextElement.textContent += "*";
  });
  numberButtonElementDivide.addEventListener("click", function(){
    outputTextElement.textContent += "/";
  });
  /* Button functions- As each button is clicked, the text content of the button is concatenated to the output string */
  numberButtonElement0.addEventListener("click", function(){
    outputTextElement.textContent += 0;
  });
  numberButtonElement1.addEventListener("click", function(){
    outputTextElement.textContent += 1;
  });
  numberButtonElement2.addEventListener("click", function(){
    outputTextElement.textContent += 2;
  });
  numberButtonElement3.addEventListener("click", function(){
    outputTextElement.textContent += 3;
  });
  numberButtonElement4.addEventListener("click", function(){
    outputTextElement.textContent += 4;
  });
  numberButtonElement5.addEventListener("click", function(){
    outputTextElement.textContent += 5;
  });
  numberButtonElement6.addEventListener("click", function(){
    outputTextElement.textContent += 6;
  });
  numberButtonElement7.addEventListener("click", function(){
    outputTextElement.textContent += 7;
  });
  numberButtonElement8.addEventListener("click", function(){
    outputTextElement.textContent += 8;
  });
  numberButtonElement9.addEventListener("click", function(){
    outputTextElement.textContent += 9;
  });

/* When Equal is clicked, the answer to the math is displayed in output window
   using the Eval function to convert the entire string into a numberic expression to produce the answer */
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
