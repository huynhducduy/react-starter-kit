module.exports = (api, { isOutside = false }) => {
  return {
    presets: [
      [
        require.resolve('babel-preset-duy'),
        {
          outside: isOutside,
        },
      ],
    ],
  }
}
