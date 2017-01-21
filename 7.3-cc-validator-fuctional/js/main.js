import React from 'react'
import { render } from 'react-dom'
var Card = require('react-credit-card')
var creditCardValidator = require('credit-card-validator');
//
export default React.createClass({
  getInitialState(){
    return{
      cc_cards: [
          {
            number: "214276575634532",
            name: "John Doe",
            valid: "false"
          },
          {
            number: "21423523534532",
            name: "Mr Ripoff",
            valid: "false"
          }
        ]
      }
  },
  onCardNumber(e){
      e.preventDefault()
      var cardNum = e.target.value
      var validCard = creditCardValidator.validateCard(cardNum)
      if (validCard){
        var newCard = {
          number: cardNum,
          name: "New Guy",
          valid: "true"
        }
        this.refs.ccNum.value = ""
        this.state.cc_cards.unshift(newCard)
        this.setState(this.state.cc_cards)
        this.refs.ccValid.className = "valid"
      }
      var cardNumLength = cardNum.length
      if (cardNumLength > 16){
        var newCard = {
          number: cardNum,
          name: "New Guy",
          valid: "false"
        }
        this.refs.ccNum.value = ""
        this.state.cc_cards.unshift(newCard)
        this.setState(this.state.cc_cards)
        this.refs.ccValid.className = "invalid"
      }
},

  render(){
    return (
      <div className="demo-container">
        <div className="card-wrapper">
          <div className="form-container active">
            <form action="">
              <input className="ccInput" placeholder="Card number 16 digits max" pattern="[0-9]{13,16}"  ref="ccNum" onChange={this.onCardNumber}/>
            </form>
            <h1 className="ccData"> Credit Card List</h1>
              <ul className="ccList">
                {
                  this.state.cc_cards.map ((ccnum,i)=>
                  {
                  return  <li key={i}>
                            <p className="ccNumber">Number: {ccnum.number}</p>
                            <p className="ccName">Name: {ccnum.name}</p>
                            <p className={ccnum.valid ? "invalid" : "valid"}>Validation: {ccnum.valid}</p>

                          </li>
                  })
                }
          </ul>
          </div>
        </div>
      </div>
  )}
})
