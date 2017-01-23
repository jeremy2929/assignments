import React from 'react'
import { Link } from 'react-router'

export default React.createClass({
  render() {
    return (
      <section>
        <div>
            <a href="https://github.com/jeremy2929/assignments/tree/master/2.4-calculator-one-event-listener">
              <p>Calculator.......This code is a simple calculator using one event view for all buttons.</p>
            </a>
            <a href="https://github.com/jeremy2929/assignments/tree/master/3.4-holiday-gift-list">
              <p>Holiday Gift List........This code allows user to enter an item description followed by a comma then an amount to build a list of items for a holiday shopping list with a running total at bottom and the ability to mark each item as done.</p>
            </a>
            <a href="https://github.com/jeremy2929/assignments/tree/master/4.1-photos-one-event-listener">
              <p>Photo Modal.........This code displays a gallery of photos which can be clicked to enlarge the photo selected, using one click event.</p>
            </a>
            <a href="https://github.com/jeremy2929/assignments/tree/master/4.4-TicTacToe">
              <p>Tic Tac Toe.........This code executes a functional Tic Tac Toe game with score.</p>
            </a>
        </div>
      </section>
    )
  }
})
