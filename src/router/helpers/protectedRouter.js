import React from 'react';
import isAuthenticated from '../auth/helpers/isAuthenticated';
import ConditionalRouter from './conditionalRouter';

export default function ({ component, ...rest }) {
  const config = {
    component,
    condition: isAuthenticated(),
    redirectTo: 'login',
    reason: '',
    ...rest,
  };

  return <ConditionalRouter {...config} />;
}
