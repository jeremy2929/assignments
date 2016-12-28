// Only part I understand is to make this a function
function rovarspraket(text){
  textAsString = text.toString();
  if (textAsString === "0"){return textAsString;}
  var numericLetter = eval(currentLetter)
  console.log("arra=",numericLetter);
  var textArray = textAsString.split("");
  for(var i = 0; i < textArray.length; i++){
    var currentLetter = textArray[i];
        if(currentLetter && currentLetter!= "E"
          && currentLetter != "e"
          && currentLetter != "A"
          && currentLetter != "a"
          && currentLetter != "I"
          && currentLetter != "i"
          && currentLetter != "O"
          && currentLetter != "o"
          && currentLetter != "U"
          && currentLetter != "u")
          {
          var doubleText = currentLetter + "o" + currentLetter;
          textArray.splice(i, 1, doubleText)
          console.log("out=",textArray);
        }
   }
  return textArray.join("");
}
console.assert(rovarspraket("a") === "a")
console.assert(rovarspraket("b") === "bob")
console.assert(rovarspraket("cat") === "cocatot")
console.assert(rovarspraket("javascript") === "jojavovasoscocroripoptot")
console.assert(rovarspraket(0) === "0")
