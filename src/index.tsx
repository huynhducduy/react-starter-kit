import './wdyr'

import React from 'react' //  thank to the magic of --allowSyntheticDefaultImports
import ReactDOM from 'react-dom'

import * as serviceWorkerRegistration from './serviceWorkerRegistration'
import reportWebVitals from './reportWebVitals'

import App from './App'

function render(Component: React.ElementType) {
  return ReactDOM.render(
    <React.StrictMode>
      <Component />
    </React.StrictMode>,
    document.getElementById('root')
  )
}

if (process.env.NODE_ENV === 'development') {
  const { worker } = require('./mocks/browser') // eslint-disable-line
  // eslint-disable-next-line
  worker.start({
    onUnhandledRequest: 'bypass',
  })
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
