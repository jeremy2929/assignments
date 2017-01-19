import React from 'react'
import { render } from 'react-dom'


export default React.createClass({
  componentDiDMount(){
    // This component has been loaded into memory

  },
  getInitialState(){
    return{
        emailText: ""
    }
  },
  onInputChange(e){

  },
  render() {

    return(
      <section>
        <form className={this.state.isEmailValid ? "valid" : "invalid"}>
            <input type="cc" onChange={this.onInputChange}/>
            <input type="submit" onSubmit={this.onSubmit}/>
        </form>
      </section>
  )
}
})
