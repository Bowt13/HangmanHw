import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import './Guesses.css'
import { guessAction } from '../Actions/hangman'

export class Guesses extends PureComponent {
  static propTypes = {
    guesses: PropTypes.arrayOf(PropTypes.string).isRequired,
    word: PropTypes.arrayOf(PropTypes.string).isRequired,
  }

  dispatchAction = (event) => {
        if (event.target.value == ""){
        }
        else {
          if (event.target.value.length == 1){
            this.props.guessAction(event.target.value)
            event.target.value=null
          }
        }
      }





  render() {
    return (
      <div className="">
      <form onSubmit={(event) => {event.preventDefault()}}>
        <input className="StyleForm" type="text" id="new-guess" placeholder="Guess a letter" onKeyUp={this.dispatchAction.bind(this)}>
      </input>
      </form>
      </div>
    )
  }
}
const mapStateToProps = (reduxState) => {
  return {
    guesses: reduxState.guesses,
    answers: reduxState.answers,
    word: reduxState.answers
  }
}
export default connect(null, { guessAction })(Guesses)
