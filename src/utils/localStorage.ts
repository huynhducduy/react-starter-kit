import config from 'config'

function generateKey(key: string) {
  return `${String(config.name)}_${key}` // prefix_key
}

export function clear(): void {
  if (typeof localStorage !== 'undefined') {
    localStorage.clear()
    const event = new StorageEvent('localStorage', {
      key: null,
      newValue: null,
      oldValue: null,
      url: window.location.href,
      storageArea: localStorage,
    })
    window.dispatchEvent(event)
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
    const event = new StorageEvent('localStorage', {
      key: k,
      newValue: value,
      oldValue: localStorage.getItem(k),
      url: window.location.href,
      storageArea: localStorage,
    })
    localStorage.setItem(k, value)
    window.dispatchEvent(event)
  }
}

export function remove(key: string): void {
  if (typeof localStorage !== 'undefined') {
    const k = generateKey(key)
    const event = new StorageEvent('localStorage', {
      key: k,
      newValue: null,
      oldValue: localStorage.getItem(k),
      url: window.location.href,
      storageArea: localStorage,
    })
    localStorage.removeItem(k)
    window.dispatchEvent(event)
  }
}

const LocalStorage = {
  clear,
  get,
  set,
  remove,
}

export default LocalStorage
