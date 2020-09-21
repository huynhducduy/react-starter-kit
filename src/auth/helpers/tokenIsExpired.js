import { toDate, compareAsc } from 'date-fns';
import getAccessTokenExpiresAt from './getAccessTokenExpiresAt';

export default function () {
  // return expireAt < now
  return compareAsc(toDate(getAccessTokenExpiresAt() * 1000), new Date()) !== 1;
}
