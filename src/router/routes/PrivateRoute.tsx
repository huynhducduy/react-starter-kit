import isAuthenticated from 'auth/helpers/isAuthenticated'
import ConditionalRoute from './ConditionalRoute'
import type { ConditionalRouteProps } from './ConditionalRoute'

export default function PrivateRoute(
  props: Omit<ConditionalRouteProps, 'condition' | 'redirectTo' | 'reason'>
): JSX.Element {
  const config = {
    ...props,
    condition: isAuthenticated,
    redirect: 'login',
    reason: 'You must login before continuing.',
  }

  return <ConditionalRoute {...config} />
}
