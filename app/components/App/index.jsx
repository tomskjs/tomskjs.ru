import React, { Component, PropTypes } from 'react'
import CSSModules from 'react-css-modules'
import styles from './styles.css'

import Layout from 'components/Layout'


@CSSModules(styles)
export default class App extends Component {

  static propTypes = {
    children: PropTypes.element,
  };


  render() {
    return (
      <div styleName='app'>
        <Layout>
          {this.props.children}
        </Layout>
      </div>
    )
  }
}
