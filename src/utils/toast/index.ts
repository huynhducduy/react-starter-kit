import { createElement } from 'react'
import { toast as toastify } from 'react-toastify'
import Message from './Message'

const toast = {
  success: function (message: string): void {
    toastify.success(createElement(Message, { message, variant: 'success' }))
  },
  error: function (message: string): void {
    toastify.error(
      toastify.success(createElement(Message, { message, variant: 'error' }))
    )
  },
  info: function (message: string): void {
    toastify.info(
      toastify.success(createElement(Message, { message, variant: 'info' }))
    )
  },
  warn: function (message: string): void {
    toastify.warn(
      toastify.success(createElement(Message, { message, variant: 'warn' }))
    )
  },
}

export default toast
export { default as Provider } from './Provider'
