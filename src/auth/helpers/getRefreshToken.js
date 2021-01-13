import LocalStorage from 'utils/localStorage'
import { LOCAL_STORAGE_KEY } from '../constants'

export default function getRefreshToken() {
  return LocalStorage.get(LOCAL_STORAGE_KEY.REFRESH_TOKEN)
}
