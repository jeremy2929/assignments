$(function(){
  var $quotesElements = $("[data-js='quotes']");
  $quotesElements.on("click",function(e){
    var $clickedQuotes = $(this);
    console.log ($clickedQuotes);
    $quotesElements.filter(".quoteExpand").animate({height: '20px'}, "fast");
    $quotesElements.filter(".quoteExpand").removeClass("quoteExpand");
    $clickedQuotes.addClass("quoteExpand");
    $clickedQuotes.animate({height: '150px'}, "slow");


  });

});
