import React, { PropTypes } from 'react'
import CSSModules from 'react-css-modules'
import styles from './styles.css'
import { Link as RouterLink } from 'react-router'


function Link(props) {
  const LinkElement = (() => {
    if (props.to) {
      return RouterLink
    }
    return 'a'
  })()

  return (
    <LinkElement styleName='link' {...props}>
      {props.children}
    </LinkElement>
  )
}

Link.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.array,
    PropTypes.node,
    PropTypes.element,
  ]),
  size: PropTypes.oneOf(['l', 'm', 's']),
  to: PropTypes.string, // for local links
  href: PropTypes.string, // for external links
}

Link.defaultProps = {
  size: 'm',
}

export default CSSModules(Link, styles, { allowMultiple: true })
