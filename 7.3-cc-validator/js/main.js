import React from 'react'
import { render } from 'react-dom'
var Card = require('react-credit-card')
var creditCardValidator = require('credit-card-validator');

export default React.createClass({
  getInitialState(){
    return{
      cc_cards: [
          {
            number: "21423523534532",
            name: "john crap",
          }
        ]
      }
  },
  onCardNumber(e){
      e.preventDefault()
      var cardNum = e.target.value
      var validCard = creditCardValidator.validateCard(cardNum)
      if (validCard){
        console.log("newcard",cardNum);
        var newCard = {
          number: cardNum,
          name: "new guy"
        }
      //   this.setState({cardsEntered:cardNum})
      //   this.setState(this.state.cc_cards.concat(cardNum))
    //  setState(this.state.cardsEntered)

        this.state.cc_cards.unshift(newCard)
     //this.setState(this.state.posts)
     // clearing all the input values
    //    this.state.cardsEntered.unshift(cardNum)
        var numberOfCards=this.state.cc_cards.length
        for (var i=0; i<numberOfCards; i++){
          console.log("cardsEntered=",this.state.cc_cards[i].number);
          console.log("cardsEntered=",this.state.cc_cards[i].name);
        }
      }
},

  render() {

    return(
      <div className="demo-container">
        <div className="card-wrapper">

          <div className="form-container active">
            <form action="">
              <input className= "ccNumber" placeholder="Card number" type="tel" name="number" onChange={this.onCardNumber}/>
              <input className= "ccName" placeholder="Full name" type="text" name="name"/>
            </form>
          </div>
        </div>
      </div>
)}
})
