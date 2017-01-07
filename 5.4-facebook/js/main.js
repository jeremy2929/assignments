document.addEventListener("DOMContentLoaded", function(){



  // Loads initial file(s)
  var newName = require("./newFile");


})

/* code from 5.3 for reference


// Grabbing react from node_modules
import React from 'react'
// set variable for total amount of all items in gift list
var totalAmount = 0;
// set variable to hold string component of TOTAL HTML element
var totalAmountString = "";
// All of UI centered code goes INSIDE of the createClass
export default React.createClass({
  // creating function for click event of ADD button
  onAddButtonClick(e) {
    // getting text value entered by user
    var textEntered = this.refs.textEntered.value;
    // splitting the entered string to separate description from value
    var textArray = textEntered.split(",");
    // assigning first value of array, description, to a variable
    var textToDisplay = textArray[0];
    // assigning second value of array, amount, to a variable
    var amountToDisplay = textArray[1];
    // adding the numeric value of amount string to total amount variable
    totalAmount += eval(amountToDisplay);
    // setting text enter area back to empty
    this.refs.textEntered.value = "";
    // this.setState is empty but if removed, the TOTAL HTML doesn't happen. ????
    this.setState({
    })
    // grabbing what HTML already exists for list of items so it can be appended back after new item
    var totalString = this.refs.listItem.innerHTML;
    // building and assigning HTML of new item in list to a variable
    var newString = "<article class='itemsEach'></arcticle><img class='itemsCheckBox' ref='eachCheck' src = 'nocheck.jpg'></img><text class='itemsDescription' ref='eachItem'>" + textToDisplay + "</text><text class='itemAmount'>" + "$" + amountToDisplay + "</text></article>";
    // re-building the items list HTML with new item first, then the original list after
    this.refs.listItem.innerHTML = newString+totalString;
    // building the HTML string for TOTAL output
    totalAmountString = "TOTAL  $" + totalAmount.toString();
  },
  // rendering the page
  //  <textarea> is text input for user
  // <submit> is ADD button for user when text entered is ready to submit, has click event
  // inside <article> new items entered are added here by the javascript
  // <p> displaying TOTAL AMOUNT at bottom with totalAmountString bringing in total value
  render() {
    return (
      <main className="wholeArea">
        <h1 className="mainTitle"> GIFTS TO BUY</h1>
        <div className="listBox">
            <form className="formBox">
              <textarea className="itemInputText" ref="textEntered" placeholder="Enter item description, amount"></textarea>
              <a href ="#">
                <submit className="itemInputAdd" ref="AddButtonClick" onClick={ this.onAddButtonClick }>ADD
                </submit>
              </a>
            </form>
            <section className="itemsList">
                <article className="article" ref="listItem">
                </article>
            </section>
            <p className="totalAmount" ref="totalHTML"> { totalAmountString }</p>
      </div>
      </main>
    )
  }
})
*/
