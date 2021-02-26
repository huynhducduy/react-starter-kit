module.exports = (api) => {
  return {
    plugins: [
      require('postcss-flexbugs-fixes'),
      require('tailwindcss'),
      require('postcss-preset-env')({
        stage: 1,
      }),
      require('autoprefixer'),
      require('postcss-normalize'),
      require('cssnano'),
    ],
  }
}
