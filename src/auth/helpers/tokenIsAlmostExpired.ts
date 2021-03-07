import tokenExpiresIn from './tokenExpiresIn'

export default function tokenIsAlmostExpired(): boolean {
  return tokenExpiresIn() <= 1
}
