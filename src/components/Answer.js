import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

export default class Anwser extends PureComponent {
  static propTypes = {
    word: PropTypes.string.isRequired
  }
  render() {
    return (
      <div className="Word">
       Party
      </div>
    )
  }
}
