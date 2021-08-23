import { atom } from 'recoil'

import defaultValues from './defaultValues'

const metaAtom = atom<Record<string, string>>({
  key: 'meta',
  default: defaultValues,
})

export default metaAtom
