import {
  render,
  screen,
  waitForElementToBeRemoved,
} from '@testing-library/react'

import App from './App'

it('renders without crashing', async () => {
  render(<App />)
  expect(screen.getByText('Loading...')).toBeInTheDocument()

  await waitForElementToBeRemoved(screen.getByText('Loading...'))

  expect(screen.getByText('Update title')).toBeInTheDocument()
})
