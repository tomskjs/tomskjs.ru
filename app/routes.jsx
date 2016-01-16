import React from 'react'
import { Route, IndexRoute, Redirect, IndexRedirect } from 'react-router'
import App from './components/App'
import IndexPage from 'containers/IndexPage'
import TodoPage from 'containers/TodoPage'
import AnotherPage from 'containers/AnotherPage'

export default (
	<Route path='/' component={App}>
		<IndexRoute component={IndexPage} />
		<Route path='todo' component={TodoPage}>
			<Route path='all' />
			<Route path='active' />
			<Route path='completed' />
			<IndexRedirect to='all' />
			<Redirect from='*' to='all' />
		</Route>
		<Route path='another' component={AnotherPage} />
		<Redirect from='*' to='/' />
	</Route>
)
