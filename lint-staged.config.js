module.exports = {
  '*.{js,jsx,mjs,cjs,ts,tsx,vue,json}': ['eslint --cache --fix', 'git add'],
  '*.{ts,tsx,vue}': [() => 'tsc', 'git add'],
  '*.{scss,sass,css,pcss}': ['prettier --cache --write', 'git add'],
}
