module.exports = (api, { isOutside = false }) => {
  return {
    presets: [
      [
        require.resolve('babel-preset-duy'),
        {
          outside: isOutside,
          react: true,
          wdyr: true,
          typescript: true,
          datefns: true,
          ramda: true,
        },
      ],
    ],
  }
}
