import isAuthenticated from 'auth/helpers/isAuthenticated'
import ConditionalRoute from './ConditionalRoute'
import type { ConditionalRouteProps } from './ConditionalRoute'

export default function GuestRoute(
  props: Omit<ConditionalRouteProps, 'condition' | 'redirectTo' | 'reason'>
): JSX.Element {
  const config = {
    ...props,
    condition: () => !isAuthenticated(),
    redirect: 'home',
    reason: 'You cannot access this page when logged in',
  }

  return <ConditionalRoute {...config} />
}
