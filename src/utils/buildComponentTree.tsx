type componentWithProps = [React.ElementType, Record<string, unknown>?]

const buildComponentTree = (components: componentWithProps[]) => {
  if (components.length === 1) {
    return components[0][0]
  }

  const [A, paramsA] = components.shift() as componentWithProps
  const B = buildComponentTree(components)

  return ({ children }: { children: React.ReactNode }) => (
    <A {...(paramsA || {})}>
      <B>{children}</B>
    </A>
  )
}

export default buildComponentTree
