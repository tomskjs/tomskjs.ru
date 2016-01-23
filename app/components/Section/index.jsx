import React, { PropTypes } from 'react'
import CSSModules from 'react-css-modules'
import styles from './styles.css'


function Section(props) {
  return (
    <div styleName='section' {...props}>
      {props.children}
    </div>
  )
}

Section.propTypes = {
  children: PropTypes.node,
}

export default CSSModules(Section, styles)
