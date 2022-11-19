/* eslint-disable import/no-extraneous-dependencies, global-require */

module.exports = {
  plugins: [
    require('postcss-mixins'),
    require('postcss-import'),
    require('postcss-preset-env')({
      stage: 0,
    }),
    // require("postcss-pxtorem")({
    // 	rootValue: 16,
    // 	unitPrecision: 2,
    // 	propList: ['font', 'font-size', 'line-height', 'letter-spacing', '--min'],
    // 	selectorBlackList: [],
    // 	replace: true,
    // 	mediaQuery: true,
    // 	minPixelValue: 0,
    // 	exclude: /node_modules/i
    // }),
    require('cssnano'),
  ],
};
