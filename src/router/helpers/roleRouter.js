import React from 'react';
import havePermissionTo from '../auth/helpers/havePermissionTo';
import ConditionalRouter from './conditionalRouter';

export default function ({ component, ...rest }) {
  const config = {
    component,
    condition: havePermissionTo(),
    redirectTo: 'home',
    ...rest,
  };

  return <ConditionalRouter {...config} />;
}
