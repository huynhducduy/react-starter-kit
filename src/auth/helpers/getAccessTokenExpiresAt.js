import LocalStorage from 'utils/localStorage'
import { LOCAL_STORAGE_KEY } from '../constants'

/**
 * @return int
 */
export default function getAccessTokenExpiresAt() {
  const access_token_expire_at = parseInt(
    LocalStorage.get(LOCAL_STORAGE_KEY.ACCESS_TOKEN_EXPIRES_AT, 0)
  )

  return Number.isInteger(access_token_expire_at) && access_token_expire_at >= 0
    ? access_token_expire_at
    : 0
}
