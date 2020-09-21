import config from '../../config';

export function generateKey(key) {
  return `${config.name}_${key}`; // prefix_key
}

export function clear() {
  if (typeof localStorage !== 'undefined') {
    localStorage.clear();
  }
}

export function get(key, defaultValue = null) {
  if (typeof localStorage !== 'undefined') {
    return localStorage.getItem(generateKey(key)) || defaultValue;
  }
}

export function set(key, value) {
  if (typeof localStorage !== 'undefined') {
    localStorage.setItem(generateKey(key), value);
  }
}

export function remove(key) {
  if (typeof localStorage !== 'undefined') {
    localStorage.removeItem(generateKey(key));
  }
}
