import React from 'react'
import { Link } from 'react-router'
import Links from './links'

export default React.createClass({
  getInitialState(){
    return {
  contacts: [
  {
      name: "John Jacob Turnstile",
      email: "JohnT@thebounty.com",
      phone: "210-342-4846",
      location: "San Antonio"
  },
  {
      name: "Siegfried and Roy",
      email: "SandR@thesands.com",
      phone: "234-547-2464",
      location: "Las Vegas"
  },
 {
      name: "Sigmund Freud",
      email: "SFreud@psychopath.com",
      phone: "AUS-34R-1882",
      location: "Austria"
  },
]
}
},
  render() {
    return (
      <section>
        <h2> Home Page {this.state.contacts.name}</h2>
        <Links contacts={ this.state.contacts } />
      </section>
    )
  }
})
