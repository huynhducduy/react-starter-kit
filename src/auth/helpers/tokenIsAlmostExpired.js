import tokenExpiresIn from './tokenExpiresIn';

export default function () {
  return tokenExpiresIn() <= 1;
}
