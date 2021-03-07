import { Suspense } from 'react'
import { Switch } from 'react-router-dom'

import { BrowserRouter } from 'react-router-dom'

import * as Route from 'router/routes'
import Loader from './Loader'
import load from './helpers/load'

import getPath from './helpers/getPath'
import getPaths from './helpers/getPaths'

// Route dictionary ----------------------------------------------------

export const routes = new Map([
  ['home', ['/', '/home']],
  ['login', '/login'],
  ['home2', '/home2'],
])

// End route dictionary ------------------------------------------------

function Router() {
  return (
    <Suspense fallback={<Loader />}>
      <Switch>
        <Route.NormalRoute
          path={getPaths('home')}
          exact
          component={load(() =>
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
          component={load(() =>
            import('views/Login' /* webpackChunkName: "login" */)
          )}
          condition={() => {
            return true
          }}
          reason={"Don't have permission"}
          redirectTo={getPath('home')}
          redirectData={function (props) {
            console.log(props)
            return {}
          }}
        />
      </Switch>
    </Suspense>
  )
}

export { Router, BrowserRouter as Provider }
