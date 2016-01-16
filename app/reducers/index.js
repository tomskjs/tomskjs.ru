import { combineReducers } from 'redux'
import { routeReducer } from 'redux-simple-router'
import todos from './todos/index'

export default combineReducers({
	routing: routeReducer,
	todos,
})
