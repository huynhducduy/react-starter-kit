import {
  selectorFamily,
  useRecoilState,
  useSetRecoilState,
  useRecoilValue,
} from 'recoil'
import type { SetterOrUpdater } from 'recoil'
import guardDefaultValue from 'utils/recoil/guardDefaultValue'
import config from 'config'
import metaAtom from './atom'

export const metaData = selectorFamily<string, string>({
  key: 'metaData',
  get:
    (key: string) =>
    ({ get }) => {
      if (key === 'title') return `${get(metaAtom).title} | ${config.title}`
      return get(metaAtom)[key]
    },
  set:
    (key: string) =>
    ({ get, set }, newValue) => {
      if (guardDefaultValue(newValue)) return
      if (newValue !== get(metaAtom)[key])
        set(metaAtom, (state) => ({
          ...state,
          [key]: newValue,
        }))
    },
})

export const useMetaData = function (
  key: string
): [string, SetterOrUpdater<string>] {
  const meta = useRecoilState(metaData(key))
  return meta
}

export const useMetaDataValue = function (key: string): string {
  const meta = useRecoilValue(metaData(key))
  return meta
}

export const useSetMetaData = function (key: string): SetterOrUpdater<string> {
  const meta = useSetRecoilState(metaData(key))
  return meta
}
