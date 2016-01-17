import React, { PropTypes } from 'react'
import CSSModules from 'react-css-modules'
import styles from './styles.css'


function Link(props) {
  return (
    <a styleName='link' {...props}>
      {props.children}
    </a>
  )
}

Link.propTypes = {
  children: PropTypes.string,
  size: PropTypes.oneOf(['l', 'm', 's']),
}

Link.defaultProps = {
  size: 'm',
}

export default CSSModules(Link, styles, { allowMultiple: true })
