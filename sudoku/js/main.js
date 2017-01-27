import React from 'react'
import { ajax } from 'jquery'

/*
<article>
  <div className="allSquares"
    ref="listOfPost">
    {
      this.state.box1.map ((box,i)=>
      {
        return <div className="box" key={i}>
            <p type="number" className="square" ref="box" onClick={this.onClickSquare}>{this.state.num}</p>
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
            <p type="number" className="square" ref="box" onClick={this.onClickSquare}>{this.state.num}</p>
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
          <p type="number" className="square" ref="box" onClick={this.onClickSquare}>{this.state.num}</p>
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
            <p type="number" className="square" ref="box" onClick={this.onClickSquare}>{this.state.num}</p>
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
            <p type="number" className="square" ref="box" onClick={this.onClickSquare}>{this.state.num}</p>
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
          <p type="number" className="square" ref="box" onClick={this.onClickSquare}>{this.state.num}</p>
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
            <p type="number" className="square" ref="box" onClick={this.onClickSquare}>{this.state.num}</p>
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
            <p type="number" className="square" ref="box" onClick={this.onClickSquare}>{this.state.num}</p>
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
          <p type="number" className="square" ref="box" onClick={this.onClickSquare}>{this.state.num}</p>
      </div>
      })
    }
  </div>
</article>
*/

/*
*/
var num = ""
export default React.createClass({
  getInitialState(){
    return{
      box1: ["_","_","_","_","_","_","_","_","_"],
      currentNum: 0
    }
  },
  onClickSolve(){
    for (var i = 1; i<24; i++){

      }
  },

  onClickSquare(e){
    e.target.textContent = this.state.currentNum

  console.log("test empty square");
  },
  onClickNumber(e){
    var num = e.target.textContent
    console.log("num=",num);
    this.setState({currentNum: num})
  },

  render() {
    return(
      <section>
        <article>
          <h1 className="title">Sudoku</h1>
          <div className="box1">
            <p onClick={this.onClickSquare}className="square" ref="box1" type="text"/>
            <p className="square" ref="box2" type="text"/>
            <p className="square" ref="box3" type="text"/>
            <p className="square" ref="box4" type="text"/>
            <p className="square" ref="box5" type="text"/>
            <p className="square" ref="box6" type="text"/>
            <p className="square" ref="box7" type="text"/>
            <p className="square" ref="box8" type="text"/>
            <p className="square" ref="box9" type="text"/>
          </div>
          <div className="box2">
            <p className="square" ref="box10" type="text"/>
            <p className="square" ref="box11" type="text"/>
            <p className="square" ref="box12" type="text"/>
            <p className="square" ref="box13" type="text"/>
            <p className="square" ref="box14" type="text"/>
            <p className="square" ref="box15" type="text"/>
            <p className="square" ref="box16" type="text"/>
            <p className="square" ref="box17" type="text"/>
            <p className="square" ref="box18" type="text"/>
          </div>
          <div className="box3">
            <p className="square" ref="box19" type="text"/>
            <p className="square" ref="box20" type="text"/>
            <p className="square" ref="box21" type="text"/>
            <p className="square" ref="box22" type="text"/>
            <p className="square" ref="box23" type="text"/>
            <p className="square" ref="box24" type="text"/>
            <p className="square" ref="box25" type="text"/>
            <p className="square" ref="box26" type="text"/>
            <p className="square" ref="box27" type="text"/>
          </div>
          </article>
          <article>
          <div className="box4">
            <p className="square" ref="box28" type="text"/>
            <p className="square" ref="box29" type="text"/>
            <p className="square" ref="box30" type="text"/>
            <p className="square" ref="box31" type="text"/>
            <p className="square" ref="box32" type="text"/>
            <p className="square" ref="box33" type="text"/>
            <p className="square" ref="box34" type="text"/>
            <p className="square" ref="box35" type="text"/>
            <p className="square" ref="box36" type="text"/>
          </div>
          <div className="box5">
            <p className="square" ref="box37" type="text"/>
            <p className="square" ref="box38" type="text"/>
            <p className="square" ref="box39" type="text"/>
            <p className="square" ref="box40" type="text"/>
            <p className="square" ref="box41" type="text"/>
            <p className="square" ref="box42" type="text"/>
            <p className="square" ref="box43" type="text"/>
            <p className="square" ref="box44" type="text"/>
            <p className="square" ref="box45" type="text"/>
          </div>
          <div className="box6">
            <p className="square" ref="box46" type="text"/>
            <p className="square" ref="box47" type="text"/>
            <p className="square" ref="box48" type="text"/>
            <p className="square" ref="box49" type="text"/>
            <p className="square" ref="box50" type="text"/>
            <p className="square" ref="box51" type="text"/>
            <p className="square" ref="box52" type="text"/>
            <p className="square" ref="box53" type="text"/>
            <p className="square" ref="box54" type="text"/>
          </div>
          </article>
          <article>
          <div className="box7">
            <p className="square" ref="box55" type="text"/>
            <p className="square" ref="box56" type="text"/>
            <p className="square" ref="box57" type="text"/>
            <p className="square" ref="box58" type="text"/>
            <p className="square" ref="box59" type="text"/>
            <p className="square" ref="box60" type="text"/>
            <p className="square" ref="box61" type="text"/>
            <p className="square" ref="box62" type="text"/>
            <p className="square" ref="box63" type="text"/>
          </div>
          <div className="box8">
            <p className="square" ref="box64" type="text"/>
            <p className="square" ref="box65" type="text"/>
            <p className="square" ref="box66" type="text"/>
            <p className="square" ref="box67" type="text"/>
            <p className="square" ref="box68" type="text"/>
            <p className="square" ref="box69" type="text"/>
            <p className="square" ref="box70" type="text"/>
            <p className="square" ref="box71" type="text"/>
            <p className="square" ref="box72" type="text"/>
          </div>
          <div className="box9">
            <p className="square" ref="box73" type="text"/>
            <p className="square" ref="box74" type="text"/>
            <p className="square" ref="box75" type="text"/>
            <p className="square" ref="box76" type="text"/>
            <p className="square" ref="box77" type="text"/>
            <p className="square" ref="box78" type="text"/>
            <p className="square" ref="box79" type="text"/>
            <p className="square" ref="box80" type="text"/>
            <p className="square" ref="box81" type="text"/>
          </div>
        </article>

          <article className="numberChoose">
            <div className="allSquares"
              ref="listOfPost">
              {
                this.state.box1.map ((box,i)=>
                {
                  console.log("num=",num);

                  return <div className="box" key={i}>
                    <p type="number" className="square" ref="box" onClick={this.onClickNumber}>{i+1}</p>
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
