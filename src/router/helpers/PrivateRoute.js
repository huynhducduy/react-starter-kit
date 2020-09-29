import React from 'react';
import isAuthenticated from 'auth/helpers/isAuthenticated';
import ConditionalRoute from './ConditionalRoute';

export default function PrivateRoute({ ...rest }) {
  const config = {
    ...rest,
    condition: isAuthenticated,
    redirectTo: 'login',
    reason: 'You must login before continuing.',
  };

  return <ConditionalRoute {...config} />;
}
