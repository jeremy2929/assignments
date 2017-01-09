import React from 'react'

export default React.createClass({
  render() {
    return (
      <li className="timeline__comment">
        { this.props.facebookText }
      </li>
    )
  }
})
