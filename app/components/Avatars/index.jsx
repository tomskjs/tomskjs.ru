import React, { PropTypes } from 'react'
import CSSModules from 'react-css-modules'
import styles from './styles.css'


function Avatars(props) {
  return (
    <div styleName='avatars' {...props}>
      {props.children}
    </div>
  )
}

Avatars.propTypes = {
  children: PropTypes.node,
}

export default CSSModules(Avatars, styles)
