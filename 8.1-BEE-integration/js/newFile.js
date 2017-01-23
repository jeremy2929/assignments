
var newFile = this;
console.log("the DOM has loaded NOW");

// the keyword var creates private scope
newFile.testButtonElement = document.querySelector("[data-js='testButton']");

newFile.outputElement = document.querySelector("[data-js='output']");
newFile.ontestButtonClick = function(e){
  // set the output to THIS number that was clicked
  var clickedtestElement = e.target;
  newFile.outputElement.innerHTML = clickedtestElement.innerHTML;
  console.log(newFile.outputElement.innerHTML);
}
newFile
    .testButtonElement
    .addEventListener("click", newFile.ontestButtonClick);
