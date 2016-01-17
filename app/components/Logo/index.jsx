import React, { Component, PropTypes } from 'react'
import CSSModules from 'react-css-modules'
import styles from './styles.css'


@CSSModules(styles)
export default class Logo extends Component {

  static propTypes = {
    children: PropTypes.string,
  };


  render() {
    return (
      <div>
        logo
      </div>
    )
  }
}
