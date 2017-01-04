var $ = require("jquery");
var numericFunctions = function(){
  alert("Numeric functions here in pop up box");
}
var stringFunctions = function(){
  alert("String functions here in pop up box");
}
$(function(){
    var $body = $("body");
    // HTML reference for buttons clicked on main page
    var $buttonNumeric1 = $body.find("[data-js='buttonNumeric1']");

  /*  @TODO use this objcet to run functions based on selection (selection 6)
            find out how to pass jQuery to other JS files (selections 5,6,7)

      var menuItems = {
      5: "numeric2",
      6: numericFunctions(),
      7: "evalFunction",
      8: "api-weather"
      }

      */

    // click event for all buttons
    $buttonNumeric1.on("click",function(){
      var $clickedElement = $(this);
      // find which button clicked
      var idValue = $clickedElement.attr("id");
        if (idValue==="6"){
          numericFunctions();
        }
        if (idValue==="7"){
          stringFunctions();
        }

//      var menuValue= typeof(menuSelection);
//      console.log("menu=",menuValue);
  //    if (menuValue === "string"){
  //        var button = require("./"+menuSelection);
  //    }

    });  //closing click event for buttons
})
