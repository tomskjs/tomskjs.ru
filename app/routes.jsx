import React from 'react'
import { Route, IndexRoute, Redirect } from 'react-router'
import App from './components/App'
import IndexPage from 'containers/IndexPage'

export default (
  <Route path='/' component={App}>
    <IndexRoute component={IndexPage} />
    <Redirect from='*' to='/' />
  </Route>
)
