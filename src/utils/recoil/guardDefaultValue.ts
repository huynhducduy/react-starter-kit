import { DefaultValue } from 'recoil'

/**
 * A type guard for the default value of recoil
 */
const guardDefaultValue = (candidate: unknown): candidate is DefaultValue => {
  if (candidate instanceof DefaultValue) return true
  return false
}

// excluding the DefaultValue from the type options
// `if (guardDefaultValue(someValue)) return`
// here it will be the type you're looking for
// `set(someAtom, someValue.someAttribute)`

export default guardDefaultValue
