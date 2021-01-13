import React from 'react';
import ConditionalRoute from './ConditionalRoute';

export default function RedirectRoute({
  to,
  reason,
  ...rest // pass directly to Route https://reacttraining.com/react-router/web/api/Route
}) {
  const config = {
    ...rest,
    condition: false,
    redirectTo: to,
    reason: reason,
  };
  return <ConditionalRoute {...config} />;
}
