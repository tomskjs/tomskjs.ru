import React, { PropTypes } from 'react'
import CSSModules from 'react-css-modules'
import styles from './styles.css'


function Avatar(props) {
  return (
    <div styleName='avatar' {...props}>
    </div>
  )
}

Avatar.propTypes = {
  src: PropTypes.string,
}

export default CSSModules(Avatar, styles)
