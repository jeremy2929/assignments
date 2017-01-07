// Calculator spec
describe("newFile", function(){
  var newFile;
  var jsdom = require("jsdom");
//
;
  beforeEach(function(){
    document = jsdom.jsdom(`<body>
      <button data-js="testButton">Test</button>
      <h1 data-js="output">Output</h1>
      </body>`);
    window = document.defaultView;
    newFile = require("../js/newFile.js");
  });
//
  describe("test button", function(){
    it("that is found on the page", function(){
      expect(newFile.testButtonElement.innerHTML).toBe("Test");
    });
  });
});
