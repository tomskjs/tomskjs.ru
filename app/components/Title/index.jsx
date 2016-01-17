import React, { PropTypes } from 'react'
import CSSModules from 'react-css-modules'
import styles from './styles.css'
import cx from 'classnames'


function Title(props) {
  return (
    <h1 styleName={cx('title', `size-${props.size}`)}>
      {props.children}
    </h1>
  )
}

Title.propTypes = {
  children: PropTypes.string,
  size: PropTypes.oneOf(['l', 'm', 's', 'xs', 'xxs']),
}

Title.defaultProps = {
  size: 'm',
}


export default CSSModules(Title, styles, { allowMultiple: true })
