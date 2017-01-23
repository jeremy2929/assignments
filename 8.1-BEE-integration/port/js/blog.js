import React from 'react'
import { Link } from 'react-router'

export default React.createClass({
  render() {
    return (
      <section>
        <h1>This is a blob of blogs</h1>
        <p> 1.) Classes and IDs inside HTML elements act very differently. IDs are unique and Classes are not. An HTML element can have only one ID, but can have multiple classes. Also, an ID is unique to that element only, and can not be used anywhere else on same page, where Classes can be applied to multiple elements on same page.</p>
        <p>2.) Resetting vs Normalizing CSS - resetting in CSS wipes out all browser default styling, such as margins, headers and footers. This is useful for starting with a clean slate because different browsers may have different defaults. Normalizing is useful when a full reset is not needed, because it will retain some default styling which will save work to re-create them.</p>
        <p>3.) Floating an element means the element remains as part of the flow of the page. This will allow text to flow around it like printed words in a book flowing around an inset image. In contrast, elements with absolute positioning are removed from the flow of the page. Floated elements can affect position of other elements; absolute positioned elements will not, regardless if touching. The values of Float are:  Left and Right - float the position of element left or right; None- ensures element will not float; Inherit- the element will inherit the float value of the parent element.</p> 			

      </section>
    )
  }
})
