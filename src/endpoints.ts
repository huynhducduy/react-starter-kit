import config from 'config'
import { Method } from 'axios'
const { api } = config

type Endpoint = {
  url: string
  method: Method
}

export const SOME_API: Endpoint = {
  url: api + 'some',
  method: 'get',
}
