import {
  atom,
  selectorFamily,
  useRecoilState,
  useSetRecoilState,
  useRecoilValue,
} from 'recoil'
import type { SetterOrUpdater } from 'recoil'
import defaultValues from './defaultValues'
import config from 'config'

const metaAtom = atom<Record<string, string>>({
  key: 'meta',
  default: defaultValues,
})

const metaData = selectorFamily<string, string>({
  key: 'metaData',
  get: (key: string) => ({ get }) => {
    if (key === 'title') return `${get(metaAtom).title} | ${config.title}`
    return get(metaAtom)[key]
  },
  set: (key: string) => ({ set }, newValue) =>
    set(metaAtom, (state) => ({
      ...state,
      [key]: String(newValue),
    })),
})

const useMetaData = function (key: string): [string, SetterOrUpdater<string>] {
  const meta = useRecoilState(metaData(key))
  return meta
}

const useMetaDataValue = function (key: string): string {
  const meta = useRecoilValue(metaData(key))
  return meta
}

const useSetMetaData = function (key: string): SetterOrUpdater<string> {
  const meta = useSetRecoilState(metaData(key))
  return meta
}

export default useMetaData
export { useMetaDataValue, useSetMetaData }
export { default as Provider } from './Provider'
