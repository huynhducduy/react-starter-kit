module.exports = {
  '*.{js,jsx,mjs,ts,tsx,json}': ['eslint --cache --fix', 'git add'],
  '*.{ts,tsx}': [() => 'tsc', 'git add'],
  '*.{scss,sass,css}': ['prettier --cache --write', 'git add'],
}
