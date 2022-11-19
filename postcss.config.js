/* eslint-disable import/no-extraneous-dependencies, global-require */

module.exports = {
  plugins: [
    require('postcss-mixins'),
    require('postcss-import'),
    require('postcss-preset-env')({
      stage: 0,
    }),
    // require('cssnano'),
  ],
};
