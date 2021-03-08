import config from 'config'

function generateKey(key: string) {
  return `${String(config.name)}_${key}` // prefix_key
}

/**
 * storage event fired only on the source (tab - window) that did not originate the change
 */

export function clear(): void {
  if (typeof localStorage !== 'undefined') {
    if (localStorage.length > 0) {
      window.dispatchEvent(
        new StorageEvent('storage', {
          key: null,
          newValue: null,
          oldValue: null,
          url: window.location.href,
          storageArea: localStorage,
        })
      )
    }
    localStorage.clear()
  }
}

export function get(key: string): string | null {
  if (typeof localStorage !== 'undefined') {
    return localStorage.getItem(generateKey(key))
  }
  return null
}

export function set(key: string, value: string): void {
  if (typeof localStorage !== 'undefined') {
    const k = generateKey(key)
    if (localStorage.getItem(k) !== value) {
      window.dispatchEvent(
        new StorageEvent('storage', {
          key: k,
          newValue: value,
          oldValue: localStorage.getItem(k),
          url: window.location.href,
          storageArea: localStorage,
        })
      )
    }
    localStorage.setItem(k, value)
  }
}

export function remove(key: string): void {
  if (typeof localStorage !== 'undefined') {
    const k = generateKey(key)
    if (localStorage.getItem(k) !== null) {
      window.dispatchEvent(
        new StorageEvent('storage', {
          key: k,
          newValue: null,
          oldValue: localStorage.getItem(k),
          url: window.location.href,
          storageArea: localStorage,
        })
      )
    }
    localStorage.removeItem(k)
  }
}

const LocalStorage = {
  clear,
  get,
  set,
  remove,
}

export default LocalStorage
