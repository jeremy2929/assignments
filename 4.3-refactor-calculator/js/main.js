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
var $ = require("jquery");
var buttonJS = require("./button.js");

// document.addEventListener("DOMContentLoaded", function (){
$(function(){  /* declaring all variables to reference each button defined in HTML */
  var $body = $("body");
  var $numberButtonElement0 = $body.find("[data-js='numberButton0']");
  var $numberButtonElement1 = $body.find("[data-js='numberButton1']");
  var $numberButtonElement2 = $body.find("[data-js='numberButton2']");
  var $numberButtonElement3 = $body.find("[data-js='numberButton3']");
  var $numberButtonElement4 = $body.find("[data-js='numberButton4']");
  var $numberButtonElement5 = $body.find("[data-js='numberButton5']");
  var $numberButtonElement6 = $body.find("[data-js='numberButton6']");
  var $numberButtonElement7 = $body.find("[data-js='numberButton7']");
  var $numberButtonElement8 = $body.find("[data-js='numberButton8']");
  var $numberButtonElement9 = $body.find("[data-js='numberButton9']");
  var $numberButtonElementClear = $body.find("[data-js='numberButtonClear']");
  var $numberButtonElementDecimal = $body.find("[data-js='numberButtonDecimal']");
  var $numberButtonElementAddition = $body.find("[data-js='numberButtonAddition']");
  var $numberButtonElementSubtract = $body.find("[data-js='numberButtonSubtract']");
  var $numberButtonElementMultiply = $body.find("[data-js='numberButtonMultiply']");
  var $numberButtonElementDivide = $body.find("[data-js='numberButtonDivide']");
  var $numberButtonElementEqual = $body.find("[data-js='numberButtonEqual']");
  /*                                                                                     */
  /* declaring variable for output window, setting to null                               */
  var $outputTextElement = $body.find("[data-js='outputText']");
  $outputTextElement.text(null);
  var outputTotal ="";
  /*                                                                                     */
  /*                                                                                     */
  /* when flag is false, only accepts number, equal sign, or clear                       */
  /* when flag is true, only accepts operator                                            */
  var flag = false;
  /* when windowReset is true, need to auto clear output window for next calculation     */
  var windowReset = false;
  /* when oneDecimal is true, can enter decimal. If false, then no more decimals         */
  var oneDecimal = true;
  //  flag to check if can have more number output
  var outputMore = true;
  // allows operator or not
  var operatorOK = false;
  /* function to check if output window should be auto cleared for new calculation       */
  function checkReset(){
     if (windowReset === true){
         // setting output display to null to clear it
         outputTotal = "";
         $outputTextElement.text(outputTotal);
         /* set windowReset back to false because output window now cleared               */
         windowReset = false;
         /* set oneDecimal to true because output window ready for number or decimal      */
         oneDecimal = true;
     }
  }
  /* function to check if output string larger than 10 characters                         */
  function overFlow(){
    //   finding numeric of $outputTextElement
    output = $outputTextElement.text();
    if (output != ""){
      outputLength = output.length + 1;
      if (outputLength > 8){
       outputMore = false;
       operatorOK = true;
      }
    }
  }
  /************************* Clear function-*******************************************************/
  /* Sets the contents of output window to null
  /************************************************************************************************/
  $numberButtonElementClear.on("click", function(){
    $outputTextElement.text("");
    flag=false;
    outputTotal = "";
    $outputTextElement.text(outputTotal);
    /* reset outputMore more because output string length now 0  */
    outputMore=true;
    operatorOK=false;
  });
  /************************* Decimal function-**************************************************************/
  /* when decimal button clicked, the decimal is added to output window and then windowReset and oneDecimal set to false to block auto clear and more decimals in same operand.
  /*********************************************************************************************************/
  $numberButtonElementDecimal.on("click", function(){
    /* need to check if output display needs to be cleared */
    checkReset();
    /* need to check length of output string to see if maximum  */
    overFlow();
    if (oneDecimal === true && outputMore === true){
      //   adding  "." to $outputTextElement
      outputTotal += ".";
      $outputTextElement.text(outputTotal);
/* setting windowReset to false-  do not want to auto clear at next number button because still creating an expression */
      windowReset = false;
      /* now have a decimal, no more in this operand   */
      oneDecimal = false;
      operatorOK=false;
    }
  });
  /************************* Operator functions-*******************************************************
  as each operator button is clicked, the corresponding operator is added to the output string and then flag and reset set to false to block more operators and auto clear
  /****************************************************************************************************/




  $numberButtonElementAddition.on("click", function(){
    /* need to check length of output string to see if maximum  */
    overFlow();
    if (flag === true && outputMore === true){
      //   adding  "+" to $outputTextElement
      outputTotal += "+";
      $outputTextElement.text(outputTotal);
      /* setting flag to false-  already have operator now, dont do it again */
      flag=false;
      /* setting windowReset to false-  do not want to auto clear at next number button because still creating an expression */
      windowReset = false;
      /* now ok to have a decimal                */
      oneDecimal = true;
      operatorOK=false;
      /* need to set outputMore to true in case a new expression begins */
    } else {
      outputMore = true;
    }
  });
  $numberButtonElementSubtract.on("click", function(){
    /* need to check length of output string to see if maximum  */
    overFlow();
    if (flag === true && outputMore === true){
      //   adding  "-" to $outputTextElement
      outputTotal += "-";
      $outputTextElement.text(outputTotal);
      /* setting flag to false-  already have operator now, dont do it again */
      flag=false;
      /* setting windowReset to false-  do not want to auto clear at next number button because still creating an expression */
      windowReset = false;
      /* now ok to have a decimal                */
      oneDecimal = true;
      operatorOK=false;
      /* need to set outputMore to true in case a new expression begins */
    } else {
      outputMore = true;
    }
  });
  $numberButtonElementMultiply.on("click", function(){
    /* need to check length of output string to see if maximum  */
    overFlow();
    if (flag === true && outputMore === true){
      //   adding  "*" to $outputTextElement
      outputTotal += "*";
      $outputTextElement.text(outputTotal);
      /* setting flag to false-  already have operator now, dont do it again */
      flag=false;
      /* setting windowReset to false-  do not want to auto clear at next number button because still creating an expression */
      windowReset = false;
      /* now ok to have a decimal                */
      oneDecimal = true;
      operatorOK=false;
      /* need to set outputMore to true in case a new expression begins */
    } else {
      outputMore = true;
    }
  });
  $numberButtonElementDivide.on("click", function(){
    /* need to check length of output string to see if maximum  */
    overFlow();
    if (flag === true && outputMore === true){
      //+++++   $outputTextElement.textContent += "/";
      outputTotal += "/";
      $outputTextElement.text(outputTotal);
      /* setting flag to false-  already have operator now, dont do it again */
      flag=false;
      /* setting windowReset to false-  do not want to auto clear at next number button because still creating an expression */
      windowReset = false;
      /* now ok to have a decimal                */
      oneDecimal = true;
      operatorOK=false;
      /* need to set outputMore to true in case a new expression begins */
    } else {
      outputMore = true;
    }
  });
  /************************* Number Button functions-*******************************************************
  /* As each number button is clicked, the text content of the button is concatenated to the output string */
  /********************************************************************************************************/
  $numberButtonElement0.on("click", function(){
    /* need to check if output display needs to be cleared */
    checkReset();
    /* need to check length of output string to see if maximum  */
    overFlow();
    if (outputMore === true){
      //++++   $outputTextElement.textContent += 0;
      outputTotal += "0";
      $outputTextElement.text(outputTotal);
      /* its ok now to hit equal button */
      flag=true;
    }
  });
  $numberButtonElement1.on("click", function(){
    /* need to check if output display needs to be cleared */
    checkReset();
    /* need to check length of output string to see if maximum  */
    overFlow();
    if (outputMore === true){
      outputTotal += "1";
      $outputTextElement.text(outputTotal);
      /* its ok now to hit equal button */
      flag=true;
    }
  });
  $numberButtonElement2.on("click", function(){
    /* need to check if output display needs to be cleared */
    checkReset();
    /* need to check length of output string to see if maximum  */
    overFlow();
    if (outputMore === true){
      outputTotal += "2";
      $outputTextElement.text(outputTotal);
//+++++      $outputTextElement.textContent += 2;
      /* its ok now to hit equal button */
      flag=true;
    }
  });
  $numberButtonElement3.on("click", function(){
    /* need to check if output display needs to be cleared */
    checkReset();
    /* need to check length of output string to see if maximum  */
    overFlow();
    if (outputMore === true){
      outputTotal += "3";
      $outputTextElement.text(outputTotal);
//++++++      $outputTextElement.textContent += 3;
      /* its ok now to hit equal button */
      flag=true;
    }
  });
  $numberButtonElement4.on("click", function(){
    /* need to check if output display needs to be cleared */
    checkReset();
    /* need to check length of output string to see if maximum  */
    overFlow();
    if (outputMore === true){
      //+++++++   $outputTextElement.textContent += 4;
      outputTotal += "4";
      $outputTextElement.text(outputTotal);
      /* its ok now to hit equal button */
      flag=true;
    }  });
  $numberButtonElement5.on("click", function(){
    /* need to check if output display needs to be cleared */
    checkReset();
    /* need to check length of output string to see if maximum  */
    overFlow();
    if (outputMore === true){
  //+++++++++    $outputTextElement.textContent += 5;
      outputTotal += "5";
      $outputTextElement.text(outputTotal);
      /* its ok now to hit equal button */
      flag=true;
    }
  });
  $numberButtonElement6.on("click", function(){
    /* need to check if output display needs to be cleared */
    checkReset();
    /* need to check length of output string to see if maximum  */
    overFlow();
    if (outputMore === true){
  //+++++++    $outputTextElement.textContent += 6;
      outputTotal += "6";
      $outputTextElement.text(outputTotal);
      /* its ok now to hit equal button */
      flag=true;
    }
  });
  $numberButtonElement7.on("click", function(){
    /* need to check if output display needs to be cleared */
    checkReset();
    /* need to check length of output string to see if maximum  */
    overFlow();
    if (outputMore === true){
      //++++   $outputTextElement.textContent += 7;
      outputTotal += "7";
      $outputTextElement.text(outputTotal);
      /* its ok now to hit equal button */
      flag=true;
    }
  });
  $numberButtonElement8.on("click", function(){
    /* need to check if output display needs to be cleared */
    checkReset();
    /* need to check length of output string to see if maximum  */
    overFlow();
    if (outputMore === true){
      //++++++++++++$outputTextElement.textContent += 8;
      outputTotal += "8";
      $outputTextElement.text(outputTotal);
      /* its ok now to hit equal button */
      flag=true;
    }
  });
  $numberButtonElement9.on("click", function(){
    /* need to check if output display needs to be cleared */
    checkReset();
    /* need to check length of output string to see if maximum  */
    overFlow();
    if (outputMore === true){
  //+++++++++++    $outputTextElement.textContent += 9;
      outputTotal += "9";
      $outputTextElement.text(outputTotal);
      /* its ok now to hit equal button */
      flag=true;
    }
  });
  /* When Equal is clicked, the solution to the expression is displayed in output window
   using the Eval function to convert the entire string into a numeric expression to produce the answer */
  $numberButtonElementEqual.on("click", function(){
            if (flag === true){
              // converting string to numeric which solves expression too
              var answer = eval(outputTotal);
              // restrict answer decimals to only two
              var hold = answer.toFixed(2);
              // convert numeric answer back to string
              outputTotal = hold.toString();
              $outputTextElement.text(outputTotal);
              /* windowReset is set to true to set up auto clear when begininng a new expression  */
              windowReset = true;
              // operatorOK reset because may begin new expression so operator is ok
              operatorOK = true;
              // no decimals allowed to be added to answer because might have one already
              oneDecimal = false;
            }
  });
})
