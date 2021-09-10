import ConditionalRoute from './ConditionalRoute'
import type { ConditionalRouteProps } from './ConditionalRoute'

export default function NormalRoute(
  props: Omit<ConditionalRouteProps, 'condition' | 'redirect'>
) {
  const config = {
    ...props,
    condition: true,
    redirect: '',
  }

  return <ConditionalRoute {...config} />
}
