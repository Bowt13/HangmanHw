import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

export default class Hangman extends PureComponent {
  static propTypes = {
    hangman: PropTypes.arrayOf(PropTypes.string).isRequired,
//    wrongguesses: proptypes.string.isRequired
  }

//  hangmanState = (hangman, wrongguesses)
    return


  render() {
    return (
      <div id="hangman_display">

      </div>
    )
  }
}
