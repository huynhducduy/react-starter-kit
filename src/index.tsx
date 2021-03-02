// import './wdyr' // un-comment this line and restart application to enable wdyr

import React from 'react' //  thank to the magic of --allowSyntheticDefaultImports
import ReactDOM from 'react-dom'

import * as serviceWorkerRegistration from './serviceWorkerRegistration'
import reportWebVitals from './reportWebVitals'

import { HelmetProvider } from 'react-helmet-async'

import './styles/index.scss'
import App from './App'

import { Provider as RouterProvider } from 'router'
import { Provider as StoreProvider } from 'store'
import { Provider as ToastProvider } from 'utils/toast'

import ErrorBoundary from 'utils/ErrorBoundary'
import buildComponentTree from 'utils/buildComponentTree'

const Providers = buildComponentTree([
  // [SomeProvider, { initialState: '' }],
  [StoreProvider],
  [HelmetProvider],
  [RouterProvider],
  [ToastProvider],
  [ErrorBoundary],
]) as React.ComponentType

function render(Component: React.ComponentType) {
  return ReactDOM.render(
    <React.StrictMode>
      <Providers>
        <Component />
      </Providers>
    </React.StrictMode>,
    document.getElementById('root')
  )
}

render(App)

// Enable hot-module-replacement https://medium.com/@brianhan/hot-reloading-cra-without-eject-b54af352c642
if (module.hot) {
  module.hot.accept('./App', () => {
    const NextApp = require('./App').default; // eslint-disable-line
    render(NextApp)
  })
}

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorkerRegistration.unregister()

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
