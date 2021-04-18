import { Router } from 'router'

import { HelmetProvider } from 'react-helmet-async'

import './styles/index.scss'

import { Provider as RouterProvider } from 'router'
import { Provider as StoreProvider } from 'store'
import { Provider as ToastProvider } from 'utils/toast'
import { Provider as ConfirmProvider } from 'utils/hooks/useConfirm'
import { Provider as MetaDataProvider } from 'utils/hooks/useMetaData'

import ErrorBoundary from 'utils/ErrorBoundary'
import composeComponents from 'utils/composeComponents'

import ConfirmComponent from 'components/ConfirmComponent'
import AuthUpdater from 'auth/AuthUpdater'

import 'i18n'

// Enable polyfills
// import 'react-app-polyfill/ie11'
// import 'react-app-polyfill/stable'

const Providers = composeComponents(
  // [SomeProvider, { initialState: '' }],
  StoreProvider,
  HelmetProvider,
  RouterProvider,
  ToastProvider,
  MetaDataProvider,
  [ConfirmProvider, { ConfirmComponent }],
  ErrorBoundary
)

function App() {
  return (
    <Providers>
      <AuthUpdater />
      <Router />
    </Providers>
  )
}

export default App
