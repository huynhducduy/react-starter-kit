import './styles/index.scss'

import composeComponents from 'react-component-composer'

import { HelmetProvider } from 'react-helmet-async'
import { Router, Provider as RouterProvider } from 'router'
import { ReactQueryDevtools } from 'react-query/devtools'
import { QueryClient, QueryClientProvider } from 'react-query'
import { Provider as StoreProvider } from 'store'
import { Provider as ToastProvider } from 'utils/toast'
import { Provider as ConfirmProvider } from 'utils/hooks/useConfirm'
import { Provider as MetaDataProvider } from 'utils/hooks/useMetaData'

import ErrorBoundary from 'utils/ErrorBoundary'

import ConfirmComponent from 'components/ConfirmComponent'
import AuthUpdater from 'auth/AuthUpdater'

import 'i18n'

// Enable polyfills
// import 'react-app-polyfill/ie11'
// import 'react-app-polyfill/stable'

const queryClient = new QueryClient()

const Providers = composeComponents(
  // [SomeProvider, { initialState: '' }],
  [QueryClientProvider, { client: queryClient }],
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
      <ReactQueryDevtools initialIsOpen={false} />
    </Providers>
  )
}

export default App
