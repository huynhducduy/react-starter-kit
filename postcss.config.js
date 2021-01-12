module.exports = {
  plugins: [
    require('precss'),
    require('postcss-import'),
    require('tailwindcss'),
    require('postcss-preset-env')({
      stage: 1,
    }),
    require('autoprefixer'),
    require('postcss-normalize'),
    require('cssnano'),
  ],
};
