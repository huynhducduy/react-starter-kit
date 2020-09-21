import { lazy } from 'react';

export default [
  {
    name: 'home',
    path: '/',
    component: lazy(() =>
      import('./views/Home' /* webpackChunkName: "home" */)
    ),
    exact: true,
    auth: true, // true: require auth, false: require non-auth, not specify: public
  },
];
