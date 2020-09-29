import React, { Suspense } from 'react';
import { Switch } from 'react-router-dom';
import { lazy } from 'react';

import ConditionalRoute from './helpers/ConditionalRoute';
import PrivateRoute from './helpers/PrivateRoute';
import GuestRoute from './helpers/GuestRoute';
import RedirectRoute from './helpers/RedirectRoute';
import Route from './helpers/Route';

import getPath from './helpers/getPath';
import getPaths from './helpers/getPaths';

// Prepare route dictionary ----------------------------------------------------

export const routes = new Map([
  ['home', ['/', '/home']], // name => path (string or array of strings)
  ['login', '/login'],
  ['home2', '/home2'],
]);
export const inverseRoutes = new Map();

routes.forEach((value, key) => {
  if (Array.isArray(value)) for (const i of value) inverseRoutes.set(i, key);
  else inverseRoutes.set(value, key);
});

// End prepare route dictionary ------------------------------------------------

function RouterTree() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Switch>
        <Route
          path={getPaths('home')}
          exact
          component={lazy(() =>
            import('views/Home' /* webpackChunkName: "home" */)
          )}
        />
        <RedirectRoute path={getPaths('home2')} exact to={getPath('home')} />
        <ConditionalRoute
          path={getPaths('login')}
          exact
          component={lazy(() =>
            import('views/Login' /* webpackChunkName: "login" */)
          )}
          condition={props => {
            return false;
          }}
          reason={"Don't have permission"}
          redirectTo={getPath('home')}
          redirectData={function (props) {
            console.log(props);
          }}
        />
      </Switch>
    </Suspense>
  );
}

export default RouterTree;
