import React from 'react'
import { ajax } from 'jquery'
/*
<article className="box1">
  <input className="square" ref="box1" type="text"/>
  <input className="square" ref="box2" type="text"/>
  <input className="square" ref="box3" type="text"/>
  <input className="square" ref="box4" type="text"/>
  <input className="square" ref="box5" type="text"/>
  <input className="square" ref="box6" type="text"/>
  <input className="square" ref="box7" type="text"/>
  <input className="square" ref="box8" type="text"/>
  <input className="square" ref="box9" type="text"/>
</article>
<article className="box1">
  <input className="square" ref="box10" type="text"/>
  <input className="square" ref="box11" type="text"/>
  <input className="square" ref="box12" type="text"/>
  <input className="square" ref="box13" type="text"/>
  <input className="square" ref="box14" type="text"/>
  <input className="square" ref="box15" type="text"/>
  <input className="square" ref="box16" type="text"/>
  <input className="square" ref="box17" type="text"/>
  <input className="square" ref="box18" type="text"/>
</article>
<article className="box1">
  <input className="square" ref="box19" type="text"/>
  <input className="square" ref="box20" type="text"/>
  <input className="square" ref="box21" type="text"/>
  <input className="square" ref="box22" type="text"/>
  <input className="square" ref="box23" type="text"/>
  <input className="square" ref="box24" type="text"/>
  <input className="square" ref="box25" type="text"/>
  <input className="square" ref="box26" type="text"/>
  <input className="square" ref="box27" type="text"/>
</article>
<article className="box1">
  <input className="square" ref="box28" type="text"/>
  <input className="square" ref="box29" type="text"/>
  <input className="square" ref="box30" type="text"/>
  <input className="square" ref="box31" type="text"/>
  <input className="square" ref="box32" type="text"/>
  <input className="square" ref="box33" type="text"/>
  <input className="square" ref="box34" type="text"/>
  <input className="square" ref="box35" type="text"/>
  <input className="square" ref="box36" type="text"/>
</article>
<article className="box1">
  <input className="square" ref="box37" type="text"/>
  <input className="square" ref="box38" type="text"/>
  <input className="square" ref="box39" type="text"/>
  <input className="square" ref="box40" type="text"/>
  <input className="square" ref="box41" type="text"/>
  <input className="square" ref="box42" type="text"/>
  <input className="square" ref="box43" type="text"/>
  <input className="square" ref="box44" type="text"/>
  <input className="square" ref="box45" type="text"/>
</article>
<article className="box1">
  <input className="square" ref="box46" type="text"/>
  <input className="square" ref="box47" type="text"/>
  <input className="square" ref="box48" type="text"/>
  <input className="square" ref="box49" type="text"/>
  <input className="square" ref="box50" type="text"/>
  <input className="square" ref="box51" type="text"/>
  <input className="square" ref="box52" type="text"/>
  <input className="square" ref="box53" type="text"/>
  <input className="square" ref="box54" type="text"/>
</article>
<article className="box1">
  <input className="square" ref="box55" type="text"/>
  <input className="square" ref="box56" type="text"/>
  <input className="square" ref="box57" type="text"/>
  <input className="square" ref="box58" type="text"/>
  <input className="square" ref="box59" type="text"/>
  <input className="square" ref="box60" type="text"/>
  <input className="square" ref="box61" type="text"/>
  <input className="square" ref="box62" type="text"/>
  <input className="square" ref="box63" type="text"/>
</article>
<article className="box1">
  <input className="square" ref="box64" type="text"/>
  <input className="square" ref="box65" type="text"/>
  <input className="square" ref="box66" type="text"/>
  <input className="square" ref="box67" type="text"/>
  <input className="square" ref="box68" type="text"/>
  <input className="square" ref="box69" type="text"/>
  <input className="square" ref="box70" type="text"/>
  <input className="square" ref="box71" type="text"/>
  <input className="square" ref="box72" type="text"/>
</article>
<article className="box1">
  <input className="square" ref="box73" type="text"/>
  <input className="square" ref="box74" type="text"/>
  <input className="square" ref="box75" type="text"/>
  <input className="square" ref="box76" type="text"/>
  <input className="square" ref="box77" type="text"/>
  <input className="square" ref="box78" type="text"/>
  <input className="square" ref="box79" type="text"/>
  <input className="square" ref="box80" type="text"/>
  <input className="square" ref="box81" type="text"/>
</article>
*/
export default React.createClass({
  getInitialState(){
    return{
      box1: ["_","_","_","_","_","_","_","_","_"],
      box2: ["*","_","*","_","_","_","_","_","_"],
      box3: ["*","_","*","_","_","_","_","_","_"]
    }
    var boxNumber = "*"
    var num = "*"
    this.setState({boxNumber})
  //  console.log("working");
  },
  onClickSolve(){
    for (var i = 1; i<24; i++){

      }
  },
  onClickSquare(e){
    var testVar = e.target.textContent
    console.log("e=",testVar);
    console.log("ref=",this.refs.box.value);
    if (num==="*"){
      var num = e.target.textContent
      console.log("num=",num);
      this.setState({num})
    }
    if(e.target.textContent === ""){
      e.target.textContent = num
      console.log("ref=",this.refs.box.value);
      console.log("test here=",num);
    }
  this.setState({num})
  },

  render() {
    return(

      <section>
        <h1 className="title">Sudoku</h1>
          <article>
            <div className="allSquares"
              ref="listOfPost">
              {
                this.state.box1.map ((box,i)=>
                {
                  return <div className="box" key={i}>
                      <p type="number" className="square" ref="box" onClick={this.onClickSquare}></p>
                </div>
                })
              }
            </div>
            <div className="allSquares"
              ref="listOfPost">
              {
                this.state.box2.map ((box,i)=>
                {
                  return <div className="box" key={i}>
                      <p type="number" className="square" ref="box" onClick={this.onClickSquare}></p>
                </div>
              })
            }
            </div>
            <div className="allSquares"
              ref="listOfPost">
              {
                this.state.box3.map ((box,i)=>
                {
                  return <div className="box" key={i}>
                    <p type="number" className="square" ref="box" onClick={this.onClickSquare}></p>
                </div>
                })
              }
            </div>
          </article>
          <article>
            <div className="allSquares"
              ref="listOfPost">
              {
                this.state.box1.map ((box,i)=>
                {
                  return <div className="box" key={i}>
                      <p type="number" className="square" ref="box" onClick={this.onClickSquare}></p>
                </div>
                })
              }
            </div>
            <div className="allSquares"
              ref="listOfPost">
              {
                this.state.box2.map ((box,i)=>
                {
                  return <div className="box" key={i}>
                      <p type="number" className="square" ref="box" onClick={this.onClickSquare}></p>
                </div>
                })
              }
            </div>
            <div className="allSquares"
              ref="listOfPost">
              {
                this.state.box3.map ((box,i)=>
                {
                  return <div className="box" key={i}>
                    <p type="number" className="square" ref="box" onClick={this.onClickSquare}></p>
                </div>
                })
              }
            </div>
          </article>
          <article>
            <div className="allSquares"
              ref="listOfPost">
              {
                this.state.box1.map ((box,i)=>
                {
                  return <div className="box" key={i}>
                      <p type="number" className="square" ref="box" onClick={this.onClickSquare}></p>
                </div>
                })
              }
            </div>
            <div className="allSquares"
              ref="listOfPost">
              {
                this.state.box2.map ((box,i)=>
                {
                  return <div className="box" key={i}>
                      <p type="number" className="square" ref="box" onClick={this.onClickSquare}></p>
                </div>
                })
              }
            </div>
            <div className="allSquares"
              ref="listOfPost">
              {
                this.state.box3.map ((box,i)=>
                {
                  return <div className="box" key={i}>
                    <p type="number" className="square" ref="box" onClick={this.onClickSquare}></p>
                </div>
                })
              }
            </div>
          </article>
          <article className="numberChoose">
            <div className="allSquares"
              ref="listOfPost">
              {
                this.state.box3.map ((box,i)=>
                {
                  return <div className="box" key={i}>
                    <p type="number" className="square" ref="box" onClick={this.onClickSquare}>{i+1}</p>
                </div>
                })
              }
            </div>
            <h3>Number Selected: {this.state.num}</h3>
            <button className="solveButton" onClick={this.onClickSolve}>Solve</button>
            <button className="resetButton">Reset</button>
          </article>

      </section>
    )
  }
})
