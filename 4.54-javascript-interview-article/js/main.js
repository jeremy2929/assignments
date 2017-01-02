var $ = require("jquery");
$(function(){

// *******   question 1 ************************************************
  /*(function (){
    var a = b =5;
  })();
  console.log(b);
*/
  (function(){
    'use strict';
    var a = window.b = 5;
  })();
  console.log("b=",b);
//  console.log('hello'.repeatify(3));

// *******   question 2 ************************************************
  times=3;
  String.prototype.repeatify = String.prototype.repeatify || function(times) {
    var str ='';
    for (var i = 0; i < times; i++) {
      str += this;
    }
    return str;
    console.log("str=",str);
  };
  String.prototype.repeatify;

  // *******   question 3 ************************************************
/* function test() {
    console.log(a);
    console.log(foo());

      var a = 1;
      function foo(){
          return 2;
      }
  }

  test();
  */

  function test(){
    var a;
    function foo() {
      return 2;
    }
    console.log(a);
    console.log(foo());

    a=1;
  }
test();
// *******   question 4 ************************************************
  var fullname = 'John Doe';
  var obj = {
    fullname: 'Colin Ihrig',
    prop: {
      fullname: 'Aurelio De Rosa',
      getFullname: function() {
        return this.fullname;
      }
    }
  };
  console.log(obj.prop.getFullname());
  var test = obj.prop.getFullname;
  console.log(test());
console.log(test.call(obj.prop));

})
