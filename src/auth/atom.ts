import { atom, selector } from 'recoil'
import isAuthenticated from 'auth/helpers/isAuthenticated'

const auth = atom({
  key: 'auth',
  default: {
    status: isAuthenticated(),
    // role: '',
  },
})

const status = selector<boolean>({
  key: 'auth.status',
  get: ({ get }) => get(auth).status,
  set: ({ set }, newValue) =>
    set(auth, (state) => ({ ...state, status: Boolean(newValue) })),
})

export default auth
export { status }
