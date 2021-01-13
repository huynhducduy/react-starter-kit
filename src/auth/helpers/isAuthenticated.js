import LocalStorage from 'utils/localStorage'
import { LOCAL_STORAGE_KEY } from '../constants'
import tokenIsExpired from './tokenIsExpired'

export default function isAuthenticated() {
  return !!LocalStorage.get(LOCAL_STORAGE_KEY.ACCESS_TOKEN) && !tokenIsExpired()
}
