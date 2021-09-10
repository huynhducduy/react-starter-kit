import ConditionalRoute from './ConditionalRoute'
import type { ConditionalRouteProps } from './ConditionalRoute'

export default function RedirectRoute(
  props: Omit<ConditionalRouteProps, 'condition' | 'component'>
) {
  console.log('redirect', props)
  const config = {
    ...props,
    condition: false,
    component: () => <></>,
  }
  return <ConditionalRoute {...config} />
}
