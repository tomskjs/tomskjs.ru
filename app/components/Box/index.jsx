import React, { PropTypes } from 'react'
import CSSModules from 'react-css-modules'
import styles from './styles.css'

const Box = props => (
  <div data-gemini='box' styleName='box' style={{ backgroundColor: props.color }}>
    <div styleName='text'>
      box
    </div>
  </div>
)

Box.propTypes = {
  color: PropTypes.string,
}

Box.defaultProps = {
  color: 'yellowgreen',
}


export default CSSModules(Box, styles)
