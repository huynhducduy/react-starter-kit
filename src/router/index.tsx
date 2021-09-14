import { Suspense } from 'react'
import { Switch, BrowserRouter } from 'react-router-dom'
import type { RouteProps } from 'react-router'
import type { RouteComponentProps } from 'react-router-dom'

import * as Route from 'router/routes'
import Loader from './Loader'
import load from './helpers/load'
import getPaths from './helpers/getPaths'

enum RouteType {
  Public,
  Guest,
  Private,
  Redirect,
  Conditional,
}

interface RouteConfigItem {
  name: string
  type: RouteType
  exact?: boolean
  aliases?: string[]
  component: React.ComponentType<RouteComponentProps> | React.ComponentType
}

interface RedirectRouteConfigItem extends Omit<RouteConfigItem, 'component'> {
  redirect:
    | {
        to: string | ((props: RouteProps) => string)
        reason?: string | ((props: RouteProps) => string)
        data?:
          | Record<string, unknown>
          | ((props: RouteProps) => Record<string, unknown>)
      }
    | string
    | ((props: RouteProps) => string)
}

interface ConditionalRouteConfigItem
  extends RouteConfigItem,
    RedirectRouteConfigItem {
  condition: boolean | ((props: RouteProps) => boolean)
  reason?: string | ((props: RouteProps) => string)
}

// Route configuration ----------------------------------------------------

const routeConfig = new Map<
  string,
  RouteConfigItem | RedirectRouteConfigItem | ConditionalRouteConfigItem
>([
  [
    '/',
    {
      name: 'home',
      type: RouteType.Public,
      exact: true,
      component: load(
        () => import('views/Home' /* webpackChunkName: "home" */)
      ),
      aliases: ['/home'],
    },
  ],
  [
    '/login',
    {
      name: 'login',
      type: RouteType.Guest,
      exact: true,
      component: load(
        () => import('views/Login' /* webpackChunkName: "login" */)
      ),
    },
  ],
  [
    '/custom',
    {
      name: 'custom',
      type: RouteType.Conditional,
      exact: true,
      component: load(
        () => import('views/Login' /* webpackChunkName: "login" */)
      ),
      condition: true,
      redirect: {
        to: 'home',
        reason: 'Already logged in!',
        data: function (props) {
          console.log(props)
          return {}
        },
      },
    },
  ],
  [
    '/testRedirect',
    {
      name: 'test',
      type: RouteType.Redirect,
      redirect: 'login',
      exact: true,
    },
  ],
])

// End route configuration ------------------------------------------------

export const routes = new Map()

routeConfig.forEach((value, key) => {
  routes.set(value.name, [key].concat(value.aliases || []))
})

function Router() {
  return (
    <Suspense fallback={<Loader />}>
      <Switch>
        {Array.from(routeConfig.keys()).map((key: string) => {
          const route = routeConfig.get(key)
          if (route) {
            const path = getPaths(route.name)
            switch (route.type) {
              case RouteType.Public:
                return <Route.PublicRoute key={key} {...route} path={path} />
              case RouteType.Guest:
                return (
                  <Route.GuestRoute
                    {...(route as RedirectRouteConfigItem)}
                    key={key}
                    path={path}
                  />
                )
              case RouteType.Private:
                return (
                  <Route.PrivateRoute
                    {...(route as RedirectRouteConfigItem)}
                    key={key}
                    path={path}
                  />
                )
              case RouteType.Redirect:
                return (
                  <Route.RedirectRoute
                    {...(route as RedirectRouteConfigItem)}
                    key={key}
                    path={path}
                  />
                )
              case RouteType.Conditional:
                return (
                  <Route.ConditionalRoute
                    {...(route as ConditionalRouteConfigItem)}
                    key={key}
                    path={path}
                  />
                )
              default:
                return null
            }
          }
          return null
        })}
      </Switch>
    </Suspense>
  )
}

export { Router, BrowserRouter as Provider }
