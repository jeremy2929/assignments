// PART 0: Write a function called squareDance() that squares each number in an array.
function squareDance(givenArray){
    for (var i=0; i < givenArray.length; i++){
        // Hold a reference to current number
        var currentNumber = givenArray[i];
        // square the current number and set it back (replace existing) into array
          givenArray[i] = Math.pow(currentNumber, 2);
    }
   return givenArray;

}
console.assert(squareDance([1, 2])[1] === 4)
console.assert(squareDance([5,10,15])[2] === 225)
console.assert(squareDance([3,6,9,3])[0] === 9)

// PART 1: write a function called nicer(). It should clean up the language in its input sentence.
function nicer(sentenceString){
      var badWordArray = ["heck", "darn", "crappy", "dang"]
      var sentenceArray = sentenceString.split(" ");
      var badWord
      for (i=0; i < badWordArray.length; i++){
        badWord = sentenceArray.indexOf(badWordArray[i]);
        if (badWord != -1){
          sentenceArray.splice(badWord,1);
        }
      }
      newSentence = sentenceArray.join(" ");
      return newSentence;
}
console.assert(nicer("dad get the heck in here and bring me a darn sandwich.") === "dad get the in here and bring me a sandwich.")

console.assert(nicer("here son, your crappy sandwich is on the dang plate.") === "here son, your sandwich is on the plate.")

// PART 2: write a function called capitalizeAll(). It should take as input a sentence and capitalize the first letter of every word in the sentence.
/* first, bring in the string sentence
   convert string to array
   identify begininng of each word
   use a function to convert the character to upper case
   write new character back into array
   convert array back to text and return output */

function capitalizeAll(sentence){
  var sentenceArray = sentence.split(" ");
  var newChar = "";
  var newWord = "";
    var finalSentence = "";
  for (var i = 0; i < sentenceArray.length; i++){
    var word = sentenceArray[i];
    newWord = word.split("");
    newChar = newWord[0].toUpperCase();
    newWord[0] = newChar;
    sentenceArray[i] = newWord.join("")
  }
  finalSentence = sentenceArray.join(" ");
  return finalSentence;
}
console.assert(capitalizeAll('every day is like sunday.') === 'Every Day Is Like Sunday.')



// PART 3: write a function called properSentences(). It should take as input a string and capitalize the first letter of every sentence in that string. (For our purposes, all sentences will end with periods. Write one that works with ? and ! and receive a gratifying high five, right on the hand!)

function capWord(str){
  strArray = str.split("");
  strArray[0] = strArray[0].toUpperCase();
  str = strArray.join("");
  return str;
}
function properSentences(paraString){
  var paraArray = paraString.split(" ")
  var chk = true;
  for (var i = 0; i < paraArray.length; i++){
      text = paraArray[i];
      if (chk === true){
        paraArray[i] = capWord(text);
        chk = false;
      }
      var textEnd = text.length-1;
      if (text[textEnd] === "." || text[textEnd] === "?" || text[textEnd] === "!"){
        chk = true;
      }
  }
  paraString = paraArray.join(" ");
  return paraString;
}


var paragraph = 'it was a fine morning! the wine was good? light slanted in through the cafe window.'

console.assert(properSentences(paragraph) === "It was a fine morning! The wine was good? Light slanted in through the cafe window.")

// PART 4: write a function called iPutTheFunIn(). It should take a string as input. The output should be a copy of the original string with the word 'fun' inserted into the center of the string.
function iPutTheFunIn(text){
  var textArray = text.split(",");
  var textLength = text.length;
  var halfLength = parseInt(textLength/2) -1;
  var newBuild = "";
  for (var i = 0; i < textLength; i++){
    newBuild += text[i];
    if (i === halfLength){
      newBuild += "fun";
    }
  }
  return (newBuild);
}


console.assert(iPutTheFunIn("funerary") === "funefunrary")
console.assert(iPutTheFunIn("reds") === "refunds")

// PART 5: write a function called pipeline(). it should take three inputs: (1) a starting value, (2) a function, and (3) another function. it should use functions (2) and (3) on the starting value, one after the other, and return a new value that has been processed by both function (2) and function (3).

// the following three tests all correspond to the pipeline() function.

// test 1
var paragraph = 'dad bring your crappy self in here. i want a dang sandwich.'

console.assert(pipeline(paragraph,nicer,properSentences) === "Mom bring your self in here. I want a sandwich.")

// test 2
var squareNum = function(n){
    return n * n
}

var addOne = function(n) {
    return n + 1
}

console.assert(pipeline(7,squareNum,addOne) === 50)

// test 3
var exclaimAll = function(arr) {
    var newArr = []
    for (var i = 0; i < arr.length; i ++) {
        newArr.push(arr[i] + '!')
    }
}

var result = pipeline([10,20,30],squareDance,exclaimAll)
console.assert(result[1] === "400!")
console.assert(result[2] === "900!")
