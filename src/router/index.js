import React, { Suspense } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { lazy } from 'react';

import PrivateRouter from './helpers/privateRouter';
import ConditionalRouter from './helpers/privateRouter';

export const routes = [
  {
    name: 'home',
    path: '/',
    component: lazy(() => import('views/Home' /* webpackChunkName: "home" */)),
    exact: true,
    auth: true,
  },
  {
    name: 'login', // must be unique
    path: '/login',
    component: lazy(() =>
      import('views/Login' /* webpackChunkName: "login" */)
    ),
    exact: true,
    // Custom prop - middleware
    // auth: true,
    condition: props => {
      console.log(props);
      return true;
    },
    reason: "Don't have permission",
    redirectTo: 'home',
  },
];

function Router() {
  return (
    <BrowserRouter>
      <Suspense fallback={<div>Loading...</div>}>
        <Switch>
          {routes.map(({ name, condition, auth, ...props }) => {
            if (typeof condition === 'function') {
              return (
                <ConditionalRouter
                  key={name}
                  condition={condition}
                  {...props}
                />
              );
            }

            if (auth === true) {
              return <PrivateRouter key={name} {...props} />;
            }

            return <Route key={name} {...props} />;
          })}
        </Switch>
      </Suspense>
    </BrowserRouter>
  );
}

export default Router;
