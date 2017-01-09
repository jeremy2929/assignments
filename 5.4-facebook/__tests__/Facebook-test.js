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


})
