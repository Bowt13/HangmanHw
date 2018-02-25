import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import Awnser from '../components/Answer'
import Title from '../components/Title'
import Guesses from '../components/Guesses'
import { connect } from 'react-redux'
import Hangman from '../components/Hangman'

export class Board extends PureComponent {
  static propTypes = {
    guesses: PropTypes.arrayOf(
      PropTypes.string).isRequired,
    awnser: PropTypes.string.isRequired
  }

  render() {
    return (
      <div className="Board">
        <Title content="·•>HangmaN<•·" />
        <Awnser/>
        <p>{this.props.guesses.join(",")}</p>
        <Guesses/>
      </div>
    )
  }
}
const mapStateToProps = (reduxState) => {
  return {
    guesses: reduxState.guesses
  }
}
export default connect(mapStateToProps)(Board)
