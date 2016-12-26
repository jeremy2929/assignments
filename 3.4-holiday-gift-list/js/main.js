/*  This script creates a GIFTS TO BUY box for user to enter items and amounts to add to a gift list. The user must eneter item description follwed by a comma followed by the amount then click ADD to add item to list. Once the item is in list, user has option to click check box to strike through the item description and amount. A cumulative TOTAL is displayed for all items in list, whether checked off or not, at the bottom.
___ Create template files HTML, CSS, JS
    ___ Draw a wire frame based on given image
    ___ name each element in wire frame
    ___ build HTML based on wire frame and names
          main box area
          list area
            title
            textarea with submit element
            articles for each item on list
                check box (circle)
                item name
                item $ amount
            'total' element at bottom
                TOTAL =
                $ amount
    ___ create CSS selectors to arrange and design elements
          main box area
            grey
            30 px border?
          list area
              white background
            title
              color black
              bold- light
              font size 50px?
              aligned center
              text = "GIFTS TO BUY", all uppercase
            textarea with submit element
              in a box below title twice size of font size
              color of text black
              font size 70% of title
              submit button to right
              submit button green
              submit text ADD in white, centered
              font size of ADD 50% of title
              width of submit button equal to amount column
            articles for each item on list
                box is same hieght width as textarea
                check box (circle) on left in box before item description
                  height of check box equal to font size
                  margin left of check box maybe 10px?
                item name
                  color is black until checked, then same green as submit
                  a checked item has line through text and amount
                  font size 70% of title
                item $ amount- to right of item description in column
                                under submit button
                               color is black until checked then
                                  green like submit with line thru
            'total' element at bottom
                width is same as articles, but height is 75% of article box
                TOTAL =
                  black text
                  font size 25% of title
                $ amount
                  black text
                  font size 25% of title
    ___ build javascript to add functionality
           on event for SUBMIT button
                move contents of textarea into item list
                add checkbox for it
                include amt to be added to total
           on event for CHECKBOX of an item
                strike thru text of item description
                strike thru text of amount
    */
    // Using jquery to call function to wait for document load
$(function(){
  // declaring variable to reference body element of HTML
  var $body = $("body");
  // declaring a varaible to use for total amount as each item added
  var totalAmount = 0;
  // declaring variable for HTML element that contains item description  to be added to list
  var $itemInputElement = $body.find("[data-js='itemInput']");
  // declaring variable for HTML element that contains elements for items in list
  var $articleElementAdd = $body.find("[data-js='itemArticle']");
  // declaring variable for HTML element that contains TOTAL at bottom of list
  var $pElement = $body.find("[data-js='total']");
  // declaring variable for HTML element for ADD button
  var $submitButton= $body.find("[data-js='submitButton']");
  // declaring variable for building HTML element for checkbox of added item
  var $checkBoxElement= $body.find("[data-js='checkbox']");
// event listener for when ADD button clicked
  $submitButton.on("click",function(e){
    // assigning value of item added to a holding place
    var itemInput = $itemInputElement.val();
    // converting input text to array to separate text from amount
    var itemInputArray = itemInput.split(",");
    // assigning text part of array to itemDescription variable
    var itemDescription = itemInputArray[0];
    // assigning amount part of array to itemAmount variable
    var itemAmount =itemInputArray[1];
    // converting amount part of input to numeric
    totalAmount += eval(itemAmount);
    // blocking ADD button if nothing entered
    if (itemInput != ""){
      // building HTML element for checkbox
      var $newCheckBoxElement = $("<img>")
        .attr({
          class: "itemsCheckBox",
          "data-js": "checkbox"
        })
      // using empty circle for image of checkbox
      $newCheckBoxElement.attr("src","nocheck.jpg");
      // building HTML element for item description element
      var $newItemsDescriptionElement = $("<text>")
        .attr({
          class: "itemsDescription"
        })
        .text(itemDescription)
      ;
      // building HTML element for item amount element
      var $newItemsAmountElement = $("<text>")
        .attr({
          class: "itemAmount"
        })
        .text("$"+itemAmount)
      ;
      // building HTML element that contains checkbox, description, and amount
      var $newArticleHTML = $("<article>")
        .attr({
          class: "itemsEach"
        })
        // appending all 3 parts to article for item in list
        .append($newCheckBoxElement)
        .append($newItemsDescriptionElement)
        .append($newItemsAmountElement)
      ;
      // inserting new item (article) in top of list
      $articleElementAdd.prepend($newArticleHTML);
      // updating TOTAL amount in the TOTAL HTML element
      $pElement.text("TOTAL   $"+totalAmount);
      // clearing input box for next item
      $itemInputElement.val("");
  }
});
  // event listener for if checkbox of item clicked
  $body.on("click","[data-js='checkbox']",function(e){
    // sriking thru item and amount if checkbox clicked
    $(this).parent("article").attr({class: "itemsStrike"});
    // changing image of empty circle to checked circle
    $(this).attr("src","check.jpg");
  });
});
