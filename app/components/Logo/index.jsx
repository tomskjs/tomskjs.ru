import React, { PropTypes } from 'react'
import CSSModules from 'react-css-modules'
import styles from './styles.css'
import InlineSVG from 'svg-inline-react'


function Logo(props) {
  return (
    <div styleName='logo' {...props}>
      <InlineSVG src={require('./logo.svg')} />
    </div>
  )
}

Logo.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
}

Logo.defaultProps = {
  width: 200,
  height: 200,
}

export default CSSModules(Logo, styles)
