module.exports = (api) => {
  return {
    plugins: [
      require('precss'),
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
