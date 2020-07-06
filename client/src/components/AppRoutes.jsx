import React from 'react'
import { Router, Route, Switch } from 'react-router-dom'
import { createBrowserHistory } from 'history'
import { requireAuth, useLayout, useLocalization, makeSuspenseComponent, useMultiThemes } from 'root/customMiddleware'
import appRoutesPath from 'root/appRoutes'
import HeaderComponent from 'root/components/layouts/header'

// load containers with react lazy to split code.
const HomeContainer = React.lazy(() => import('root/containers/home'))
const LoginContainer = React.lazy(() => import('root/containers/login'))
const RegisterContainer = React.lazy(() => import('root/containers/register'))

const publicRoute = [
  {
    path: appRoutesPath.home,
    component: makeSuspenseComponent(HomeContainer),
    isExact: false,
    layout: { header: HeaderComponent }
  },
  {
    path: appRoutesPath.login,
    component: makeSuspenseComponent(LoginContainer),
    isExact: false,
    layout: {}
  },
  {
    path: appRoutesPath.register,
    component: makeSuspenseComponent(RegisterContainer),
    isExact: false,
    layout: {}
  }
]

const privateRoute = [
]

const renderPublicRoute = () => {
  return publicRoute.map((route) =>
    <Route key={route.path} path={route.path} exact={route.isExact} component={useMultiThemes(useLocalization(route.layout ? useLayout(route.layout, route.component) : route.component))} />
  )
}

const renderPrivateRoute = () => {
  return privateRoute.map((route) =>
    <Route key={route.path} path={route.path} exact={route.isExact} component={useMultiThemes(useLocalization(requireAuth(route.layout ? useLayout(route.layout, route.component) : route.component)))} />
  )
}

const history = createBrowserHistory()
const Routes = () => (
  <Router history={history}>
    <Switch>
      <Route path="/" exact component={useMultiThemes(useLocalization(useLayout({ header: HeaderComponent }, (makeSuspenseComponent(HomeContainer)))))} />
      {renderPublicRoute()}
      {renderPrivateRoute()}
      <Route component={() => { return (<div>not found</div>) }} />
    </Switch>
  </Router>
);

export default Routes