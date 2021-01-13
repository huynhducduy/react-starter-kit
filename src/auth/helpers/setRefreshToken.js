import { isEmpty } from 'ramda';
import { LOCAL_STORAGE_KEY } from '../constants';

import { set } from 'utils/localStorage';
import { remove } from 'utils/localStorage';

export default function setRefreshToken(token = '') {
  if (isEmpty(token)) remove(LOCAL_STORAGE_KEY.REFRESH_TOKEN);
  else set(LOCAL_STORAGE_KEY.REFRESH_TOKEN, token);
}
