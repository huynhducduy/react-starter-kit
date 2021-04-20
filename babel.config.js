module.exports = {
  presets: [
    [
      require.resolve('babel-preset-duy'),
      {
        outside: false,
        react: true,
        wdyr: true,
        typescript: true,
        datefns: true,
        ramda: true,
      },
    ],
  ],
}
