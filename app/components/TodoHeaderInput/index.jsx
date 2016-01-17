import React, { Component, PropTypes } from 'react'
import CSSModules from 'react-css-modules'
import styles from './styles.css'

const ENTER_KEY = 13

@CSSModules(styles)
export default class TodoHeader extends Component {

  static propTypes = {
    addTodo: PropTypes.func.isRequired,
  };


  handleKeyDown = event => {
    const value = event.target.value.trim()
    if (!value) return
    if (event.keyCode !== ENTER_KEY) return
    event.preventDefault()
    this.props.addTodo(value)
    event.target.value = '' // eslint-disable-line no-param-reassign
  };


  render() {
    return (
      <input
        maxLength={140}
        styleName='input'
        placeholder='What needs to be done?'
        onKeyDown={this.handleKeyDown}
      />
    )
  }
}
