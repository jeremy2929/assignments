import React from 'react'
import {Link} from 'react-router'

export default React.createClass({
  render () {
    return (
            <section>
              <h2 className="contactTitle"> Contact: {this.props.params.name} </h2>
              <p className="contactDetails">  Email:{this.props.params.email} </p>
              <p className="contactDetails">  Phone:{this.props.params.phone} </p>
              <p className="contactDetails">  Location: {this.props.params.location}</p>
              <a href="#">View Contacts</a>
     </section>
    )
  }
})

/*<section>
    <h1>Contact Details of {contacts.name}</h1>
    <p> email: {contacts.email}</p>
    <p> phone: {contacts.phone}</p>
    <p> location: {contacts.location}</p>
</section>*/
