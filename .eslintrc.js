module.exports = {
  extends: [
    "react-app",
    "plugin:json/recommended",
    "plugin:prettier/recommended",
    "prettier/react",
    "prettier/standard",
    "prettier/babel",
    // "prettier/@typescript-eslint"
  ],
  parser: "babel-eslint",
  // parser: "@typescript-eslint/parser",
  // overrides: [
  //   {
  //     files: ["*.mjs", "*.json"],
  //     parser: "babel-eslint",
  //   },
  // ],
  rules: {},
  settings: {
    "react": {
      "version": "detect"
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
    sourceType: "module",
    ecmaFeatures: {
      jsx: true
    },
    // project: './tsconfig.json',
    project: './jsconfig.json',
  },
  globals: {}
}
