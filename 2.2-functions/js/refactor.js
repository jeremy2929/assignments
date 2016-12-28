//////////////////////////////////////////////////
//////////////////////////////////////////////////
//     ___  ___________  _______________  ___   //
//    / _ \/ __/ __/ _ |/ ___/_  __/ __ \/ _ \  //
//   / , _/ _// _// __ / /__  / / / /_/ / , _/  //
//  /_/|_/___/_/ /_/ |_\___/ /_/  \____/_/|_|   //
//                                              //
// The below assignment has 10 questions with 1 //
// bonus question. Each question has a specific //
// area for you to put your answer. That is the //
// only part that should be changed. Do not     //
// edit the code in the question. Your answers  //
// should be valid javascript and any comments  //
// should be commented out. When finished this  //
// entire document should be valid javascript.  //
//                                              //
//////////////////////////////////////////////////
//////////////////////////////////////////////////

// 1. --------------------------------------------

// This is a named function, convert it
// to a variable containing an anonymous
// function


function doSomethingCool() {
  console.log("Something Cool!");
}


// Put your answer below -------------------------
var hello = function(){
  console.log("Something Anonymous!");
}
hello();


// -----------------------------------------------

//////////////////////////////////////////////////
//////////////////////////////////////////////////

// 2. --------------------------------------------

// Here we are using setTimeout to call a function
// after 2 seconds. Refactor to use an anonymous
// function

/*
function sayHi() {
  alert("Hello, World!");
}
setTimeout(sayHi, 2000);
*/

// Put your answer below -------------------------
var hiFunction=function(){
  setTimeout(function(){
  alert("I've been waiting 2000 milliseconds to say: Hello, World!");
  },2000);
}
hiFunction();

// -----------------------------------------------

//////////////////////////////////////////////////
//////////////////////////////////////////////////

// 3. --------------------------------------------

// The code below will log the letter twice. What
// is the order that will be logged?

// [a]: x then y then z
// [b]: y then z
// [c]: z then y
// [d]: x then z

// Please explain your answer.

var letter = "x";

setTimeout(function(){
  letter = "y";
  console.log("The letter is", letter);
}, 1);

letter = "z";
console.log("The letter is", letter);

// Put your answer below -------------------------
/* Answer is C. The variable LETTER is originally "x" but is never used in console.log.
Then the value of LETTER is changed to "y" and "z", but the "y" code has a delay of one second.
So the "z" value of LETTER will execute immediately, and then the "y" value of LETTER will execute
one second later.   */


// -----------------------------------------------

//////////////////////////////////////////////////
//////////////////////////////////////////////////

// 4. --------------------------------------------

// The function below reverses a string. The body
// of the function is 5 lines of code. Refactor
// this function to do the same thing with 1 line

var reverseStr = function(str) {
  var arr;
  arr = str.split("");
  arr = arr.reverse();
  str = arr.join("");
  return str;
};

// Put your answer below -------------------------
var text = "Hello";
function reverseString(string){
  return string.split("").reverse().join("");
}

// -----------------------------------------------

//////////////////////////////////////////////////
//////////////////////////////////////////////////

// 5. --------------------------------------------

// The function below takes the spanish word for
// the colors red, white, blue, green, and black
// and returns the hex code for that color.
// Refactor this function to use an object
// instead of an if/else statement.

var spanishColor = function(colorName) {
  if (colorName.toLowerCase() === "rojo") {
    return "#ff0000";
  }
  else if (colorName.toLowerCase() === "blanco") {
    return "#ffffff";
  }
  else if (colorName.toLowerCase() === "azul") {
    return "#0000ff";
  }
  else if (colorName.toLowerCase() === "verde") {
    return "#00ff00";
  }
};

// Put your answer below -------------------------
var colorName="verde"
var spanishColor = {
  rojo: "#ff0000",
  blanco: "#ffffff",
  azul: "#0000ff",
  verde: "#00ff00"
}
var hexValue=spanishColor[colorName];

// -----------------------------------------------

//////////////////////////////////////////////////
//////////////////////////////////////////////////

// 6. --------------------------------------------

// Below is a variable *declaration* and an
// *assignment* in a single line of code.
// Break it up so that the declaration and
// assignment are happening on 2 seperate lines.

var foo = "bar";

// Put your answer below -------------------------
var foo;
foo = "bar";


// -----------------------------------------------

//////////////////////////////////////////////////
//////////////////////////////////////////////////

// 7. --------------------------------------------

// The function `callTenTimes` takes an argument
// that is another function and will call that
// function 10 times. Refactor this into another
// function called `callNtimes` that allows you
// to specify a number of times to call the given
// function.

var callTenTimes = function(callback) {
  var range = _.range(10);
  _.each(range, callback);
};

// Put your answer below -------------------------
var freq = 5
var callNtimes = function(callback) {
  var range = _.range(freq);
  _.each(range, callback);
};

// -----------------------------------------------

//////////////////////////////////////////////////
//////////////////////////////////////////////////

// 8. --------------------------------------------

// Below is the beginning code for an awesome game
// but already suffers a vulnerability that allows
// the savvy user to open the console and adjust
// the score to whatever they want. Refactor the
// code to protect from this.

// HINT: "global scope"

var score = 0;

var increaseScore = function() {
  score++;
};

var decreaseScore = function() {
  score--;
};

// Put your answer below -------------------------
var totalScore = 5;
function increaseScore() {
  totalScore++;
  console.log("here",totalScore);
  return totalScore;
}
function decreaseScore() {
  totalScore--;
  return totalScore;
}

increaseScore
increaseScore
decreaseScore
console.log("new score=",totalScore);
// -----------------------------------------------

//////////////////////////////////////////////////
//////////////////////////////////////////////////

// 9. --------------------------------------------

// The below function does not work. The variable
// twoPlusTwo gets set to `undefined`. Refactor
// the function to make it work.

var addNumbers = function(numberA, numberB) {
  console.log(numberA + numberB);
};

var twoPlusTwo = addNumbers(2,2);
// Put your answer below -------------------------
var addNumbers = function(numberA, numberB) {
  console.log(numberA + numberB);
  answer=numberA+numberB;
  return answer;
};

var twoPlusTwo = addNumbers(2,2);
console.log("answer=",twoPlusTwo);

// -----------------------------------------------

//////////////////////////////////////////////////
//////////////////////////////////////////////////

// 10. -------------------------------------------

// Below is a snippet of code taken from a racing
// game (not really!) It allows you to accelerate
// the speed by a given amount. The problem is if
// you call the function without specifying an
// amount, it inadvertently sets the speed to NaN
// First write a comment that explains why it was
// setting speed to NaN when no parameter is given
// Then refactor the function to have a default
// amount of 1 if no param is given.

var speed = 0;

var accelerate = function(amount) {
  speed += amount;
};

// Put your answer below -------------------------
// In javascript, anytime a numeric is added to a NaN, it produces a NaN.
var speed = 19;
var accelerate = function(amount) {
  if(isNaN(amount)===true){
    amount=1
  }
  speed+=amount;
};
amount=NaN;
accelerate(amount);
console.log("speed=",speed);
// -----------------------------------------------

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//            ___  ____  _  ____  ______        //
//           / _ )/ __ \/ |/ / / / / __/        //
//          / _  / /_/ /    / /_/ /\ \          //
//         /____/\____/_/|_/\____/___/          //
//                                              //
//////////////////////////////////////////////////
//////////////////////////////////////////////////

// The function below allows you to call another
// function at a later time. It takes 2 params, an
// amount of miliseconds and a function. It will
// call the function that many miliseconds later.
// Refactor it so that is has a default timeout.

// This is more advanced than the default param on
// the accelerate function. This is because there
// is another parameter to consider.

// When setting the timeout, the function needs to
// work like this:

//     callLater(1000, function(){
//       ...
//     });

// When using the default timeout, the function
// needs to work like this:

//     callLater(function(){
//       ...
//     });

var callLater = function(timeout, callback) {
  setTimeout(callback, timeout);
};

// Put your answer below -------------------------
// isNum not working, need to validate if timeout is number or not
// what if function expects two arguments but only one is passed?
var display = function(pause){
  console.log("Display after pause of",pause+" seconds.");
}
var callLater = function(timeout, callback) {
  console.log("callback=",callback);
  console.log("timeoutNaN?=",timeout.isNumeric);
  if (timeout.isNum!=true){callback=timeout}
  if (isNaN(timeout)===true){timeout=3000}
  setTimeout(callback, timeout, timeout);
};
callLater(display);


// -----------------------------------------------

//////////////////////////////////////////////////
