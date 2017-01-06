import React from 'react'
var totalAmount = 0;
var totalAmountString = "";
export default React.createClass({
  getInitialState() {
    return {
    }
  },
  onAddButtonClick(e) {
    var textEntered = this.refs.textEntered.value;
    var textArray = textEntered.split(",");
    var textToDisplay = textArray[0];
    var amountToDisplay = textArray[1];
    totalAmount += eval(amountToDisplay);
    this.refs.textEntered.value = "";
    this.setState({
      itemDescription: textToDisplay,
      itemAmount: amountToDisplay,
      textOfTextArea: ""
    })
    var desc = this.state.itemDescription;
    var totalString = this.refs.listItem.innerHTML;
    var newString = "<article class='itemsEach'></arcticle><img class='itemsCheckBox' ref='eachCheck' src = 'nocheck.jpg'></img><text class='itemsDescription' ref='eachItem'>" + textToDisplay + "</text><text class='itemAmount'>" + "$" + amountToDisplay + "</text></article>";
    this.refs.listItem.innerHTML = newString+totalString;
    totalAmountString = "TOTAL  $" + totalAmount.toString();
  },
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
