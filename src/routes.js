import React from 'react'
import { Router, Route, IndexRedirect, browserHistory } from 'react-router'
import Container from './components/container'
import Home from './components/home'
import Page from './components/page'
import Portfolio from './components/portfolio'

const Routes = props => {
  return (
    <Router history={browserHistory}>
      <Route path="/" component={Container}>
        <IndexRedirect to="/blog" />
        <Route path="/blog" component={Home} />
        <Route path="/portfolio" component={Portfolio} />
        <Route path="/:page" component={Page} />
      </Route>
      <Route path="*">
        <IndexRedirect to="/" />
      </Route>
    </Router>
  )
}

export default Routes
