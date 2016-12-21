var $ = require ('juery');
 $(function(){
   var body =$("[data-js='body']");
   var $thumbnailElement = $body.find("[data-js='thumbnail']");
   var $modalImageElement = $body.find("[data-js='modalImage']");
   var $thumbnailImageElement = $body.find("[data-js=]");
   var $backButtonElement = $body.find("[data-js='backButton']");
   $thumbnailElement.on("click", function(e){
     $modalElement.addClass("modal--ShowImage");
     /* step 1 */
     var $clickedThumbnailElement = $(this);
     /* sep 2 */
     var $clickedImageElement = $clickedThumbnailElement.find("[data-js='thumbnailImage']");
     /* step 3 */
     var srcOfClickedThumbnailImage = $clickedImageElement.atrr("src");
     var altOfClickedThumbnailImage = $clickedImageElement.attr("alt");
     /* step 4 */
     $modalImageElement.attr("src",srcOfClickedThumbnailImage);
     $modalImageElement.attr("alt",altOfClickedThumbnailImage);
   });
   $backButtonElement.on("click", function(e)){
      $modalElement.removeClass("modal--ShowImage");
   }
 })


 // RARELY would u ever need a CLICK event inside another CLICK event
