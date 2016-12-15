/* This script links to Jquery to utilize call a library of functions
   The script will display a list planes and if one is clicked, will
   expand a window blow that plane to provide a description. If a second
   plane is clicked, then the first description fades away and the new
   description will expand */

// this anonymous function defined by Jquery waits until document fully loads
$(function(){
  // declare a variable to link to HTML elements
  var $quotesElements = $("[data-js='quotes']");
  // using the .on function of Jquery to perform action when a 'click' occurs
  $quotesElements.on("click",function(e){
    // declaring a new variable and assigning what element was clicked
    var $clickedQuotes = $(this);
    // using filter function to search for any previous 'quoteExpand' classes to remove them
    $quotesElements.filter(".quoteExpand").removeClass("quoteExpand");
    // adding 'quoteExpand' class to the element clicked
    $clickedQuotes.addClass("quoteExpand");
  });
});
