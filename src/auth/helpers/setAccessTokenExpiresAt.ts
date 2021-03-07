import { isEmpty } from 'ramda'
import { LOCAL_STORAGE_KEY } from '../constants'

import { set } from 'utils/localStorage'
import { remove } from 'utils/localStorage'

export default function setAccessTokenExpiresAt(expires_at = 0): void {
  if (isEmpty(expires_at)) remove(LOCAL_STORAGE_KEY.ACCESS_TOKEN_EXPIRES_AT)
  else {
    set(LOCAL_STORAGE_KEY.ACCESS_TOKEN_EXPIRES_AT, String(expires_at))
  }
}
