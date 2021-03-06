/***********************************************************************************************
/**  This script will handle action of each button of a calculator when clicked.
/***********************************************************************************************
/* Operands are the numbers of the calculation, including decimals.
   Operators are the add, subtract, multiply, divide symbols.
  Quality Improvements :
           Can not enter an operator without a number first.
           Can not enter a decimal or operator multiple times in a row.
           Can not enter a decimal more than once inside one operand (Ex: 3.45.65).
           Can not hit equal button with incomplete expression (ends with an operator).
           Will auto clear output window after equal sign used if next button is number.
           Will auto clear output window after equal sign used if next button is decimal.
           Total length of expression limited to 10 characters, so output window wont overlfow.
*/
/* create event listener to wait until html fully loaded */
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
  /*                                                                                     */
  /* declaring variable for output window, setting to null                               */
  var outputTextElement = document.querySelector("[data-js='outputText']");
  outputTextElement.textContent="";
  /*                                                                                     */
  /*                                                                                     */
  /* when flag is false, only accepts number, equal sign, or clear                       */
  /* when flag is true, only accepts operator                                            */
  var flag = false;
  /* when windowReset is true, need to auto clear output window for next calculation     */
  var windowReset = false;
  /* when oneDecimal is true, can enter decimal. If false, then no more decimals         */
  var oneDecimal = true;
  /* flag to check if can have more output                                               */
  var outputMore = true;
  /* function to check if output window should be auto cleared for new calculation       */
  function checkReset(){
     if (windowReset === true){
         outputTextElement.textContent = "";
         /* set windowReset back to false because output window now cleared               */
         windowReset = false;
         /* set oneDecimal to true because output window ready for number or decimal      */
         oneDecimal = true;
     }
  }
  /* function to check if output string larger than 10 characters                         */
  function overFlow(){
    output = outputTextElement.textContent;
    outputLength = output.length + 1;
    if (outputLength > 10){
      outputMore = false;
    }
  }
  /************************* Clear function-*******************************************************/
  /* Sets the contents of output window to null
  /************************************************************************************************/
  numberButtonElementClear.addEventListener("click", function(){
    outputTextElement.textContent = "";
    flag=false;
    /* reset outputMore more because output string length now 0  */
    outputMore=true;
  });
  /************************* Decimal function-**************************************************************/
  /* when decimal button clicked, the decimal is added to output window and then windowReset and oneDecimal set to false to block auto clear and more decimals in same operand.
  /*********************************************************************************************************/
  numberButtonElementDecimal.addEventListener("click", function(){
    /* need to check if output display needs to be cleared */
    checkReset();
    /* need to check length of output string to see if maximum  */
    overFlow ();
    if (oneDecimal === true && outputMore === true){
      outputTextElement.textContent += ".";
      /* setting windowReset to false-  do not want to auto clear at next number button because still creating an expression */
      windowReset = false;
      /* now have a decimal, no more in this operand   */
      oneDecimal = false;
    }
  });
  /************************* Operator functions-*******************************************************
  as each operator button is clicked, the corresponding operator is added to the output string and then flag and reset set to false to block more operators and auto clear
  /****************************************************************************************************/
  numberButtonElementAddition.addEventListener("click", function(){
    /* need to check length of output string to see if maximum  */
    overFlow();
    if (flag === true && outputMore === true){
      outputTextElement.textContent += "+";
      /* setting flag to false-  already have operator now, dont do it again */
      flag=false;
      /* setting windowReset to false-  do not want to auto clear at next number button because still creating an expression */
      windowReset = false;
      /* now ok to have a decimal                */
      oneDecimal = true;
      /* need to set outputMore to true in case a new expression begins */
    } else {
      outputMore = true;
    }
  });
  numberButtonElementSubtract.addEventListener("click", function(){
    /* need to check length of output string to see if maximum  */
    overFlow();
    if (flag === true && outputMore === true){
      outputTextElement.textContent += "-";
      /* setting flag to false-  already have operator now, dont do it again */
      flag=false;
      /* setting windowReset to false-  do not want to auto clear at next number button because still creating an expression */
      windowReset = false;
      /* now ok to have a decimal                */
      oneDecimal = true;
      /* need to set outputMore to true in case a new expression begins */
    } else {
      outputMore = true;
  });
  numberButtonElementMultiply.addEventListener("click", function(){
    /* need to check length of output string to see if maximum  */
    overFlow();
    if (flag === true && outputMore === true){
      outputTextElement.textContent += "*";
      /* setting flag to false-  already have operator now, dont do it again */
      flag=false;
      /* setting windowReset to false-  do not want to auto clear at next number button because still creating an expression */
      windowReset = false;
      /* now ok to have a decimal                */
      oneDecimal = true;
      /* need to set outputMore to true in case a new expression begins */
    } else {
      outputMore = true;
  });
  numberButtonElementDivide.addEventListener("click", function(){
    /* need to check length of output string to see if maximum  */
    overFlow();
    if (flag === true && outputMore === true){
      outputTextElement.textContent += "/";
      /* setting flag to false-  already have operator now, dont do it again */
      flag=false;
      /* setting windowReset to false-  do not want to auto clear at next number button because still creating an expression */
      windowReset = false;
      /* now ok to have a decimal                */
      oneDecimal = true;
      /* need to set outputMore to true in case a new expression begins */
    } else {
      outputMore = true;
  });
  /************************* Number Button functions-*******************************************************
  /* As each number button is clicked, the text content of the button is concatenated to the output string */
  /********************************************************************************************************/
  numberButtonElement0.addEventListener("click", function(){
    /* need to check if output display needs to be cleared */
    checkReset();
    /* need to check length of output string to see if maximum  */
    overFlow();
    if (outputMore === true){
      outputTextElement.textContent += 0;
      /* its ok now to hit equal button */
      flag=true;
    }
  });
  numberButtonElement1.addEventListener("click", function(){
    /* need to check if output display needs to be cleared */
    checkReset();
    /* need to check length of output string to see if maximum  */
    overFlow();
    if (outputMore === true){
      outputTextElement.textContent += 1;
      /* its ok now to hit equal button */
      flag=true;
    }
  });
  numberButtonElement2.addEventListener("click", function(){
    /* need to check if output display needs to be cleared */
    checkReset();
    /* need to check length of output string to see if maximum  */
    overFlow();
    if (outputMore === true){
      outputTextElement.textContent += 2;
      /* its ok now to hit equal button */
      flag=true;
    }
  });
  numberButtonElement3.addEventListener("click", function(){
    /* need to check if output display needs to be cleared */
    checkReset();
    /* need to check length of output string to see if maximum  */
    overFlow();
    if (outputMore === true){
      outputTextElement.textContent += 3;
      /* its ok now to hit equal button */
      flag=true;
    }
  });
  numberButtonElement4.addEventListener("click", function(){
    /* need to check if output display needs to be cleared */
    checkReset();
    /* need to check length of output string to see if maximum  */
    overFlow();
    if (outputMore === true){
      outputTextElement.textContent += 4;
      /* its ok now to hit equal button */
      flag=true;
    }  });
  numberButtonElement5.addEventListener("click", function(){
    /* need to check if output display needs to be cleared */
    checkReset();
    /* need to check length of output string to see if maximum  */
    overFlow();
    if (outputMore === true){
      outputTextElement.textContent += 5;
      /* its ok now to hit equal button */
      flag=true;
    }
  });
  numberButtonElement6.addEventListener("click", function(){
    /* need to check if output display needs to be cleared */
    checkReset();
    /* need to check length of output string to see if maximum  */
    overFlow();
    if (outputMore === true){
      outputTextElement.textContent += 6;
      /* its ok now to hit equal button */
      flag=true;
    }
  });
  numberButtonElement7.addEventListener("click", function(){
    /* need to check if output display needs to be cleared */
    checkReset();
    /* need to check length of output string to see if maximum  */
    overFlow();
    if (outputMore === true){
      outputTextElement.textContent += 7;
      /* its ok now to hit equal button */
      flag=true;
    }
  });
  numberButtonElement8.addEventListener("click", function(){
    /* need to check if output display needs to be cleared */
    checkReset();
    /* need to check length of output string to see if maximum  */
    overFlow();
    if (outputMore === true){
      outputTextElement.textContent += 8;
      /* its ok now to hit equal button */
      flag=true;
    }
  });
  numberButtonElement9.addEventListener("click", function(){
    /* need to check if output display needs to be cleared */
    checkReset();
    /* need to check length of output string to see if maximum  */
    overFlow();
    if (outputMore === true){
      outputTextElement.textContent += 9;
      /* its ok now to hit equal button */
      flag=true;
    }
  });
  /* When Equal is clicked, the solution to the expression is displayed in output window
   using the Eval function to convert the entire string into a numeric expression to produce the answer */
  numberButtonElementEqual.addEventListener("click", function(){
            if (flag === true){
              var answer = eval(outputTextElement.textContent);
              outputTextElement.textContent = answer.toFixed(1);
              /* windowReset is set to true to set up auto clear when begininng a new expression  */
              windowReset = true;
              /* outputMore reset because? */
              outputMore = true;
              flag=false;
            }
  });
})
