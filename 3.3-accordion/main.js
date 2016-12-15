/* This script links to Jquery to call a library of functions.
   The script will display a list planes and if one is clicked, will
   expand a window below that plane to provide a description. If a second
   plane in list is clicked, then the first description fades away and the new
   description will expand. Below the list is an image box that will
   slideshow through 4 images of planes locally stored. The original URLs
   provided would give 503 error on internet    */
//
// This is given object to create array of links to 4 different images
var carouselImages = [
  {
    // commented out original URL because 503 error
    image_url: //'http://interfacelift.com/wallpaper/Debbfb5b/03966_upondescent_1280x720.jpg',
    'image1.jpg',
    title: 'Upon Descent',
    photographer_id: 'Phil2001'
  },
  {
    // commented out original URL because 503 error
    image_url: //'https://interfacelift.com/wallpaper/7yz4ma1/03965_sunsetinthecascades_1280x720.jpg',
    'image2.jpg',
    title: 'Sunset in the Cascades',
    photographer_id: 'smpoutdoors'
  },
  {
    // commented out original URL because 503 error
    image_url: //'https://interfacelift.com/wallpaper/7yz4ma1/03958_seljalandsfossiceland_1280x720.jpg',
    'image3.jpg',
    title: 'Seljalandsfoss, Iceland',
    photographer_id: 'Robin Kamp'
  },
  {
    // commented out original URL because 503 error
    image_url: //'https://interfacelift.com/wallpaper/7yz4ma1/03950_godsrays_1280x720.jpg',
    'image4.jpg',
    title: 'Gods Rays',
    photographer_id: 'illuminati'
  }
];
// this anonymous function defined by Jquery waits until document fully loads
$(function(){
  // declare a variable to link to HTML elements
  var $quotesElements = $("[data-js='quotes']");
  // using the .on function of Jquery to perform action when a 'click' occurs
  $quotesElements.on("click",function(e){
    // declaring a new variable and assigning what element was clicked
    var $clickedQuotes = $(this);
    // using filter function to search for any previous 'quoteExpand' classes to remove them
    $quotesElements.filter(".quoteExpand").removeClass("quoteExpand");
    // adding 'quoteExpand' class to the element clicked
    $clickedQuotes.addClass("quoteExpand");
  });

  // declaring variable for image to be shown
  var imageShow = "";
  // declare a variable to link to HTML elements
  var $carouselElement = $("[data-js='carouselImage']");
  // declaring a variable for a counter
  var i = 1;
  // creating click event using .on function of Jquery
  $carouselElement.on("click",function(e){
      // Reset i to 0 if over 3 to scroll back through images
      if (i > 3){i = 0};
      // assign the 'image_url' value of carouselImages[array] to imageShow
      imageShow = carouselImages[i].image_url
      // insert value of imageShow into the 'src' attribute of image element
      $carouselElement.attr("src",imageShow);
      // increment i for next image in carouselImages[array]
      i++;
  });
});
