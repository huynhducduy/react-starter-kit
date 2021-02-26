module.exports = {
  purge: [
    './src/**/*.css',
    './src/**/*.scss',
    './src/**/*.pcss',
    './src/**/*.js',
    './src/**/*.jsx',
    './src/**/*.ts',
    './src/**/*.tsx',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {
      animation: ['motion-safe'],
    },
  },
  plugins: [require('@tailwindcss/typography')],
}
