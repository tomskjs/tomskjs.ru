import React, { PropTypes } from 'react'
import CSSModules from 'react-css-modules'
import styles from './styles.css'

function Layout(props) {
  return (
    <main styleName='layout'>
      {props.children}
    </main>
  )
}

Layout.propTypes = {
  children: PropTypes.element,
}

export default CSSModules(Layout, styles)
