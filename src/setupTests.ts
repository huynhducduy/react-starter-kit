import '@testing-library/jest-dom'
import { server } from './mocks/server.js'

// Establish API mocking before all tests.
beforeAll(() => server.listen({ onUnhandledRequest: 'bypass' }))
// Reset any request handlers that we may add during the tests,
// so they don't affect other tests.
afterEach(() => server.resetHandlers())
// Clean up after the tests are finished.
afterAll(() => server.close())

const localStorageMock = (function () {
  const store = new Map()
  return {
    getItem: function (key: string) {
      return String(store.get(key))
    },
    setItem: function (key: string, value: string) {
      store.set(key, String(value))
    },
    clear: function () {
      store.clear()
    },
    removeItem: function (key: string) {
      store.delete(key)
    },
    length: store.size,
    key: (index: number): string => Array.from(store.keys())[index] as string,
  }
})()

global.localStorage = localStorageMock
