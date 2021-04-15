require('dotenv').config()

const ENABLE_TAILWINDCSS = process.env.ENABLE_TAILWINDCSS === 'true'

module.exports = (api) => {
  return {
    plugins: [
      require('postcss-flexbugs-fixes'),
      ENABLE_TAILWINDCSS && require('tailwindcss'),
      require('postcss-preset-env')({
        stage: 1,
      }),
      require('autoprefixer'),
      !ENABLE_TAILWINDCSS && require('postcss-normalize'), // Tailwind already come with modern-normalize
      // require('cssnano'), // Already have optimize-css-assets-webpack-plugin in webpack
    ].filter(Boolean),
  }
}
