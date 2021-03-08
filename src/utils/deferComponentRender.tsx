import hoistStatics from 'hoist-non-react-statics'
import { useState, useLayoutEffect } from 'react'

/**
 * Allows two animation frames to complete to allow other components to update
 * and re-render before mounting and rendering an expensive `WrappedComponent`.
 * https://medium.com/@paularmstrong/twitter-lite-and-high-performance-react-progressive-web-apps-at-scale-d28a00e780a3
 */
export default function deferComponentRender(
  WrappedComponent: React.ComponentType
) {
  const DeferredRenderWrapper: React.ComponentType = (props) => {
    const [shouldRender, setShouldRender] = useState<boolean>(false)

    useLayoutEffect(() => {
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
