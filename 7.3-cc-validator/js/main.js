import React from 'react'
import { render } from 'react-dom'
var Card = require('react-credit-card')
var creditCardValidator = require('credit-card-validator');

export default React.createClass({
  componentDiDMount(){
    // This component has been loaded into memory

  },
  getInitialState(){
    return{
        cardsEntered: ""
    }
  },
  onCardNumber(e){
      e.preventDefault()
      var cardNum = e.target.value
      console.log("card num=",cardNum);
  //    var validCard = creditCardValidator.validateCardAndSecCode('4111 1111 1111 1111', '412');
  var validCard = creditCardValidator.validateCard(cardNum)
  console.log("valid? = ",validCard);
  },


  render() {

    return(
      <div className="demo-container">
        <div className="card-wrapper">

          <div className="form-container active">
            <form action="">
              <input placeholder="Card number" type="tel" name="number" onChange={this.onCardNumber}/>
              <input placeholder="Full name" type="text" name="name"/>
              <input placeholder="MM/YY" type="tel" name="expiry"/>
              <input placeholder="CVC" type="number" name="cvc"/>
            </form>
          </div>
        </div>
      </div>
)}
})
