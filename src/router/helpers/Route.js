import React from 'react';
import ConditionalRoute from './ConditionalRoute';

export default function Route(props) {
  const config = {
    ...props,
    condition: true,
  };

  return <ConditionalRoute {...config} />;
}
