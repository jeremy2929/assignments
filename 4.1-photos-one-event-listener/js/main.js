/* This script will display one page of thumbnails of images that the user
  can click on to view the image in a larger view on another page, using one event
  listener for all images  */
var $=require("jquery");
var modal=require("./modal");
$(function(){
  var $body=$("body");
  // variable for container HTML for thumbnail image
  var $indexElement=$body.find("[data-js='indexHTML']");
  // variable for HTML of thumbnail image
  var $imageElement=$body.find("[data-js='imageHTML']");
  // variable for modal image HTML
  var $modalElement=$body.find("[data-js='modalHTML']");
  // variable for HTML title of thumbnail image
  var $titlePhotoElement=$body.find("[data-js='titlePhotoHTML']");
  // variable to HTML of modal Back backButton
  var $backButtonElement=$body.find("[data-js='backButton']");
  // variable for image HTML of modal
  var $photoImageElement=$body.find("[data-js='photoHTML']");
  // click event for cilcking a thumbnail
  $imageElement.on("click",function(e){
    var $clickedElement=$(this);
    // storing value of thumbnail image clicked so can insert into modal HTML
    var srcImage=$clickedElement.attr("src");
    // inserting image source into modal
    $photoImageElement.attr("src",srcImage);
    // tting value of title of thumbnail clicked
    var altImage=$clickedElement.attr("alt");
    // inserting photo title into modal
    $titlePhotoElement.text(altImage);
    // swapping classes of first page to hide it
    $indexElement.removeClass("indexPageShow");
    $indexElement.addClass("indexPageNoShow");
    // swapping classes of second page to show it
    $modalElement.removeClass("photoNoPage");
    $modalElement.addClass("photoPage");
  });
  // click event for Back Button on modal page
  $backButtonElement.on("click",function(e){
      // swapping classes of modal page to hide it
      $indexElement.removeClass("indexPageNoShow");
      $indexElement.addClass("indexPageShow");
      // swapping classes of first page to show it.
      $modalElement.removeClass("photoPage");
      $modalElement.addClass("photoNoPage");
  });
});
