import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

export default class Hangman extends PureComponent {
  static propTypes = {
    Hangman: PropTypes.string.isRequired
  }


  render() {
    return (
      <div id="hangman_display">
          url("../images/hangman_0.jpeg")
      </div>
    )
  }
}
