var $=require("jquery");
var modal=require("./modal");
$(function(){
  var $body=$("body");
  var $indexElement=$body.find("[data-js='indexHTML']");
  var $imageElement=$body.find("[data-js='imageHTML']");
  var $modalElement=$body.find("[data-js='modalHTML']");
  var $titlePhotoElement=$body.find("[data-js='titlePhotoHTML']");
  var $backButtonElement=$body.find("[data-js='backButton']");
  var $photoImageElement=$body.find("[data-js='photoHTML']");


  $imageElement.on("click",function(e){
    var $clickedElement=$(this);
    var srcImage=$clickedElement.attr("src");
    $photoImageElement.attr("src",srcImage);

    var altImage=$clickedElement.attr("alt");
    $titlePhotoElement.text(altImage);


  //  var altImage = $clickedImageElement.attr("alt");
  //  $photoImageElement.attr("alt",altImage);


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
