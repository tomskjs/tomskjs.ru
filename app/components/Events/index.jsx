import React, { PropTypes } from 'react'
import CSSModules from 'react-css-modules'
import styles from './styles.css'


function Events(props) {
  return (
    <div styleName='events' {...props}>
      {props.children}
    </div>
  )
}

Events.propTypes = {
  children: PropTypes.node,
}

export default CSSModules(Events, styles)
