import { availableLocales } from 'i18n/locales'
import i18n from 'i18n'

const LanguageChanger = () => {
  return (
    <select onChange={(e) => i18n.changeLanguage(e.target.value)}>
      {availableLocales.map((locale) => (
        <option value={locale} selected={locale === i18n.language}>
          {locale}
        </option>
      ))}
    </select>
  )
}

export default LanguageChanger
