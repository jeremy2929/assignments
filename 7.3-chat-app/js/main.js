/*   This script creates a chat room where user can read stored chats and user has ability
    to add chat messages. All chats are stored along with date on external server  */
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
      textValue: "",
      textMsgs: ["text messages"]
    }
  },
  onInitialAjaxLoadSuccess(response){
    this.setState({
      textMsgs: response.reverse()
    })
  },
  onPostAjaxLoadSuccess(response){
    this.setState({
      textMsgs: this.state.textMsgs.concat(response)
    })
  },
  onAjaxLoadError(response){
    alert("Failure to connect to URL")
  },
  onClickSubmit(e){
    var currentDate = Date().substring(4,16)
    e.preventDefault()
    var textInputValue = this.refs.textInput.value
      ajax({
      url: "https://tiny-tiny.herokuapp.com/collections/jeremy2929-test",
      dataType: "json",
      type: "POST",
      data:
          {
            text: textInputValue,
            date: currentDate,

          },
      success: this.onPostAjaxLoadSuccess,
      error: this.AjaxLoadError
      })
    this.refs.textInput.value = ""
  },
  render() {
    return(
    <main>
      <section>
        <h1 className="chatTitle">Chat Room</h1>
            <ul id="list" className="newList">
              {
                this.state.textMsgs.map((textMsg, i)=>{
                  if (textMsg.date != undefined){
                    console.log("msg=",textMsg);
                    return <div><p className="msgDate">{textMsg.date}</p>
                              <p className="eachMsg" key={i}>
                                {textMsg.text}
                              </p>
                            </div>
                  }
                })
              }
            </ul>
            <input className="textChat" placeholder="enter chat text here" ref="textInput" type="text"/>
            <input className="createChat" type="submit" onClick={this.onClickSubmit}/>
      </section>
    </main>
    )
  }
})
