/*   This script creates a chat room where user can read stored chats and user has ability
    to add chat messages. All chats are stored along with date on external server.
    The user has the option to click button to show only last 15 chat messages or click button to
    show all messages  */
import React from 'react'
import Validator from 'validator'
import { ajax } from 'jquery'

export default React.createClass({
  componentDidMount(){
      ajax({
      url: "https://tiny-tiny.herokuapp.com/collections/jeremy2929-app",
      dataType: "json",
      success: this.onInitialAjaxLoadSuccess,
      error: this.onAjaxLoadError
    })
  },
  getInitialState(){
    return{
      textValue: "",
      textMsgs: ["text messages"],
      data: [""]
    }
  },
  onInitialAjaxLoadSuccess(response){
    var holdResponse = response.reverse()
    this.setState({
      textMsgs: holdResponse,
      data: holdResponse
    })
  },
  onPostAjaxLoadSuccess(response){
    this.setState({
      textMsgs: this.state.textMsgs.concat(response),
      data: this.state.data.concat(response)
    })
  },
  onAjaxLoadError(response){
    alert("Failure to connect to URL")
  },
  onClickSubmit(e){
    var currentDate = Date().substring(4,16)
    e.preventDefault()
    var textInputValue = this.refs.textInput.value
    if (textInputValue != ""){
      ajax({
        url: "https://tiny-tiny.herokuapp.com/collections/jeremy2929-app",
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
      var showing = this.refs.Show15.className
      if (showing==="hiddenButton"){
        var dataLength = this.state.data.length-15
        this.state.data=[]
        for (var j = dataLength;j<dataLength+15; j++){
          this.state.data[j]=this.state.textMsgs[j]
        }
      }
      this.refs.textInput.value = ""
    }
    this.setState(this.state.data)
    this.setState(this.state.textMsgs)
  },
  onClickShowAll(){
    this.refs.Show15.className="visibleButton"
    this.refs.ShowAll.className="hiddenButton"
    this.state.data = this.state.textMsgs
    this.setState(this.state.data)
    this.refs.textInput.value = ""
  },
  onClickShow15(){
    this.refs.ShowAll.className="visibleButton"
    this.refs.Show15.className="hiddenButton"
    this.state.data=this.state.textMsgs
    var dataLength = this.state.data.length-15
    this.state.data=[]
    for (var j = dataLength;j<dataLength+15; j++){
      this.state.data[j]=this.state.textMsgs[j]
    }
    this.setState(this.state.data)
  },
  render() {
    return(
    <main>
      <section className="pageSection">
        <h1 className="chatTitle">Chat Room</h1>
            <ul id="list" className="newList">
              {
                this.state.data.map((textMsg, i)=>{
                  if (textMsg.date != undefined && textMsg.text != ""){
                    return <article className="eachMsgContainer">
                              <p key="1" className="msgDate">{textMsg.date}</p>
                              <p key="2" className="eachMsg" key={i}>
                                {textMsg.text}
                              </p>
                            </article>
                  }
              })
            }
            </ul>
            <input className="textChat" placeholder="enter chat text here" ref="textInput" type="text"/>
            <input className="createChat" type="submit" onClick={this.onClickSubmit}/>
            <button className="visibleButton" ref="Show15" onClick={this.onClickShow15}>Show Last 15 Messages Only</button>
            <button className="hiddenButton" ref="ShowAll" onClick={this.onClickShowAll}>    Show All Messages    </button>
      </section>
    </main>
    )
  }
})
