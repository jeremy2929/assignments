var $ = require("jquery");
$(function(){
    var $body = $("body");
    var $buttonNumeric1 = $body.find("[data-js='buttonNumeric1']");
    var menuItems = {
      1: "numeric1",
      2: "numeric2",
      3: "evalFunction",
      8: "api-weather"
      }
    $buttonNumeric1.on("click",function(){
      var $clickedElement = $(this);
      var altValue = $clickedElement.attr("id");
      var numj = menuItems[altValue];
      var button = require("./"+numj);
    });
})
