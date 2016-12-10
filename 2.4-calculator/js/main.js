/* This script will handle action of each button of a calculator when clicked
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

 /* flag variable for if ready to do = */
 var flag = false;
 var reset = false;
 /* function to check if output window should be cleared for new calculation */
 function checkReset(){
   if (reset === true){
       outputTextElement.textContent = "";
       reset = false;
   }
 }

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
    flag=false;
    reset=false;
  });
  numberButtonElementSubtract.addEventListener("click", function(){
    outputTextElement.textContent += "-";
    flag=false;
    reset=false;
  });
  numberButtonElementMultiply.addEventListener("click", function(){
    outputTextElement.textContent += "*";
    flag=false;
    reset=false;
  });
  numberButtonElementDivide.addEventListener("click", function(){
    outputTextElement.textContent += "/";
    flag=false;
    reset=false;
  });
  /* Button functions- As each button is clicked, the text content of the button is concatenated to the output string */
  numberButtonElement0.addEventListener("click", function(){
    checkReset();
    outputTextElement.textContent += 0;
    flag=true;
  });
  numberButtonElement1.addEventListener("click", function(){
    checkReset();
    outputTextElement.textContent += 1;
    flag=true;
  });
  numberButtonElement2.addEventListener("click", function(){
    checkReset();
    outputTextElement.textContent += 2;
    flag=true;
  });
  numberButtonElement3.addEventListener("click", function(){
    checkReset();
    outputTextElement.textContent += 3;
    flag=true;
  });
  numberButtonElement4.addEventListener("click", function(){
    checkReset();
    outputTextElement.textContent += 4;
    flag=true;
  });
  numberButtonElement5.addEventListener("click", function(){
    checkReset();
    outputTextElement.textContent += 5;
    flag=true;
  });
  numberButtonElement6.addEventListener("click", function(){
    checkReset();
    outputTextElement.textContent += 6;
    flag=true;
  });
  numberButtonElement7.addEventListener("click", function(){
    checkReset();
    outputTextElement.textContent += 7;
    flag=true;
  });
  numberButtonElement8.addEventListener("click", function(){
    checkReset();
    outputTextElement.textContent += 8;
    flag=true;
  });
  numberButtonElement9.addEventListener("click", function(){
    checkReset();
    outputTextElement.textContent += 9;
    flag=true;
  });

/* When Equal is clicked, the answer to the math is displayed in output window
   using the Eval function to convert the entire string into a numberic expression to produce the answer */
numberButtonElementEqual.addEventListener("click", function(){
          if (flag === true){
            var answer = eval(outputTextElement.textContent);
            outputTextElement.textContent = answer.toFixed(3);
            reset = true;
          }
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
