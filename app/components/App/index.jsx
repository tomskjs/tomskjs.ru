import React, { PropTypes } from 'react'
import CSSModules from 'react-css-modules'
import styles from './styles.css'


import Header from 'components/Header'

@CSSModules(styles)
export default class App extends React.Component {

	static propTypes = {
		children: PropTypes.element,
	};


	render() {
		return (
			<div styleName='app'>
				<Header />
				{this.props.children}
			</div>
		)
	}
}
