import { createStore, compose, applyMiddleware } from 'redux'
import middlewares from 'middlewares'
import rootReducer from '../reducers'

const finalCreateStore = compose(
	// Middleware you want to use in production:
	applyMiddleware(...middlewares),
	// Other store enhancers if you use any
)(createStore)

export default function configureStore(initialState) {
	return finalCreateStore(rootReducer, initialState)
}
