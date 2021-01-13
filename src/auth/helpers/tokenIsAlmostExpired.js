import tokenExpiresIn from './tokenExpiresIn';

export default function tokenIsAlmostExpired() {
  return tokenExpiresIn() <= 1;
}
