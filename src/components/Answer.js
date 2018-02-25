import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import './Answer.css'

export class Answer extends PureComponent {
  static propTypes = {
    guesses: PropTypes.arrayOf(PropTypes.string).isRequired
  }

  showGuess = (word, guesses) => {
    return word.split('').map(letter => {
      if(guesses.indexOf(letter) === -1) {
        return "_"
      }
        return letter
    }).join(" ")
  }

  render() {
    return (
      <div className="Word">
      {this.showGuess("party",this.props.guesses)}
      </div>
    )
  }
}
const mapStateToProps = (reduxState) => {
  return {
    guesses: reduxState.guesses
  }
}
export default connect(mapStateToProps)(Answer)
