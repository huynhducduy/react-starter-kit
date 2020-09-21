import { isEmpty } from 'ramda';
import constants from '../constants';

import { set } from 'utils/localStorage';
import { remove } from 'utils/localStorage';

export default function (expires_at = '') {
  if (isEmpty(expires_at))
    remove(constants.LOCAL_STORAGE_KEY.ACCESS_TOKEN_EXPIRES_AT);
  else {
    set(constants.LOCAL_STORAGE_KEY.ACCESS_TOKEN_EXPIRES_AT, expires_at);
  }
}
