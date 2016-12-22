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

// document.addEventListener("DOMContentLoaded", function (){
$(function(){
    // calling the buuton.js which has all the calculator code
    var button = require("./button.js");
  })
