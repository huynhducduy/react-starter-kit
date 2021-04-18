import { Fragment } from 'react'

type componentWithProps = [React.ElementType, Record<string, unknown>?]

const buildComponentTree = (components: componentWithProps[]) => {
  const [First, params] = components.shift() as componentWithProps

  let Rest: React.ElementType
  if (components.length === 0) Rest = Fragment
  else Rest = buildComponentTree(components)

  return ({ children }: { children: React.ReactNode }) => (
    <First {...(params || {})}>
      <Rest>{children}</Rest>
    </First>
  )
}

export default buildComponentTree
