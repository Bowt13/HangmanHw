import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import './Guesses.css'
import { guessAction } from '../Actions/hangman'

export class Guesses extends PureComponent {
  static propTypes = {
    guesses: PropTypes.arrayOf(
      PropTypes.string).isRequired
  }

  dispatchAction = (event) => {
    this.props.guessAction(event.target.value)
    event.target.value=null
  }

  render() {
    return (
      <div className="">
      <form onSubmit={(event) => {event.preventDefault()}}>
        <input className="StyleForm" type="text" id="new-guess" placeholder="Guess a letter" onChange={this.dispatchAction.bind(this)}>
      </input>
      </form>
      </div>
    )
  }
}
export default connect(null, { guessAction })(Guesses)
