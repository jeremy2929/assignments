var $ = require("jquery");
$(function(){
  // begin a loop to count from 1 to 100
  for (var i =1; i<101;i++){
    // assign a value for remainder after division by 3
    var x = i%3;
    // assign a value for remainder after division by 5
    var y = i%5;
    // default value of output is value of i
    var output =i;
    // assign appropiate value to output if divisible by 3 with no remainder
    if (x===0){output="Fizz"}
    // assign appropiate value to output if divisible by 5 with no remainder
    if (y===0){output="Buzz"}
    // assign appropiate value to output if both divisible by 3 and 5 with no remainder, and overriding any previous assignment
    if (x===0 && y===0){output="FizzBuzz"}
    // display the value of output
    console.log(output);
  }
})
