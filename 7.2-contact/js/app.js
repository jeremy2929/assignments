import React from 'react'
import { Link } from 'react-router'
import Header from './Header'

export default React.createClass({
  render() {
    return (
      <section>
        <Header />
        {this.props.children}
      </section>
    )
  }
})
