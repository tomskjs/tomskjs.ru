import React, { PropTypes } from 'react'
import CSSModules from 'react-css-modules'
import styles from './styles.css'
import cx from 'classnames'


function Title(props) {
  const Tag = (() => {
    switch (props.size) {
      case 'l': return 'h1'
      case 'm': return 'h2'
      case 's': return 'h3'
      default: return 'h4'
    }
  })()

  return (
    <Tag styleName={cx('title', `size-${props.size}`, { compact: props.compact })}>
      {props.children}
    </Tag>
  )
}

Title.propTypes = {
  children: PropTypes.string,
  size: PropTypes.oneOf(['l', 'm', 's', 'xs', 'xxs']),
  compact: PropTypes.bool,
}

Title.defaultProps = {
  size: 'm',
  compact: false,
}


export default CSSModules(Title, styles, { allowMultiple: true })
