var $ = require("jquery");
var modal = require("./modal");
$(function(){
  var $body = $("body");
  var $indexElement = $body.find("[data-js='indexHTML']");
  var $imageElement = $body.find("[data-js='imageHTML']");
  var $articleElement=$body.find("[data-js='articleHTML']");
  var $modalElement=$body.find("[data-js='modalHTML']");

  var $backButtonElement = $body.find("[data-js='backButton']");
  var $photoImageElement = $body.find("[data-js='photoHTML']");
  $indexElement.on("click",function(e){
    console.log("clicked");
      $indexElement.removeClass("indexPageShow");
      $indexElement.addClass("indexPageNoShow");
      $modalElement.removeClass("photoNoPage");
      $modalElement.addClass("photoPage");
  });
  $backButtonElement.on("click",function(e){
      $indexElement.removeClass("indexPageNoShow");
      $indexElement.addClass("indexPageShow");
      $modalElement.removeClass("photoPage");
      $modalElement.addClass("photoNoPage");
  });
});
