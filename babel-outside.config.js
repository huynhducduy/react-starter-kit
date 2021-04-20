module.exports = {
  presets: [
    [
      require.resolve('babel-preset-duy'),
      {
        outside: true,
        react: false,
        wdyr: false,
        typescript: false,
        datefns: false,
        ramda: false,
      },
    ],
  ],
}
