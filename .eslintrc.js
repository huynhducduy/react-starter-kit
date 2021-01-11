module.exports = {
  parser: '@typescript-eslint/parser',
  overrides: [
    {
      files: ['*.mjs', '*.json'],
      parser: 'babel-eslint',
    },
  ],
  plugins: ['@typescript-eslint'],
  extends: [
    'react-app',
    'plugin:json/recommended',
    'plugin:@typescript-eslint/recommended',
    'prettier/react',
    'prettier/standard',
    'prettier/babel',
    'prettier/@typescript-eslint',
    'plugin:prettier/recommended', // always the last
  ],
  rules: {},
  settings: {
    react: {
      version: 'detect',
    },
  },
  env: {
    es6: true,
    es2017: true,
    es2020: true,
    browser: true,
    node: true,
    worker: true,
    serviceworker: true,
    jest: true,
  },
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
    project: 'tsconfig.json',
  },
  globals: {},
};
