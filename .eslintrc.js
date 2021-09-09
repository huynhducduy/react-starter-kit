module.exports = {
  root: true,
  plugins: ['testing-library'],
  extends: [
    'duy',
    'duy/typescript',
    'duy/react',
    'duy/jest',
    'duy/prettier', // Always the last
  ],
  rules: {},
  overrides: [
    {
      files: ['**/__tests__/**/*.[jt]s?(x)', '**/?(*.)+(spec|test).[jt]s?(x)'],
      extends: [
        'plugin:testing-library/react',
        'plugin:testing-library/dom',
        'plugin:jest-dom/recommended',
        'plugin:jest/recommended',
        'plugin:cypress/recommended',
      ],
    },
  ],
  settings: {
    jest: {
      version: 24,
    },
  },
  env: {
    jest: true,
    'jest/globals': true,
    browser: true,
    es2021: true,
    node: true,
    serviceworker: true
  },
  parserOptions: {
    project: 'tsconfig.json',
    tsconfigRootDir: __dirname,
  },
  globals: {},
}
