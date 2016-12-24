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
var $ = require("jquery");
var $body = $("body");
var $buttonClickedElement = $body.find("[data-js='numberButton']");
// declaring variable for output window, setting to null
var $outputTextElement=$body.find("[data-js='outputText']");
$outputTextElement.text(null);
var outputTotal="";
/* when flag is false, only accepts number, equal sign, or clear
   when flag is true, only accepts operator
   when windowReset is true, need to auto clear output window for next calculation
   when oneDecimal is true, can enter decimal. If false, then no more decimals
   when outputMore is false, can not enter more numbers because window is full
   when operatorOK is true, allows operator, otherwise not    */
var flag=false;
var windowReset=false;
var oneDecimal=true;
var outputMore=true;
var operatorOK=false;
//
// function to check if output window should be auto cleared for new calculation
function checkReset(){
   if (windowReset===true){
       // setting output display to null to clear it
       outputTotal="";
       $outputTextElement.text(outputTotal);
       // set windowReset back to false because output window now cleared
       windowReset=false;
       // set oneDecimal to true because output window ready for number or decimal
       oneDecimal=true;
       // can have more number output
       outputMore=true;
   }
}
// function to check if output string larger than 10 characters
function overFlow(){
  //   finding numeric of $outputTextElement
  output=$outputTextElement.text();
  if (output!=""){
    outputLength=output.length + 1;
    if (outputLength > 10){
     // block any more for output window
     outputMore=false;
    }
  }
}
$buttonClickedElement.on("click", function(){
  // set a variable for which button clicked
  var $clickedButtonElement=$(this);
  // set an easier variable to use for content of button clicked
  var button=$clickedButtonElement.text();
  // need button variable in numeric format to test 0-9 at NUMBER section
  var buttonNumeric=parseInt(button);
  //
  // CLEAR button  ********************************************************
  if (button==="C"){
    $outputTextElement.text("");
    outputTotal="";
    $outputTextElement.text(outputTotal);
    // cant start new empty window with an operator
    flag=false;
    // reset outputMore more because output string length now 0
    outputMore=true;
  }
  //
  // OPERATOR buttons *****************************************************
  if (button==="+" || button==="-" || button==="*" || button==="/"){
    overFlow();
    if (flag===true && outputMore===true){
      //   adding  "+" to $outputTextElement
      outputTotal+=button;
      $outputTextElement.text(outputTotal);
      // setting flag to false-  already have operator now, dont do it again
      flag=false;
      // setting windowReset to false-  do not want to auto clear at next number button because still creating an expression
      windowReset=false;
      // now ok to have a decimal
      oneDecimal=true;
      // need to set outputMore to true in case a new expression begins
    } else {
      outputMore=true;
    }
  }
  //
  // NUMBER buttons *****************************************************
  if (buttonNumeric>-1 && buttonNumeric<10){
    if (windowReset===true){checkReset();}
    //  need to check length of output string to see if maximum
    overFlow();
    if (outputMore===true){
      outputTotal+=button;
      $outputTextElement.text(outputTotal);
      //  its ok now to hit equal button
      flag=true;
    }
  }
  //
  // DECIMAL button *****************************************************
  if (button==="."){
    // need to check if output display needs to be cleared
    checkReset();
    // need to check length of output string to see if maximum
    overFlow();
    if (oneDecimal === true && outputMore === true){
      //   adding  "." to $outputTextElement
      outputTotal+=button;
      $outputTextElement.text(outputTotal);
      //  setting windowReset to false-  do not want to auto clear at next number button because still creating an expression
      windowReset=false;
      // now have a decimal, no more in this operand
      oneDecimal=false;
      // no operator allowed, need an operand
      flag=false;
    }
  }
  //
  // EQUAL button *****************************************************
  if (button==="="){
    if (flag===true){
      // converting string to numeric which solves expression too
      var answer=eval(outputTotal);
      // restrict answer decimals to only two
      var hold=answer.toFixed(2);
      // convert numeric answer back to string
      outputTotal=hold.toString();
      $outputTextElement.text(outputTotal);
      // windowReset is set to true to set up auto clear when begininng a new expression
      windowReset=true;
      // flag true because ok to add opertor to answer
      flag=true;
      // no decimals allowed to be added to answer because might have one already
      oneDecimal=false;
    }
  }
});
