import { toDate, differenceInHours } from 'date-fns';
import getAccessTokenExpiresAt from './getAccessTokenExpiresAt';

export default function () {
  return differenceInHours(
    toDate(getAccessTokenExpiresAt() * 1000),
    new Date()
  );
}
