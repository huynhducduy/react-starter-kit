import LocalStorage from 'utils/localStorage';
import constants from '../constants';

export default function () {
  return LocalStorage.get(constants.LOCAL_STORAGE_KEY.REFRESH_TOKEN);
}
