import type { ElementType } from 'react'

const isElementType = (thing: unknown): thing is ElementType => {
  return !Array.isArray(thing)
}

type componentWithProps =
  | [React.ElementType, Record<string, unknown>?]
  | React.ElementType

const composeComponents = (...components: componentWithProps[]) => ({
  children,
}: {
  children: React.ReactNode
}) =>
  components.reduceRight<JSX.Element>((child, component) => {
    let Component: React.ElementType,
      params: Record<string, unknown> | undefined

    if (isElementType(component)) {
      Component = component
    } else {
      Component = component[0]
      params = component[1]
    }

    return <Component {...(params || {})}>{child}</Component>
  }, children as JSX.Element)

export default composeComponents
