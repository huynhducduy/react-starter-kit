import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import LanguageDetector from 'i18next-browser-languagedetector'
import HttpApi from 'i18next-http-backend'
import bundles, { availableLocales } from './locales'
import en from './locales/en'

const DEFAULT_LOCALE = 'en'

// load the right bundle depending on the requested locale
// option to include a default locale so it's always bundled and can be used as fallback
async function loadLocaleBundle(locale) {
  if (locale !== DEFAULT_LOCALE) {
    if (bundles[locale] !== undefined) {
      const data = await bundles[locale]()
      return data.default
    }
  }
  return Promise.resolve(en)
}

void i18n
  .use(LanguageDetector)
  .use(HttpApi)
  .use(initReactI18next)
  .init({
    fallbackLng: DEFAULT_LOCALE,
    whitelist: availableLocales,

    interpolation: {
      escapeValue: false,
    },

    debug: true,

    detection: {
      // for i18next-browser-languagedetector https://github.com/i18next/i18next-browser-languageDetector#detector-options
    },

    backend: {
      // for i18next-http-backend
      loadPath: '{{lng}}|{{ns}}', // used to pass language and namespace to custom XHR function
      request: (_, url, _2, callback) => {
        // instead of loading from a URL like i18next-http-backend is intended for, we re-purpose this plugin to
        // load webpack chunks instead by overriding the default request behavior
        // it's easier to use webpack in our current CRA to dynamically import a JSON with the translations
        // than to update and serve a static folder with JSON files on the CDN with cache invalidation
        try {
          const [lng] = url.split('|')

          // this mocks the HTTP fetch plugin behavior so it works with the backend AJAX pattern in this XHR library
          // https://github.com/i18next/i18next-http-backend/blob/master/lib/request.js#L56
          loadLocaleBundle(lng).then((data) => {
            callback(null, {
              data: JSON.stringify(data),
              status: 200, // status code is required by XHR plugin to determine success or failure
            })
          })
        } catch (e) {
          console.error(e)
          callback(null, {
            status: 500,
          })
        }
      },
    },

    // react i18next special options (optional), see https://react.i18next.com/latest/i18next-instance
    // override if needed - omit if ok with defaults
    /*
    react: {
      bindI18n: 'languageChanged',
      bindI18nStore: '',
      transEmptyNodeValue: '',
      transSupportBasicHtmlNodes: true,
      transKeepBasicHtmlNodesFor: ['br', 'strong', 'i', 'p'],
      useSuspense: true,
    }
    */
  })

export default i18n
