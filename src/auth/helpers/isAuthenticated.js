import LocalStorage from 'utils/localStorage';
import constants from '../constants';
import tokenIsExpired from './tokenIsExpired';

export default function () {
  return (
    !!LocalStorage.get(constants.LOCAL_STORAGE_KEY.ACCESS_TOKEN) &&
    !tokenIsExpired()
  );
}
