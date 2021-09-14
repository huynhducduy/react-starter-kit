import { Route, Redirect } from 'react-router-dom'
import type { StaticContext } from 'react-router'
import type { RouteComponentProps, RouteProps } from 'react-router-dom'

import getUrl from '../helpers/getUrl'
import React from 'react'

export type _RouteComponentProps = RouteComponentProps<
  {
    [x: string]: string | undefined
  },
  StaticContext,
  unknown
>

export interface ConditionalRouteProps extends RouteProps {
  condition: boolean | ((props: _RouteComponentProps) => boolean)
  redirect:
    | string
    | ((props: _RouteComponentProps) => string)
    | {
        to: string | ((props: _RouteComponentProps) => string)
        reason?: string | ((props: _RouteComponentProps) => string)
        data?:
          | Record<string, unknown>
          | ((props: _RouteComponentProps) => Record<string, unknown>)
      }
}

export default function ConditionalRoute({
  condition,
  redirect,
  component,
  ...rest // pass directly to Route https://reacttraining.com/react-router/web/api/Route
}: ConditionalRouteProps): JSX.Element {
  return (
    <Route
      {...rest}
      render={(props) => {
        let pathname, reason, data

        if (typeof redirect === 'string') {
          pathname = getUrl(redirect)
        } else if (typeof redirect === 'function') {
          pathname = getUrl(redirect(props))
        } else {
          if (typeof redirect.data === 'string') {
            data = redirect.data
          } else if (typeof redirect.data === 'function') {
            data = redirect.data(props)
          }

          if (typeof redirect.to === 'string') {
            pathname = getUrl(redirect.to, data)
          } else if (typeof redirect.to === 'function') {
            pathname = getUrl(redirect.to(props), data)
          }

          if (typeof redirect.reason === 'string') {
            reason = redirect.reason
          } else if (typeof redirect.reason === 'function') {
            reason = redirect.reason(props)
          }
        }

        return (typeof condition === 'function' && condition(props) === true) ||
          condition === true ? (
          component ? (
            React.createElement(component, props)
          ) : null
        ) : (
          <Redirect
            to={{
              pathname,
              state: {
                from: props.location,
                reason,
              },
            }}
          />
        )
      }}
    />
  )
}
