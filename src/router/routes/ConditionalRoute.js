import { Route, Redirect } from 'react-router-dom'
import is from 'utils/is'

import getUrl from '../helpers/getUrl'

export default function ConditionalRoute({
  condition, // boolean function(props) or boolean
  redirectTo, // string function(props) or string
  redirectData = {}, // object function(props) or object
  reason, // string function(props) or string
  component: Component, // jsx function(props) or jsx
  ...rest // pass directly to Route https://reacttraining.com/react-router/web/api/Route
}) {
  if (condition === undefined) {
    throw new Error(
      'Route must have a condition (boolean function(props) or boolean).'
    )
  } else if (typeof condition === 'function') {
    if (redirectTo === undefined) {
      throw new Error(
        'Route with a function condition prop must have a redirectTo (string function(props) or string), too.'
      )
    }
  } else {
    condition = Boolean(condition)
  }

  if (condition === undefined) {
    throw new Error(
      'Route must have a condition (boolean function(props) or boolean).'
    )
  } else if (typeof condition === 'function') {
    if (redirectTo === undefined) {
      throw new Error(
        'Route with a function condition prop must have a redirectTo (string function(props) or string), too.'
      )
    }
  } else {
    condition = Boolean(condition)
  }

  if (redirectTo !== undefined && typeof redirectTo !== 'function') {
    redirectTo = String(redirectTo)
  }

  if (reason !== undefined && typeof reason !== 'function') {
    reason = String(reason)
  }

  if (!is.reactElement(<Component />)) {
    throw new Error('Route must have a valid component.')
  }

  return (
    <Route
      {...rest}
      render={(props) =>
        (typeof condition === 'function' && condition(props) === true) ||
        condition === true ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{
              pathname: getUrl(
                typeof redirectTo === 'function'
                  ? redirectTo(props)
                  : redirectTo,
                typeof redirectData === 'function'
                  ? redirectData(props)
                  : redirectData
              ),
              state: {
                from: props.location,
                reason: typeof reason === 'function' ? reason(props) : reason,
              },
            }}
          />
        )
      }
    />
  )
}
