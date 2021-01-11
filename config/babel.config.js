// https://www.npmjs.com/package/@babel/preset-stage-1

module.exports = {
  presets: [["@babel/preset-react", {
      runtime: "automatic"
    }],
  ["@babel/preset-typescript", {

  }],
  [
    "@babel/preset-env",
    {
      "useBuiltIns": "entry"
    }
  ]],
  plugins: [
    'ramda',
    'date-fns-next',
    '@babel/plugin-transform-typescript',

    // React
    "@babel/plugin-transform-react-display-name",
    "transform-react-remove-prop-types",

    // Stage 1
    '@babel/plugin-proposal-export-default-from',
    '@babel/plugin-proposal-logical-assignment-operators',
    ['@babel/plugin-proposal-optional-chaining', { loose: false }],
    ['@babel/plugin-proposal-pipeline-operator', { proposal: 'minimal' }],
    ['@babel/plugin-proposal-nullish-coalescing-operator', { loose: true }],
    '@babel/plugin-proposal-do-expressions',

    // Stage 2
    ['@babel/plugin-proposal-decorators', { legacy: true }],
    '@babel/plugin-proposal-function-sent',
    '@babel/plugin-proposal-export-namespace-from',
    '@babel/plugin-proposal-numeric-separator',
    '@babel/plugin-proposal-throw-expressions',

    // Stage 3
    '@babel/plugin-syntax-dynamic-import',
    '@babel/plugin-syntax-import-meta',
    ['@babel/plugin-proposal-class-properties', { loose: false }],
    '@babel/plugin-proposal-json-strings',
  ],
};
