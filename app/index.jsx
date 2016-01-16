import React from 'react'
import { render } from 'react-dom'
import configureStore from 'store/configureStore'
import { Provider } from 'react-redux'
import { Router, browserHistory } from 'react-router'
import routes from './routes'
import { syncReduxAndRouter } from 'redux-simple-router'


const store = configureStore()

syncReduxAndRouter(browserHistory, store)

const router = (
	<Router history={browserHistory}>
		{routes}
	</Router>
)


const content = (() => {
	if (process.env.NODE_ENV === 'development') {
		const DevTools = require('./containers/DevTools').default
		return (
			<div>
				{router}
				<DevTools />
			</div>
		)
	}
	return router
})()


const app = (
	<Provider store={store}>
		{content}
	</Provider>
)

render(app, document.getElementById('root'))
