import hoistStatics from 'hoist-non-react-statics'
import { useState, useEffect } from 'react'

/**
 * Allows two animation frames to complete to allow other components to update
 * and re-render before mounting and rendering an expensive `WrappedComponent`.
 */
export default function deferComponentRender(
  WrappedComponent: React.ComponentType
) {
  const DeferredRenderWrapper: React.ComponentType = (props) => {
    const [shouldRender, setShouldRender] = useState<boolean>(false)

    useEffect(() => {
      const id = window.requestAnimationFrame(() => {
        window.requestAnimationFrame(() => setShouldRender(true))
      })
      return () => {
        window.cancelAnimationFrame(id)
      }
    }, [])

    return shouldRender ? <WrappedComponent {...props} /> : null
  }

  return hoistStatics(DeferredRenderWrapper, WrappedComponent)
}
