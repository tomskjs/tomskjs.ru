import React from 'react'
import { IndexLink, Link } from 'react-router'
import CSSModules from 'react-css-modules'
import styles from './styles.css'


const Header = props => (
  <header styleName='header'>
    <IndexLink activeClassName={styles.active} styleName='menu-item' to='/'>Main</IndexLink>
    <Link activeClassName={styles.active} styleName='menu-item' to='/todo'>Todo</Link>
    <Link activeClassName={styles.active} styleName='menu-item' to='/another'>Another</Link>
  </header>
)

export default CSSModules(Header, styles)
