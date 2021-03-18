interface Locale {
  [index: string]: string | Locale
}

interface LocaleBundle {
  [index: string]: () => Promise<{ default: Locale }>
}

const bundles: LocaleBundle = {
  en: () => import(/* webpackChunkName: "en" */ './en.json'),
  vi: () => import(/* webpackChunkName: "vi" */ './vi.json'),
}

export const availableLocales = Object.keys(bundles)

export default bundles
