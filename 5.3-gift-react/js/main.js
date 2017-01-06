//document.addEventListener("DOMContentLoaded", function(){



  // Loads initial file(s)
//  var newName = require("./newFile");


//})

import React from 'react'

export default React.createClass({
  getInitialState() {
    return {
      outputCalculation: "0"
    }
  },
  onAddButtonClick(e) {
    var textEntered = this.refs.textEntered.value;
    var textArray = textEntered.split(",");
    var textToDisplay = textArray[0];
    var amountToDisplay = textArray[1];
    this.refs.textEntered.value = "";
    this.setState({
      itemDescription: textToDisplay,
      itemAmount: amountToDisplay,
      textOfTextArea: ""
    })
    var desc = this.state.itemDescription;
    var string = "<article class='itemsEach'></arcticle><img class='itemsCheckBox' ref='eachCheck' src = 'nocheck.jpg'></img><text class='itemsDescription' ref='eachItem'>" + textToDisplay + "</text><text class='itemAmount'>" + "$" + amountToDisplay + "</text></article>";
    this.refs.listItem.innerHTML += string;
  },
  onClearButtonClick() {
    this.setState({
      outputCalculation: "0"
    })
  },
  onClickNumber(e) {
    this.refs.outputCalculation.classList = "output output--red"
    // Concat number that was clicked to existing number
    var currentNumber = this.state.outputCalculation;
    var clickedNumber = e.target.textContent;
    this.setState({
      outputCalculation: currentNumber + clickedNumber
    })
  },
  render() {
    // Inside of the <h1> using this.state is called BINDING
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
            <p className="totalAmount">
          TOTAL   $0</p>
      </div>
      </main>
    )
  }
})
