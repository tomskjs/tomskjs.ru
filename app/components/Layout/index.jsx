import React, { Component, PropTypes } from 'react'
import CSSModules from 'react-css-modules'
import styles from './styles.css'


@CSSModules(styles)
export default class Layout extends Component {

  static propTypes = {
    children: PropTypes.element,
  };


  render() {
    return (
      <div styleName='layout'>
        {this.props.children}
      </div>
    )
  }
}
