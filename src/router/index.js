import { Suspense } from 'react'
import { Switch } from 'react-router-dom'
import { lazy } from 'react'

import { BrowserRouter } from 'react-router-dom'

import * as Route from 'router/routes'

import getPath from './helpers/getPath'
import getPaths from './helpers/getPaths'

// Route dictionary ----------------------------------------------------

export const routes = new Map([
  ['home', ['/', '/home']], // name => path (string or array of strings)
  ['login', '/login'],
  ['home2', '/home2'],
])

// End route dictionary ------------------------------------------------

function Router() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Switch>
        <Route.NormalRoute
          path={getPaths('home')}
          exact
          component={lazy(() =>
            import('views/Home' /* webpackChunkName: "home" */)
          )}
        />
        <Route.RedirectRoute
          path={getPaths('home2')}
          exact
          to={getPath('home')}
        />
        <Route.ConditionalRoute
          path={getPaths('login')}
          exact
          component={lazy(() =>
            import('views/Login' /* webpackChunkName: "login" */)
          )}
          condition={props => {
            return true
          }}
          reason={"Don't have permission"}
          redirectTo={getPath('home')}
          redirectData={function (props) {
            console.log(props)
          }}
        />
      </Switch>
    </Suspense>
  )
}

export { Router, BrowserRouter as Provider }
