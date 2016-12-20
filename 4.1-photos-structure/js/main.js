var $ = require("jquery");
var modal = require("./modal");

$(function(){
  var $body = $("body");
  var $indexElement = $body.find("[data-js='indexHTML']");
  var $modalElement = $body.find("[data-js='modalHTML']");
  var $imageElement = $body.find("[data-js='imageHTML']");
  $imageElement.on("click",function(e){

      $indexElement.filter(".indexPageShow").removeClass("indexPageShow");
      $indexElement.addClass("indexPageNoShow");
      $modalElement.filter(".photoNoPage").removeClass("photoNoPage");
      $modalElement.addClass("photoPage");
  });

  });
