/*  ___ Create template files HTML, CSS, JS
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
$(function(){
  var $body = $("body");

  var $itemInputElement = $body.find("[data-js='itemInput']");
  var $submitButton= $body.find("[data-js='submitButton']");
  var $amountInputElement = $body.find("[data-js='amountInput']");
  var $sectionElementAdd = $body.find("[data-js='itemsSection']")
  $submitButton.on("click",function(e){
    var amountInput = $amountInputElement.val();
    var itemInput = $itemInputElement.val();
    var $newCheckBoxElement = $("<input>")
        .attr({
          class: "itemsCheckBox",
          type: "checkbox"
        })
    ;
    var $newitemsDescriptionElement = $("<text>")
        .attr({
          class: "itemsDescription",
        })
        .text(itemInput)
    ;
    var $newAmountInputElement = $("<p>")
        .attr({
          class: "itemsAmount",
        })
        .text(amountInput)
    ;
    var $newArticleHTML = $("<article>")
        .attr({
          class: "itemsEach"
        })
        .append($newCheckBoxElement)
        .append($newitemsDescriptionElement)
        .append($newAmountInputElement)
    ;
    var $newSectionHTML = $("<section>")
      .append($newArticleHTML)
      ;
    $sectionElementAdd.append($newSectionHTML);
    $itemInputElement.text="";
    $amountInputElement.text("");

  });

});

/*
<section class="itemsList">
    <article class="itemsEach">
      <input class="itemsCheckbox"
            type = "checkbox">
      </input>
      <text class="itemsDescription"> Item name here
      </text>
      <p class="itemsAmount">$nn.nn</p>
    </article>
    <article class="itemsEach">
      <input class="itemsCheckbox"
            type = "checkbox">
      </input>
      <text class="itemsDescription"> Item name here
      </text>
      <p class="itemsAmount">$nn.nn</p>
    </article>
  </section>
*/
