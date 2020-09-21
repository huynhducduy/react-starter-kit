import LocalStorage from 'utils/localStorage';
import constants from '../constants';

/**
 * @return int
 */
export default function () {
  const access_token_expire_at = parseInt(
    LocalStorage.get(constants.LOCAL_STORAGE_KEY.ACCESS_TOKEN_EXPIRES_AT, 0)
  );

  return Number.isInteger(access_token_expire_at) && access_token_expire_at >= 0
    ? access_token_expire_at
    : 0;
}
