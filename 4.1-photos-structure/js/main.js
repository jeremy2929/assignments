var $ = require("jquery");
var modal = require("./modal");


$(function(){
  var $body = $("body");
  var $indexElement = $body.find("[data-js='indexHTML']");
  var $modalElement1 = $body.find("[data-js='modalHTML1']");
  var $modalElement2 = $body.find("[data-js='modalHTML2']");
  var $modalElement3 = $body.find("[data-js='modalHTML3']");
  var $modalElement4 = $body.find("[data-js='modalHTML4']");
  var $modalElement5 = $body.find("[data-js='modalHTML5']");
  var $modalElement6 = $body.find("[data-js='modalHTML6']");
  var $imageElement1 = $body.find("[data-js='imageHTML1']");
  var $imageElement2 = $body.find("[data-js='imageHTML2']");
  var $imageElement3 = $body.find("[data-js='imageHTML3']");
  var $imageElement4 = $body.find("[data-js='imageHTML4']");
  var $imageElement5 = $body.find("[data-js='imageHTML5']");
  var $imageElement6 = $body.find("[data-js='imageHTML6']");
  var $backButtonElement = $body.find("[data-js='backButton']");
  var $photoImageElement = $body.find("[data-js='photoHTML']");
  $imageElement1.on("click",function(e){
      $indexElement.removeClass("indexPageShow");
      $indexElement.addClass("indexPageNoShow");
      $modalElement1.removeClass("photoNoPage1");
      $modalElement1.addClass("photoPage");
      $backButtonElement.on("click",function(e){
          $indexElement.removeClass("indexPageNoShow");
          $indexElement.addClass("indexPageShow");
          $modalElement1.removeClass("photoPage");
          $modalElement1.addClass("photoNoPage1");
      });
  });
  $imageElement2.on("click",function(e){
      $indexElement.removeClass("indexPageShow");
      $indexElement.addClass("indexPageNoShow");
      $modalElement2.removeClass("photoNoPage2");
      $modalElement2.addClass("photoPage");
      $backButtonElement.on("click",function(e){
          $indexElement.removeClass("indexPageNoShow");
          $indexElement.addClass("indexPageShow");
          $modalElement2.removeClass("photoPage");
          $modalElement2.addClass("photoNoPage2");
      });
  });
  $imageElement3.on("click",function(e){
      $indexElement.removeClass("indexPageShow");
      $indexElement.addClass("indexPageNoShow");
      $modalElement3.removeClass("photoNoPage3");
      $modalElement3.addClass("photoPage");
      $backButtonElement.on("click",function(e){
          $indexElement.removeClass("indexPageNoShow");
          $indexElement.addClass("indexPageShow");
          $modalElement3.removeClass("photoPage");
          $modalElement3.addClass("photoNoPage3");
      });
  });
  $imageElement4.on("click",function(e){
      $indexElement.removeClass("indexPageShow");
      $indexElement.addClass("indexPageNoShow");
      $modalElement4.removeClass("photoNoPage4");
      $modalElement4.addClass("photoPage");
      $backButtonElement.on("click",function(e){
          $indexElement.removeClass("indexPageNoShow");
          $indexElement.addClass("indexPageShow");
          $modalElement4.removeClass("photoPage");
          $modalElement4.addClass("photoNoPage4");
      });
  });
  $imageElement5.on("click",function(e){
      $indexElement.removeClass("indexPageShow");
      $indexElement.addClass("indexPageNoShow");
      $modalElement5.removeClass("photoNoPage5");
      $modalElement5.addClass("photoPage");
      $backButtonElement.on("click",function(e){
          $indexElement.removeClass("indexPageNoShow");
          $indexElement.addClass("indexPageShow");
          $modalElement5.removeClass("photoPage");
          $modalElement5.addClass("photoNoPage5");
      });
  });
  $imageElement6.on("click",function(e){
      $indexElement.removeClass("indexPageShow");
      $indexElement.addClass("indexPageNoShow");
      $modalElement6.removeClass("photoNoPage6");
      $modalElement6.addClass("photoPage");
      $backButtonElement.on("click",function(e){
          $indexElement.removeClass("indexPageNoShow");
          $indexElement.addClass("indexPageShow");
          $modalElement6.removeClass("photoPage");
          $modalElement6.addClass("photoNoPage6");
      });
  });

});
