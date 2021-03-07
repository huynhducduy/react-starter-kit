import waitAtLeast from 'utils/waitAtLeast'
import { lazy, ComponentType, LazyExoticComponent } from 'react'

export default function load<T extends ComponentType>(
  factory: () => Promise<{ default: T }>,
  wait = 500
): LazyExoticComponent<T> {
  return lazy(() => waitAtLeast(factory(), wait))
}
