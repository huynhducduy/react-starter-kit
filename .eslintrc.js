module.exports = {
  root: true,
  plugins: ['testing-library'],
  extends: [
    'duy',
    'duy/typescript',
    'duy/react',
    'duy/jest',
    'duy/cypress',
    'duy/prettier', // Always the last
  ],
  rules: {},
  settings: {
    jest: {
      version: 24,
    },
  },
  env: {
    browser: true,
    es2021: true,
    node: true,
    serviceworker: true,
  },
  parserOptions: {
    project: 'tsconfig.json',
    tsconfigRootDir: __dirname,
  },
  globals: {},
}
