$(function(){
  var $quotes = $("[data-js='quotes']");
  $quotes.on("click",function(e){
    var $clickedquotes = $(this);
    console.log ($clickedquotes);



  });

});
