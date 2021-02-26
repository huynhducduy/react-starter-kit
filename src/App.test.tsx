import { shallow } from 'enzyme'

import App from './App'

it('renders without crashing', () => {
  shallow(<App />)
})

it('read config successfully', () => {
  expect(import.meta.env).toBe(process.env)
})
