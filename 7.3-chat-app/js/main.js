import React from 'react'
import Validator from 'validator'

export default React.createClass({
  getInitialState(){
    return{
      isEmailValid: false,
      emailValue: "",
      emailAddresses: ["test@crap.com"]
    }
  },
  onClickSubmit(e){
    e.preventDefault()
    var emailInputValue = this.refs.emailInput.value
    var isEmail = Validator.isEmail(emailInputValue);
    if (isEmail){this.state.emailAddresses.unshift(emailInputValue)}
    this.setState(this.state.emailAddresses)
  },
  render() {
    return(
      <section>
          {
            this.state.emailAddresses.map((emailAddress, i)=>{
              return <span key={i}> { emailAddress.currentEmailValue } </span>
            })
          }
        <form className={this.state.isEmailValid ? "valid" : "invalid"}>
          <input ref="emailInput" type="email"></input>
          <input type="submit" onClick={this.onClickSubmit}/>
        </form>
        <h2>Entered Emails</h2>
        {
          this.state.emailAddresses.map((emailAddress, i)=>{
            return <ul key={i}>
              <p>  { emailAddress}</p>
              </ul>
          })
        }
      </section>
    )
  }
})

// ******************************
// project
/*
{
                 this.state.posts.map ((post,i)=>
                 {
                   var preview = post.postText.substring(0,80)+"..."
                   return <li key={i}>
                            <a href="#" >
                              <h1 className="postTitle"
                                  ref="postTitle"
                                  onClick={ this.onClickPostTitle }>{i+1+".   "+post.postTitle}
                              </h1>
                            </a>
                            <p className="postDate">{"  ("+post.postDate+")"}</p>
                            <p className="previewPost">{preview}</p>
                         </li>
                 })
               }
// ******************************



/*import React from 'react'
import { ajax } from 'jquery'
import Validator from 'validator'

export default React.createClass({
  componentDidMount(){

    ajax({
      url: "https://tiny-tiny.herokuapp.com/collections/fall16",
      dataType: "json",
      success: this.onInitialAjaxLoadSuccess,
      error: this.onAjaxLoadError
    })
  },

  getInitiatlState(){
    return{
      isEmailValid: false,
      emailValue: "",
      emailAddresses: []
    }
  },

  onInitialAjaxLoadSuccess(response){
    this.setState({
      emailAddresses: response
    })
  },

  onPostAjaxLoadSuccess(response){
    this.setState({
      emailAdresses: this.state.emailAdresses.contact(response)
    })
  },

  onAjaxLoadError(response){
  },

  onEmailChange(e){
    var currentEmailInputValue = e.target.value
    var isEmail = Validator.isEmail(currentEmailInputValue)
    this.setState({
      isEmailValid: isEmail,
      emailValue: currentEmailInputValue
    })
  },

  onSubmit(e){
    console.log("This is submitting");
    e.preventDefault()
    var currentEmailValue = this.state.emailValue;
    var isEmailValid = this.state.isEmailValid;

    if(isEmailValid){
      ajax({
        url: "https://tiny-tiny.herokuapp.com/collections/fall16",
        dataType: "json",
        type: "POST",
        data: {
            currentEmailValue
        },
        success: this.onPostAjaxLoadSuccess,
        error: this.onAjaxLoadError
      })
    }
  },
  render() {
    return(
      <section>
        <h2>Current Emails</h2>
          {
            this.state.emailAddresses.map((emailAddress, i)=>{
              return <span key={i}> { emailAddress.currentEmailValue } </span>
            })
          }
        <form className={this.state.isEmailValid ? "valid" : "invalid"}
          onSubmit={this.onSubmit}>
          <input type="email" onChange={this.onEmailChange} />
          <input type="submit" />
        </form>
      </section>
    )
  }
})
*/
