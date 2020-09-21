import React from 'react';
import { Route, Redirect } from 'react-router-dom';

import { getRoute } from './helpers';

export default function ({
  to,
  reason,
  ...rest // pass directly to Route https://reacttraining.com/react-router/web/api/Route
}) {
  return (
    <Route
      {...rest}
      render={props => (
        <Redirect
          to={{
            pathname: getRoute(to).path,
            state: { from: props.location, reason },
          }}
        />
      )}
    />
  );
}
