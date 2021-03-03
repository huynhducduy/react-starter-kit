import { ToastContainer as ToastifyContainer } from 'react-toastify'

const Provider = ({ children }: { children: React.ReactNode }) => (
  <>
    {children}
    <ToastifyContainer
      position="bottom-left"
      autoClose={5000}
      hideProgressBar={false}
      newestOnTop
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
    />
  </>
)

export default Provider
