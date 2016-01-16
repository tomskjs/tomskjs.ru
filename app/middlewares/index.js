import { browserHistory } from 'react-router'
import { syncHistory } from 'redux-simple-router'

export const reduxRouterMiddleware = syncHistory(browserHistory)

export default [
	reduxRouterMiddleware,
]
