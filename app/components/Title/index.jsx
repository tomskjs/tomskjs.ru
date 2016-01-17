import React, { Component, PropTypes } from 'react'
import CSSModules from 'react-css-modules'
import styles from './styles.css'


@CSSModules(styles)
export default class Title extends Component {

  static propTypes = {
    children: PropTypes.string,
  };


  render() {
    return (
      <h1 styleName='title'>
        {this.props.children}
      </h1>
    )
  }
}
