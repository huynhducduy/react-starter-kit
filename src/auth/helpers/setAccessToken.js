import { isEmpty } from 'ramda';
import constants from '../constants';

import { set } from 'utils/localStorage';
import { remove } from 'utils/localStorage';

export default function (token = '') {
  if (isEmpty(token)) remove(constants.LOCAL_STORAGE_KEY.ACCESS_TOKEN);
  else set(constants.LOCAL_STORAGE_KEY.ACCESS_TOKEN, token);
}
