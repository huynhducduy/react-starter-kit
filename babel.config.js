// Only use for jest
module.exports = {
  presets: [
    ['@babel/preset-env', { targets: { node: 'current' } }],
    [
      require.resolve('@babel/preset-react'),
      {
        // Adds component stack to warning messages
        // Adds __self attribute to JSX which React will use for some warnings
        // development: isEnvDevelopment || isEnvTest,
        runtime: 'automatic',
      },
    ],
    '@babel/preset-typescript',
  ],
}
