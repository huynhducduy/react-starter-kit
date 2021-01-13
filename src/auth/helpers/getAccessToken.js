import LocalStorage from 'utils/localStorage';
import { LOCAL_STORAGE_KEY } from '../constants';

export default function getAccessToken() {
  return LocalStorage.get(LOCAL_STORAGE_KEY.ACCESS_TOKEN);
}
