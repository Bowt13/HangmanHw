import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import './Answer.css'

export class Answer extends PureComponent {
  static propTypes = {
    answers: PropTypes.arrayOf(PropTypes.string).isRequired,
    guesses: PropTypes.arrayOf(PropTypes.string).isRequired
  }

  generateRandom = (awnsers) => {
 return Math.floor((Math.random()*awnsers.length))
  }


  showGuess = (word, guesses) => {
    return word.split('').map(letter => {
      if(guesses.indexOf(letter) === -1) {
        return "_"
      }
        return letter
    }).join("")
  }

  render() {
    return (
      <div className="Word">
      {this.showGuess(this.props.answers[this.generateRandom(this.props.answers)],this.props.guesses)}
      </div>
    )
  }
}
const mapStateToProps = (reduxState) => {
  return {
    guesses: reduxState.guesses,
    answers: reduxState.answers
  }
}
export default connect(mapStateToProps)(Answer)
