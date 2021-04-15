import { availableLocales } from 'i18n/locales'
import i18n from 'i18n'

const LanguageChanger = () => {
  return (
    <select
      onChange={(e) => i18n.changeLanguage(e.target.value)}
      defaultValue={i18n.language}
    >
      {availableLocales.map((locale) => (
        <option value={locale} key={locale}>
          {locale}
        </option>
      ))}
    </select>
  )
}

export default LanguageChanger
