import React from 'react'
import TestUtils from 'react-addons-test-utils'
import Facebook from '../js/Facebook'
var myDate = Date();
var myDisplayDate="";
for (var i=4; i<15; i++ ){
  if (i===10){
    myDisplayDate += ",";
  }
  myDisplayDate += myDate[i];
}


describe("Facing", () => {
  let FacebookComponent = {}

  beforeEach(()=>{
    // This is NOT a reference to the element in the page...
    //   it IS a reference to the component code
    FacebookComponent = TestUtils.renderIntoDocument(<Facebook />)
  })

  it("Should display current date", ()=>{
    var testString = " Jan 09, 2017 "
    const currentDateElement = TestUtils.findRenderedDOMComponentWithClass(
      FacebookComponent,
      "topLeftDate"
    )
    expect(currentDateElement.textContent).toBe(testString)
  })
  it("Should display Author Name", ()=>{
    comments: [
        {
          author: "Author Name",
          authorIcon: "styles/authorIcon.png",
          commentDate: "- 04/21/2015",
          commentText: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
          id: 0,
        },
        {
          author: "Author Name",
          authorIcon: "styles/authorIcon2.png",
          commentDate: "- 06/01/2015",
          commentText: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
          id: 1,
        }
      ]

    const currentDateElement = TestUtils.findRenderedDOMComponentWithClass(
      FacebookComponent,
      "commentAuthorName"
    )
    expect(currentDateElement.textContent).toBe(testStringAuthorName)
  })


})
