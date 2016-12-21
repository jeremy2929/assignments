var $ = require("jquery");
var modal = require("./modal");

$(function(){
  var $body = $("body");
  var $indexElement = $body.find("[data-js='indexHTML']");
  var $modalElement = $body.find("[data-js='modalHTML']");
  var $imageElement = $body.find("[data-js='imageHTML']");
  var $backButtonElement = $body.find("[data-js='backButton']");
  $imageElement.on("click",function(e){
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
