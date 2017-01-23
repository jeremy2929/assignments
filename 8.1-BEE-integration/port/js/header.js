import React from 'react'
import { Link } from 'react-router'

export default React.createClass({
  render() {
    return (
      <header>
        <h1>-------------------------------------------------------------------------------------------------</h1>
        <h1>                      Portfolio of Jeremy Ward Code</h1>
        <nav>
          <Link to="/project">View Projects            </Link>
          <Link to="/blog">View Blogs               </Link>
          <Link to="/">Go home  </Link>
          <h1>************************************************************************************</h1>
        </nav>
      </header>
    )
  }
})
