// import React from 'react' //  thank to the magic of --allowSyntheticDefaultImports
import { StrictMode } from 'react'
import ReactDOM from 'react-dom'

import * as serviceWorkerRegistration from './serviceWorkerRegistration'
import reportWebVitals from './reportWebVitals'

import { HelmetProvider } from 'react-helmet-async'

import './styles/index.scss'
import App from './App'

import { Provider as RouterProvider } from 'router'
import { Provider as StoreProvider } from 'store'

import ErrorBoundary from 'utils/ErrorBoundary'
import buildComponentTree from 'utils/buildComponentTree'

const Providers = buildComponentTree([
  // [SomeProvider, { initialState: '' }],
  [StoreProvider],
  [HelmetProvider],
  [RouterProvider],
  [ErrorBoundary],
]) as React.ComponentType

function render(Component: React.ComponentType) {
  return ReactDOM.render(
    <StrictMode>
      <Providers>
        <Component />
      </Providers>
    </StrictMode>,
    document.getElementById('root')
  )
}

render(App)

// Enable hot-module-replacement
// if (import.meta.hot) {
//   import.meta.hot?.accept('./App', (nextApp) => {
//     render(nextApp)
//   })
// }

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorkerRegistration.unregister()

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
