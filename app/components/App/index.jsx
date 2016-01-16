import React, { PropTypes } from 'react'
import CSSModules from 'react-css-modules'
import styles from './styles.css'


@CSSModules(styles)
export default class App extends React.Component {

	static propTypes = {
		children: PropTypes.element,
	};


	render() {
		return (
			<div styleName='app'>
				{this.props.children}
			</div>
		)
	}
}
