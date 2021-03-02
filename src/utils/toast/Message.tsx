export interface ToastMessageProps {
  message: string
  variant: 'success' | 'info' | 'error' | 'warn'
}

const ToastMessage: React.FunctionComponent<ToastMessageProps> = ({
  message = '',
  variant = 'info',
}) => {
  let icon

  switch (variant) {
    case 'success':
      icon = 'check'
      break
    case 'info':
      icon = 'info'
      break
    case 'error':
      icon = 'times'
      break
    case 'warn':
      icon = 'exclamation'
      break
  }

  return (
    <>
      <i className={`fa fa-${icon} mr-3`} />
      {message}
    </>
  )
}

export default ToastMessage
