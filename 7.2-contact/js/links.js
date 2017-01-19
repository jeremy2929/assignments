import React from 'react'
import { Link } from 'react-router'

export default React.createClass({
  getDefaultProps(){
    return {
      contacts: [ {
      }]
    }
  },
  render() {
    return (
      <nav>
        {
         Object.keys(this.props.contacts).map(
            (thisContact, i)=>{
              // Created a reference to each iteration on the object
             var currentContact = this.props.contacts[i];
              // In order to use this JSX component render we *must* return
              //   to get it out of this scope
            return<section><Link to={`contact/${currentContact.name}/${currentContact.email}/${currentContact.phone}/${currentContact.location}`} key={i} className="contactsList">
              {`${currentContact.name}`} </Link>
            <div></div>
            
            </section>
            }
          )
        }
      </nav>
    )
  }
})
