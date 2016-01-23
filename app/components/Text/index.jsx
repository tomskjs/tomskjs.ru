import React, { PropTypes } from 'react'
import CSSModules from 'react-css-modules'
import styles from './styles.css'
import cx from 'classnames'


function Text(props) {
  return (
    <span styleName={cx('text', `size-${props.size}`)}>
      {props.children}
    </span>
  )
}

Text.propTypes = {
  children: PropTypes.node,
  size: PropTypes.oneOf(['l', 'm', 's']),
}

Text.defaultProps = {
  size: 'm',
}

export default CSSModules(Text, styles, { allowMultiple: true })
