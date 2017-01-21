import React from 'react'
import Validator from 'validator'
import { ajax } from 'jquery'

export default React.createClass({
  componentDidMount(){
    ajax({
      url: "https://tiny-tiny.herokuapp.com/collections/jeremy2929-test",
      dataType: "json",
      success: this.onInitialAjaxLoadSuccess,
      error: this.onAjaxLoadError
    })
  },
  getInitialState(){
    return{
      isEmailValid: false,
      emailValue: "",
      emailAddresses: ["test@crap.com"]
    }
  },
  onInitialAjaxLoadSuccess(response){
    this.setState({
      emailAddresses: response
    })
  },
  onPostAjaxLoadSuccess(response){
    this.setState({
      emailAddresses: this.state.emailAddresses.concat(response)
    })
  },
  onAjaxLoadError(response){

  },
  onClickSubmit(e){
    e.preventDefault()
    var emailInputValue = this.refs.emailInput.value
    var isEmail = Validator.isEmail(emailInputValue);
    if (isEmail){
    //  this.state.emailAddresses.unshift(emailInputValue)
    //  this.setState(this.state.emailAddresses)
    //  console.log(this.state.emailAddresses);
      ajax({
        url: "https://tiny-tiny.herokuapp.com/collections/jeremy2929-test",
        dataType: "json",
        type: "POST",
        data:
          {
            emailInputValue
          },
        success: this.onPostAjaxLoadSuccess,
        error: this.AjaxLoadError
      })
    }
    this.refs.emailInput.value=""
  },
  render() {
    return(
<main>
      <section>
        <input ref="emailInput" type="email"/>
        <input type="submit" onClick={this.onClickSubmit}/>
      </section>
      <section>
        <h2>Entered Emails</h2>
        {
          this.state.emailAddresses.map((emailAddress, i)=>{
            return <p key={i}>
                      {emailAddress.emailInputValue}
                   </p>
          })
        }
      </section>
</main>
    )
  }
})
