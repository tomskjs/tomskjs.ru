import React, { Component, PropTypes } from 'react'
import CSSModules from 'react-css-modules'
import styles from './styles.css'


@CSSModules(styles)
export default class Text extends Component {

  static propTypes = {
    children: PropTypes.string,
  };


  render() {
    return (
      <div styleName='text'>
        {this.props.children}
      </div>
    )
  }
}
