import hoistStatics from 'hoist-non-react-statics'
import { Component } from 'react'

/**
 * Allows two animation frames to complete to allow other components to update
 * and re-render before mounting and rendering an expensive `WrappedComponent`.
 */
export default function deferComponentRender(WrappedComponent) {
  class DeferredRenderWrapper extends Component {
    constructor(props) {
      super(props)
      this.state = { shouldRender: false }
    }

    componentDidMount() {
      window.requestAnimationFrame(() => {
        window.requestAnimationFrame(() =>
          this.setState({ shouldRender: true })
        )
      })
    }

    render() {
      const { shouldRender } = this.state

      return shouldRender ? <WrappedComponent {...this.props} /> : null
    }
  }

  return hoistStatics(DeferredRenderWrapper, WrappedComponent)
}
