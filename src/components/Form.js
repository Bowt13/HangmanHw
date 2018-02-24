import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import Form from 'Form.css'

export default class Input extends PureComponent {
  static propTypes = {
    guesses: PropTypes.arrayOf(
      PropTypes.string).isRequired
  }


  render() {
    return (
      <div className="Form">
      <form className="Form" onsubmit="submitTodo(); return false">
      <input type="text" id="new-guess" placeholder="Guess a letter"/>
      </form>
      </div>
    )
  }
}
