import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';

import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import ErrorBoundary from 'utils/ErrorBoundary';
import buildComponentTree from 'utils/buildComponentTree';

const Providers = buildComponentTree([
  // [SomeProvider, { initialState: '' }],
  [HelmetProvider],
  [BrowserRouter],
  [ErrorBoundary],
]);

function render(Component) {
  return ReactDOM.render(
    <React.StrictMode>
      <Providers>
        <Component />
      </Providers>
    </React.StrictMode>,
    document.getElementById('root')
  );
}

render(App);

// Enable hot-module-replacement https://medium.com/@brianhan/hot-reloading-cra-without-eject-b54af352c642
if (module.hot) {
  module.hot.accept('./App', () => {
    const NextApp = require('./App').default;
    render(NextApp);
  });
}

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
