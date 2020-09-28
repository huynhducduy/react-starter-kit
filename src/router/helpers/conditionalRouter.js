import React from 'react';
import { Route, Redirect } from 'react-router-dom';

import getRoute from './getRoute';

export default function ({
  component: Component,
  condition,
  redirectTo,
  reason,
  ...rest // pass directly to Route https://reacttraining.com/react-router/web/api/Route
}) {
  return (
    <Route
      {...rest}
      render={props =>
        condition(props) === true ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{
              pathname: getRoute(redirectTo).path,
              state: { from: props.location, reason },
            }}
          />
        )
      }
    />
  );
}
