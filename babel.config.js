var path = require('path')

module.exports = (api, isOutside = false) => {
  var isEnvProduction = api.env('production')
  var isEnvDevelopment = api.env('development')
  var isEnvTest = api.env('test')

  return {
    overrides: [
      {
        test: /\.tsx?$/,
        plugins: [
          [
            require.resolve('@babel/plugin-proposal-decorators'),
            { legacy: true },
          ],
        ],
      },
    ],
    presets: [
      isEnvTest && [
        // ES features necessary for user's Node version
        require.resolve('@babel/preset-env'),
        {
          targets: {
            node: 'current',
            // Exclude transforms that make all code slower
          },
          exclude: isOutside ? ['transform-typeof-symbol'] : [],
        },
      ],
      (isEnvProduction || isEnvDevelopment) && [
        // Latest stable ECMAScript features
        require.resolve('@babel/preset-env'),
        {
          // Allow importing core-js in entrypoint and use browserlist to select polyfills
          useBuiltIns: 'entry',
          // Set the corejs version we are using to avoid warnings in console
          corejs: 3,
          // Exclude transforms that make all code slower
          exclude: ['transform-typeof-symbol'],
        },
      ],
      !isOutside && [
        require.resolve('@babel/preset-react'),
        {
          // Adds component stack to warning messages
          // Adds __self attribute to JSX which React will use for some warnings
          // development: isEnvDevelopment || isEnvTest,
          runtime: 'automatic',
        },
      ],
      !isOutside && [
        require.resolve('@babel/preset-typescript'),
        {
          // TODO: to be added
        },
      ],
    ].filter(Boolean),
    plugins: [
      // Turn on legacy decorators for TypeScript files
      !isOutside && [
        require.resolve('@babel/plugin-proposal-decorators'),
        false,
      ],
      // class { handleClick = () => { } }
      // Enable loose mode to use assignment instead of defineProperty
      // See discussion in https://github.com/facebook/create-react-app/issues/4263
      !isOutside && [
        require.resolve('@babel/plugin-proposal-class-properties'),
        {
          loose: true,
        },
      ],
      // Adds Numeric Separators
      !isOutside && require.resolve('@babel/plugin-proposal-numeric-separator'),
      // Polyfills the runtime needed for async/await, generators, and friends
      // https://babeljs.io/docs/en/babel-plugin-transform-runtime
      [
        require.resolve('@babel/plugin-transform-runtime'),
        {
          corejs: false,
          helpers: true,
          // By default, babel assumes babel/runtime version 7.0.0-beta.0,
          // explicitly resolving to match the provided helper functions.
          // https://github.com/babel/babel/issues/10261
          version: require('@babel/runtime/package.json').version,
          regenerator: true,
          // https://babeljs.io/docs/en/babel-plugin-transform-runtime#useesmodules
          // We should turn this on once the lowest version of Node LTS
          // supports ES Modules.
          useESModules: isEnvDevelopment || isEnvProduction,
          // Undocumented option that lets us encapsulate our runtime, ensuring
          // the correct version is used
          // https://github.com/babel/babel/blob/090c364a90fe73d36a30707fc612ce037bdbbb24/packages/babel-plugin-transform-runtime/src/index.js#L35-L42
          absoluteRuntime: path.dirname(
            require.resolve('@babel/runtime/package.json')
          ),
        },
      ],
      !isOutside &&
        isEnvProduction && [
          // Remove PropTypes from production build
          require.resolve('babel-plugin-transform-react-remove-prop-types'),
          {
            removeImport: true,
          },
        ],
      !isOutside &&
        require.resolve('@babel/plugin-transform-react-display-name'),
      // Stage 1: from https://www.npmjs.com/package/@babel/preset-stage-1
      !isOutside &&
        require.resolve('@babel/plugin-proposal-export-default-from'),
      !isOutside &&
        require.resolve('@babel/plugin-proposal-logical-assignment-operators'),
      !isOutside && [
        require.resolve('@babel/plugin-proposal-optional-chaining'),
        { loose: false },
      ],
      !isOutside && [
        require.resolve('@babel/plugin-proposal-pipeline-operator'),
        { proposal: 'minimal' },
      ],
      !isOutside && [
        require.resolve('@babel/plugin-proposal-nullish-coalescing-operator'),
        { loose: true },
      ],
      !isOutside && require.resolve('@babel/plugin-proposal-do-expressions'),
      // Stage 2
      !isOutside && require.resolve('@babel/plugin-proposal-function-sent'),
      !isOutside &&
        require.resolve('@babel/plugin-proposal-export-namespace-from'),
      !isOutside && require.resolve('@babel/plugin-proposal-throw-expressions'),
      // Stage 3
      !isOutside && require.resolve('@babel/plugin-syntax-dynamic-import'),
      !isOutside && require.resolve('@babel/plugin-syntax-import-meta'),
      !isOutside && require.resolve('@babel/plugin-proposal-json-strings'),
      // Libraries
      !isOutside && require.resolve('babel-plugin-ramda'),
      !isOutside && require.resolve('babel-plugin-date-fns-next'),
      require.resolve('babel-plugin-transform-import-meta'), // resolve import.meta in jest
    ].filter(Boolean),
  }
}
