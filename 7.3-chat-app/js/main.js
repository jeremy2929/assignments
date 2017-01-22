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
    e.preventDefault()
    var textInputValue = this.refs.textInput.value
      ajax({
      url: "https://tiny-tiny.herokuapp.com/collections/jeremy2929-test",
      dataType: "json",
      type: "POST",
      data:
          {
            textInputValue
          },
      success: this.onPostAjaxLoadSuccess,
      error: this.AjaxLoadError
      })
    this.refs.textInput.value=""
    this.setState({testMsgs})
  },
  render() {
    return(
    <main>
      <section>
        <h1 className="chatTitle">Chat Room</h1>
            <ul className="listChat">
              {
                this.state.textMsgs.map((textMsg, i)=>{
                  return <p key={i}>
                            {textMsg.textInputValue}
                         </p>
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
