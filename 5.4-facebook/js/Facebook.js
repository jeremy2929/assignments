import React from 'react'
import FacebookDetail from './FacebookDetail'
var myDate = Date();
var stringHTML = "";
var myDisplayDate="";
const titleTop = "Instant Articles";
export default React.createClass({

  getInitialState(){
    return {
    comments: [
        {
          author: "Author Name",
          authorIcon: "styles/authorIcon.png",
          commentDate: "- 04/21/2015",
          commentText: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
          id: 0,
        },
        {
          author: "Author Name",
          authorIcon: "styles/authorIcon2.png",
          commentDate: "- 06/01/2015",
          commentText: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
          id: 1,
        }

      ]
    }
  },
  onAddButtonClick(e) {
      e.preventDefault();
      this.setState({
      })
      for (var i = 0; i<1; i++){
        this.refs.commentArticle.innerHTML += buildHTMLArray[i];
      }
    },
  render() {
    myDisplayDate = myDate.substring(4,10)+", "+myDate.substring(11,15)


    return (
    <div className="entireArea">
     <section className="mainArea">
       <img className="topLeftIcon" src="styles/topleft.png">
       </img>
       <article className="topArea">
         <h1 className="topLeftTitle" ref="titleElement">{ titleTop }</h1>
         <p className="topLeftDate"> { myDisplayDate } </p>
       </article>
       <article className="introArea">
         <p className="introText">Welcome! To see these stories in the Instant Articles format, you must be on the latest version of the Facebook app for iPhone or Android.</p>
         <p className="introText">Learn more about this new tool for publishers at <a href="#" className="linkNoUnderline"> instantarticles.fb.com</a></p>
           <img className='middleImage' src='styles/middle.png'></img>
       </article>
       <article className="commentArea" ref="commentArticle"> {this.state.comments.map ((comment,i)=>{
           return <li key={i}>
                      <img className='commentAuthorIcon' src={`${comment.authorIcon}`}></img>
                      <h3 className='commentAuthorName'> {comment.author}</h3>
                      <p className='commentText'> {comment.commentText}</p>
                      <p className='commentDate'> {comment.commentDate} </p>
                 </li>
         })
         }
       </article>
     </section>
     <div className="bottomFooter">
       <p className="moreComments">View more comments</p>
       <p className="xOfY">2 of 228</p>
    </div>
  </div>
    )
  }
})
