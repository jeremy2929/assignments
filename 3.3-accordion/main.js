$(function(){
  var $quotesElements = $("[data-js='quotes']");
  $quotesElements.on("click",function(e){
    var $clickedQuotes = $(this);
    console.log ($clickedQuotes);
    $quotesElements.filter(".quoteExpand").removeClass("quoteExpand");
    $clickedQuotes.addClass("quoteExpand");


  });

});
