import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import Awnser from '../components/Answer'
import Title from '../components/Title'
import Input from '../components/Form'
import { connect } from 'react-redux'

export default class Board extends PureComponent {
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
        <Input/>
      </div>
    )
  }
}
