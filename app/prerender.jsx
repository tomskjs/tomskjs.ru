import React from 'react'
import { renderToString } from 'react-dom/server'
import { RoutingContext, match } from 'react-router'
import createLocation from 'history/lib/createLocation'
import routes from './routes'
import { Provider } from 'react-redux'
import configureStore from 'store/configureStore'


const store = configureStore()

export default req => {
	const location = createLocation(req.url)
	let app = null

	match({ routes, location }, (error, redirect, renderProps) => {
		app = renderToString(
			<Provider store={store} key='provider'>
				<RoutingContext {...renderProps} />
			</Provider>
		)
	})

	return app
}
